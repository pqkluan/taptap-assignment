import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import { ExpandableText } from './ExpandableText';

describe('ExpandableText', () => {
	it('works with short text', () => {
		const sampleText = 'Abc xyz';

		const view = render(<ExpandableText text={sampleText} />);
		// The text should be fully displayed
		expect(view.toJSON()).toContain(sampleText);
	});
	it('works with long text', () => {
		const sampleText = 'Abc '.repeat(30).trim();

		const view = render(<ExpandableText text={sampleText} />);
		expect(view.getByText('more')).toBeDefined();

		fireEvent.press(view.getByText('more'));

		// The text should be fully displayed
		expect(view.toJSON()).toContain(sampleText);
	});
});
