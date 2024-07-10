import { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { SearchItem } from '@libs/instagram-api-sdk';

import { Text } from '@mobile/components/Text';
import { UserAvatar, AVATAR_SIZE } from '@mobile/components/UserAvatar';
import { Username } from '@mobile/components/Username';

type Props = {
	item: SearchItem;
	onPress: (username: string) => void;
};

export const SearchResultItem: FC<Props> = (props) => {
	const { item, onPress } = props;
	const { username, is_verified, full_name, profile_pic_url } = item;

	const { styles, theme } = useStyles(stylesheet);

	return (
		<TouchableOpacity style={styles.container} onPress={() => onPress(username)}>
			{!!profile_pic_url && <UserAvatar uri={profile_pic_url} />}

			<View style={styles.subContainer}>
				<Username username={username} verified={is_verified} />

				{!!full_name && (
					<Text color={theme.colors.typographySecondary} numberOfLines={1}>
						{full_name}
					</Text>
				)}
			</View>
		</TouchableOpacity>
	);
};

// Note: we could figure out the row height by looking at the avatar height + vertical padding
export const ITEM_HEIGHT = AVATAR_SIZE + 16 * 2;

const stylesheet = createStyleSheet((theme) => ({
	container: {
		flexDirection: 'row',
		alignItems: 'center',

		paddingVertical: theme.margins.md,
		paddingHorizontal: theme.margins.xl,

		gap: theme.margins.lg,
	},
	subContainer: {
		flex: 1,
	},
}));
