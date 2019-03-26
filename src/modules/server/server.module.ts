import { Module } from '@nestjs/common';

import { ApiModule } from '@source/modules/api/api.module';
import { DashboardModule } from '@source/modules/dashboard/dashboard.module';
import { ServerController } from './server.controller';
import { ServerService } from './server.service';


@Module({
  controllers: [ServerController],
  imports: [ApiModule, DashboardModule],
  providers: [ServerService],
})
export class ServerModule {};
