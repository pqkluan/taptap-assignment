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
