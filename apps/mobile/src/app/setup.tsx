import { UnistylesRegistry } from 'react-native-unistyles';

import { instagramApiConfig } from '@libs/instagram-api-sdk';

import { env } from '@mobile/services/env';
import { breakpoints } from '@mobile/themes/breakpoints';
import { darkTheme, lightTheme } from '@mobile/themes';

// Configure the Instagram API SDK
instagramApiConfig.setRapidApiHost(env.RAPID_API_HOST).setRapidApiKey(env.RAPID_API_KEY);

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
