import { FC, useCallback, useEffect, useRef, useState } from 'react';
import {
	ActivityIndicator,
	FlatList,
	ListRenderItem,
	RefreshControl,
	View,
	ViewabilityConfig,
	ViewToken,
} from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { UserPost } from '@libs/instagram-api-sdk';

import { GenericError } from '@mobile/components/GenericError';
import { ListEmpty } from '@mobile/components/ListEmpty';

import { PostItem } from './PostItem';
import { Text } from '@mobile/components/Text';
import { useIsFocused } from '@react-navigation/native';

type Props = {
	username: string;
	data?: UserPost[];
	fetched: boolean;
	refreshing: boolean;
	hasError: boolean;
	hasNextPage: boolean;
	onRefresh: () => void;
	onItemPress: (username: string) => void;
	onEndReached: () => void;
};

// Default data needs to be out of the component to prevent re-creation on each render
const defaultData: UserPost[] = [];

export const PostList: FC<Props> = (props) => {
	const {
		username,
		data = defaultData,
		fetched,
		refreshing,
		hasError,
		hasNextPage,
		onRefresh,
		onItemPress,
		onEndReached,
	} = props;

	const { theme } = useStyles();
	const isScreenFocused = useIsFocused();

	const ref = useRef<FlatList>(null);
	const [viewableItemCodes, setViewableItemCodes] = useState<string[]>([]);

	const handleViewableItemsChanged = useCallback(
		(params: { viewableItems: ViewToken<UserPost>[]; changed: ViewToken<UserPost>[] }) => {
			const { viewableItems } = params;
			setViewableItemCodes(viewableItems.map(({ item }) => item.code));
		},
		[setViewableItemCodes],
	);

	const renderItem = useCallback<ListRenderItem<UserPost>>(
		({ item }) => (
			<PostItem
				item={item}
				onPress={onItemPress}
				isFocused={isScreenFocused && viewableItemCodes.includes(item.code)}
			/>
		),
		[onItemPress, isScreenFocused, viewableItemCodes],
	);

	useEffect(() => {
		// Scroll to top when username changes
		ref.current?.scrollToOffset({ animated: false, offset: 0 });
	}, [username]);

	return (
		<FlatList
			testID='post-list'
			ref={ref}
			keyExtractor={keyExtractor}
			data={data}
			renderItem={renderItem}
			ListHeaderComponent={hasError ? GenericError : undefined}
			ListEmptyComponent={fetched ? ListEmpty : undefined}
			ListFooterComponent={data.length > 0 ? <Footer hasMore={hasNextPage} /> : undefined}
			onEndReached={onEndReached}
			onViewableItemsChanged={handleViewableItemsChanged}
			viewabilityConfig={viewabilityConfig}
			initialNumToRender={3}
			windowSize={7}
			refreshControl={
				<RefreshControl
					refreshing={refreshing}
					onRefresh={onRefresh}
					tintColor={theme.colors.typography}
				/>
			}
			showsVerticalScrollIndicator={false}
		/>
	);
};

const keyExtractor = (item: UserPost) => item.code;

const viewabilityConfig: ViewabilityConfig = {
	/**
	 * Post need to be displayed for at least 200ms to be considered in focus
	 */
	minimumViewTime: 200,

	/**
	 * Important: A post only in focus if it covers at least 50% of the screen
	 */
	viewAreaCoveragePercentThreshold: 50,
};

const Footer: FC<{ hasMore: boolean }> = (props) => {
	const { hasMore } = props;

	const { styles, theme } = useStyles(stylesheet);

	return (
		<View style={styles.footer}>
			{hasMore ? (
				<ActivityIndicator color={theme.colors.typography} />
			) : (
				<Text weight='bold' textAlign='center'>
					{'You reached the end'}
				</Text>
			)}
		</View>
	);
};

const stylesheet = createStyleSheet((theme) => ({
	footer: {
		minHeight: 56,
		alignItems: 'center',
		justifyContent: 'center',
	},
}));
