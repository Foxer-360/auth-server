import { NestFactory } from '@nestjs/core';
import { ServerModule } from '@source/modules/server/server.module';
import * as cors from 'cors'

import { loadEnvConfig, readEnvironmentVariable } from '@source/utils';


// Load config from .env
loadEnvConfig();


async function bootstrap() {
  const server = await NestFactory.create(ServerModule);

  // Use CORS
  server.use(cors());

  // Listen on defined port
  const port = readEnvironmentVariable('server_port');
  await server.listen(port);
}

bootstrap();
