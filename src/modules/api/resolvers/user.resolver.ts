import { Query, Resolver } from '@nestjs/graphql';

import { Auth0Service } from '@source/common/services/auth0.service';
import { Prisma, User } from '@source/generated/prisma';
import { IExistsArgs, IOwnsArgs, IProfileArgs, IUser,IUsersArgs } from '../types';


@Resolver('user')
export class UserResolver {

  constructor(private readonly prisma: Prisma,
    private readonly auth0Service: Auth0Service) {}

  @Query('exists')
  public async exists(root: any, args: IExistsArgs, ctx: any, info: any): Promise<boolean> {
    const auth0Id = this.auth0Service.getAuth0IdFromAccessToken(args.user.accessToken);
    if (!auth0Id) {
      return Promise.resolve(false);
    }

    // Find user
    const user = await (async () => {
      const users = await this.prisma.query.users({ where: { auth0Id } }, `{ id clients { id } superuser }`) as User[];
      if (!users || !users[0] || !users[0].clients) {
        return Promise.resolve(null);
      }

      const res = {
        ...users[0],
        clients: users[0].clients.map(({ id }) => id),
      };

      return Promise.resolve(res);
    })();
    if (!user) {
      return Promise.resolve(false);
    }
    if (user.superuser) {
      return Promise.resolve(true);
    }


    return Promise.resolve(user.clients.includes(args.client.id));
  }

  @Query('owns')
  public async owns(root: any, args: IOwnsArgs, ctx: any, info: any): Promise<boolean> {
    const auth0Id = this.auth0Service.getAuth0IdFromAccessToken(args.user.accessToken);
    if (!auth0Id) {
      return Promise.resolve(false);
    }

    // Find user
    const user = await (async () => {
      const users = await this.prisma.query.users({ where: { auth0Id } }, `{ id owns { id } superuser }`) as User[];
      if (!users || !users[0] || !users[0].owns) {
        return Promise.resolve(null);
      }

      const res = {
        ...users[0],
        owns: users[0].owns.map(({ id }) => id),
      };

      return Promise.resolve(res);
    })();
    if (!user) {
      return Promise.resolve(false);
    }
    if (user.superuser) {
      return Promise.resolve(true);
    }

    return Promise.resolve(user.owns.includes(args.client.id));
  }

  @Query('profile')
  public async profile(root: any, args: IProfileArgs, ctx: any, info: any): Promise<IUser | null> {
    const auth0Id = this.auth0Service.getAuth0IdFromAccessToken(args.user.accessToken);
    if (!auth0Id) {
      return Promise.resolve(null);
    }


    // Get user profile
    const user = await (async () => {
      const users = await this.prisma.query.users({ where: { auth0Id } }, `{ avatar email id name clients { id } owns { id } superuser }`) as User[];
      if (!users || !users[0] || !users[0].clients || !users[0].owns) {
        return Promise.resolve(null);
      }

      const res = {
        ...users[0],
        clients: users[0].clients.map(({ id }) => id),
        owns: users[0].owns.map(({ id }) => id),
      };

      return Promise.resolve(res);
    })();

    if (!user) {
      return Promise.resolve(null);
    }

    if (!user.superuser && !user.clients.includes(args.client.id)) {
      return Promise.resolve(null);
    }

    const result = {
      auth0Id,
      avatar: user.avatar,
      email: user.email,
      id: user.id,
      name: user.name,

      owner: false,
    } as IUser;

    if (user.superuser || user.owns.includes(args.client.id)) {
      result.owner = true;
    }

    return Promise.resolve(result);
  }

  @Query('users')
  public async users(root: any, args: IUsersArgs, ctx: any, info: any): Promise<IUser[]> {
    const where = {
      clients_some: {
        id: args.client.id,
        secret: args.client.secret,
      },
    };
    const users = await this.prisma.query.users({ where }, info);
    if (!users || users.length < 0) {
      return Promise.resolve([]);
    }

    return Promise.resolve(users as IUser[]);
  }

}
