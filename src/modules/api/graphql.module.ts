import { Module } from '@nestjs/common';

import { prismaProvider } from '@source/common/providers/prisma.provider';
import { ClientResolver } from './resolvers/client.resolver';


const resolvers = [
  ClientResolver,
];

@Module({
  providers: [prismaProvider, ...resolvers]
})
export class ApiGraphQLModule {}
