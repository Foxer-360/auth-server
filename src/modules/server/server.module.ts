import { Module } from '@nestjs/common';
import { GraphQLModule as GraphQL } from '@nestjs/graphql';

import { GraphQLModule } from '@source/modules/graphql/graphql.module';
import { getGraphQLSchemas } from '@source/utils';
import { ServerController } from './server.controller';
import { ServerService } from './server.service';

@Module({
  controllers: [ServerController],
  imports: [GraphQLModule, GraphQL.forRoot({
    path: '/graphql',
    playground: true,
    typePaths: getGraphQLSchemas(),
  })],
  providers: [ServerService],
})
export class ServerModule {};
