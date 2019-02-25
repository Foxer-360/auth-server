import { EnvironmentException } from '@source/common/exceptions/environment.exception';
import { Prisma } from '@source/generated/prisma';
import { loadEnvConfig } from '@source/utils';

// Load config from .env
loadEnvConfig();

export const prismaProvider = {
  provide: Prisma,
  useFactory: () => {
    const endpoint = process.env.PRISMA_ENDPOINT;
    if (!endpoint) {
      throw new EnvironmentException('PRISMA_ENDPOINT');
    }

    return new Prisma({
      debug: false,
      endpoint,
    });
  },
};
