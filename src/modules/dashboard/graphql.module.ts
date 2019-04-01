import { Module } from '@nestjs/common';

import { jwksProvider } from '@source/common/providers/jwks.provider';
import { prismaProvider } from '@source/common/providers/prisma.provider';
import { Auth0Service } from '@source/common/services/auth0.service';
import { ClientResolver } from './resolvers/client.resolver';
import { UserResolver } from './resolvers/user.resolver';


const resolvers = [
ClientResolver,
  UserResolver,
];

@Module({
  providers: [Auth0Service, jwksProvider, prismaProvider, ...resolvers]
})
export class DashboardGraphQLModule {}
