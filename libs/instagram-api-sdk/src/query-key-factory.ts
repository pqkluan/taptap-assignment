export const queryKeys = {
	all: ['instagram'] as const,
	search: (searchString: string) => [...queryKeys.all, 'search', searchString],
	userPosts: (username_or_id_or_url: string) => [
		...queryKeys.all,
		'user-posts',
		username_or_id_or_url,
	],
	postInfo: (code_or_id_or_url: string) => [...queryKeys.all, 'post', code_or_id_or_url],
};
