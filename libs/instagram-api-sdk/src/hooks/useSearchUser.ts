import { useDeferredValue } from 'react';
import { UndefinedInitialDataOptions, useQuery } from '@tanstack/react-query';

import { api } from '../api';
import { SearchResponse } from '../types';
import { queryKeys } from '../query-key-factory';

type Params = Omit<
	UndefinedInitialDataOptions<SearchResponse['data'], Error, SearchResponse['data'], string[]>,
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
			return result.data;
		},
		enabled: !!deferredSearchString,
		...otherConfig,
	});
};
