import React, { FC, PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';

type Props = PropsWithChildren;

export const NavigationProvider: FC<Props> = (props) => {
	const { children } = props;

	return <NavigationContainer onReady={onReady}>{children}</NavigationContainer>;
};

const onReady = () => {
	console.log('Navigation is ready');
};

// FIXME: apply style as needed
// const CustomTheme: Theme = {
// 	colors: {
// 		primary: Colors.Salmon,
// 		border: Colors.Transparent,
// 		text: Colors.Jacarta,
// 		notification: Colors.MadderLake,
// 		card: Colors.White,
// 		background: Colors.Cultured,
// 	},
// 	dark: false,
// };
