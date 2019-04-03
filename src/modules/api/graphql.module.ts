import { Module } from '@nestjs/common';

import { prismaProvider } from '@source/common/providers/prisma.provider';
import { Auth0Service } from '@source/common/services/auth0.service';
import { CommonResolver } from './resolvers/common.resolver';
import { ProjectResolver } from './resolvers/project.resolver';
import { WebsiteResolver } from './resolvers/website.resolver';


const resolvers = [
  CommonResolver,
  ProjectResolver,
  WebsiteResolver,
];

@Module({
  providers: [Auth0Service, prismaProvider, ...resolvers]
})
export class ApiGraphQLModule {}
