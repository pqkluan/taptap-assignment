import { FC } from 'react';
import {
	ActivityIndicator,
	Button,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
} from 'react-native';

import { useQueryUserPosts } from '@libs/instagram-api-sdk';

import { ScreenProps } from '@mobile/navigation/types/ScreenProps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { env } from '@mobile/services/env';

type Props = ScreenProps<'FeedsScreen'>;

export const FeedsScreen: FC<Props> = (props) => {
	const { route, navigation } = props;
	const { params } = route;

	const username = params?.username ?? env.DEFAULT_USERNAME;

	const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useQueryUserPosts({
		username_or_id_or_url: username,
	});

	return (
		<SafeAreaView style={styles.safeArea} edges={['bottom']}>
			<ScrollView>
				<Text>{`Feeds screen of ${username}`}</Text>

				<Button title='Search' onPress={() => navigation.navigate('SearchScreen')} />

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
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
	},
});
