import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import FastImage from 'react-native-fast-image';

type Props = {
	uri: string;
};

export const UserAvatar: FC<Props> = (props) => {
	const { uri } = props;

	const { styles } = useStyles(stylesheet);

	return (
		<FastImage
			testID={'user-avatar'}
			source={{ uri, priority: FastImage.priority.high }}
			style={styles.avatar}
			resizeMode={FastImage.resizeMode.cover}
		/>
	);
};

export const AVATAR_SIZE = 44;

const stylesheet = createStyleSheet((theme) => ({
	avatar: {
		height: AVATAR_SIZE,
		width: AVATAR_SIZE,
		borderRadius: AVATAR_SIZE / 2,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: theme.colors.border,
	},
}));
