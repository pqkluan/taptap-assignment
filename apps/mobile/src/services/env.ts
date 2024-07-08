import Config from 'react-native-config';

export const env = {
	DEFAULT_USERNAME: Config.DEFAULT_USERNAME,
	RAPID_API_HOST: Config.RAPID_API_HOST,
	RAPID_API_KEY: Config.RAPID_API_KEY,
} as const;
