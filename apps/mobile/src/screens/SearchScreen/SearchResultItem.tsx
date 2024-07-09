import { FC } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { SearchItem } from '@libs/instagram-api-sdk';

import { Text } from '@mobile/components/Text';
import VerifiedIcon from '@mobile/assets/icons/verified.svg';
import { colors } from '@mobile/themes/colors';

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
			<Image source={{ uri: profile_pic_url }} style={styles.avatar} resizeMethod='resize' />

			<View>
				<View style={styles.usernameRow}>
					<Text weight={'bold'}>{item.username}</Text>
					{!!is_verified && <VerifiedIcon height={12} width={12} color={colors.verifiedBlue} />}
				</View>

				{!!full_name && <Text color={theme.colors.typographySecondary}>{full_name}</Text>}
			</View>
		</TouchableOpacity>
	);
};

// Note: we could figure out the row height by looking at the avatar height + vertical padding
// It's is 44 + 2 * 16 = 76
export const ITEM_HEIGHT = 76;

const stylesheet = createStyleSheet((theme) => ({
	container: {
		flexDirection: 'row',
		alignItems: 'center',

		paddingVertical: theme.margins.md,
		paddingHorizontal: theme.margins.xl,

		gap: theme.margins.lg,
	},
	avatar: {
		height: 44,
		width: 44,
		borderRadius: 22,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: theme.colors.border,
	},
	usernameRow: {
		flexDirection: 'row',
		alignItems: 'center',

		gap: theme.margins.sm,
	},
}));
