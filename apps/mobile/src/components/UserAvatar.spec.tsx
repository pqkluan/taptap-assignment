import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import { UserAvatar } from './UserAvatar';

describe('UserAvatar', () => {
	it('renders username', () => {
		const view = render(<UserAvatar uri='https://user.com/avatar.png' />);
		expect(view.getByTestId('user-avatar')).toBeDefined();
	});
});
