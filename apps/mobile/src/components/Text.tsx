import { FC, useMemo } from 'react';
import { Text as RNText, TextProps, TextStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

interface Props extends TextProps {
	color?: TextStyle['color'];
	size?: TextStyle['fontSize'];
	weight?: TextStyle['fontWeight'];
}

export const Text: FC<Props> = (props) => {
	const {
		children,
		style: propStyle,
		color,
		size: fontSize = 14,
		weight: fontWeight = '400',
		...textProps
	} = props;

	const { styles } = useStyles(stylesheet);

	const combinedStyle = useMemo(() => {
		const tempStyle: TextStyle = { fontWeight, fontSize };
		if (color) tempStyle.color = color;

		return [styles.text, tempStyle, propStyle];
	}, [color, fontSize, fontWeight, propStyle, styles.text]);

	return (
		<RNText style={combinedStyle} {...textProps}>
			{children}
		</RNText>
	);
};

const stylesheet = createStyleSheet((theme) => ({
	text: {
		color: theme.colors.typography,
		fontFamily: theme.fontFamily,
	},
}));
