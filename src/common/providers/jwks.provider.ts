import * as jwksClient from 'jwks-rsa';

import { loadEnvConfig, readEnvironmentVariable } from '@source/utils';

// Load config from .env
loadEnvConfig();

export const jwksProvider = {
  provide: 'JwksClient',
  useFactory: () => {
    const domain = readEnvironmentVariable('auth0_client_domain');

    const client = jwksClient({
      cache: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${domain}/.well-known/jwks.json`,
      rateLimit: true,
    });

    return client;
  },
};
