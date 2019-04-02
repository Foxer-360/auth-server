import { UseGuards } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql';

// import { Prisma } from '@source/generated/prisma';
import { ClientGuard } from '../guards/client.guard';
import {
  ICreateProjectArgs,
  IDeleteProjectArgs,
  IEnabledProjectsArgs,
  IProject,
  IProjectsArgs,
  IUpdateProjectArgs
} from '../types';


@Resolver('project')
export class ProjectResolver {

  // constructor(private readonly prisma: Prisma) {}

  @Query('projects')
  @UseGuards(ClientGuard)
  public async getProjects(root: any, args: IProjectsArgs, ctx: any, info: any): Promise<IProject[]> {
    return Promise.resolve([]);
  }

  @Query('enabledProjects')
  public async getEnabledProjects(root: any, args: IEnabledProjectsArgs, ctx: any, info: any): Promise<IProject[]> {
    return Promise.resolve([]);
  }

  @Mutation('createProject')
  public async createProject(root: any, args: ICreateProjectArgs, ctx: any, info: any): Promise<IProject | null> {
    return Promise.resolve(null);
  }

  @Mutation('updateProject')
  public async updateProject(root: any, args: IUpdateProjectArgs, ctx: any, info: any): Promise<IProject | null> {
    return Promise.resolve(null);
  }

  @Mutation('deleteProject')
  public async deleteProject(root: any, args: IDeleteProjectArgs, ctx: any, info: any): Promise<IProject | null> {
    return Promise.resolve(null);
  }

}
