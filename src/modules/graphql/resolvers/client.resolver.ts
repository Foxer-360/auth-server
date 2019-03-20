import { Query, Resolver } from '@nestjs/graphql';
import { Client, Prisma } from '@source/generated/prisma';

@Resolver('client')
export class ClientResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('client')
  public async getClient(obj: any, args: any, context: any, info: any): Promise<Client | null> {
    return await this.prisma.query.client(args, info);
  }

  @Query('clients')
  public async getClients(obj: any, args: any, context: any, info: any): Promise<Array<Client | null>> {
    return await this.prisma.query.clients(args, info);
  }

}
