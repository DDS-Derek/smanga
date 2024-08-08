/*
 * @Author: lkw199711 lkw199711@163.com
 * @Date: 2023-06-13 21:23:19
 * @LastEditors: lkw199711 lkw199711@163.com
 * @LastEditTime: 2024-08-08 21:39:07
 * @FilePath: \smanga\src\api\log.ts
 */
import {ajax} from './index';

const logApi = {
	async get_log(page: number, pageSize = 10) {
		const http = await ajax.get('log', {params: {page, pageSize}});
		const response = http.data;
		return response;
	},
};

export default logApi;
