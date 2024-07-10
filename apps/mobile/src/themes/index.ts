import { Platform } from 'react-native';
import { colors } from './colors';

const fontFamily = Platform.select({ android: 'Roboto', ios: 'San Francisco' });

export const lightTheme = {
	statusBarStyle: 'dark-content',
	colors: {
		background: colors.white,

		typography: colors.black,
		typographySecondary: colors.darkGray,
		error: colors.red,
		border: colors.darkGray,
	},
	margins: {
		xs: 2,
		sm: 4,
		md: 8,
		lg: 12,
		xl: 16,
	},
	fontFamily,
} as const;

export const darkTheme = {
	statusBarStyle: 'light-content',
	colors: {
		background: colors.black,
		typography: colors.whiteSmoke,
		typographySecondary: colors.darkGray,
		error: colors.red,
		border: colors.darkGray,
	},
	margins: {
		xs: 2,
		sm: 4,
		md: 8,
		lg: 12,
		xl: 16,
	},
	fontFamily,
} as const;
