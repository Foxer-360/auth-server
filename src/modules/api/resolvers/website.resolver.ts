import { UseGuards } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql';

import { Auth0Service } from '@source/common/services/auth0.service';
import { Prisma, Project, User, Website } from '@source/generated/prisma';
import { ClientGuard } from '../guards/client.guard';
import {
  ICreateWebsiteArgs,
  IDeleteWebsiteArgs,
  IEnabledWebsitesArgs,
  IUpdateWebsiteArgs,
  IWebsite,
  IWebsitesArgs
} from '../types';


@Resolver('website')
export class WebsiteResolver {

  constructor(private readonly prisma: Prisma,
    private readonly auth0Service: Auth0Service) {}

  @Query('websites')
  @UseGuards(ClientGuard)
  public async getWebsites(root: any, args: IWebsitesArgs, ctx: any, info: any): Promise<IWebsite[]> {
    const clientId = args.client.id;

    const where = {
      client: {
        id: clientId,
      },
    };

    return this.prisma.query.websites({ where }, info);
  }

  @Query('enabledWebsites')
  public async getEnabledWebsites(root: any, args: IEnabledWebsitesArgs, ctx: any, info: any): Promise<IWebsite[]> {
    const auth0Id = this.auth0Service.getAuth0IdFromAccessToken(args.user.accessToken);
    if (!auth0Id) {
      return Promise.resolve([]);
    }

    // Fetch all websites for given client
    const where = { client: { id: args.client.id } };
    const websites = await this.prisma.query.websites({ where }, `{ id }`) as Website[];
    if (!websites || websites.length < 1) {
      return Promise.resolve([]);
    }
    const websiteIds = websites.map((w) => w.id);

    // Get user profile
    const users = await this.prisma.query.users({ where: { auth0Id } }, `{ id enabledWebsites { id } owns { id } superuser }`) as User[];
    const user = users[0];
    if (!user || !user.enabledWebsites || !user.owns) {
      return Promise.resolve([]);
    }

    const isOwnerOfClient = user.owns.map((o) => o.id).includes(args.client.id);

    if (user.superuser || isOwnerOfClient) {
      return this.prisma.query.websites({ where: { id_in: websiteIds } }, info);
    }

    const filteredIds = user.enabledWebsites.filter((w) => websiteIds.includes(w.id))
      .map((w) => w.id);

    if (filteredIds.length < 1) {
      return Promise.resolve([]);
    }

    return this.prisma.query.websites({ where: { id_in: filteredIds } }, info);
  }

  @Mutation('createWebsite')
  @UseGuards(ClientGuard)
  public async createWebsite(root: any, args: ICreateWebsiteArgs, ctx: any, info: any): Promise<IWebsite | null> {
    const data = args.data;
    // Find project
    const projects = await this.prisma.query.projects({ where: { foxer360Id: data.project } }, `{ id client { id } }`) as Project[];
    if (!projects || projects.length < 1) {
      return Promise.resolve(null);
    }
    const found = projects.find((p) => p.client.id === args.client.id);
    if (!found) {
      return Promise.resolve(null);
    }
    const projectId = found.id;

    // Transform data
    const transformedData = {
      ...data,
      client: {
        connect: {
          id: args.client.id,
        },
      },
      project: {
        connect: {
          id: projectId,
        },
      },
    };

    return this.prisma.mutation.createWebsite({ data: transformedData }, info);
  }

  @Mutation('updateWebsite')
  @UseGuards(ClientGuard)
  public async updateWebsite(root: any, args: IUpdateWebsiteArgs, ctx: any, info: any): Promise<IWebsite | null> {
    const { data } = args;
    if (!data.name || data.name.length < 1) {
      return Promise.resolve(null);
    }

    const websites = await this.prisma.query.websites({ where: args.where }, `{ id client { id } }`) as Website[];
    const found = websites.find((w) => w.client.id === args.client.id);
    if (!found) {
      return Promise.resolve(null);
    }

    const where = { id: found.id };
    return this.prisma.mutation.updateWebsite({ data, where }, info);
  }

  @Mutation('deleteWebsite')
  @UseGuards(ClientGuard)
  public async deleteWebsite(root: any, args: IDeleteWebsiteArgs, ctx: any, info: any): Promise<IWebsite | null> {
    const websites = await this.prisma.query.websites({ where: args.where }, `{ id client { id } }`) as Website[];
    const found = websites.find((w) => w.client.id === args.client.id);
    if (!found) {
      return Promise.resolve(null);
    }

    const where = { id: found.id };
    return this.prisma.mutation.deleteWebsite({ where }, info);
  }

}
