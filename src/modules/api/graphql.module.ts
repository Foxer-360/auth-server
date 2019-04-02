import { Module } from '@nestjs/common';

import { prismaProvider } from '@source/common/providers/prisma.provider';
import { ProjectResolver } from './resolvers/project.resolver';
import { WebsiteResolver } from './resolvers/website.resolver';


const resolvers = [
  ProjectResolver,
  WebsiteResolver,
];

@Module({
  providers: [prismaProvider, ...resolvers]
})
export class ApiGraphQLModule {}
