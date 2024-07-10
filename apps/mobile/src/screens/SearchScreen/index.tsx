import { FC, useCallback, useState } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { useSearchUser } from '@libs/instagram-api-sdk';

import { ScreenWrap } from '@mobile/components/ScreenWrap';
import { SearchBar } from '@mobile/components/SearchBar';
import { ScreenProps } from '@mobile/navigation/types/ScreenProps';

import { SearchResultList } from './SearchResultList';

type Props = ScreenProps<'SearchScreen'>;

export const SearchScreen: FC<Props> = (props) => {
	const { navigation } = props;

	const { styles } = useStyles(stylesheet);

	const [searchString, setSearchString] = useState('');

	const { data, isFetching, isFetched, isError, refetch } = useSearchUser({ searchString });

	const handleSearchCancel = useCallback(() => {
		navigation.pop();
	}, [navigation]);

	const handleItemPress = useCallback(
		(username: string) => {
			navigation.navigate('FeedsScreen', { username });
		},
		[navigation],
	);

	const handleRefresh = useCallback(() => {
		refetch();
	}, [refetch]);

	return (
		<ScreenWrap>
			<SearchBar
				containerStyle={styles.searchBar}
				value={searchString}
				onChangeText={setSearchString}
				onCancel={handleSearchCancel}
				cancellable
				autoFocus
			/>

			<SearchResultList
				data={data}
				hasError={isError}
				fetched={isFetched}
				refreshing={isFetching}
				onRefresh={handleRefresh}
				onItemPress={handleItemPress}
			/>
		</ScreenWrap>
	);
};

const stylesheet = createStyleSheet((theme) => ({
	searchBar: {
		marginVertical: theme.margins.md,
	},
}));
