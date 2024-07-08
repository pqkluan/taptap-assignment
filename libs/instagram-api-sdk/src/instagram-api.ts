import { apiConfig } from './api-config';
import { PostInfoResponse } from './types';
import { SearchResponse } from './types/SearchResponse';
import { UserPostsResponse } from './types/UserPostsResponse';

const InstagramScraperEndpoint = 'https://instagram-scraper-api2.p.rapidapi.com';

export const instagramApi = {
	getUserPosts: async (params: {
		username_or_id_or_url: string;
		pagination_token?: string;
	}): Promise<UserPostsResponse> => {
		const { username_or_id_or_url, pagination_token } = params;

		const searchParams = new URLSearchParams({ username_or_id_or_url });
		if (pagination_token) searchParams.append('pagination_token', pagination_token);
		const url = `${InstagramScraperEndpoint}/v1.2/posts?${searchParams.toString()}`;

		const response = await fetch(url, {
			method: 'GET',
			headers: apiConfig.headers,
		});
		const result = await response.json();

		return result as UserPostsResponse;
	},
	getPostInfo: async (params: {
		code_or_id_or_url: string;

		/**
		 * If you need to embed images/videos on your website, set to 'true' to evade CORS restrictions. URLs are valid from 6 to 24 hours.
		 *
		 * @default true
		 */
		url_embed_safe?: boolean;

		/**
		 * Include extra fields like save_count and share_count (inside 'metrics').
		 *
		 * @default true
		 */
		include_insights?: boolean;
	}): Promise<PostInfoResponse> => {
		const { code_or_id_or_url, url_embed_safe = true, include_insights = true } = params;

		const searchParams = new URLSearchParams({ code_or_id_or_url });
		if (url_embed_safe) searchParams.append('url_embed_safe', 'true');
		if (include_insights) searchParams.append('include_insights', 'true');
		const url = `${InstagramScraperEndpoint}/v1/post_info?${searchParams.toString()}`;

		const response = await fetch(url, {
			method: 'GET',
			headers: apiConfig.headers,
		});
		const result = await response.json();

		return result as PostInfoResponse;
	},
	searchUser: async (params: {
		search_query: string;

		/**
		 * If you need to embed images/videos on your website, set to 'true' to evade CORS restrictions. URLs are valid from 6 to 24 hours.
		 *
		 * @default true
		 */
		url_embed_safe?: boolean;
	}): Promise<SearchResponse> => {
		const { search_query, url_embed_safe = true } = params;

		const searchParams = new URLSearchParams({ search_query });
		if (url_embed_safe) searchParams.append('url_embed_safe', 'true');
		const url = `${InstagramScraperEndpoint}/v1/search_users?${searchParams.toString()}`;

		const response = await fetch(url, {
			method: 'GET',
			headers: apiConfig.headers,
		});
		const result = await response.json();

		return result as SearchResponse;
	},
};
