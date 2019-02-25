import { Query, Resolver } from '@nestjs/graphql';
import { Prisma, User } from '@source/generated/prisma';

@Resolver('user')
export class UserResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('user')
  public async getUser(obj: any, args: any, context: any, info: any): Promise<User | null> {
    return await this.prisma.query.user(args, info);
  }

  @Query('users')
  public async getUsers(obj: any, args: any, context: any, info: any): Promise<Array<User | null>> {
    return await this.prisma.query.users(args, info);
  }

}
