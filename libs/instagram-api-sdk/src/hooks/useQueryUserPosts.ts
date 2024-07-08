import {
	InfiniteData,
	UndefinedInitialDataInfiniteOptions,
	useInfiniteQuery,
} from '@tanstack/react-query';

import { api } from '../api';
import { PostItem, UserPostsResponse } from '../types';
import { queryKeys } from '../query-key-factory';
import { useMemo } from 'react';

type Params = Omit<
	UndefinedInitialDataInfiniteOptions<
		UserPostsResponse,
		Error,
		InfiniteData<UserPostsResponse>,
		string[],
		string | undefined
	>,
	'queryKey' | 'queryFn' | 'initialPageParam' | 'getNextPageParam' | 'getPreviousPageParam'
> & {
	username_or_id_or_url: string;
};

export const useQueryUserPosts = (params: Params) => {
	const { username_or_id_or_url, ...otherConfig } = params;

	const { data, ...others } = useInfiniteQuery({
		queryKey: queryKeys.userPosts(username_or_id_or_url),
		initialPageParam: undefined as string | undefined,
		queryFn: async ({ pageParam: pagination_token }) => {
			return await api.getUserPosts({ username_or_id_or_url, pagination_token });
		},
		getNextPageParam: (lastPage) => lastPage.pagination_token,
		getPreviousPageParam: (firstPage) => firstPage.pagination_token,
		enabled: !!username_or_id_or_url,
		...otherConfig,
	});

	const posts = useMemo<PostItem[]>(
		() => data?.pages.flatMap((page) => page.data.items) ?? [],
		[data],
	);

	return { ...others, data: posts };
};
