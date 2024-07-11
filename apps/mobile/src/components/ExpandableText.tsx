import { FC, useMemo, useState } from 'react';
import { useStyles } from 'react-native-unistyles';

import { Text } from '@mobile/components/Text';

type Props = {
	text: string;
	minCutOffLength?: number;
	cutOffLength?: number;
};

export const ExpandableText: FC<Props> = (props) => {
	const { text: nonTrimmedText, minCutOffLength = 20, cutOffLength = 110 } = props;

	const { theme } = useStyles();

	const [expanded, setExpanded] = useState(false);

	const text = useMemo(() => nonTrimmedText.trim(), [nonTrimmedText]);

	const cutOffIndex = useMemo<number>(() => {
		// TODO: extract this logic to a helper function and test it
		// Early return if the text is already short
		if (text.length <= cutOffLength) return text.length;

		// Start with index = -1 to include the first line
		let breakIndex = -1;
		let breakCounter = 0;
		while (breakIndex < minCutOffLength) {
			const temp = text.indexOf('\n', breakIndex + 1);

			// There is no next line break, break the loop
			if (temp === -1) break;

			// We don't want to too many line breaks
			if (breakCounter++ > 1) {
				// If two line breaks are continuous, we should remove both of them and cut the text
				if (temp - breakIndex === 2) return breakIndex - 1;
				// Else, the break limit is reached
				break;
			}

			breakIndex = temp;
		}

		if (breakIndex === -1) {
			// There is no line break in the text
			// Continue to find the first space after the cut off length
		} else {
			// There is a line break in the text

			// We found the second line break smaller than the cut off length
			if (breakIndex < cutOffLength) return breakIndex;
		}

		const spaceIndexAfterCutOffLimit = text.indexOf(' ', cutOffLength);
		if (spaceIndexAfterCutOffLimit === -1) return cutOffLength;
		return spaceIndexAfterCutOffLimit;
	}, [text, minCutOffLength, cutOffLength]);

	const cutText = useMemo<string>(() => text.slice(0, cutOffIndex).trim(), [text, cutOffIndex]);

	const hasMore = text.length > cutText.length;

	return expanded ? (
		text
	) : (
		<>
			{cutText}
			{!!hasMore && (
				<Text color={theme.colors.typographySecondary} onPress={() => setExpanded(true)}>
					{' more'}
				</Text>
			)}
		</>
	);
};
