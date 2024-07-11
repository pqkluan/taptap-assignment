import '@testing-library/jest-native/extend-expect';

import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '../../app/queryClient';
import { SearchScreen } from './index';

// eslint-disable-next-line @nx/enforce-module-boundaries
import * as SDK from '../../../../../libs/instagram-api-sdk/src';
jest.mock('../../../../../libs/instagram-api-sdk/src');

type HookResult = ReturnType<typeof SDK.useSearchUser>;

const wrapper = ({ children }: { children: React.ReactNode }) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

describe('SearchScreen', () => {
	const navigation = { pop: jest.fn(), navigate: jest.fn() };

	const mockRefetch = jest.fn();
	const defaultHookResult: Partial<HookResult> = {
		data: [],
		isFetching: false,
		isFetched: true,
		isError: false,
		refetch: mockRefetch,
	};

	it('renders expected contents', () => {
		jest.spyOn(SDK, 'useSearchUser').mockReturnValue(defaultHookResult as HookResult);

		const view = render(<SearchScreen navigation={navigation} />, { wrapper });

		expect(view.getByTestId('search-input')).toBeDefined();
		expect(view.getByTestId('search-result-list')).toBeDefined();
	});

	it('go back to previous screen if user press cancel', () => {
		jest.spyOn(SDK, 'useSearchUser').mockReturnValue(defaultHookResult as HookResult);

		const view = render(<SearchScreen navigation={navigation} />, { wrapper });

		expect(view.getByText('Cancel')).toBeDefined();
		fireEvent.press(view.getByText('Cancel'));
		expect(navigation.pop).toHaveBeenCalled();
	});

	it('change search input should trigger search query', async () => {
		jest.spyOn(SDK, 'useSearchUser').mockReturnValue(defaultHookResult as HookResult);

		const view = render(<SearchScreen navigation={navigation} />, { wrapper });

		expect(SDK.useSearchUser).toHaveBeenCalledWith({ searchString: '' });

		fireEvent.changeText(view.getByTestId('search-input'), 'beast');
		expect(SDK.useSearchUser).toHaveBeenCalledWith({ searchString: 'beast' });
	});

	it('renders search results from hook', async () => {
		jest.spyOn(SDK, 'useSearchUser').mockReturnValue({
			...defaultHookResult,
			data: [
				{
					username: 'mr.beast',
					full_name: 'Mr beast',
					is_verified: true,
					profile_pic_url: 'https://user.com/avatar.png',
				},
				{
					username: 'ms.beast',
					full_name: 'Ms beast',
					is_verified: false,
					profile_pic_url: 'https://user.com/avatar.png',
				},
			],
		} as HookResult);

		const view = render(<SearchScreen navigation={navigation} />, { wrapper });

		// Assert that the results are rendered
		expect(view.getByText('mr.beast')).toBeDefined();
		expect(view.getByText('ms.beast')).toBeDefined();

		// Assert that clicking on a result navigates to the correct screen with the correct username
		fireEvent.press(view.getByText('mr.beast'));
		expect(navigation.navigate).toHaveBeenCalledWith('FeedsScreen', { username: 'mr.beast' });
	});
});
