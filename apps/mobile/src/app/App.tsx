import './setup';

import React, { FC } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';

import { NavigationProvider } from '@mobile/navigation/NavigationProvider';
import { RootStackNavigator } from '@mobile/navigation/RootStackNavigator';

import { queryClient } from './queryClient';

export const App: FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<NavigationProvider>
				<RootStackNavigator />
			</NavigationProvider>
		</QueryClientProvider>
	);
};
