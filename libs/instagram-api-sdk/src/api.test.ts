import { api } from './api';
import { apiConfig } from './api-config';

describe('API', () => {
	beforeAll(() => {
		apiConfig.setRapidApiHost('mock-host').setRapidApiKey('mock-key');
	});

	it('searchUser', async () => {
		global.fetch = jest
			.fn()
			.mockImplementation(() => Promise.resolve({ json: () => Promise.resolve({}) }));

		await api.searchUser({ search_query: 'beast' });

		expect(global.fetch).toHaveBeenCalledWith(
			`${apiConfig.HOST_NAME}/v1/search_users?search_query=beast&url_embed_safe=true`,
			{
				method: 'GET',
				headers: apiConfig.headers,
			},
		);
	});

	it('getPostInfo', async () => {
		global.fetch = jest
			.fn()
			.mockImplementation(() => Promise.resolve({ json: () => Promise.resolve({}) }));

		await api.getPostInfo({ code_or_id_or_url: 'mock-code' });

		expect(global.fetch).toHaveBeenCalledWith(
			`${apiConfig.HOST_NAME}/v1/post_info?code_or_id_or_url=mock-code&url_embed_safe=true&include_insights=true`,
			{
				method: 'GET',
				headers: apiConfig.headers,
			},
		);
	});

	it('getUserPosts', async () => {
		global.fetch = jest
			.fn()
			.mockImplementation(() => Promise.resolve({ json: () => Promise.resolve({}) }));

		await api.getUserPosts({ username_or_id_or_url: 'mock-user' });

		expect(global.fetch).toHaveBeenCalledWith(
			`${apiConfig.HOST_NAME}/v1.2/posts?username_or_id_or_url=mock-user`,
			{
				method: 'GET',
				headers: apiConfig.headers,
			},
		);
	});
});
