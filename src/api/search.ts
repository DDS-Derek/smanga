/*
 * @Author: lkw199711 lkw199711@163.com
 * @Date: 2023-04-04 00:30:31
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-08-08 14:42:32
 * @FilePath: \smanga\src\api\search.ts
 */
import {ajax} from './index';

export function search(
	searchText: string,
	searchType: string,
	page: number,
	pageSize: number,
	order = ''
) {
	return ajax({
		url: 'search/get',
		data: {searchText, searchType, page, pageSize, order},
	});
}

const searchApi = {
	async get(
		searchText: string,
		searchType: string,
		page: number,
		pageSize: number,
		order = ''
	) {
		const http = await ajax.get(
			searchType === 'manga' ? 'search-mangas' : 'search-chapters',
			{
				params: {searchText, searchType, page, pageSize, order},
			}
		);

		const response = http.data;
		return response;
	},
};

export default searchApi;
