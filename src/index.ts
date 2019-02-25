import { NestFactory } from '@nestjs/core';
import { ServerModule } from '@source/modules/server/server.module';
import * as cors from 'cors'

async function bootstrap() {
  const app = await NestFactory.create(ServerModule);

  // Use CORS
  app.use(cors());

  // Listen on defined port
  await app.listen(8000);
}

bootstrap();
