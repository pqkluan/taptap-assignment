import { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import { UserPost } from '@libs/instagram-api-sdk';

import { PostDetails } from '@mobile/components/PostDetails';

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
	const { code } = item;

	return (
		<TouchableOpacity onPress={() => onPress(code)} activeOpacity={0.9}>
			<PostDetails isFocused={isFocused} item={item} />
		</TouchableOpacity>
	);
};
