declare module 'react-native-config' {
	export interface NativeConfig {
		DEFAULT_USERNAME?: string;
		RAPID_API_HOST?: string;
		RAPID_API_KEY?: string;
	}

	export const Config: NativeConfig;
	export default Config;
}
