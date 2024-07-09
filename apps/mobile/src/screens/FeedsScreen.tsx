import { FC } from 'react';
import {
	ActivityIndicator,
	Button,
	Image,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { useQueryUserPosts } from '@libs/instagram-api-sdk';

import { ScreenWrap } from '@mobile/components/ScreenWrap';
import { SearchBar } from '@mobile/components/SearchBar';
import { ScreenProps } from '@mobile/navigation/types/ScreenProps';
import { env } from '@mobile/services/env';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type Props = ScreenProps<'FeedsScreen'>;

export const FeedsScreen: FC<Props> = (props) => {
	const { route, navigation } = props;
	const { params } = route;

	const username = params?.username ?? env.DEFAULT_USERNAME;

	const { styles } = useStyles(stylesheet);

	const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useQueryUserPosts({
		username_or_id_or_url: username,
	});

	const decoySearchBar = (
		<TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
			<View pointerEvents={'none'}>
				<SearchBar containerStyle={styles.searchBar} />
			</View>
		</TouchableOpacity>
	);

	return (
		<ScreenWrap>
			{decoySearchBar}

			<ScrollView>
				<Text>{`Feeds screen of ${username}`}</Text>

				{data.map((post) => (
					<TouchableOpacity
						key={post.code}
						onPress={() => navigation.navigate('PostInfoScreen', { code: post.code })}>
						<Image source={{ uri: post.thumbnail_url }} style={{ width: '100%', aspectRatio: 1 }} />
						<Text>{`${post.like_count} likes`}</Text>
						{!!post.caption.user && <Text>{post.caption.user.username}</Text>}
						<Text>{post.caption.text}</Text>
					</TouchableOpacity>
				))}

				{isFetchingNextPage ? (
					<ActivityIndicator />
				) : (
					!!hasNextPage && <Button title='Load more' onPress={() => fetchNextPage()} />
				)}
			</ScrollView>
		</ScreenWrap>
	);
};

const stylesheet = createStyleSheet((theme) => ({
	searchBar: {
		marginTop: theme.margins.md,
	},
}));
