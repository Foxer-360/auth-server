import { UseGuards } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql';
import * as jwt from 'jsonwebtoken';

import { AuthGuard } from '@source/common/guards/auth.guard';
import { Auth0Service } from '@source/common/services/auth0.service';
import { Prisma, User } from '@source/generated/prisma';


interface IActingUserInfo {
  auth0Id: string;
  email: string;
  id: string;
  clients: string[];
  enabledProjects: string[];
  enabledWebsites: string[];
  owns: string[];
  roles: string[];
  superuser: boolean;
}

interface ISimpleUserInfo {
  id: string;
  clients: string[];
  owns: string[];
  superuser: boolean;
}


@Resolver('user')
@UseGuards(AuthGuard)
export class UserResolver {

  constructor(private readonly prisma: Prisma,
    private readonly auth0Service: Auth0Service) {}

  @Query('user')
  public async getUser(root: any, args: any, ctx: any, info: any): Promise<User | null> {
    const { where } = args;
    if (!where) {
      // Empty where, we cannot find the user
      return Promise.resolve(null);
    }
    if (where.accessToken && where.accessToken.length >= 1) {
      const auth0Id = this.getAuth0IdFromAccessToken(args.where.accessToken);
      if (!auth0Id) {
        // No user can be found for invalid auth0Id from given access token
        return Promise.resolve(null);
      }
      where.auth0Id = auth0Id;
      delete where.accessToken;
    }

    // Just call getUsers to obtain users
    const users = await this.getUsers(root, { ...args, where }, ctx, info);
    if (!users || users.length < 1) {
      return Promise.resolve(null);
    }

    return Promise.resolve(users[0]);
  }

  @Query('users')
  public async getUsers(root: any, args: any, ctx: any, info: any): Promise<User[]> {
    const actingUser = await this.getActingUserInfo(ctx);
    if (!actingUser) {
      return Promise.resolve([]);
    }

    if (actingUser.superuser) {
      // If superuser, we do not need to filter permissions to read users
      return this.prisma.query.users(args, info);
    }

    const prismaInfo = `{ id clients { id } owns { id } superuser }`;
    const users = await this.prisma.query.users(args, prismaInfo);
    if (!users || users.length < 1) {
      return Promise.resolve([]);
    }

    const userIds = users.map((u) => {
      if (!u || !u.clients || !u.owns) {
        return null;
      }

      const usr = {
        clients: u.clients.map((c) => c.id),
        id: u.id,
        owns: u.owns.map((o) => o.id),
        superuser: u.superuser,
      } as ISimpleUserInfo;

      if (this.canActingUserSeeUser(actingUser, usr)) {
        return usr.id;
      }

      return null;
    }).filter((id) => id !== null);

    if (userIds.length < 1) {
      return Promise.resolve([]);
    }

    const where = {
      id_in: userIds,
    };

    return this.prisma.query.users({ ...args, where }, info);
  }

  @Mutation('createUser')
  public async createUser(root: any, args: any, ctx: any, info: any): Promise<any | null> {
    // If user with given email exists, do not create

    // If user with given email exists, but empty auth0Id, obtain auth0Id by
    // creating or fetching user from Auth0 and add this auth0Id to user with given email

    // Create new user in Auth0 and get auth0Id

    // If user with email exists in Auth0, just get auth0Id

    // If superuser, check that creator user is also superuser otherwise set superuser to false

    // Filter clients only to clients which creator user owns

    // Filter owns only to clients which creator user owns

    return Promise.resolve(null);
  }

  @Mutation('updateUser')
  public async updateUser(root: any, args: any, ctx: any, info: any): Promise<any | null> {
    return Promise.resolve(null);
  }

  private canActingUserSeeUser(actingUser: IActingUserInfo, user: ISimpleUserInfo): boolean {
    if (actingUser.superuser) {
      return true;
    }

    if (user.superuser) {
      return false;
    }

    if (!user.clients || user.clients.length < 1) {
      return true;
    }

    const found = user.clients.find((id) => actingUser.clients.includes(id));
    if (found) {
      return true;
    }

    return false;
  }

  /**
   * Helper, that returns users info of user, who perform query or mutation
   *
   * @param {any} ctx context of request (there have to be headers)
   */
  private async getActingUserInfo(ctx: any): Promise<IActingUserInfo | null> {
    if (!ctx || !ctx.headers || !ctx.headers.authorization) {
      return Promise.resolve(null);
    }

    // Get access token from headers
    const regex = /^Bearer\s*([^\s]+)$/i;
    const match = regex.exec(ctx.headers.authorization);
    if (!match || !match[1]) {
      return Promise.resolve(null);
    }

    const accessToken = match[1];
    const auth0Id = this.getAuth0IdFromAccessToken(accessToken);

    // Find the user in our DB
    const userInfo = `{
      auth0Id
      email
      id
      clients { id }
      enabledProjects { id }
      enabledWebsites { id }
      owns { id }
      roles { id }
      superuser
    }`;

    interface IUserInfo {
      auth0Id: string;
      email: string;
      id: string;
      clients: any[];
      enabledProjects: any[];
      enabledWebsites: any[];
      owns: any[];
      roles: any[];
      superuser: boolean;
    }

    const user = await this.prisma.query.user({ where: { auth0Id } }, userInfo) as IUserInfo;
    if (!user) {
      return Promise.resolve(null);
    }

    // Transform objects with ids into ids
    const mapFce = (obj: { id: string }) => obj.id;
    user.clients = user.clients.map(mapFce);
    user.enabledProjects = user.enabledProjects.map(mapFce);
    user.enabledWebsites = user.enabledWebsites.map(mapFce);
    user.owns = user.owns.map(mapFce);
    user.roles = user.roles.map(mapFce);

    return Promise.resolve(user);
  }

  private getAuth0IdFromAccessToken(token: string): string | null {
    const decoded = jwt.decode(token);

    if (!decoded || !decoded.sub) {
      return null;
    }

    const auth0Id = this.auth0Service.getUserId(decoded.sub);
    if (!auth0Id) {
      return null;
    }

    return auth0Id;
  }

}
