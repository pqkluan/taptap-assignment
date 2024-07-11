# instagram-api-sdk

This library was generated with [Nx](https://nx.dev).

## How to use

Before use this library, you need to configure api instance.

```typescript
import { instagramApiConfig } from '@libs/instagram-api-sdk';

// Configure the Instagram API SDK
instagramApiConfig.setRapidApiHost('api-host').setRapidApiKey('api-key');
```

After that you could use import the `instagramApi` to make requests.

```typescript
import { instagramApi } from '@libs/instagram-api-sdk';

const result = await instagramApi.searchUser({ search_query: 'instagram' });
```

Or you could use the api hooks that created with `react-query` for full experience.

```typescript
import { useSearchUser } from '@libs/instagram-api-sdk';

const { data, isLoading, isError } = useSearchUser({ search_query: 'instagram' });
```

## Running unit tests

Run `nx test instagram-api-sdk` to execute the unit tests via [Jest](https://jestjs.io).
