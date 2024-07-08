import { FC } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { ScreenProps } from '@mobile/navigation/types/ScreenProps';
import { useDidMount } from '@mobile/hooks/useDidMount';
import { PostInfo, useQueryPostInfo } from '@libs/instagram-api-sdk';

type Props = ScreenProps<'PostInfoScreen'>;

export const PostInfoScreen: FC<Props> = (props) => {
	const { route, navigation } = props;
	const { params } = route;

	const { data } = useQueryPostInfo({ code_or_id_or_url: params.code });
	const postInfo = data;

	useDidMount(() => {
		if (typeof params?.code === 'undefined')
			// Missing important data, pop by default
			navigation.goBack();
	});

	return (
		<View style={styles.container}>
			<Text>{`Post info of ${route.params.code}`}</Text>
			{!!postInfo && <PostInfoContent {...props} postInfo={postInfo} />}
		</View>
	);
};

const PostInfoContent: FC<Props & { postInfo: PostInfo }> = (props) => {
	const { postInfo } = props;

	return (
		<ScrollView>
			<Text>{JSON.stringify(postInfo, null, 2)}</Text>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {},
});
