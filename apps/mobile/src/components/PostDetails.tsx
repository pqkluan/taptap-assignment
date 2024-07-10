import { FC } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { UserPost } from '@libs/instagram-api-sdk';

import { ExpandableText } from '@mobile/components/ExpandableText';
import { Text } from '@mobile/components/Text';
import { Username } from '@mobile/components/Username';
import { MediaCarousel } from '@mobile/components/MediaCarousel';
import { Clip } from '@mobile/components/Clip';
import { UserAvatar } from '@mobile/components/UserAvatar';

type Props = {
	item: UserPost;

	/**
	 * Whether the post is currently focused
	 * Important for media autoplay
	 */
	isFocused: boolean;

	/**
	 * Whether the caption should be collapsed by default
	 */
	captionCollapsed?: boolean;
};

export const PostDetails: FC<Props> = (props) => {
	const { item, isFocused, captionCollapsed = true } = props;
	const { like_count, caption, user, original_height, original_width, thumbnail_url } = item;

	const { styles } = useStyles(stylesheet);

	const aspectRatio = original_height / original_width;

	return (
		<View style={styles.container}>
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

			<View style={styles.avatarWrap}>
				{!!user.profile_pic_url && <UserAvatar uri={user.profile_pic_url} />}
			</View>

			<View style={styles.subContainer}>
				{!!like_count && <Text weight={'bold'}>{`${like_count.toLocaleString()} likes`}</Text>}

				<Text>
					<Username username={user.username} verified={user.is_verified} />{' '}
					{captionCollapsed ? <ExpandableText text={caption.text} /> : caption.text}
				</Text>
			</View>
		</View>
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
	avatarWrap: {
		position: 'absolute',
		top: theme.margins.xl,
		left: theme.margins.xl,
	},
}));
