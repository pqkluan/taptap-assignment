import { FC, useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { instagramApi, SearchItem } from '@libs/instagram-api-sdk';

import { ScreenProps } from '@mobile/navigation/types/ScreenProps';

type Props = ScreenProps<'SearchScreen'>;

export const SearchScreen: FC<Props> = (props) => {
	const { navigation } = props;

	// FIXME: using search value from search bar instead of hard-coded value.
	// useDeferredValue hook is a good candidate for this.
	const search_query = 'tech';

	const [searchItems, setSearchItems] = useState<SearchItem[]>([]);

	useEffect(() => {
		async function fetchData() {
			const result = await instagramApi.searchUser({ search_query });
			setSearchItems(result.data.items);
		}

		fetchData();
	}, [search_query]);

	return (
		<View style={styles.container}>
			<Text>{'Screen screen'}</Text>

			<ScrollView>
				{searchItems.map((searchItem) => (
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
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
});
