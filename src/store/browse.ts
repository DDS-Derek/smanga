/*
 * @Author: lkw199711 lkw199711@163.com
 * @Date: 2024-08-04 23:30:51
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-08-05 10:48:52
 * @FilePath: \smanga\src\store\browse.ts
 */
import {defineStore} from 'pinia';

const useBrowseStore = defineStore<any>('browse', {
	state: () => ({
		page: 1,
	}),
	getters: {},
	actions: {},
});

export default useBrowseStore;
