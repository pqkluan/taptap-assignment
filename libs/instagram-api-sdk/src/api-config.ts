/**
 * Configuration for the API
 */
class ApiConfig {
	private _apiKey?: string;
	private _apiHost?: string;

	public setApiKey(apiKey: string) {
		this._apiKey = apiKey;
		return this;
	}

	public setApiHost(apiHost: string) {
		this._apiHost = apiHost;
		return this;
	}

	get apiKey(): string | undefined {
		return this._apiKey;
	}

	get apiHost(): string | undefined {
		return this._apiHost;
	}

	get headers() {
		if (!this.apiKey) throw new Error('API key is not set');
		if (!this.apiHost) throw new Error('API host is not set');
		return { 'x-rapidapi-host': this.apiHost, 'x-rapidapi-key': this.apiKey };
	}
}

export const apiConfig = new ApiConfig();
