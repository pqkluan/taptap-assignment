/**
 * Configuration for the API
 */
class ApiConfig {
	/**
	 * The host name of the API. We don't need to change this very often.
	 */
	public readonly HOST_NAME = 'https://instagram-scraper-api2.p.rapidapi.com';

	private _rapidApiKey?: string;
	private _rapidApiHost?: string;

	public setRapidApiKey(apiKey: string) {
		this._rapidApiKey = apiKey;
		return this;
	}

	public setRapidApiHost(apiHost: string) {
		this._rapidApiHost = apiHost;
		return this;
	}

	get rapidApiKey(): string | undefined {
		return this._rapidApiKey;
	}

	get rapidApiHost(): string | undefined {
		return this._rapidApiHost;
	}

	get headers() {
		if (!this.rapidApiKey) throw new Error('API key is not set');
		if (!this.rapidApiHost) throw new Error('API host is not set');
		return { 'x-rapidapi-host': this.rapidApiHost, 'x-rapidapi-key': this.rapidApiKey };
	}
}

export const apiConfig = new ApiConfig();
