import React from 'react';
import { render } from '@testing-library/react-native';

import { Username } from './Username';

describe('Username', () => {
	it('renders username', () => {
		const view = render(<Username username='mr.beast' verified={false} />);
		expect(view.getByText('mr.beast')).toBeDefined();
	});

	it('renders verified icon', () => {
		const view = render(<Username username='mr.beast' verified={true} />);
		expect(view.getByTestId('verified-icon')).toBeDefined();
	});
});
