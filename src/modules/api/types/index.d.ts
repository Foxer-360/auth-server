export interface IClient {
  id: string;
  name: string;

  projects: IProject[];
  websites: IWebsite[];
}

export interface IProject {
  id: string;
  foxer360Id: string;
  name: string;

  websites: IWebsite[];
}

export interface IWebsite {
  id: string;
  foxer360Id: string;
  name: string;

  project: IProject;
}

export interface IClientIdentity {
  id: string;
}

export interface IClientAccessIdentity {
  id: string;
  secret: string;
}

export interface IUserIdentity {
  accessToken: string;
}

export interface IProjectCreateInput {
  foxer360Id: string;
  name: string;
}

export interface IProjectUpdateInput {
  name?: string;
}

export interface IProjectWhereUniqueInput {
  foxer360Id: string;
}

export interface IWebsiteCreateInput {
  foxer360Id: string;
  name: string;
  project: string;
}

export interface IWebsiteUpdateInput {
  name?: string;
}

export interface IWebsiteWhereUniqueInput {
  foxer360Id: string;
}

// Arguments definition for all queries
export interface IProjectsArgs {
  client: IClientAccessIdentity;
}
export interface IEnabledProjectsArgs {
  client: IClientIdentity;
  user: IUserIdentity;
}

export interface IWebsitesArgs {
  client: IClientAccessIdentity;
}
export interface IEnabledWebsitesArgs {
  client: IClientIdentity;
  user: IUserIdentity;
}

// Arguments definition for all mutations
export interface ICreateProjectArgs {
  client: IClientAccessIdentity;
  data: IProjectCreateInput;
}
export interface IUpdateProjectArgs {
  client: IClientAccessIdentity;
  data: IProjectUpdateInput;
  where: IProjectWhereUniqueInput;
}
export interface IDeleteProjectArgs {
  client: IClientAccessIdentity;
  where: IProjectWhereUniqueInput;
}

export interface ICreateWebsiteArgs {
  client: IClientAccessIdentity;
  data: IWebsiteCreateInput;
}
export interface IUpdateWebsiteArgs {
  client: IClientAccessIdentity;
  data: IWebsiteUpdateInput;
  where: IWebsiteWhereUniqueInput;
}
export interface IDeleteWebsiteArgs {
  client: IClientAccessIdentity;
  where: IWebsiteWhereUniqueInput;
}
