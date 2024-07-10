import { FC, useCallback } from 'react';
import { FlatList, ListRenderItem, RefreshControl } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { SearchItem } from '@libs/instagram-api-sdk';

import { ListEmpty } from '@mobile/components/ListEmpty';
import { ListError } from '@mobile/components/ListError';
import { ITEM_HEIGHT, SearchResultItem } from './SearchResultItem';

type Props = {
	data?: SearchItem[];
	fetched: boolean;
	refreshing: boolean;
	hasError: boolean;
	onRefresh: () => void;
	onItemPress: (username: string) => void;
};

const defaultData: SearchItem[] = [];

export const SearchResultList: FC<Props> = (props) => {
	const { data = defaultData, fetched, refreshing, hasError, onRefresh, onItemPress } = props;

	const { theme } = useStyles();

	const renderItem = useCallback<ListRenderItem<SearchItem>>(
		({ item }) => <SearchResultItem item={item} onPress={onItemPress} />,
		[onItemPress],
	);

	return (
		<FlatList
			keyExtractor={keyExtractor}
			data={data}
			renderItem={renderItem}
			getItemLayout={getItemLayout}
			ListHeaderComponent={hasError ? ListError : undefined}
			ListEmptyComponent={fetched ? ListEmpty : undefined}
			refreshControl={
				<RefreshControl
					refreshing={refreshing}
					onRefresh={onRefresh}
					tintColor={theme.colors.typography}
				/>
			}
		/>
	);
};

const keyExtractor = (item: SearchItem) => item.username;
const getItemLayout = (_: unknown, index: number) => ({
	length: ITEM_HEIGHT,
	offset: ITEM_HEIGHT * index,
	index,
});
