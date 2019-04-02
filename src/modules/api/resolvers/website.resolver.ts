import { Mutation, Query, Resolver } from '@nestjs/graphql';

// import { Prisma } from '@source/generated/prisma';
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

  // constructor(private readonly prisma: Prisma) {}

  @Query('websites')
  public async getWebsites(root: any, args: IWebsitesArgs, ctx: any, info: any): Promise<IWebsite[]> {
    return Promise.resolve([]);
  }

  @Query('enabledWebsites')
  public async getEnabledWebsites(root: any, args: IEnabledWebsitesArgs, ctx: any, info: any): Promise<IWebsite[]> {
    return Promise.resolve([]);
  }

  @Mutation('createWebsite')
  public async createWebsite(root: any, args: ICreateWebsiteArgs, ctx: any, info: any): Promise<IWebsite | null> {
    return Promise.resolve(null);
  }

  @Mutation('updateWebsite')
  public async updateWebsite(root: any, args: IUpdateWebsiteArgs, ctx: any, info: any): Promise<IWebsite | null> {
    return Promise.resolve(null);
  }

  @Mutation('deleteWebsite')
  public async deleteWebsite(root: any, args: IDeleteWebsiteArgs, ctx: any, info: any): Promise<IWebsite | null> {
    return Promise.resolve(null);
  }

}
