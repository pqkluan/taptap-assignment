import '@testing-library/jest-native/extend-expect';

import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '../../app/queryClient';
import { FeedsScreen } from './index';

// eslint-disable-next-line @nx/enforce-module-boundaries
import * as SDK from '../../../../../libs/instagram-api-sdk/src';
import { NavigationContainer } from '@react-navigation/native';
jest.mock('../../../../../libs/instagram-api-sdk/src');

type HookResult = ReturnType<typeof SDK.useQueryUserPosts>;

const wrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<NavigationContainer>{children}</NavigationContainer>
		</QueryClientProvider>
	);
};

describe('FeedsScreen', () => {
	const route = { params: { username: 'instagram' } };
	const navigation = { navigate: jest.fn() };

	const mockRefetch = jest.fn();
	const defaultHookResult: Partial<HookResult> = {
		data: undefined,
		isLoading: false,
		isFetched: true,
		isError: false,
		isPending: false,
		refetch: mockRefetch,
	};

	beforeEach(() => {
		mockRefetch.mockReset();
		navigation.navigate.mockReset();
	});

	it('renders correct contents', () => {
		jest.spyOn(SDK, 'useQueryUserPosts').mockReturnValue(defaultHookResult as HookResult);

		const view = render(<FeedsScreen navigation={navigation} route={route} />, { wrapper });

		expect(view.getByTestId('feeds-screen')).toBeDefined();
		expect(view.getByTestId('search-button')).toBeDefined();
		expect(view.getByTestId('post-list')).toBeDefined();
	});

	it('calls the query hook with username from navigation params', () => {
		jest.spyOn(SDK, 'useQueryUserPosts').mockReturnValue(defaultHookResult as HookResult);

		render(<FeedsScreen navigation={navigation} route={route} />, { wrapper });

		expect(SDK.useQueryUserPosts).toHaveBeenCalledWith({ username_or_id_or_url: 'instagram' });
	});

	it('open search screen when click on the search ui', () => {
		jest.spyOn(SDK, 'useQueryUserPosts').mockReturnValue(defaultHookResult as HookResult);

		const view = render(<FeedsScreen navigation={navigation} route={route} />, { wrapper });

		expect(view.getByTestId('search-button')).toBeDefined();
		fireEvent.press(view.getByTestId('search-button'));

		expect(navigation.navigate).toHaveBeenCalledWith('SearchScreen');
	});

	it('renders search results from hook', async () => {
		jest.spyOn(SDK, 'useQueryUserPosts').mockReturnValue({
			...defaultHookResult,
			data: [
				{
					code: 'test-code',
					user: {
						username: 'mr.beast',
						full_name: 'Mr beast',
						is_verified: true,
						profile_pic_url: '',
					},
					caption: {
						text: 'Test caption',
					},
					like_count: 123456,
					original_height: 100,
					original_width: 100,
				},
			],
		} as HookResult);

		const view = render(<FeedsScreen navigation={navigation} />, { wrapper });

		// Assert that the results are rendered
		expect(view.getByText('mr.beast')).toBeDefined();

		// Assert that clicking on a result navigates to the correct screen with the correct username
		fireEvent.press(view.getByText('mr.beast'));
		expect(navigation.navigate).toHaveBeenCalledWith('PostInfoScreen', { code: 'test-code' });
	});
});
