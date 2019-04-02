import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { Prisma } from '@source/generated/prisma';
import { IClientAccessIdentity } from '../types';


@Injectable()
export class ClientGuard implements CanActivate {

  constructor(private readonly prisma: Prisma) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const client = ctx.getArgs().client as IClientAccessIdentity | null;
    if (!client || !client.id || !client.secret) {
      return Promise.resolve(false);
    }

    // Try to find client
    const info = `{ id secret }`;
    const rec = await this.prisma.query.client({ where: { id: client.id } }, info);
    if (!rec) {
      return Promise.resolve(false);
    }

    if (rec.secret === client.secret) {
      return Promise.resolve(true);
    }

    return Promise.resolve(false);
  }

}
