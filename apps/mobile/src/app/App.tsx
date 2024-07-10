import './setup';

import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClientProvider } from '@tanstack/react-query';

import { NavigationProvider } from '@mobile/navigation/NavigationProvider';
import { RootStackNavigator } from '@mobile/navigation/RootStackNavigator';

import { queryClient } from './queryClient';

export const App: FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<GestureHandlerRootView style={StyleSheet.absoluteFill}>
				<NavigationProvider>
					<RootStackNavigator />
				</NavigationProvider>
			</GestureHandlerRootView>
		</QueryClientProvider>
	);
};
