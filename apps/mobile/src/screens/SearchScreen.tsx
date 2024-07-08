import { Button, StyleSheet, Text, View } from 'react-native';

import { ScreenProps } from '@mobile/navigation/types/ScreenProps';
import { FC } from 'react';

type Props = ScreenProps<'SearchScreen'>;

export const SearchScreen: FC<Props> = (props) => {
	const { navigation } = props;

	return (
		<View style={styles.container}>
			<Text>{'Screen screen'}</Text>

			<Button
				title='Feeds'
				onPress={() => navigation.navigate('FeedsScreen', { username: 'mock-user-name' })}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
