import { UndefinedInitialDataOptions, useQuery } from '@tanstack/react-query';

import { api } from '../api';
import { PostInfo } from '../types';
import { queryKeys } from '../query-key-factory';

type Params = Omit<
	UndefinedInitialDataOptions<PostInfo, Error, PostInfo, string[]>,
	'queryKey' | 'queryFn'
> & {
	code_or_id_or_url: string;
};

export const useQueryPostInfo = (params: Params) => {
	const { code_or_id_or_url, ...otherConfig } = params;

	return useQuery({
		queryKey: queryKeys.postInfo(code_or_id_or_url),
		queryFn: async () => {
			const result = await api.getPostInfo({ code_or_id_or_url });
			return result.data;
		},
		enabled: !!code_or_id_or_url,
		...otherConfig,
	});
};
