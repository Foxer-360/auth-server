import { Module } from '@nestjs/common';

import { prismaProvider } from '@source/common/providers/prisma.provider';
import { UserResolver } from './resolvers/user.resolver';


const resolvers = [
  UserResolver,
];

@Module({
  providers: [prismaProvider, ...resolvers]
})
export class DashboardGraphQLModule {}
