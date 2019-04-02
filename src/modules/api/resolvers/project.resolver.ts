import { UseGuards } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql';

import { Auth0Service } from '@source/common/services/auth0.service';
import { Prisma, Project, User } from '@source/generated/prisma';
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

  constructor(private readonly prisma: Prisma,
    private readonly auth0Service: Auth0Service) {}

  @Query('projects')
  @UseGuards(ClientGuard)
  public async getProjects(root: any, args: IProjectsArgs, ctx: any, info: any): Promise<IProject[]> {
    const clientId = args.client.id;

    const where = {
      client: {
        id: clientId,
      },
    };

    return this.prisma.query.projects({ where }, info);
  }

  @Query('enabledProjects')
  public async getEnabledProjects(root: any, args: IEnabledProjectsArgs, ctx: any, info: any): Promise<IProject[]> {
    const auth0Id = this.auth0Service.getAuth0IdFromAccessToken(args.user.accessToken);
    if (!auth0Id) {
      return Promise.resolve([]);
    }

    let where = { client: { id: args.client.id } } as any;
    let prismaInfo = `{ id }`;
    const projects = await this.prisma.query.projects({ where }, prismaInfo) as Project[];

    if (!projects || projects.length < 1) {
      return Promise.resolve([]);
    }
    // Array of all project ids for given client
    const projectIds = projects.map((p) => p.id);

    if (projectIds.length < 1) {
      return Promise.resolve([]);
    }

    where = { auth0Id };
    prismaInfo = `{ id enabledProjects { id } owns { id } superuser }`;
    const users = await this.prisma.query.users({ where }, prismaInfo) as User[];
    if (!users || !users[0] || !users[0].enabledProjects || !users[0].owns) {
      return Promise.resolve([]);
    }

    const isOwnerOfClient = users[0].owns.map((o) => o.id).includes(args.client.id);
    if (users[0].superuser || isOwnerOfClient) {
      where = { id_in: projectIds };
      return this.prisma.query.projects({ where }, info);
    }

    const enabledProjects = users[0].enabledProjects.map((ep) => ep.id);
    const filteredIds = enabledProjects.filter((id) => projectIds.includes(id));

    if (filteredIds.length < 1) {
      return Promise.resolve([]);
    }

    where = { id_in: filteredIds };
    return this.prisma.query.projects({ where }, info);
  }

  @Mutation('createProject')
  @UseGuards(ClientGuard)
  public async createProject(root: any, args: ICreateProjectArgs, ctx: any, info: any): Promise<IProject | null> {
    const data = {
      ...args.data,
      client: {
        connect: {
          id: args.client.id
        }
      }
    };

    return this.prisma.mutation.createProject({ data }, info);
  }

  @Mutation('updateProject')
  @UseGuards(ClientGuard)
  public async updateProject(root: any, args: IUpdateProjectArgs, ctx: any, info: any): Promise<IProject | null> {
    const { data } = args;
    if (!data.name || data.name.length < 1) {
      return Promise.resolve(null);
    }

    const projects = await this.prisma.query.projects({ where: args.where }, `{ id client { id } }`) as Project[];
    const found = projects.find((p) => p.client.id === args.client.id);
    if (!found) {
      return Promise.resolve(null);
    }

    const where = { id: found.id };
    return this.prisma.mutation.updateProject({ data, where }, info);
  }

  @Mutation('deleteProject')
  @UseGuards(ClientGuard)
  public async deleteProject(root: any, args: IDeleteProjectArgs, ctx: any, info: any): Promise<IProject | null> {
    const projects = await this.prisma.query.projects({ where: args.where }, `{ id client { id } }`) as Project[];
    const found = projects.find((p) => p.client.id === args.client.id);
    if (!found) {
      return Promise.resolve(null);
    }

    const where = { id: found.id };
    return this.prisma.mutation.deleteProject({ where }, info);
  }

}
