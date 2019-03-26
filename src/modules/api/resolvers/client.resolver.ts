import { Query, Resolver } from '@nestjs/graphql';

import { Prisma } from '@source/generated/prisma';


@Resolver('client')
export class ClientResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('client')
  public async getClient(root: any, args: any, ctx: any, info: any): Promise<any | null> {
    // tslint:disable-next-line:no-console
    console.log('Called client Query...');

    const client = await this.prisma.query.clients({}, '{ id name }');
    if (!client || client.length < 1) {
      return Promise.resolve(null);
    }

    return await Promise.resolve(client[0]);
  }

}
