import 'react-native-unistyles';

import { breakpoints } from './breakpoints';
import { darkTheme, lightTheme } from './index';

type AppBreakpoints = typeof breakpoints;

type AppThemes = {
	light: typeof lightTheme;
	dark: typeof darkTheme;
};

declare module 'react-native-unistyles' {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface UnistylesBreakpoints extends AppBreakpoints {}
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface UnistylesThemes extends AppThemes {}
}
