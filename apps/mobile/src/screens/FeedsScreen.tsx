import { FC, useEffect, useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { instagramApi, PostItem } from '@libs/instagram-api-sdk';

import { ScreenProps } from '@mobile/navigation/types/ScreenProps';

type Props = ScreenProps<'FeedsScreen'>;

// TODO: move this to const
const DEFAULT_USERNAME = 'mrbeast';

export const FeedsScreen: FC<Props> = (props) => {
	const { route, navigation } = props;
	const { params } = route;

	const username = params?.username ?? DEFAULT_USERNAME;

	const [posts, setPosts] = useState<PostItem[]>([]);

	useEffect(() => {
		async function fetchData() {
			const result = await instagramApi.getUserPosts({ username_or_id_or_url: username });
			setPosts(result.data.items);
		}

		fetchData();
	}, [username]);

	return (
		<ScrollView style={styles.container}>
			<Text>{`Feeds screen of ${username}`}</Text>

			<Button title='Search' onPress={() => navigation.navigate('SearchScreen')} />

			{posts.map((post) => (
				<TouchableOpacity
					key={post.code}
					onPress={() => navigation.navigate('PostInfoScreen', { code: post.code })}>
					<Image source={{ uri: post.thumbnail_url }} style={{ width: '100%', aspectRatio: 1 }} />
					<Text>{`${post.like_count} likes`}</Text>
					{!!post.caption.user && <Text>{post.caption.user.username}</Text>}
					<Text>{post.caption.text}</Text>
				</TouchableOpacity>
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {},
});
