/*
 * @Author: lkw199711 lkw199711@163.com
 * @Date: 2023-05-03 11:35:44
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-08-07 20:54:32
 * @FilePath: \smanga\src\api\collect.ts
 */
import {global_get} from '@/utils';
import {ajax} from './index';

const collectApi = {
	async get(mangaType: string, page: number, pageSize: number, order: string) {
		const http = await ajax.get(`collect-${mangaType}`, {
			params: {page, pageSize, order},
		});

		const response = http.data;

		return response;
	},
	/**
	 * @description: 查询漫画/章节 是否收藏
	 * @param {string} collectType
	 * @param {number} targetId
	 * @return {*}
	 */
	async is_collect(collectType: string, targetId: number) {
		const http = await ajax.get(`${collectType}-iscollect/${targetId}`, {
			params: {
				collectType,
				targetId,
			},
		});
		const response = http.data;
		return response.data;
	},
	/**
	 * @description: 移除漫画/章节 收藏
	 * @param {string} collectType
	 * @param {number} targetId
	 * @return {*}
	 */
	async remove_collect(collectType: string, targetId: number) {
		const res = ajax({
			url: 'collect/remove',
			data: {collectType, targetId},
		});
		return (await res).data;
	},
	/**
	 * @description: 新增收藏
	 * @param {any} data
	 * @return {*}
	 */
	async add_collect(data: any) {
		const http = await ajax.post(`collect-manga/${data.mangaId}`, data);
		const response = http.data;
		return response.data;
	},
};

export default collectApi;
