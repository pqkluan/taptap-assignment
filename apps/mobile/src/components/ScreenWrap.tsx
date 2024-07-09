import React, { FC, PropsWithChildren, useMemo } from 'react';
import { StatusBar, StyleProp, View, ViewStyle } from 'react-native';
import { SafeAreaView, Edge } from 'react-native-safe-area-context';

import { createStyleSheet, useStyles } from 'react-native-unistyles';

type Props = PropsWithChildren<{
	containerStyle?: StyleProp<ViewStyle>;

	safeTop?: boolean;
	safeBottom?: boolean;
	safeLeft?: boolean;
	safeRight?: boolean;
}>;

export const ScreenWrap: FC<Props> = (props) => {
	const {
		containerStyle,
		safeBottom = true,
		safeLeft = true,
		safeRight = true,
		safeTop = true,
		children,
	} = props;

	const { styles, theme } = useStyles(stylesheet);

	const edges: Edge[] = useMemo(() => {
		const edges: Edge[] = [];

		if (safeTop) edges.push('top');
		if (safeBottom) edges.push('bottom');
		if (safeLeft) edges.push('left');
		if (safeRight) edges.push('right');

		return edges;
	}, [safeBottom, safeLeft, safeRight, safeTop]);

	return (
		<SafeAreaView style={styles.safeAreaView} edges={edges}>
			<StatusBar barStyle={theme.statusBarStyle} backgroundColor={theme.colors.background} />
			<View style={[styles.container, containerStyle]}>{children}</View>
		</SafeAreaView>
	);
};

const stylesheet = createStyleSheet((theme) => ({
	safeAreaView: {
		flexGrow: 1,
		backgroundColor: theme.colors.background,
	},
	container: {
		flex: 1,
	},
}));
