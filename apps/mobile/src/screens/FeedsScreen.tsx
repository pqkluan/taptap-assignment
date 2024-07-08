import { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { ScreenProps } from '@mobile/navigation/types/ScreenProps';

type Props = ScreenProps<'FeedsScreen'>;

// TODO: move this to const
const DEFAULT_USERNAME = 'mrbeast';

export const FeedsScreen: FC<Props> = (props) => {
	const { route, navigation } = props;
	const { params } = route;

	const username = params?.username ?? DEFAULT_USERNAME;

	return (
		<View style={styles.container}>
			<Text>{`Feeds screen of ${username}`}</Text>

			<Button title='Search' onPress={() => navigation.navigate('SearchScreen')} />
			<Button
				title='Open post info'
				onPress={() => navigation.navigate('PostInfoScreen', { code: 'post-test-code' })}
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
