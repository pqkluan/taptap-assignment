import { colors } from '@mobile/themes/colors';
import React, { FC, useMemo } from 'react';
import { Animated, StyleProp, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type Props = {
	noOfDots: number;
	scrollX: Animated.Value;
	containerStyle?: StyleProp<ViewStyle>;
	dotStyle?: StyleProp<ViewStyle>;
};

export const PaginationDots: FC<Props> = (props) => {
	const { noOfDots, scrollX, containerStyle, dotStyle } = props;

	const { styles } = useStyles(stylesheet);

	const dots = useMemo(() => Array.from({ length: noOfDots }), [noOfDots]);

	if (noOfDots < 2) return null;

	return (
		<View style={[styles.containerStyle, containerStyle]}>
			{dots.map((_, index) => {
				const inputRange = [index - 1, index, index + 1];

				const opacity = scrollX.interpolate({
					inputRange,
					outputRange: [0.5, 1, 0.5],
					extrapolate: 'clamp',
				});

				const scale = scrollX.interpolate({
					inputRange: inputRange,
					outputRange: [1, 1.618, 1],
					extrapolate: 'clamp',
				});

				return (
					<Animated.View
						key={`dot-${index}`}
						style={[styles.dotStyle, { opacity, transform: [{ scale }] }, dotStyle]}
					/>
				);
			})}
		</View>
	);
};

const stylesheet = createStyleSheet((theme) => ({
	containerStyle: {
		position: 'absolute',

		flexDirection: 'row',
		alignSelf: 'center',

		bottom: theme.margins.xl,

		gap: theme.margins.md,
	},
	dotStyle: {
		width: 8,
		height: 8,
		borderRadius: 4,

		backgroundColor: colors.white,
	},
}));
