import { Module } from '@nestjs/common';

import { prismaProvider } from './prisma.provider';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  exports: [prismaProvider],
  imports: [],
  providers: [prismaProvider, UserResolver],
})
export class GraphQLModule {}
