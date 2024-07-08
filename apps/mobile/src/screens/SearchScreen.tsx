import { FC, useState } from 'react';
import {
	ActivityIndicator,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

import { useSearchUser } from '@libs/instagram-api-sdk';

import { ScreenProps } from '@mobile/navigation/types/ScreenProps';

type Props = ScreenProps<'SearchScreen'>;

export const SearchScreen: FC<Props> = (props) => {
	const { navigation } = props;

	const [searchString, setSearchString] = useState('');

	const { data, isFetching } = useSearchUser({ searchString });

	return (
		<View style={styles.container}>
			<TextInput value={searchString} onChangeText={setSearchString} />

			{!!isFetching && <ActivityIndicator size={'large'} />}

			{!!data && (
				<ScrollView>
					<Text>{'Total result: ' + data.count}</Text>
					{data.items.map((searchItem) => (
						<TouchableOpacity
							key={searchItem.username}
							onPress={() => navigation.navigate('FeedsScreen', { username: searchItem.username })}>
							<Text>{searchItem.username}</Text>
							<Text>{searchItem.full_name}</Text>
							<Text>{searchItem.is_verified ? 'Verified' : 'Not verified'}</Text>
							<Image
								source={{ uri: searchItem.profile_pic_url }}
								style={{ width: '100%', aspectRatio: 1 }}
							/>
						</TouchableOpacity>
					))}
				</ScrollView>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
});
