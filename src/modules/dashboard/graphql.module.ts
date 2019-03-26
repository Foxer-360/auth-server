import { Module } from '@nestjs/common';

import { jwksProvider } from '@source/common/providers/jwks.provider';
import { prismaProvider } from '@source/common/providers/prisma.provider';
import { UserResolver } from './resolvers/user.resolver';


const resolvers = [
  UserResolver,
];

@Module({
  providers: [jwksProvider, prismaProvider, ...resolvers]
})
export class DashboardGraphQLModule {}
