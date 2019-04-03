import { UseGuards } from '@nestjs/common';
import { Mutation, Resolver } from '@nestjs/graphql';

import { Prisma, Project, Website } from '@source/generated/prisma';
import { ClientGuard } from '../guards/client.guard';
import { ISyncProjectsWebsitesArgs } from '../types';


@Resolver('common')
export class CommonResolver {

  constructor(private readonly prisma: Prisma) {}

  @Mutation('syncProjectsWebsites')
  @UseGuards(ClientGuard)
  public async syncProjectsWebsites(root: any, args: ISyncProjectsWebsitesArgs, ctx: any, info: any): Promise<boolean> {
    // Get all projects and websites, they will be matched with given projects
    // and websites and those which are not in given arrays will be removed
    const clientWhere = { where: { client: { id: args.client.id } } };
    const projects = await (async () => {
      const result = await this.prisma.query.projects(clientWhere, `{ id }`) as Project[];
      if (!result || result.length < 1) {
        return [];
      }

      return result.map((p) => p.id);
    })();
    const websites = await (async () => {
      const result = await this.prisma.query.websites(clientWhere, `{ id }`) as Website[];
      if (!result || result.length < 1) {
        return [];
      }

      return result.map((w) => w.id);
    })();

    // Simple map foxer360Id => id for projects to optimize website checking phase
    const projectIdsMap = {} as { [foxer360Id: string]: string };

    // Check all projects, if doesn't exists create them
    await this.asyncForEach(args.data.projects, async (project) => {
      const where = {
        client: { id: args.client.id },
        foxer360Id: project.foxer360Id,
      };
      const found = await this.prisma.query.projects({ where }, `{ id name }`) as Project[];
      if (!found || !found[0]) {
        // Project was not found, create it
        const data = {
          ...project,
          client: {
            connect: { id: args.client.id },
          },
        };

        const created = await this.prisma.mutation.createProject({ data }, `{ id }`);
        if (!created) {
          // Some errors occurred
          return Promise.resolve();
        }

        projects.splice(projects.indexOf(created.id), 1);

        // Save into foxer360Id => id map
        projectIdsMap[project.foxer360Id] = created.id;
        return Promise.resolve();
      }

      projects.splice(projects.indexOf(found[0].id), 1);

      // Save into foxer360Id => id map
      projectIdsMap[project.foxer360Id] = found[0].id;

      // Check if name is same
      if (project.name !== found[0].name) {
        // Update project name
        const data = { name: project.name };
        await this.prisma.mutation.updateProject({ where: { id: found[0].id }, data }, `{ id }`);
      }
    });

    // Check all websites, if doesn't exists create them
    await this.asyncForEach(args.data.websites, async (website) => {
      const where = {
        client: { id: args.client.id },
        foxer360Id: website.foxer360Id,
      };
      const found = await this.prisma.query.websites({ where }, `{ id name }`) as Website[];
      if (!found || !found[0]) {
        // Website was not found, create it
        if (!projectIdsMap[website.project]) {
          // Missing project
          return Promise.resolve();
        }

        const data = {
          ...website,
          client: {
            connect: { id: args.client.id },
          },
          project: {
            connect: { id: projectIdsMap[website.project] },
          },
        };

        const created = await this.prisma.mutation.createWebsite({ data }, `{ id }`);
        if (!created) {
          return Promise.resolve();
        }

        websites.splice(websites.indexOf(created.id), 1);
        return Promise.resolve();
      }

      websites.splice(websites.indexOf(found[0].id), 1);

      // Check if name is same
      if (website.name !== found[0].name) {
        // Update website name
        const data = { name: website.name };
        await this.prisma.mutation.updateWebsite({ where: { id: found[0].id }, data }, `{ id }`);
      }
    });

    // Remove projects and websites which are in our DB, but not in Foxer360 DB
    await this.prisma.mutation.deleteManyWebsites({ where: { id_in: websites } }, `{ count }`);
    await this.prisma.mutation.deleteManyProjects({ where: { id_in: projects } }, `{ count }`);

    return Promise.resolve(true);
  }

  private async asyncForEach<T>(array: T[], callback: (item: T, index: number, array: T[]) => void) {
    for (let i = 0;i < array.length;i++) {
      await callback(array[i], i, array);
    }
  }

}
