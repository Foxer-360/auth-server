import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

import { AuthGuard } from '@source/common/guards/auth.guard';
import { Prisma } from '@source/generated/prisma';

@Resolver('user')
export class UserResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('user')
  @UseGuards(AuthGuard)
  public async getUser(root: any, args: any, ctx: any, info: any): Promise<any | null> {
    // tslint:disable-next-line:no-console
    console.log('Called user Query...');

    const user = await this.prisma.query.users({ where: { email: 'nevim42@gmail.com' } }, '{ id name email auth0Id }');
    if (!user || user.length < 1) {
      return Promise.resolve(null);
    }

    return await Promise.resolve(user[0]);
  }

}
