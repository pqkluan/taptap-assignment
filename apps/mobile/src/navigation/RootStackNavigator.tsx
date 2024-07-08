import React, { FC } from 'react';

import {
	createNativeStackNavigator,
	NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { FeedsScreen } from '@mobile/screens/FeedsScreen';
import { SearchScreen } from '@mobile/screens/SearchScreen';
import { PostInfoScreen } from '@mobile/screens/PostInfoScreen';

import { RootStackParamList } from './types/RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

const stackScreenOptions: NativeStackNavigationOptions = {
	headerTitleAlign: 'center',
	animation: 'fade',
	headerShadowVisible: true,
	fullScreenGestureEnabled: true,
	gestureEnabled: true,
	headerBackTitleVisible: false,
};

export const RootStackNavigator: FC = () => {
	return (
		<Stack.Navigator screenOptions={stackScreenOptions}>
			<Stack.Screen name='FeedsScreen' component={FeedsScreen} />
			<Stack.Screen name='SearchScreen' component={SearchScreen} />
			<Stack.Screen name='PostInfoScreen' component={PostInfoScreen} />
		</Stack.Navigator>
	);
};
