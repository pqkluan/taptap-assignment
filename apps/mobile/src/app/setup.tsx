import { instagramApiConfig } from '@libs/instagram-api-sdk';
import { env } from '@mobile/services/env';

instagramApiConfig.setRapidApiHost(env.RAPID_API_HOST).setRapidApiKey(env.RAPID_API_KEY);
