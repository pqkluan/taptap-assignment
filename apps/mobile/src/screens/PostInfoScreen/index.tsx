import { FC } from 'react';
import { RefreshControl, ScrollView } from 'react-native';

import { useQueryPostInfo } from '@libs/instagram-api-sdk';
import { ScreenWrap } from '@mobile/components/ScreenWrap';
import { useDidMount } from '@mobile/hooks/useDidMount';
import { ScreenProps } from '@mobile/navigation/types/ScreenProps';
import { PostDetails } from '@mobile/components/PostDetails';
import { GenericError } from '@mobile/components/GenericError';

type Props = ScreenProps<'PostInfoScreen'>;

export const PostInfoScreen: FC<Props> = (props) => {
	const { route, navigation } = props;
	const { params } = route;

	const { data, refetch, isLoading, isError } = useQueryPostInfo({
		code_or_id_or_url: params.code,
	});

	useDidMount(() => {
		if (typeof params?.code === 'undefined')
			// Missing important data, pop by default
			navigation.goBack();
	});

	return (
		<ScreenWrap>
			<ScrollView refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} />}>
				{isError && <GenericError />}
				{!!data && (
					<PostDetails
						item={{ ...data, like_count: data.metrics.like_count }}
						isFocused
						captionCollapsed={false}
					/>
				)}
			</ScrollView>
		</ScreenWrap>
	);
};