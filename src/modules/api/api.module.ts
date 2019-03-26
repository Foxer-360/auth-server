import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import * as path from 'path';

import { ApiGraphQLModule } from './graphql.module';


const schemas = [
  path.resolve(__dirname, './schemas/types.graphql'),
  path.resolve(__dirname, './schemas/schema.graphql'),
];

const GraphQLDefinition = GraphQLModule.forRoot({
  context: ({ req }) => ({ headers: req.headers }),
  include: [ApiGraphQLModule],
  installSubscriptionHandlers: true,
  path: '/api',
  playground: true,
  // To disable warning in console because of Prisma's Node type
  resolverValidationOptions: { requireResolversForResolveType: false },
  typePaths: schemas,
});


@Module({
  imports: [ApiGraphQLModule, GraphQLDefinition],
})
export class ApiModule {}
