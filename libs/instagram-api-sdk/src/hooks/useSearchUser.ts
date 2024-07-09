import { useDeferredValue } from 'react';
import { UndefinedInitialDataOptions, useQuery } from '@tanstack/react-query';

import { api } from '../api';
import { SearchItem } from '../types';
import { queryKeys } from '../query-key-factory';

type Params = Omit<
	UndefinedInitialDataOptions<SearchItem[], Error, SearchItem[], string[]>,
	'queryKey' | 'queryFn'
> & {
	searchString: string;
};

export const useSearchUser = (params: Params) => {
	const { searchString, ...otherConfig } = params;

	// Use deferred value to prevent unnecessary re-fetching
	const deferredSearchString = useDeferredValue(searchString);

	return useQuery({
		queryKey: queryKeys.search(deferredSearchString),
		queryFn: async () => {
			const result = await api.searchUser({ search_query: deferredSearchString });
			// This will help to reduce the data size stored in the cache
			return result.data.items.map(({ full_name, is_verified, profile_pic_url, username }) => ({
				full_name,
				is_verified,
				profile_pic_url,
				username,
			}));
		},
		enabled: !!deferredSearchString,
		...otherConfig,
	});
};
