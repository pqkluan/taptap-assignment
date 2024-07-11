import '@testing-library/jest-native/extend-expect';

import React from 'react';
import { render } from '@testing-library/react-native';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '../../app/queryClient';
import { PostInfoScreen } from './index';

// eslint-disable-next-line @nx/enforce-module-boundaries
import * as SDK from '../../../../../libs/instagram-api-sdk/src';
jest.mock('../../../../../libs/instagram-api-sdk/src');

type HookResult = ReturnType<typeof SDK.useQueryPostInfo>;

const wrapper = ({ children }: { children: React.ReactNode }) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

describe('PostInfoScreen', () => {
	const route = { params: { code: 'test-code' } };
	const navigation = { goBack: jest.fn() };

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
		navigation.goBack.mockReset();
	});

	it('should go back if post code is missing', () => {
		jest.spyOn(SDK, 'useQueryPostInfo').mockReturnValue(defaultHookResult as HookResult);

		const emptyRoute = { params: {} };
		render(<PostInfoScreen navigation={navigation} route={emptyRoute} />, { wrapper });
		expect(navigation.goBack).toHaveBeenCalled();
	});

	it('should call the query hook with correct code from screen param', () => {
		jest.spyOn(SDK, 'useQueryPostInfo').mockReturnValue(defaultHookResult as HookResult);

		render(<PostInfoScreen navigation={navigation} route={route} />, { wrapper });

		expect(SDK.useQueryPostInfo).toHaveBeenCalledWith({ code_or_id_or_url: 'test-code' });

		// Also check to make sure the goBack function is not called
		expect(navigation.goBack).not.toHaveBeenCalled();
	});

	it('renders error message', () => {
		jest
			.spyOn(SDK, 'useQueryPostInfo')
			.mockReturnValue({ ...defaultHookResult, isError: true } as unknown as HookResult);

		const view = render(<PostInfoScreen navigation={navigation} route={route} />, { wrapper });

		expect(view.getByTestId('generic-error-text')).toBeDefined();
	});

	it('renders post info', () => {
		jest.spyOn(SDK, 'useQueryPostInfo').mockReturnValue({
			...defaultHookResult,
			data: {
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
				metrics: {
					like_count: 123456,
				},
				original_height: 100,
				original_width: 100,
			},
		} as HookResult);

		const view = render(<PostInfoScreen navigation={navigation} route={route} />, { wrapper });

		expect(view.getByTestId('post-details-container')).toBeDefined();
	});
});
