import { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { UserPost } from '@libs/instagram-api-sdk';

import { ExpandableText } from '@mobile/components/ExpandableText';
import { Text } from '@mobile/components/Text';
import { Username } from '@mobile/components/Username';
import { MediaCarousel } from '@mobile/components/MediaCarousel';
import { Clip } from '@mobile/components/Clip';

type Props = {
	item: UserPost;

	/**
	 * Whether the post is currently focused
	 * Important for media autoplay
	 */
	isFocused: boolean;

	onPress: (code: string) => void;
};

export const PostItem: FC<Props> = (props) => {
	const { item, isFocused, onPress } = props;
	const { code, like_count, caption, original_height, original_width, thumbnail_url } = item;

	const { styles } = useStyles(stylesheet);

	const aspectRatio = original_height / original_width;

	return (
		<TouchableOpacity style={styles.container} onPress={() => onPress(code)} activeOpacity={0.9}>
			{item.product_type === 'carousel_container' && (
				<MediaCarousel data={item.carousel_media} aspectRatio={aspectRatio} isFocused={isFocused} />
			)}

			{item.product_type === 'clips' && (
				<Clip
					thumbnailUri={thumbnail_url}
					videoUri={item.video_url}
					aspectRatio={aspectRatio}
					paused={!isFocused}
				/>
			)}

			<View style={styles.subContainer}>
				<Text weight={'bold'}>{`${like_count.toLocaleString()} likes`}</Text>

				<Text>
					<Username username={caption.user.username} verified={caption.user.is_verified} />{' '}
					<ExpandableText text={caption.text} />
				</Text>
			</View>
		</TouchableOpacity>
	);
};

const stylesheet = createStyleSheet((theme) => ({
	container: {
		paddingVertical: theme.margins.md,
	},
	subContainer: {
		marginTop: theme.margins.xl,
		paddingHorizontal: theme.margins.xl,
	},
}));
