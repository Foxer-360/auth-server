import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql'

import { AuthGuard } from '@source/common/guards/auth.guard';
import { Client, Prisma } from '@source/generated/prisma';

@Resolver('client')
@UseGuards(AuthGuard)
export class ClientResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('client')
  public async getClient(root: any, args: any, ctx: any, info: any): Promise<Client | null> {
    return this.prisma.query.client(args, info);
  }

  @Query('clients')
  public async getClients(root: any, args: any, ctx: any, info: any): Promise<Client[]> {
    return this.prisma.query.clients(args, info);
  }

}
