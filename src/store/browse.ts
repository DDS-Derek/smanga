/*
 * @Author: lkw199711 lkw199711@163.com
 * @Date: 2024-08-04 23:30:51
 * @LastEditors: lkw199711 lkw199711@163.com
 * @LastEditTime: 2024-08-04 23:44:18
 * @FilePath: \smanga\src\store\browse.ts
 */
import {defineStore} from 'pinia';

const useBrowseStore = defineStore<any>('browse', {
	state: () => ({
		page: 1,
	}),
	getters: {
		get_page() {
			return this.page;
		},
	},
	actions: {},
});

export default useBrowseStore;
