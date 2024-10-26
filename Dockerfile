FROM node:20.18.0-alpine3.20 AS prepare

RUN apk add git
RUN git clone https://github.com/lkw199711/smanga-adonis.git /smanga-adonis
RUN git clone https://github.com/lkw199711/smanga-express.git /smanga-express
RUN rm -rf \
        /smanga-adonis/.git \
        /smanga-express/.git \
        /smanga-express/.env
RUN mv /smanga-express/.env.docker /smanga-express/.env

FROM prepare AS builder

WORKDIR /smanga-adonis
RUN npm install
RUN npx prisma generate --schema=./prisma/sqlite/schema.prisma
RUN npx prisma migrate deploy --schema=./prisma/sqlite/schema.prisma
RUN npm run build

FROM node:20.18.0-alpine3.20

COPY --from=builder /smanga-adonis/build /app/adonis
COPY --from=builder /smanga-adonis/prisma /app/adonis/prisma
COPY --from=builder /smanga-adonis/smanga.json /app/adonis/smanga.json
COPY --from=prepare /smanga-express /app/express
COPY ./dist/docker /app/smanga-website

RUN apk add --no-cache \
        bash \
        tzdata \
        s6-overlay && \
    cd /app/adonis && \
    npm ci && \
    npx prisma generate --schema=./prisma/sqlite/schema.prisma && \
    npx prisma migrate deploy --schema=./prisma/sqlite/schema.prisma && \
    mkdir cache && \
    cd /app/express && \
    npm ci

ENTRYPOINT [ "/init" ]
