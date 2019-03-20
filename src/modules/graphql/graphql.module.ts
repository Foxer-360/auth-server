import { Module } from '@nestjs/common';

import { prismaProvider } from './prisma.provider';
import { ClientResolver } from './resolvers/client.resolver';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  exports: [prismaProvider],
  imports: [],
  providers: [ClientResolver, prismaProvider, UserResolver],
})
export class GraphQLModule {}
