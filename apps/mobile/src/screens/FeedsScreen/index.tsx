import { FC, useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { useQueryUserPosts } from '@libs/instagram-api-sdk';

import { ScreenWrap } from '@mobile/components/ScreenWrap';
import { SearchBar } from '@mobile/components/SearchBar';
import { ScreenProps } from '@mobile/navigation/types/ScreenProps';
import { env } from '@mobile/services/env';

import { PostList } from './PostList';

type Props = ScreenProps<'FeedsScreen'>;

export const FeedsScreen: FC<Props> = (props) => {
	const { route, navigation } = props;
	const { params } = route;

	const username = params?.username ?? env.DEFAULT_USERNAME;

	const { styles } = useStyles(stylesheet);

	const { data, hasNextPage, isLoading, isError, isFetched, refetch, fetchNextPage } =
		useQueryUserPosts({
			username_or_id_or_url: username,
		});

	const handleItemPress = useCallback(
		(code: string) => {
			navigation.navigate('PostInfoScreen', { code });
		},
		[navigation],
	);

	const handleRefresh = useCallback(() => {
		refetch();
	}, [refetch]);

	const onEndReached = useCallback(() => {
		fetchNextPage();
	}, [fetchNextPage]);

	return (
		<ScreenWrap>
			<TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
				<View pointerEvents={'none'}>
					<SearchBar containerStyle={styles.searchBar} />
				</View>
			</TouchableOpacity>

			<PostList
				data={data}
				hasError={isError}
				fetched={isFetched}
				hasNextPage={hasNextPage}
				refreshing={isLoading}
				onRefresh={handleRefresh}
				onItemPress={handleItemPress}
				onEndReached={onEndReached}
			/>
		</ScreenWrap>
	);
};

const stylesheet = createStyleSheet((theme) => ({
	searchBar: {
		marginVertical: theme.margins.md,
	},
}));
