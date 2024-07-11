import React from 'react';
import { render } from '@testing-library/react-native';

import { App } from './App';

jest.mock('../screens/FeedsScreen', () => ({
	FeedsScreen: () => 'FeedsScreen',
}));

describe('App', () => {
	beforeEach(() => {
		jest.spyOn(console, 'log').mockImplementation(() => undefined);
	});

	it('renders FeedsScreen by default', () => {
		const view = render(<App />);
		expect(view.queryByText('FeedsScreen')).toBeDefined();

		expect(console.log).toHaveBeenCalledWith('Navigation is ready');
	});

	it('log info when navigation is ready', () => {
		render(<App />);
		expect(console.log).toHaveBeenCalledWith('Navigation is ready');
	});
});
