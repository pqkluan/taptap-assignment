import { UnistylesRegistry } from 'react-native-unistyles';

import { breakpoints } from '@mobile/themes/breakpoints';
import { darkTheme, lightTheme } from '@mobile/themes';

// Configure app theme
UnistylesRegistry.addBreakpoints(breakpoints)
	.addThemes({ light: lightTheme, dark: darkTheme })
	.addConfig(
		/**
		 * For more config options, see the reference:
		 * @see https://reactnativeunistyles.vercel.app/reference/unistyles-registry#add-config
		 */
		{
			adaptiveThemes: true,
		},
	);
