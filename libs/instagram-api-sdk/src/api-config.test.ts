import { apiConfig } from './api-config';

describe('API Config', () => {
	it('should have a valid host name', () => {
		expect(apiConfig.HOST_NAME).not.toBeUndefined();
		expect(typeof apiConfig.HOST_NAME).toBe('string');
		expect(apiConfig.HOST_NAME.length).toBeGreaterThan(0);
	});

	it('should throws errors if try go get the headers without configuring', () => {
		expect(() => apiConfig.headers).toThrow();

		apiConfig.setRapidApiHost('mock-host').setRapidApiKey('mock-key');

		// Should be good to go now
		expect(() => apiConfig.headers).not.toThrow();
		expect(apiConfig.headers['x-rapidapi-host']).toBe('mock-host');
		expect(apiConfig.headers['x-rapidapi-key']).toBe('mock-key');
	});
});
