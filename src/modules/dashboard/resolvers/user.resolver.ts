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
  owns: string[];
  superuser: boolean;
  projects?: string[];
  websites?: string[];
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

    let finalUsers = await this.prisma.query.users({ ...args, where }, info) as User[];
    if (!finalUsers) {
      return Promise.resolve([]);
    }

    if (!actingUser.superuser) {
      finalUsers = finalUsers.map((usr) => {
        if (usr.auth0Id) {
          usr.auth0Id = 'You have no permission to read this property';
        }

        return usr;
      });
    }

    return finalUsers;
  }

  @Mutation('createUser')
  public async createUser(root: any, args: any, ctx: any, info: any): Promise<User | null> {
    const actingUser = await this.getActingUserInfo(ctx, true);
    if (!actingUser) {
      return Promise.resolve(null);
    }

    const prismaInfo = `{ id auth0Id avatar clients { id } owns { id } superuser }`;
    const users = await this.prisma.query.users({ where: { email: args.data.email } }, prismaInfo);

    // Do a lot of things, if user exists
    if (users && users.length > 0) {
      const user = users[0] as User;
      if (!user.clients) {
        user.clients = [];
      }
      if (!user.owns) {
        user.owns = [];
      }

      const usr = {
        clients: user.clients.map((c) => c.id),
        id: user.id,
        owns: user.owns.map((o) => o.id),
        superuser: user.superuser,
      } as ISimpleUserInfo;

      const canSee = this.canActingUserSeeUser(actingUser, usr);

      if (user.auth0Id && user.auth0Id.length > 0) {
        if (canSee) {
          // tslint:disable-next-line:no-shadowed-variable
          const fullUser = await this.prisma.query.user({ where: { id: usr.id } }, info) as User;

          if (!actingUser.superuser && fullUser.auth0Id) { fullUser.auth0Id = 'You have no permission to read this property' };
          return fullUser;
        } else {
          return Promise.resolve(null);
        }
      }

      // No auth0Id assigned with existing user, so assign or create auth0 user
      // tslint:disable-next-line:no-shadowed-variable
      let auth0User = await this.auth0Service.getUserByEmail(args.data.email);
      if (auth0User) {
        // Assign auth0Id
        // tslint:disable-next-line:no-shadowed-variable
        const auth0Id = this.auth0Service.getUserId(auth0User.user_id);
        if (!auth0Id) {
          if (canSee) {
            // tslint:disable-next-line:no-shadowed-variable
            const fullUser = await this.prisma.query.user({ where: { id: usr.id } }, info) as User;

            if (!actingUser.superuser && fullUser.auth0Id) { fullUser.auth0Id = 'You have no permission to read this property' };
            return fullUser;
          } else {
            return Promise.resolve(null);
          }
        }

        // tslint:disable-next-line:no-shadowed-variable
        const fullUser = await this.prisma.mutation.updateUser({ where: { id: usr.id }, data: { auth0Id } }, info) as User;
        if (!actingUser.superuser && fullUser.auth0Id) { fullUser.auth0Id = 'You have no permission to read this property' };

        if (canSee) {
          return fullUser;
        }

        return Promise.resolve(null);
      }

      // Creating of new auth0 user only if we can see existing user
      if (!canSee) {
        return Promise.resolve(null);
      }

      let picture = user.avatar as string;
      if (!picture || picture.length < 1) {
        if (args.data.avatar) {
          picture = args.data.avatar as string;
        }
      }
      auth0User = await this.auth0Service.createUser({
        email: args.data.email,
        name: user.name,
        password: args.data.password,
        picture,
      });
      if (!auth0User) {
        return Promise.resolve(null);
      }

      // tslint:disable-next-line:no-shadowed-variable
      const auth0Id = this.auth0Service.getUserId(auth0User.user_id);
      if (!auth0Id) {
        return Promise.resolve(null);
      }
      const fullUser = await this.prisma.mutation.updateUser({ where: { id: usr.id }, data: { auth0Id } }, info) as User;
      if (!actingUser.superuser && fullUser.auth0Id) { fullUser.auth0Id = 'You have no permission to read this property' };

      return fullUser;
    }

    // First, create or get auth0 user
    let auth0User = await this.auth0Service.getUserByEmail(args.data.email);
    if (!auth0User) {
      auth0User = await this.auth0Service.createUser({
        email: args.data.email,
        name: args.data.name ? args.data.name : args.data.email,
        password: args.data.password,
        picture: args.data.avatar ? args.data.avatar : '',
      });

      if (!auth0User) {
        // Something is totally wrong
        return Promise.resolve(null);
      }
    }

    const auth0Id = this.auth0Service.getUserId(auth0User.user_id);
    if (!auth0Id) {
      // Something is totally wrong
      return Promise.resolve(null);
    }

    // Now create user in db
    if (!actingUser.superuser) {
      args.data.superuser = false;

      // Filter all clients, websites and projects
      if (args.data.clients) {
        args.data.clients = this.getIdsIntersection(actingUser.owns, args.data.clients);
      }
      if (args.data.owns) {
        args.data.owns = this.getIdsIntersection(actingUser.owns, args.data.owns);
      }
      if (args.data.enabledProjects) {
        args.data.enabledProjects = this.getIdsIntersection(actingUser.projects as string[], args.data.enabledProjects);
      }
      if (args.data.enabledWebsites) {
        args.data.enabledWebsites = this.getIdsIntersection(actingUser.websites as string[], args.data.enabledWebsites);
      }
    }
    delete args.data.password;
    const transformFce = (name: string) => {
      args.data[name] = {
        connect: args.data[name].map((id: string) => ({ id })),
      };
    };
    if (args.data.clients) {
      transformFce('clients');
    }
    if (args.data.owns) {
      transformFce('owns');
    }
    if (args.data.enabledProjects) {
      transformFce('enabledProjects');
    }
    if (args.data.enabledWebsites) {
      transformFce('enabledWebsites');
    }
    if (args.data.roles) {
      transformFce('roles');
    }

    const createdUser = await this.prisma.mutation.createUser({ data: { ...args.data, auth0Id } }, info);
    if (!createdUser) {
      return Promise.resolve(null);
    }

    if (!actingUser.superuser && createdUser.auth0Id) { createdUser.auth0Id = 'You have no permission to read this property' };

    return Promise.resolve(createdUser);
  }

  @Mutation('updateUser')
  public async updateUser(root: any, args: any, ctx: any, info: any): Promise<User | null> {
    const actingUser = await this.getActingUserInfo(ctx, true);
    if (!actingUser) {
      return Promise.resolve(null);
    }

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
    const prismaInfo = `{ id auth0Id clients { id } enabledProjects { id } enabledWebsites { id } owns { id } superuser }`;
    const users = await this.getUsers(root, { where }, ctx, prismaInfo);
    if (!users || users.length < 1) {
      return Promise.resolve(null);
    }

    const user = users[0] as User;
    if (!user) {
      return Promise.resolve(null);
    }

    const { data } = args;
    if (!data) {
      return Promise.resolve(null);
    }

    // These properties cannot be changed
    if (data.id) {
      delete data.id;
    }
    if (data.email) {
      delete data.email;
    }
    if (data.auth0Id) {
      delete data.auth0Id;
    }

    // Transform data id's into object with connect and disconnect
    const transformFunction = (name: string) => {
      if (!user[name]) {
        user[name] = [];
      }
      const transformed = this.getIdDiffs(user[name].map(({ id }: { id: string }) => id), data[name]);
      data[name] = {
        connect: transformed.add.map((id) => ({ id })),
        disconnect: transformed.delete.map((id) => ({ id })),
      };
    };
    if (data.clients) {
      transformFunction('clients');
    }
    if (data.enabledProjects) {
      transformFunction('enabledProjects');
    }
    if (data.enabledWebsites) {
      transformFunction('enabledWebsites');
    }
    if (data.owns) {
      transformFunction('owns');
    }

    if (actingUser.superuser) {
      // Superuser can anything...
      return this.prisma.mutation.updateUser({ where: { id: user.id }, data }, info);
    }

    if (user.superuser) {
      // Not superuser, so cannot change superuser user
      return Promise.resolve(null);
    }

    // Not superuser, so cannot change superuser flag
    if (data.superuser) {
      data.superuser = false;
    }

    // Filter ids by privilegies
    const filterFce = (name: string) => {
      let filter = [] as string[];
      switch (name) {
        case 'enabledProjects':
          filter = actingUser.projects || [] as string[];
          break;
        case 'enabledWebsites':
          filter = actingUser.websites || [] as string[];
          break;
        default:
          filter = actingUser[name] || [] as string[];
          break;
      }

      data[name].connect = this.getIdsIntersection(data[name].connect.map(({ id }: { id: string }) => id), filter)
        .map((id) => ({ id }));
      data[name].disconnect = this.getIdsIntersection(data[name].disconnect.map(({ id }: { id: string }) => id), filter)
        .map((id) => ({ id }));
    };
    if (data.clients) {
      filterFce('clients');
    }
    if (data.enabledProjects) {
      filterFce('enabledProjects');
    }
    if (data.enabledWebsites) {
      filterFce('enabledWebsites');
    }
    if (data.owns) {
      filterFce('owns');
    }

    const updatedUser = await this.prisma.mutation.updateUser({ where: { id: user.id }, data }, info);
    if (updatedUser && updatedUser.auth0Id) {
      updatedUser.auth0Id = 'You have no permission to read this property';
    }

    return updatedUser;
  }

  @Mutation('deleteUser')
  public async deleteUser(root: any, args: any, ctx: any, info: any): Promise<User | null> {
    const actingUser = await this.getActingUserInfo(ctx);
    if (!actingUser) {
      return Promise.resolve(null);
    }

    // Get user which will be deleted from DB
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

    const prismaInfo = `{ id email clients { id } superuser }`;
    let user = await this.prisma.query.users({ where }, prismaInfo) as User;
    if (!user || !user[0]) {
      return Promise.resolve(null);
    }
    user = user[0];

    const deleteProcess = async (id: string, email: string): Promise<User | null> => {
      const deleted = await this.prisma.mutation.deleteUser({ where: { id } }, info);
      if (!deleted) {
        return Promise.resolve(null);
      }

      // Delete also in Auth0
      await this.auth0Service.deleteUserByEmail(email);

      return deleted;
    };

    if (actingUser.superuser) {
      // Superuser cannot delete itself
      if (actingUser.id === user.id) {
        return Promise.resolve(null);
      }

      // Otherwise no problema to delete
      return deleteProcess(user.id, user.email);
    }

    // Check if we can delete this user
    if (user.superuser) {
      return Promise.resolve(null);
    }

    if (actingUser.id === user.id) {
      return deleteProcess(user.id, user.email);
    }

    if (!user.clients || user.clients.length < 1) {
      return deleteProcess(user.id, user.email);
    }

    // Acting user has to be owner of all users clients
    let canBeDeleted = true;
    user.clients.forEach(({ id }) => {
      if (!actingUser.owns.includes(id)) {
        canBeDeleted = false;
      }
    });

    if (!canBeDeleted) {
      return Promise.resolve(null);
    }

    return deleteProcess(user.id, user.email);
  }

  /**
   * Simple checker which checks if acting user can see given user. This checker is used to filter
   * users in queries.
   *
   * @param {IActingUserInfo} actingUser user who performs queries
   * @param {ISimpleUserInfo} user
   */
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
   * Simple helper which returns an object with array of added ids in
   * updated array compare to original array and array of deleted ids in updated
   * array compare to original array
   *
   * @param {string[]} original
   * @param {string[]} updated
   * @return {{ add: string[], delete: string[] }}
   */
  private getIdDiffs(original: string[], updated: string[]): { add: string[], delete: string[] } {
    const res = { add: [], delete: [] } as { add: string[], delete: string[] };

    original.forEach((oId) => {
      if (!updated.includes(oId)) {
        res.delete.push(oId);
      }
    });
    updated.forEach((uId) => {
      if (!original.includes(uId)) {
        res.add.push(uId);
      }
    });

    return res;
  }

  /**
   * Simple helper which return intersection of two arrays of strings (ids)
   *
   * @param {string[]} a first array
   * @param {string[]} b second array
   * @return {string[]}
   */
  private getIdsIntersection(a: string[], b: string[]): string[] {
    const res = [] as string[];

    a.forEach((id) => {
      if (b.includes(id)) {
        res.push(id);
      }
    });

    return res;
  }

  /**
   * Helper, that returns users info of user, who perform query or mutation
   *
   * @param {any} ctx context of request (there have to be headers)
   * @param {boolean} full? if you want all projects and websites ids
   */
  private async getActingUserInfo(ctx: any, full?: boolean): Promise<IActingUserInfo | null> {
    if (typeof full === 'undefined' || full === undefined || full === null) {
      full = false;
    }
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
      clients { id ${full ? 'projects { id } websites { id }' : ''} }
      owns { id }
      superuser
    }`;

    interface IUserInfo {
      auth0Id: string;
      email: string;
      id: string;
      clients: any[];
      owns: any[];
      superuser: boolean;
    }

    const user = await this.prisma.query.user({ where: { auth0Id } }, userInfo) as IUserInfo;
    if (!user) {
      return Promise.resolve(null);
    }

    // Transform objects with ids into ids
    const mapFce = (obj: { id: string }) => obj.id;
    user.owns = user.owns.map(mapFce);

    if (full) {
      let projects = [] as string[];
      let websites = [] as string[];

      user.clients.forEach((client) => {
        projects = [...projects, ...client.projects.map(mapFce)];
        websites = [...websites, ...client.websites.map(mapFce)];
      });

      (user as IActingUserInfo).projects = projects;
      (user as IActingUserInfo).websites = websites;
    }
    user.clients = user.clients.map(mapFce);

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
