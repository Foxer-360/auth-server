import { NestFactory } from '@nestjs/core';
import { ServerModule } from '@source/modules/server/server.module';
import * as cors from 'cors'

async function bootstrap() {
  const server = await NestFactory.create(ServerModule);

  // Use CORS
  server.use(cors());

  // Listen on defined port
  await server.listen(8000);
}

bootstrap();
