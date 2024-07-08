import React, { FC } from 'react';

import { NavigationProvider } from '@mobile/navigation/NavigationProvider';
import { RootStackNavigator } from '@mobile/navigation/RootStackNavigator';

export const App: FC = () => {
	return (
		<NavigationProvider>
			<RootStackNavigator />
		</NavigationProvider>
	);
};
