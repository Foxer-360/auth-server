import { config } from 'dotenv';
import { existsSync } from 'fs';
import * as path from 'path';
import { Colors } from './colors';

/**
 * Simple function to get path to .env file. There are only two options. First
 * option is in root directory of this package and second option is in root
 * directory of whole auth system, where this package is only as workspace.
 *
 * @type {[type]}
 */
const getEnvFilePath = (): string | undefined => {
  const root = path.resolve(__dirname, '../..');
  const workspaceRoot = path.resolve(root, '..');

  const first = path.resolve(root, '.env');
  const second = path.resolve(workspaceRoot, '.env');

  // In root directory of this package
  if (existsSync(first)) {
    return first;
  }

  // In root directory of workspace
  if (existsSync(second)) {
    return second;
  }

  // There is no .env file
  // tslint:disable-next-line:no-console
  console.error('Server has no .env file. Please check, that you have it in correct place!');
  process.exit(1);
  return undefined;
};

const loadEnvConfig = () => {
  const envPath = getEnvFilePath();

  config({ path: envPath });
}

const getGraphQLSchemas = () => {
  // Generated schema from Prisma
  const prisma = path.resolve(__dirname, '../generated/prisma.graphql');
  // Custom schema
  // const custom = path.resolve(__dirname, '../modules/graphql/schema/schema.graphql');

  return [
    // custom,
    prisma,
  ];
};

export {
  Colors,
  getEnvFilePath,
  getGraphQLSchemas,
  loadEnvConfig,
};
