import { UseGuards } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql'
import * as jwt from 'jsonwebtoken';

import { AuthGuard } from '@source/common/guards/auth.guard';
import { Auth0Service } from '@source/common/services/auth0.service';
import { Client, Prisma } from '@source/generated/prisma';


interface IActingUserInfo {
  auth0Id: string;
  clients: string[];
  email: string;
  id: string;
  owns: string[];
  superuser: boolean;
}

interface IDiffsObject {
  connect: Array<{ id: string }>;
  disconnect: Array<{ id: string }>;
}

@Resolver('client')
@UseGuards(AuthGuard)
export class ClientResolver {

  constructor(private readonly prisma: Prisma,
    private readonly auth0Service: Auth0Service) {}

  @Query('client')
  public async getClient(root: any, args: any, ctx: any, info: any): Promise<Client | null> {
    const actingUser = await this.getActingUserInfo(ctx);
    if (!actingUser) {
      return Promise.resolve(null);
    }

    // if (!actingUser.superuser && !actingUser.clients.includes(args.where.id)) {
    //   return Promise.resolve(null);
    // }

    return this.prisma.query.client(args, info);
  }

  @Query('clients')
  public async getClients(root: any, args: any, ctx: any, info: any): Promise<Client[]> {
    const actingUser = await this.getActingUserInfo(ctx);
    if (!actingUser) {
      return Promise.resolve([]);
    }

    // Superuser can read everything
    if (actingUser.superuser) {
      return this.prisma.query.clients(args, info);
    }

    // const prismaInfo = `{ id }`;
    // const clients = await this.prisma.query.clients(args, prismaInfo) as Client[];
    // if (!clients || clients.length < 1) {
    //   return Promise.resolve([]);
    // }

    // const clientIds = clients.map(({ id }) => id).filter(id => actingUser.clients.includes(id));
    // const where = {
    //   id_in: clientIds,
    // };

    return this.prisma.query.clients(args, info);
  }

  @Mutation('createClient')
  public async createClient(root: any, args: any, ctx: any, info: any): Promise<Client | null> {
    // Only superuser can create client
    const actingUser = await this.getActingUserInfo(ctx);
    if (!actingUser || !actingUser.superuser) {
      return Promise.resolve(null);
    }

    // Transform data
    const data = {
      name: args.data.name
    } as any;
    if (args.data.secret) {
      data.secret = args.data.secret;
    }

    if (args.data.owners) {
      data.owners = this.transformIntoDiffsObject([], args.data.owners);
    }
    if (args.data.projects) {
      data.projects = this.transformIntoDiffsObject([], args.data.projects);
    }
    if (args.data.roles) {
      data.roles = this.transformIntoDiffsObject([], args.data.roles);
    }
    if (args.data.websites) {
      data.websites = this.transformIntoDiffsObject([], args.data.websites);
    }

    return this.prisma.mutation.createClient({ data }, info);
  }

  @Mutation('updateClient')
  public async updateClient(root: any, args: any, ctx: any, info: any): Promise<Client | null> {
    const actingUser = await this.getActingUserInfo(ctx);
    if (!actingUser) {
      return Promise.resolve(null);
    }

    const isOwner = actingUser.owns.find((id) => id === args.where.id);
    if (!actingUser.superuser && !isOwner) {
      return Promise.resolve(null);
    }

    // Transform data
    const data = {} as any;
    if (args.data.name) {
      data.name = args.data.name;
    }
    if (args.data.secret) {
      data.secret = args.data.secret;
    }

    if (args.data.owners) {
      data.owners = this.transformIntoDiffsObject([], args.data.owners);
    }
    if (args.data.projects) {
      data.projects = this.transformIntoDiffsObject([], args.data.projects);
    }
    if (args.data.roles) {
      data.roles = this.transformIntoDiffsObject([], args.data.roles);
    }
    if (args.data.websites) {
      data.websites = this.transformIntoDiffsObject([], args.data.websites);
    }

    // Superuser can edit everything
    if (actingUser.superuser) {
      return this.prisma.mutation.updateClient({ where: args.where, data }, info);
    }

    // Owner can only edits other owners
    delete data.name;
    delete data.projects;
    delete data.websites;

    return this.prisma.mutation.updateClient({ where: args.where, data }, info);
  }

  @Mutation('deleteClient')
  public async deleteClient(root: any, args: any, ctx: any, info: any): Promise<Client | null> {
    // Only superuser can create client
    const actingUser = await this.getActingUserInfo(ctx);
    if (!actingUser || !actingUser.superuser) {
      return Promise.resolve(null);
    }

    return this.prisma.mutation.deleteClient(args, info);
  }

  /**
   * Simple helper which transform array of original ids and array of
   * updated ids into object with ids which was added and needs to be connect and
   * ids wich was removed and needs to be disconnect
   *
   * @param {string[]} original array of original ids
   * @param {string[]} updated array of updated ids
   * @return {IDiffsObject}
   */
  private transformIntoDiffsObject(original: string[], updated: string[]): IDiffsObject {
    const result = {
      connect: [],
      disconnect: [],
    } as IDiffsObject;

    original.forEach((id: string) => {
      if (!updated.includes(id)) {
        result.disconnect.push({ id });
      }
    });
    updated.forEach((id: string) => {
      if (!original.includes(id)) {
        result.connect.push({ id });
      }
    });

    return result;
  }

  /**
   * Helper, that returns users info of user, who perform query or mutation
   *
   * @param {any} ctx context of request (there have to be headers)
   * @param {boolean} full? if you want all projects and websites ids
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
      clients { id }
      email
      id
      owns { id }
      superuser
    }`;

    interface IUserInfo {
      auth0Id: string;
      clients: Array<{ id: string }>;
      email: string;
      id: string;
      owns: Array<{ id: string }>;
      superuser: boolean;
    }

    const user = await this.prisma.query.user({ where: { auth0Id } }, userInfo) as IUserInfo;
    if (!user) {
      return Promise.resolve(null);
    }

    // Transform objects with ids into ids
    const mapFce = (obj: { id: string }) => obj.id;
    const result = {
      auth0Id: user.auth0Id,
      clients: user.clients.map(mapFce),
      email: user.email,
      id: user.id,
      owns: user.owns.map(mapFce),
      superuser: user.superuser,
    } as IActingUserInfo;

    return Promise.resolve(result);
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
