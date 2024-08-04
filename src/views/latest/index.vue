<!--
 * @Author: lkw199711 lkw199711@163.com
 * @Date: 2023-10-28 03:33:29
 * @LastEditors: lkw199711 lkw199711@163.com
 * @LastEditTime: 2024-08-04 22:03:58
 * @FilePath: /smanga/src/views/last-read/index.vue
-->
<template>
    <div class="manga-list">
        <div class="title">继续阅读</div>
        <div :class="['manga-list-box', { block: config.viewType === 'list' }]">
            <manga v-for="item in latestList" :key="item.latestId" :viewType="config.viewType" :mangaInfo="item" />
        </div>
    </div>
</template>

<script setup lang="ts">
import store, { config } from '@/store';
import { onMounted, ref } from 'vue';
import latestApi from '@/api/latest';
import { latestType } from '@/type/latest';
import manga from '@/components/manga.vue';

let latestList = ref<latestType[]>([]);


onMounted(async () => {
    latestList.value = await latestApi.get();
})
</script>

<style src="@/style/manga-list.less" scoped lang="less"></style>