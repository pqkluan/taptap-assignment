import { FC } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Text } from '@mobile/components/Text';

/**
 * Generic component to display an error message
 */
export const GenericError: FC = () => {
	const { styles, theme } = useStyles(stylesheet);

	return (
		<View style={styles.container}>
			<Text testID='generic-error-text' color={theme.colors.error} textAlign='center'>
				{'Something went wrong\nPlease try again later'}
			</Text>
		</View>
	);
};

const stylesheet = createStyleSheet((theme) => ({
	container: {
		marginTop: theme.margins.xl,

		justifyContent: 'center',
		alignItems: 'center',
	},
}));
