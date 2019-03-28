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


@Resolver('user')
@UseGuards(AuthGuard)
export class UserResolver {

  constructor(private readonly prisma: Prisma,
    private readonly auth0Service: Auth0Service) {}

  @Query('user')
  public async getUser(root: any, args: any, ctx: any, info: any): Promise<any | null> {
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

    // Get users from prisma
    this.injectClientsIntoInfo(info);
    this.injectSuperuserIntoInfo(info);

    const users = await this.prisma.query.users({ where }, info) as User[];
    if (!users || users.length < 1 || !users[0] || users[0] === null || users[0] === undefined) {
      return Promise.resolve(null);
    }
    const user = users[0] as User;

    // Get info about the acting user and verify permissions to get this user.
    const actingUser = await this.getActingUserInfo(ctx);
    if (!actingUser) {
      // No user info, no permission
      return Promise.resolve(null);
    }

    if (actingUser.superuser) {
      return Promise.resolve(user);
    }

    if (user.superuser) {
      // Superuser can be read only with superuser
      return Promise.resolve(null);
    }

    if (!user.clients || user.clients.length < 1) {
      // No clients assigned, can be read by anyone
      return Promise.resolve(user);
    }

    const findCommonClient = user.clients.find((c) => {
      return actingUser.clients.includes(c.id)
    });
    if (!findCommonClient) {
      // No common client, no permission to read
      return Promise.resolve(null);
    }

    return Promise.resolve(user);
  }

  @Query('users')
  public async getUsers(root: any, args: any, ctx: any, info: any): Promise<any[]> {
    return Promise.resolve([]);
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

  private getRootSelection(info: any): any {
    if (!info || !info.fieldNodes[0]) {
      return null;
    }
    if (!info.fieldNodes[0].selectionSet || !info.fieldNodes[0].selectionSet.selections) {
      return null;
    }

    return info.fieldNodes[0].selectionSet.selections;
  }

  private createNamedField(name: string, selections?: any[]): any {
    return {
      alias: undefined,
      arguments: [],
      directives: [],
      kind: 'Field',
      name: { kind: 'Name', value: name },
      selectionSet: selections ? {
        kind: 'SelectionSet',
        selections: selections ? selections : []
      } : undefined,
    };
  }

  /**
   * Helper which inject clients info with id into parsed GraphQL info set.
   * This helper has strong assumption of structure of info object parsed
   * by GraphQL server.
   *
   * @param {any} info from request
   */
  private injectClientsIntoInfo(info: any): boolean {
    const rootSelection = this.getRootSelection(info);
    if (!rootSelection) { return false; }

    const findClients = rootSelection.find((s: any) => {
      if (!s || !s.name || !s.name.value) { return false; }
      if (s.name.value === 'clients') { return true; }

      return false;
    });

    if (!findClients) {
      rootSelection.push(this.createNamedField('clients', [
          this.createNamedField('id')
        ]));

      return true;
    }

    const clients = findClients.selectionSet.selections;
    const findId = clients.find((s: any) => {
      if (!s || !s.name || !s.name.value) { return false; }
      if (s.name.value === 'id') { return true; }

      return false;
    });

    if (!findId) {
      clients.push(this.createNamedField('id'));
      return true;
    }

    return false;
  }

  /**
   * Helper which inject superuser info into parsed GraphQL info set.
   * This helper has strong assumption of structure of info object parsed
   * by GraphQL server.
   *
   * @param {any} info from request
   */
  private injectSuperuserIntoInfo(info: any): boolean {
    const rootSelection = this.getRootSelection(info);
    if (!rootSelection) { return false; }

    const findSuperuser = rootSelection.find((s: any) => {
      if (!s || !s.name || !s.name.value) { return false; }
      if (s.name.value === 'superuser') { return true; }

      return false;
    });

    if (!findSuperuser) {
      rootSelection.push(this.createNamedField('superuser'));
      return true;
    }

    return false;
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
