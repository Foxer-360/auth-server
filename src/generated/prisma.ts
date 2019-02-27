import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userProjectRoleses: <T = Array<UserProjectRoles | null>>(args: { where?: UserProjectRolesWhereInput | null, orderBy?: UserProjectRolesOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userWebsiteRoleses: <T = Array<UserWebsiteRoles | null>>(args: { where?: UserWebsiteRolesWhereInput | null, orderBy?: UserWebsiteRolesOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    projects: <T = Array<Project | null>>(args: { where?: ProjectWhereInput | null, orderBy?: ProjectOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    websites: <T = Array<Website | null>>(args: { where?: WebsiteWhereInput | null, orderBy?: WebsiteOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    actions: <T = Array<Action | null>>(args: { where?: ActionWhereInput | null, orderBy?: ActionOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    clients: <T = Array<Client | null>>(args: { where?: ClientWhereInput | null, orderBy?: ClientOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    roles: <T = Array<Role | null>>(args: { where?: RoleWhereInput | null, orderBy?: RoleOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    project: <T = Project | null>(args: { where: ProjectWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    website: <T = Website | null>(args: { where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    action: <T = Action | null>(args: { where: ActionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    client: <T = Client | null>(args: { where: ClientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    role: <T = Role | null>(args: { where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userProjectRolesesConnection: <T = UserProjectRolesConnection>(args: { where?: UserProjectRolesWhereInput | null, orderBy?: UserProjectRolesOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userWebsiteRolesesConnection: <T = UserWebsiteRolesConnection>(args: { where?: UserWebsiteRolesWhereInput | null, orderBy?: UserWebsiteRolesOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    projectsConnection: <T = ProjectConnection>(args: { where?: ProjectWhereInput | null, orderBy?: ProjectOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    websitesConnection: <T = WebsiteConnection>(args: { where?: WebsiteWhereInput | null, orderBy?: WebsiteOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    actionsConnection: <T = ActionConnection>(args: { where?: ActionWhereInput | null, orderBy?: ActionOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    clientsConnection: <T = ClientConnection>(args: { where?: ClientWhereInput | null, orderBy?: ClientOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    rolesConnection: <T = RoleConnection>(args: { where?: RoleWhereInput | null, orderBy?: RoleOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUserProjectRoles: <T = UserProjectRoles>(args: { data: UserProjectRolesCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUserWebsiteRoles: <T = UserWebsiteRoles>(args: { data: UserWebsiteRolesCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createProject: <T = Project>(args: { data: ProjectCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createWebsite: <T = Website>(args: { data: WebsiteCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAction: <T = Action>(args: { data: ActionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createClient: <T = Client>(args: { data: ClientCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRole: <T = Role>(args: { data: RoleCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateProject: <T = Project | null>(args: { data: ProjectUpdateInput, where: ProjectWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateWebsite: <T = Website | null>(args: { data: WebsiteUpdateInput, where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateAction: <T = Action | null>(args: { data: ActionUpdateInput, where: ActionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateClient: <T = Client | null>(args: { data: ClientUpdateInput, where: ClientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateRole: <T = Role | null>(args: { data: RoleUpdateInput, where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteProject: <T = Project | null>(args: { where: ProjectWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteWebsite: <T = Website | null>(args: { where: WebsiteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteAction: <T = Action | null>(args: { where: ActionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteClient: <T = Client | null>(args: { where: ClientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteRole: <T = Role | null>(args: { where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertProject: <T = Project>(args: { where: ProjectWhereUniqueInput, create: ProjectCreateInput, update: ProjectUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertWebsite: <T = Website>(args: { where: WebsiteWhereUniqueInput, create: WebsiteCreateInput, update: WebsiteUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAction: <T = Action>(args: { where: ActionWhereUniqueInput, create: ActionCreateInput, update: ActionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertClient: <T = Client>(args: { where: ClientWhereUniqueInput, create: ClientCreateInput, update: ClientUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRole: <T = Role>(args: { where: RoleWhereUniqueInput, create: RoleCreateInput, update: RoleUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProjects: <T = BatchPayload>(args: { data: ProjectUpdateManyMutationInput, where?: ProjectWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyWebsites: <T = BatchPayload>(args: { data: WebsiteUpdateManyMutationInput, where?: WebsiteWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyActions: <T = BatchPayload>(args: { data: ActionUpdateManyMutationInput, where?: ActionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyClients: <T = BatchPayload>(args: { data: ClientUpdateManyMutationInput, where?: ClientWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRoles: <T = BatchPayload>(args: { data: RoleUpdateManyMutationInput, where?: RoleWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUserProjectRoleses: <T = BatchPayload>(args: { where?: UserProjectRolesWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUserWebsiteRoleses: <T = BatchPayload>(args: { where?: UserWebsiteRolesWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProjects: <T = BatchPayload>(args: { where?: ProjectWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyWebsites: <T = BatchPayload>(args: { where?: WebsiteWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyActions: <T = BatchPayload>(args: { where?: ActionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyClients: <T = BatchPayload>(args: { where?: ClientWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRoles: <T = BatchPayload>(args: { where?: RoleWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    userProjectRoles: <T = UserProjectRolesSubscriptionPayload | null>(args: { where?: UserProjectRolesSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    userWebsiteRoles: <T = UserWebsiteRolesSubscriptionPayload | null>(args: { where?: UserWebsiteRolesSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    project: <T = ProjectSubscriptionPayload | null>(args: { where?: ProjectSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    website: <T = WebsiteSubscriptionPayload | null>(args: { where?: WebsiteSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    action: <T = ActionSubscriptionPayload | null>(args: { where?: ActionSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    client: <T = ClientSubscriptionPayload | null>(args: { where?: ClientSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    role: <T = RoleSubscriptionPayload | null>(args: { where?: RoleSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  UserProjectRoles: (where?: UserProjectRolesWhereInput) => Promise<boolean>
  UserWebsiteRoles: (where?: UserWebsiteRolesWhereInput) => Promise<boolean>
  Project: (where?: ProjectWhereInput) => Promise<boolean>
  Website: (where?: WebsiteWhereInput) => Promise<boolean>
  Action: (where?: ActionWhereInput) => Promise<boolean>
  Client: (where?: ClientWhereInput) => Promise<boolean>
  Role: (where?: RoleWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type Action implements Node {
  id: ID!
  name: String!
  description: String
}

"""A connection to a list of items."""
type ActionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ActionEdge]!
  aggregate: AggregateAction!
}

input ActionCreateInput {
  name: String!
  description: String
}

input ActionCreateManyInput {
  create: [ActionCreateInput!]
  connect: [ActionWhereUniqueInput!]
}

"""An edge in a connection."""
type ActionEdge {
  """The item at the end of the edge."""
  node: Action!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ActionOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ActionPreviousValues {
  id: ID!
  name: String!
  description: String
}

input ActionScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [ActionScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [ActionScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ActionScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
}

type ActionSubscriptionPayload {
  mutation: MutationType!
  node: Action
  updatedFields: [String!]
  previousValues: ActionPreviousValues
}

input ActionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ActionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ActionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ActionSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ActionWhereInput
}

input ActionUpdateDataInput {
  name: String
  description: String
}

input ActionUpdateInput {
  name: String
  description: String
}

input ActionUpdateManyDataInput {
  name: String
  description: String
}

input ActionUpdateManyInput {
  create: [ActionCreateInput!]
  connect: [ActionWhereUniqueInput!]
  set: [ActionWhereUniqueInput!]
  disconnect: [ActionWhereUniqueInput!]
  delete: [ActionWhereUniqueInput!]
  update: [ActionUpdateWithWhereUniqueNestedInput!]
  updateMany: [ActionUpdateManyWithWhereNestedInput!]
  deleteMany: [ActionScalarWhereInput!]
  upsert: [ActionUpsertWithWhereUniqueNestedInput!]
}

input ActionUpdateManyMutationInput {
  name: String
  description: String
}

input ActionUpdateManyWithWhereNestedInput {
  where: ActionScalarWhereInput!
  data: ActionUpdateManyDataInput!
}

input ActionUpdateWithWhereUniqueNestedInput {
  where: ActionWhereUniqueInput!
  data: ActionUpdateDataInput!
}

input ActionUpsertWithWhereUniqueNestedInput {
  where: ActionWhereUniqueInput!
  update: ActionUpdateDataInput!
  create: ActionCreateInput!
}

input ActionWhereInput {
  """Logical AND on all given filters."""
  AND: [ActionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ActionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ActionWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
}

input ActionWhereUniqueInput {
  id: ID
  name: String
}

type AggregateAction {
  count: Int!
}

type AggregateClient {
  count: Int!
}

type AggregateProject {
  count: Int!
}

type AggregateRole {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserProjectRoles {
  count: Int!
}

type AggregateUserWebsiteRoles {
  count: Int!
}

type AggregateWebsite {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Client implements Node {
  id: ID!
  name: String!
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role!]
  websites(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Website!]
  owners(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  secret: String
}

"""A connection to a list of items."""
type ClientConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ClientEdge]!
  aggregate: AggregateClient!
}

input ClientCreateInput {
  name: String!
  secret: String
  projects: ProjectCreateManyWithoutClientInput
  roles: RoleCreateManyWithoutClientInput
  websites: WebsiteCreateManyWithoutClientInput
  owners: UserCreateManyWithoutOwnsInput
}

input ClientCreateManyInput {
  create: [ClientCreateInput!]
  connect: [ClientWhereUniqueInput!]
}

input ClientCreateManyWithoutOwnersInput {
  create: [ClientCreateWithoutOwnersInput!]
  connect: [ClientWhereUniqueInput!]
}

input ClientCreateOneInput {
  create: ClientCreateInput
  connect: ClientWhereUniqueInput
}

input ClientCreateOneWithoutProjectsInput {
  create: ClientCreateWithoutProjectsInput
  connect: ClientWhereUniqueInput
}

input ClientCreateOneWithoutRolesInput {
  create: ClientCreateWithoutRolesInput
  connect: ClientWhereUniqueInput
}

input ClientCreateOneWithoutWebsitesInput {
  create: ClientCreateWithoutWebsitesInput
  connect: ClientWhereUniqueInput
}

input ClientCreateWithoutOwnersInput {
  name: String!
  secret: String
  projects: ProjectCreateManyWithoutClientInput
  roles: RoleCreateManyWithoutClientInput
  websites: WebsiteCreateManyWithoutClientInput
}

input ClientCreateWithoutProjectsInput {
  name: String!
  secret: String
  roles: RoleCreateManyWithoutClientInput
  websites: WebsiteCreateManyWithoutClientInput
  owners: UserCreateManyWithoutOwnsInput
}

input ClientCreateWithoutRolesInput {
  name: String!
  secret: String
  projects: ProjectCreateManyWithoutClientInput
  websites: WebsiteCreateManyWithoutClientInput
  owners: UserCreateManyWithoutOwnsInput
}

input ClientCreateWithoutWebsitesInput {
  name: String!
  secret: String
  projects: ProjectCreateManyWithoutClientInput
  roles: RoleCreateManyWithoutClientInput
  owners: UserCreateManyWithoutOwnsInput
}

"""An edge in a connection."""
type ClientEdge {
  """The item at the end of the edge."""
  node: Client!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ClientOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  secret_ASC
  secret_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ClientPreviousValues {
  id: ID!
  name: String!
  secret: String
}

input ClientScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [ClientScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClientScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClientScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  secret: String

  """All values that are not equal to given value."""
  secret_not: String

  """All values that are contained in given list."""
  secret_in: [String!]

  """All values that are not contained in given list."""
  secret_not_in: [String!]

  """All values less than the given value."""
  secret_lt: String

  """All values less than or equal the given value."""
  secret_lte: String

  """All values greater than the given value."""
  secret_gt: String

  """All values greater than or equal the given value."""
  secret_gte: String

  """All values containing the given string."""
  secret_contains: String

  """All values not containing the given string."""
  secret_not_contains: String

  """All values starting with the given string."""
  secret_starts_with: String

  """All values not starting with the given string."""
  secret_not_starts_with: String

  """All values ending with the given string."""
  secret_ends_with: String

  """All values not ending with the given string."""
  secret_not_ends_with: String
}

type ClientSubscriptionPayload {
  mutation: MutationType!
  node: Client
  updatedFields: [String!]
  previousValues: ClientPreviousValues
}

input ClientSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ClientSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClientSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClientSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ClientWhereInput
}

input ClientUpdateDataInput {
  name: String
  secret: String
  projects: ProjectUpdateManyWithoutClientInput
  roles: RoleUpdateManyWithoutClientInput
  websites: WebsiteUpdateManyWithoutClientInput
  owners: UserUpdateManyWithoutOwnsInput
}

input ClientUpdateInput {
  name: String
  secret: String
  projects: ProjectUpdateManyWithoutClientInput
  roles: RoleUpdateManyWithoutClientInput
  websites: WebsiteUpdateManyWithoutClientInput
  owners: UserUpdateManyWithoutOwnsInput
}

input ClientUpdateManyDataInput {
  name: String
  secret: String
}

input ClientUpdateManyInput {
  create: [ClientCreateInput!]
  connect: [ClientWhereUniqueInput!]
  set: [ClientWhereUniqueInput!]
  disconnect: [ClientWhereUniqueInput!]
  delete: [ClientWhereUniqueInput!]
  update: [ClientUpdateWithWhereUniqueNestedInput!]
  updateMany: [ClientUpdateManyWithWhereNestedInput!]
  deleteMany: [ClientScalarWhereInput!]
  upsert: [ClientUpsertWithWhereUniqueNestedInput!]
}

input ClientUpdateManyMutationInput {
  name: String
  secret: String
}

input ClientUpdateManyWithoutOwnersInput {
  create: [ClientCreateWithoutOwnersInput!]
  connect: [ClientWhereUniqueInput!]
  set: [ClientWhereUniqueInput!]
  disconnect: [ClientWhereUniqueInput!]
  delete: [ClientWhereUniqueInput!]
  update: [ClientUpdateWithWhereUniqueWithoutOwnersInput!]
  updateMany: [ClientUpdateManyWithWhereNestedInput!]
  deleteMany: [ClientScalarWhereInput!]
  upsert: [ClientUpsertWithWhereUniqueWithoutOwnersInput!]
}

input ClientUpdateManyWithWhereNestedInput {
  where: ClientScalarWhereInput!
  data: ClientUpdateManyDataInput!
}

input ClientUpdateOneRequiredWithoutProjectsInput {
  create: ClientCreateWithoutProjectsInput
  connect: ClientWhereUniqueInput
  update: ClientUpdateWithoutProjectsDataInput
  upsert: ClientUpsertWithoutProjectsInput
}

input ClientUpdateOneRequiredWithoutRolesInput {
  create: ClientCreateWithoutRolesInput
  connect: ClientWhereUniqueInput
  update: ClientUpdateWithoutRolesDataInput
  upsert: ClientUpsertWithoutRolesInput
}

input ClientUpdateOneRequiredWithoutWebsitesInput {
  create: ClientCreateWithoutWebsitesInput
  connect: ClientWhereUniqueInput
  update: ClientUpdateWithoutWebsitesDataInput
  upsert: ClientUpsertWithoutWebsitesInput
}

input ClientUpdateWithoutOwnersDataInput {
  name: String
  secret: String
  projects: ProjectUpdateManyWithoutClientInput
  roles: RoleUpdateManyWithoutClientInput
  websites: WebsiteUpdateManyWithoutClientInput
}

input ClientUpdateWithoutProjectsDataInput {
  name: String
  secret: String
  roles: RoleUpdateManyWithoutClientInput
  websites: WebsiteUpdateManyWithoutClientInput
  owners: UserUpdateManyWithoutOwnsInput
}

input ClientUpdateWithoutRolesDataInput {
  name: String
  secret: String
  projects: ProjectUpdateManyWithoutClientInput
  websites: WebsiteUpdateManyWithoutClientInput
  owners: UserUpdateManyWithoutOwnsInput
}

input ClientUpdateWithoutWebsitesDataInput {
  name: String
  secret: String
  projects: ProjectUpdateManyWithoutClientInput
  roles: RoleUpdateManyWithoutClientInput
  owners: UserUpdateManyWithoutOwnsInput
}

input ClientUpdateWithWhereUniqueNestedInput {
  where: ClientWhereUniqueInput!
  data: ClientUpdateDataInput!
}

input ClientUpdateWithWhereUniqueWithoutOwnersInput {
  where: ClientWhereUniqueInput!
  data: ClientUpdateWithoutOwnersDataInput!
}

input ClientUpsertWithoutProjectsInput {
  update: ClientUpdateWithoutProjectsDataInput!
  create: ClientCreateWithoutProjectsInput!
}

input ClientUpsertWithoutRolesInput {
  update: ClientUpdateWithoutRolesDataInput!
  create: ClientCreateWithoutRolesInput!
}

input ClientUpsertWithoutWebsitesInput {
  update: ClientUpdateWithoutWebsitesDataInput!
  create: ClientCreateWithoutWebsitesInput!
}

input ClientUpsertWithWhereUniqueNestedInput {
  where: ClientWhereUniqueInput!
  update: ClientUpdateDataInput!
  create: ClientCreateInput!
}

input ClientUpsertWithWhereUniqueWithoutOwnersInput {
  where: ClientWhereUniqueInput!
  update: ClientUpdateWithoutOwnersDataInput!
  create: ClientCreateWithoutOwnersInput!
}

input ClientWhereInput {
  """Logical AND on all given filters."""
  AND: [ClientWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClientWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClientWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  secret: String

  """All values that are not equal to given value."""
  secret_not: String

  """All values that are contained in given list."""
  secret_in: [String!]

  """All values that are not contained in given list."""
  secret_not_in: [String!]

  """All values less than the given value."""
  secret_lt: String

  """All values less than or equal the given value."""
  secret_lte: String

  """All values greater than the given value."""
  secret_gt: String

  """All values greater than or equal the given value."""
  secret_gte: String

  """All values containing the given string."""
  secret_contains: String

  """All values not containing the given string."""
  secret_not_contains: String

  """All values starting with the given string."""
  secret_starts_with: String

  """All values not starting with the given string."""
  secret_not_starts_with: String

  """All values ending with the given string."""
  secret_ends_with: String

  """All values not ending with the given string."""
  secret_not_ends_with: String
  projects_every: ProjectWhereInput
  projects_some: ProjectWhereInput
  projects_none: ProjectWhereInput
  roles_every: RoleWhereInput
  roles_some: RoleWhereInput
  roles_none: RoleWhereInput
  websites_every: WebsiteWhereInput
  websites_some: WebsiteWhereInput
  websites_none: WebsiteWhereInput
  owners_every: UserWhereInput
  owners_some: UserWhereInput
  owners_none: UserWhereInput
}

input ClientWhereUniqueInput {
  id: ID
  secret: String
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createUserProjectRoles(data: UserProjectRolesCreateInput!): UserProjectRoles!
  createUserWebsiteRoles(data: UserWebsiteRolesCreateInput!): UserWebsiteRoles!
  createProject(data: ProjectCreateInput!): Project!
  createWebsite(data: WebsiteCreateInput!): Website!
  createAction(data: ActionCreateInput!): Action!
  createClient(data: ClientCreateInput!): Client!
  createRole(data: RoleCreateInput!): Role!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateWebsite(data: WebsiteUpdateInput!, where: WebsiteWhereUniqueInput!): Website
  updateAction(data: ActionUpdateInput!, where: ActionWhereUniqueInput!): Action
  updateClient(data: ClientUpdateInput!, where: ClientWhereUniqueInput!): Client
  updateRole(data: RoleUpdateInput!, where: RoleWhereUniqueInput!): Role
  deleteUser(where: UserWhereUniqueInput!): User
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteWebsite(where: WebsiteWhereUniqueInput!): Website
  deleteAction(where: ActionWhereUniqueInput!): Action
  deleteClient(where: ClientWhereUniqueInput!): Client
  deleteRole(where: RoleWhereUniqueInput!): Role
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  upsertWebsite(where: WebsiteWhereUniqueInput!, create: WebsiteCreateInput!, update: WebsiteUpdateInput!): Website!
  upsertAction(where: ActionWhereUniqueInput!, create: ActionCreateInput!, update: ActionUpdateInput!): Action!
  upsertClient(where: ClientWhereUniqueInput!, create: ClientCreateInput!, update: ClientUpdateInput!): Client!
  upsertRole(where: RoleWhereUniqueInput!, create: RoleCreateInput!, update: RoleUpdateInput!): Role!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyProjects(data: ProjectUpdateManyMutationInput!, where: ProjectWhereInput): BatchPayload!
  updateManyWebsites(data: WebsiteUpdateManyMutationInput!, where: WebsiteWhereInput): BatchPayload!
  updateManyActions(data: ActionUpdateManyMutationInput!, where: ActionWhereInput): BatchPayload!
  updateManyClients(data: ClientUpdateManyMutationInput!, where: ClientWhereInput): BatchPayload!
  updateManyRoles(data: RoleUpdateManyMutationInput!, where: RoleWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyUserProjectRoleses(where: UserProjectRolesWhereInput): BatchPayload!
  deleteManyUserWebsiteRoleses(where: UserWebsiteRolesWhereInput): BatchPayload!
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  deleteManyWebsites(where: WebsiteWhereInput): BatchPayload!
  deleteManyActions(where: ActionWhereInput): BatchPayload!
  deleteManyClients(where: ClientWhereInput): BatchPayload!
  deleteManyRoles(where: RoleWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Project implements Node {
  foxer360Id: ID!
  id: ID!
  name: String!
  client: Client!
  websites(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Website!]
}

"""A connection to a list of items."""
type ProjectConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  foxer360Id: ID!
  name: String!
  client: ClientCreateOneWithoutProjectsInput!
  websites: WebsiteCreateManyWithoutProjectInput
}

input ProjectCreateManyInput {
  create: [ProjectCreateInput!]
  connect: [ProjectWhereUniqueInput!]
}

input ProjectCreateManyWithoutClientInput {
  create: [ProjectCreateWithoutClientInput!]
  connect: [ProjectWhereUniqueInput!]
}

input ProjectCreateOneInput {
  create: ProjectCreateInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateOneWithoutWebsitesInput {
  create: ProjectCreateWithoutWebsitesInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateWithoutClientInput {
  foxer360Id: ID!
  name: String!
  websites: WebsiteCreateManyWithoutProjectInput
}

input ProjectCreateWithoutWebsitesInput {
  foxer360Id: ID!
  name: String!
  client: ClientCreateOneWithoutProjectsInput!
}

"""An edge in a connection."""
type ProjectEdge {
  """The item at the end of the edge."""
  node: Project!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ProjectOrderByInput {
  foxer360Id_ASC
  foxer360Id_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ProjectPreviousValues {
  foxer360Id: ID!
  id: ID!
  name: String!
}

input ProjectScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [ProjectScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProjectScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProjectScalarWhereInput!]
  foxer360Id: ID

  """All values that are not equal to given value."""
  foxer360Id_not: ID

  """All values that are contained in given list."""
  foxer360Id_in: [ID!]

  """All values that are not contained in given list."""
  foxer360Id_not_in: [ID!]

  """All values less than the given value."""
  foxer360Id_lt: ID

  """All values less than or equal the given value."""
  foxer360Id_lte: ID

  """All values greater than the given value."""
  foxer360Id_gt: ID

  """All values greater than or equal the given value."""
  foxer360Id_gte: ID

  """All values containing the given string."""
  foxer360Id_contains: ID

  """All values not containing the given string."""
  foxer360Id_not_contains: ID

  """All values starting with the given string."""
  foxer360Id_starts_with: ID

  """All values not starting with the given string."""
  foxer360Id_not_starts_with: ID

  """All values ending with the given string."""
  foxer360Id_ends_with: ID

  """All values not ending with the given string."""
  foxer360Id_not_ends_with: ID
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ProjectSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProjectSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProjectSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
}

input ProjectUpdateDataInput {
  foxer360Id: ID
  name: String
  client: ClientUpdateOneRequiredWithoutProjectsInput
  websites: WebsiteUpdateManyWithoutProjectInput
}

input ProjectUpdateInput {
  foxer360Id: ID
  name: String
  client: ClientUpdateOneRequiredWithoutProjectsInput
  websites: WebsiteUpdateManyWithoutProjectInput
}

input ProjectUpdateManyDataInput {
  foxer360Id: ID
  name: String
}

input ProjectUpdateManyInput {
  create: [ProjectCreateInput!]
  connect: [ProjectWhereUniqueInput!]
  set: [ProjectWhereUniqueInput!]
  disconnect: [ProjectWhereUniqueInput!]
  delete: [ProjectWhereUniqueInput!]
  update: [ProjectUpdateWithWhereUniqueNestedInput!]
  updateMany: [ProjectUpdateManyWithWhereNestedInput!]
  deleteMany: [ProjectScalarWhereInput!]
  upsert: [ProjectUpsertWithWhereUniqueNestedInput!]
}

input ProjectUpdateManyMutationInput {
  foxer360Id: ID
  name: String
}

input ProjectUpdateManyWithoutClientInput {
  create: [ProjectCreateWithoutClientInput!]
  connect: [ProjectWhereUniqueInput!]
  set: [ProjectWhereUniqueInput!]
  disconnect: [ProjectWhereUniqueInput!]
  delete: [ProjectWhereUniqueInput!]
  update: [ProjectUpdateWithWhereUniqueWithoutClientInput!]
  updateMany: [ProjectUpdateManyWithWhereNestedInput!]
  deleteMany: [ProjectScalarWhereInput!]
  upsert: [ProjectUpsertWithWhereUniqueWithoutClientInput!]
}

input ProjectUpdateManyWithWhereNestedInput {
  where: ProjectScalarWhereInput!
  data: ProjectUpdateManyDataInput!
}

input ProjectUpdateOneRequiredWithoutWebsitesInput {
  create: ProjectCreateWithoutWebsitesInput
  connect: ProjectWhereUniqueInput
  update: ProjectUpdateWithoutWebsitesDataInput
  upsert: ProjectUpsertWithoutWebsitesInput
}

input ProjectUpdateWithoutClientDataInput {
  foxer360Id: ID
  name: String
  websites: WebsiteUpdateManyWithoutProjectInput
}

input ProjectUpdateWithoutWebsitesDataInput {
  foxer360Id: ID
  name: String
  client: ClientUpdateOneRequiredWithoutProjectsInput
}

input ProjectUpdateWithWhereUniqueNestedInput {
  where: ProjectWhereUniqueInput!
  data: ProjectUpdateDataInput!
}

input ProjectUpdateWithWhereUniqueWithoutClientInput {
  where: ProjectWhereUniqueInput!
  data: ProjectUpdateWithoutClientDataInput!
}

input ProjectUpsertWithoutWebsitesInput {
  update: ProjectUpdateWithoutWebsitesDataInput!
  create: ProjectCreateWithoutWebsitesInput!
}

input ProjectUpsertWithWhereUniqueNestedInput {
  where: ProjectWhereUniqueInput!
  update: ProjectUpdateDataInput!
  create: ProjectCreateInput!
}

input ProjectUpsertWithWhereUniqueWithoutClientInput {
  where: ProjectWhereUniqueInput!
  update: ProjectUpdateWithoutClientDataInput!
  create: ProjectCreateWithoutClientInput!
}

input ProjectWhereInput {
  """Logical AND on all given filters."""
  AND: [ProjectWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProjectWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProjectWhereInput!]
  foxer360Id: ID

  """All values that are not equal to given value."""
  foxer360Id_not: ID

  """All values that are contained in given list."""
  foxer360Id_in: [ID!]

  """All values that are not contained in given list."""
  foxer360Id_not_in: [ID!]

  """All values less than the given value."""
  foxer360Id_lt: ID

  """All values less than or equal the given value."""
  foxer360Id_lte: ID

  """All values greater than the given value."""
  foxer360Id_gt: ID

  """All values greater than or equal the given value."""
  foxer360Id_gte: ID

  """All values containing the given string."""
  foxer360Id_contains: ID

  """All values not containing the given string."""
  foxer360Id_not_contains: ID

  """All values starting with the given string."""
  foxer360Id_starts_with: ID

  """All values not starting with the given string."""
  foxer360Id_not_starts_with: ID

  """All values ending with the given string."""
  foxer360Id_ends_with: ID

  """All values not ending with the given string."""
  foxer360Id_not_ends_with: ID
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  client: ClientWhereInput
  websites_every: WebsiteWhereInput
  websites_some: WebsiteWhereInput
  websites_none: WebsiteWhereInput
}

input ProjectWhereUniqueInput {
  foxer360Id: ID
  id: ID
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  userProjectRoleses(where: UserProjectRolesWhereInput, orderBy: UserProjectRolesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserProjectRoles]!
  userWebsiteRoleses(where: UserWebsiteRolesWhereInput, orderBy: UserWebsiteRolesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserWebsiteRoles]!
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  websites(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Website]!
  actions(where: ActionWhereInput, orderBy: ActionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Action]!
  clients(where: ClientWhereInput, orderBy: ClientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Client]!
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role]!
  user(where: UserWhereUniqueInput!): User
  project(where: ProjectWhereUniqueInput!): Project
  website(where: WebsiteWhereUniqueInput!): Website
  action(where: ActionWhereUniqueInput!): Action
  client(where: ClientWhereUniqueInput!): Client
  role(where: RoleWhereUniqueInput!): Role
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  userProjectRolesesConnection(where: UserProjectRolesWhereInput, orderBy: UserProjectRolesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserProjectRolesConnection!
  userWebsiteRolesesConnection(where: UserWebsiteRolesWhereInput, orderBy: UserWebsiteRolesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserWebsiteRolesConnection!
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  websitesConnection(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WebsiteConnection!
  actionsConnection(where: ActionWhereInput, orderBy: ActionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActionConnection!
  clientsConnection(where: ClientWhereInput, orderBy: ClientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClientConnection!
  rolesConnection(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoleConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Role implements Node {
  id: ID!
  name: String!
  actions(where: ActionWhereInput, orderBy: ActionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Action!]
  client: Client!
}

"""A connection to a list of items."""
type RoleConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RoleEdge]!
  aggregate: AggregateRole!
}

input RoleCreateInput {
  name: String!
  actions: ActionCreateManyInput
  client: ClientCreateOneWithoutRolesInput!
}

input RoleCreateManyInput {
  create: [RoleCreateInput!]
  connect: [RoleWhereUniqueInput!]
}

input RoleCreateManyWithoutClientInput {
  create: [RoleCreateWithoutClientInput!]
  connect: [RoleWhereUniqueInput!]
}

input RoleCreateWithoutClientInput {
  name: String!
  actions: ActionCreateManyInput
}

"""An edge in a connection."""
type RoleEdge {
  """The item at the end of the edge."""
  node: Role!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RoleOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type RolePreviousValues {
  id: ID!
  name: String!
}

input RoleScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [RoleScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [RoleScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RoleScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

type RoleSubscriptionPayload {
  mutation: MutationType!
  node: Role
  updatedFields: [String!]
  previousValues: RolePreviousValues
}

input RoleSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RoleSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RoleSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RoleSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RoleWhereInput
}

input RoleUpdateDataInput {
  name: String
  actions: ActionUpdateManyInput
  client: ClientUpdateOneRequiredWithoutRolesInput
}

input RoleUpdateInput {
  name: String
  actions: ActionUpdateManyInput
  client: ClientUpdateOneRequiredWithoutRolesInput
}

input RoleUpdateManyDataInput {
  name: String
}

input RoleUpdateManyInput {
  create: [RoleCreateInput!]
  connect: [RoleWhereUniqueInput!]
  set: [RoleWhereUniqueInput!]
  disconnect: [RoleWhereUniqueInput!]
  delete: [RoleWhereUniqueInput!]
  update: [RoleUpdateWithWhereUniqueNestedInput!]
  updateMany: [RoleUpdateManyWithWhereNestedInput!]
  deleteMany: [RoleScalarWhereInput!]
  upsert: [RoleUpsertWithWhereUniqueNestedInput!]
}

input RoleUpdateManyMutationInput {
  name: String
}

input RoleUpdateManyWithoutClientInput {
  create: [RoleCreateWithoutClientInput!]
  connect: [RoleWhereUniqueInput!]
  set: [RoleWhereUniqueInput!]
  disconnect: [RoleWhereUniqueInput!]
  delete: [RoleWhereUniqueInput!]
  update: [RoleUpdateWithWhereUniqueWithoutClientInput!]
  updateMany: [RoleUpdateManyWithWhereNestedInput!]
  deleteMany: [RoleScalarWhereInput!]
  upsert: [RoleUpsertWithWhereUniqueWithoutClientInput!]
}

input RoleUpdateManyWithWhereNestedInput {
  where: RoleScalarWhereInput!
  data: RoleUpdateManyDataInput!
}

input RoleUpdateWithoutClientDataInput {
  name: String
  actions: ActionUpdateManyInput
}

input RoleUpdateWithWhereUniqueNestedInput {
  where: RoleWhereUniqueInput!
  data: RoleUpdateDataInput!
}

input RoleUpdateWithWhereUniqueWithoutClientInput {
  where: RoleWhereUniqueInput!
  data: RoleUpdateWithoutClientDataInput!
}

input RoleUpsertWithWhereUniqueNestedInput {
  where: RoleWhereUniqueInput!
  update: RoleUpdateDataInput!
  create: RoleCreateInput!
}

input RoleUpsertWithWhereUniqueWithoutClientInput {
  where: RoleWhereUniqueInput!
  update: RoleUpdateWithoutClientDataInput!
  create: RoleCreateWithoutClientInput!
}

input RoleWhereInput {
  """Logical AND on all given filters."""
  AND: [RoleWhereInput!]

  """Logical OR on all given filters."""
  OR: [RoleWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RoleWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  actions_every: ActionWhereInput
  actions_some: ActionWhereInput
  actions_none: ActionWhereInput
  client: ClientWhereInput
}

input RoleWhereUniqueInput {
  id: ID
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  userProjectRoles(where: UserProjectRolesSubscriptionWhereInput): UserProjectRolesSubscriptionPayload
  userWebsiteRoles(where: UserWebsiteRolesSubscriptionWhereInput): UserWebsiteRolesSubscriptionPayload
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  website(where: WebsiteSubscriptionWhereInput): WebsiteSubscriptionPayload
  action(where: ActionSubscriptionWhereInput): ActionSubscriptionPayload
  client(where: ClientSubscriptionWhereInput): ClientSubscriptionPayload
  role(where: RoleSubscriptionWhereInput): RoleSubscriptionPayload
}

type User implements Node {
  auth0Id: ID!
  avatar: String
  email: String!
  id: ID!
  name: String!
  clients(where: ClientWhereInput, orderBy: ClientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Client!]
  enabledProjects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]
  enabledWebsites(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Website!]
  owns(where: ClientWhereInput, orderBy: ClientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Client!]
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role!]
  projectRoles(where: UserProjectRolesWhereInput, orderBy: UserProjectRolesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserProjectRoles!]
  websiteRoles(where: UserWebsiteRolesWhereInput, orderBy: UserWebsiteRolesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserWebsiteRoles!]
  superuser: Boolean!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  auth0Id: ID!
  avatar: String
  email: String!
  name: String!
  superuser: Boolean
  clients: ClientCreateManyInput
  enabledProjects: ProjectCreateManyInput
  enabledWebsites: WebsiteCreateManyInput
  owns: ClientCreateManyWithoutOwnersInput
  roles: RoleCreateManyInput
  projectRoles: UserProjectRolesCreateManyWithoutUserInput
  websiteRoles: UserWebsiteRolesCreateManyWithoutUserInput
}

input UserCreateManyWithoutOwnsInput {
  create: [UserCreateWithoutOwnsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutProjectRolesInput {
  create: UserCreateWithoutProjectRolesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutWebsiteRolesInput {
  create: UserCreateWithoutWebsiteRolesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutOwnsInput {
  auth0Id: ID!
  avatar: String
  email: String!
  name: String!
  superuser: Boolean
  clients: ClientCreateManyInput
  enabledProjects: ProjectCreateManyInput
  enabledWebsites: WebsiteCreateManyInput
  roles: RoleCreateManyInput
  projectRoles: UserProjectRolesCreateManyWithoutUserInput
  websiteRoles: UserWebsiteRolesCreateManyWithoutUserInput
}

input UserCreateWithoutProjectRolesInput {
  auth0Id: ID!
  avatar: String
  email: String!
  name: String!
  superuser: Boolean
  clients: ClientCreateManyInput
  enabledProjects: ProjectCreateManyInput
  enabledWebsites: WebsiteCreateManyInput
  owns: ClientCreateManyWithoutOwnersInput
  roles: RoleCreateManyInput
  websiteRoles: UserWebsiteRolesCreateManyWithoutUserInput
}

input UserCreateWithoutWebsiteRolesInput {
  auth0Id: ID!
  avatar: String
  email: String!
  name: String!
  superuser: Boolean
  clients: ClientCreateManyInput
  enabledProjects: ProjectCreateManyInput
  enabledWebsites: WebsiteCreateManyInput
  owns: ClientCreateManyWithoutOwnersInput
  roles: RoleCreateManyInput
  projectRoles: UserProjectRolesCreateManyWithoutUserInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  auth0Id_ASC
  auth0Id_DESC
  avatar_ASC
  avatar_DESC
  email_ASC
  email_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  superuser_ASC
  superuser_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  auth0Id: ID!
  avatar: String
  email: String!
  id: ID!
  name: String!
  superuser: Boolean!
}

type UserProjectRoles {
  user: User!
  client: Client!
  project: Project!
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role!]
}

"""A connection to a list of items."""
type UserProjectRolesConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserProjectRolesEdge]!
  aggregate: AggregateUserProjectRoles!
}

input UserProjectRolesCreateInput {
  user: UserCreateOneWithoutProjectRolesInput!
  client: ClientCreateOneInput!
  project: ProjectCreateOneInput!
  roles: RoleCreateManyInput
}

input UserProjectRolesCreateManyWithoutUserInput {
  create: [UserProjectRolesCreateWithoutUserInput!]
}

input UserProjectRolesCreateWithoutUserInput {
  client: ClientCreateOneInput!
  project: ProjectCreateOneInput!
  roles: RoleCreateManyInput
}

"""An edge in a connection."""
type UserProjectRolesEdge {
  """The item at the end of the edge."""
  node: UserProjectRoles!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserProjectRolesOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserProjectRolesSubscriptionPayload {
  mutation: MutationType!
  node: UserProjectRoles
  updatedFields: [String!]
}

input UserProjectRolesSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserProjectRolesSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserProjectRolesSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserProjectRolesSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserProjectRolesWhereInput
}

input UserProjectRolesUpdateManyWithoutUserInput {
  create: [UserProjectRolesCreateWithoutUserInput!]
}

input UserProjectRolesWhereInput {
  """Logical AND on all given filters."""
  AND: [UserProjectRolesWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserProjectRolesWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserProjectRolesWhereInput!]
  user: UserWhereInput
  client: ClientWhereInput
  project: ProjectWhereInput
  roles_every: RoleWhereInput
  roles_some: RoleWhereInput
  roles_none: RoleWhereInput
}

input UserScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [UserScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserScalarWhereInput!]
  auth0Id: ID

  """All values that are not equal to given value."""
  auth0Id_not: ID

  """All values that are contained in given list."""
  auth0Id_in: [ID!]

  """All values that are not contained in given list."""
  auth0Id_not_in: [ID!]

  """All values less than the given value."""
  auth0Id_lt: ID

  """All values less than or equal the given value."""
  auth0Id_lte: ID

  """All values greater than the given value."""
  auth0Id_gt: ID

  """All values greater than or equal the given value."""
  auth0Id_gte: ID

  """All values containing the given string."""
  auth0Id_contains: ID

  """All values not containing the given string."""
  auth0Id_not_contains: ID

  """All values starting with the given string."""
  auth0Id_starts_with: ID

  """All values not starting with the given string."""
  auth0Id_not_starts_with: ID

  """All values ending with the given string."""
  auth0Id_ends_with: ID

  """All values not ending with the given string."""
  auth0Id_not_ends_with: ID
  avatar: String

  """All values that are not equal to given value."""
  avatar_not: String

  """All values that are contained in given list."""
  avatar_in: [String!]

  """All values that are not contained in given list."""
  avatar_not_in: [String!]

  """All values less than the given value."""
  avatar_lt: String

  """All values less than or equal the given value."""
  avatar_lte: String

  """All values greater than the given value."""
  avatar_gt: String

  """All values greater than or equal the given value."""
  avatar_gte: String

  """All values containing the given string."""
  avatar_contains: String

  """All values not containing the given string."""
  avatar_not_contains: String

  """All values starting with the given string."""
  avatar_starts_with: String

  """All values not starting with the given string."""
  avatar_not_starts_with: String

  """All values ending with the given string."""
  avatar_ends_with: String

  """All values not ending with the given string."""
  avatar_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  superuser: Boolean

  """All values that are not equal to given value."""
  superuser_not: Boolean
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  auth0Id: ID
  avatar: String
  email: String
  name: String
  superuser: Boolean
  clients: ClientUpdateManyInput
  enabledProjects: ProjectUpdateManyInput
  enabledWebsites: WebsiteUpdateManyInput
  owns: ClientUpdateManyWithoutOwnersInput
  roles: RoleUpdateManyInput
  projectRoles: UserProjectRolesUpdateManyWithoutUserInput
  websiteRoles: UserWebsiteRolesUpdateManyWithoutUserInput
}

input UserUpdateManyDataInput {
  auth0Id: ID
  avatar: String
  email: String
  name: String
  superuser: Boolean
}

input UserUpdateManyMutationInput {
  auth0Id: ID
  avatar: String
  email: String
  name: String
  superuser: Boolean
}

input UserUpdateManyWithoutOwnsInput {
  create: [UserCreateWithoutOwnsInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutOwnsInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
  deleteMany: [UserScalarWhereInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutOwnsInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateWithoutOwnsDataInput {
  auth0Id: ID
  avatar: String
  email: String
  name: String
  superuser: Boolean
  clients: ClientUpdateManyInput
  enabledProjects: ProjectUpdateManyInput
  enabledWebsites: WebsiteUpdateManyInput
  roles: RoleUpdateManyInput
  projectRoles: UserProjectRolesUpdateManyWithoutUserInput
  websiteRoles: UserWebsiteRolesUpdateManyWithoutUserInput
}

input UserUpdateWithWhereUniqueWithoutOwnsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutOwnsDataInput!
}

input UserUpsertWithWhereUniqueWithoutOwnsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutOwnsDataInput!
  create: UserCreateWithoutOwnsInput!
}

type UserWebsiteRoles {
  user: User!
  client: Client!
  project: Project!
  website: Website!
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role!]
}

"""A connection to a list of items."""
type UserWebsiteRolesConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserWebsiteRolesEdge]!
  aggregate: AggregateUserWebsiteRoles!
}

input UserWebsiteRolesCreateInput {
  user: UserCreateOneWithoutWebsiteRolesInput!
  client: ClientCreateOneInput!
  project: ProjectCreateOneInput!
  website: WebsiteCreateOneInput!
  roles: RoleCreateManyInput
}

input UserWebsiteRolesCreateManyWithoutUserInput {
  create: [UserWebsiteRolesCreateWithoutUserInput!]
}

input UserWebsiteRolesCreateWithoutUserInput {
  client: ClientCreateOneInput!
  project: ProjectCreateOneInput!
  website: WebsiteCreateOneInput!
  roles: RoleCreateManyInput
}

"""An edge in a connection."""
type UserWebsiteRolesEdge {
  """The item at the end of the edge."""
  node: UserWebsiteRoles!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserWebsiteRolesOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserWebsiteRolesSubscriptionPayload {
  mutation: MutationType!
  node: UserWebsiteRoles
  updatedFields: [String!]
}

input UserWebsiteRolesSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWebsiteRolesSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWebsiteRolesSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWebsiteRolesSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWebsiteRolesWhereInput
}

input UserWebsiteRolesUpdateManyWithoutUserInput {
  create: [UserWebsiteRolesCreateWithoutUserInput!]
}

input UserWebsiteRolesWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWebsiteRolesWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWebsiteRolesWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWebsiteRolesWhereInput!]
  user: UserWhereInput
  client: ClientWhereInput
  project: ProjectWhereInput
  website: WebsiteWhereInput
  roles_every: RoleWhereInput
  roles_some: RoleWhereInput
  roles_none: RoleWhereInput
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  auth0Id: ID

  """All values that are not equal to given value."""
  auth0Id_not: ID

  """All values that are contained in given list."""
  auth0Id_in: [ID!]

  """All values that are not contained in given list."""
  auth0Id_not_in: [ID!]

  """All values less than the given value."""
  auth0Id_lt: ID

  """All values less than or equal the given value."""
  auth0Id_lte: ID

  """All values greater than the given value."""
  auth0Id_gt: ID

  """All values greater than or equal the given value."""
  auth0Id_gte: ID

  """All values containing the given string."""
  auth0Id_contains: ID

  """All values not containing the given string."""
  auth0Id_not_contains: ID

  """All values starting with the given string."""
  auth0Id_starts_with: ID

  """All values not starting with the given string."""
  auth0Id_not_starts_with: ID

  """All values ending with the given string."""
  auth0Id_ends_with: ID

  """All values not ending with the given string."""
  auth0Id_not_ends_with: ID
  avatar: String

  """All values that are not equal to given value."""
  avatar_not: String

  """All values that are contained in given list."""
  avatar_in: [String!]

  """All values that are not contained in given list."""
  avatar_not_in: [String!]

  """All values less than the given value."""
  avatar_lt: String

  """All values less than or equal the given value."""
  avatar_lte: String

  """All values greater than the given value."""
  avatar_gt: String

  """All values greater than or equal the given value."""
  avatar_gte: String

  """All values containing the given string."""
  avatar_contains: String

  """All values not containing the given string."""
  avatar_not_contains: String

  """All values starting with the given string."""
  avatar_starts_with: String

  """All values not starting with the given string."""
  avatar_not_starts_with: String

  """All values ending with the given string."""
  avatar_ends_with: String

  """All values not ending with the given string."""
  avatar_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  superuser: Boolean

  """All values that are not equal to given value."""
  superuser_not: Boolean
  clients_every: ClientWhereInput
  clients_some: ClientWhereInput
  clients_none: ClientWhereInput
  enabledProjects_every: ProjectWhereInput
  enabledProjects_some: ProjectWhereInput
  enabledProjects_none: ProjectWhereInput
  enabledWebsites_every: WebsiteWhereInput
  enabledWebsites_some: WebsiteWhereInput
  enabledWebsites_none: WebsiteWhereInput
  owns_every: ClientWhereInput
  owns_some: ClientWhereInput
  owns_none: ClientWhereInput
  roles_every: RoleWhereInput
  roles_some: RoleWhereInput
  roles_none: RoleWhereInput
  projectRoles_every: UserProjectRolesWhereInput
  projectRoles_some: UserProjectRolesWhereInput
  projectRoles_none: UserProjectRolesWhereInput
  websiteRoles_every: UserWebsiteRolesWhereInput
  websiteRoles_some: UserWebsiteRolesWhereInput
  websiteRoles_none: UserWebsiteRolesWhereInput
}

input UserWhereUniqueInput {
  auth0Id: ID
  id: ID
}

type Website implements Node {
  foxer360Id: ID!
  id: ID!
  name: String!
  client: Client!
  project: Project!
}

"""A connection to a list of items."""
type WebsiteConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [WebsiteEdge]!
  aggregate: AggregateWebsite!
}

input WebsiteCreateInput {
  foxer360Id: ID!
  name: String!
  client: ClientCreateOneWithoutWebsitesInput!
  project: ProjectCreateOneWithoutWebsitesInput!
}

input WebsiteCreateManyInput {
  create: [WebsiteCreateInput!]
  connect: [WebsiteWhereUniqueInput!]
}

input WebsiteCreateManyWithoutClientInput {
  create: [WebsiteCreateWithoutClientInput!]
  connect: [WebsiteWhereUniqueInput!]
}

input WebsiteCreateManyWithoutProjectInput {
  create: [WebsiteCreateWithoutProjectInput!]
  connect: [WebsiteWhereUniqueInput!]
}

input WebsiteCreateOneInput {
  create: WebsiteCreateInput
  connect: WebsiteWhereUniqueInput
}

input WebsiteCreateWithoutClientInput {
  foxer360Id: ID!
  name: String!
  project: ProjectCreateOneWithoutWebsitesInput!
}

input WebsiteCreateWithoutProjectInput {
  foxer360Id: ID!
  name: String!
  client: ClientCreateOneWithoutWebsitesInput!
}

"""An edge in a connection."""
type WebsiteEdge {
  """The item at the end of the edge."""
  node: Website!

  """A cursor for use in pagination."""
  cursor: String!
}

enum WebsiteOrderByInput {
  foxer360Id_ASC
  foxer360Id_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type WebsitePreviousValues {
  foxer360Id: ID!
  id: ID!
  name: String!
}

input WebsiteScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [WebsiteScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [WebsiteScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WebsiteScalarWhereInput!]
  foxer360Id: ID

  """All values that are not equal to given value."""
  foxer360Id_not: ID

  """All values that are contained in given list."""
  foxer360Id_in: [ID!]

  """All values that are not contained in given list."""
  foxer360Id_not_in: [ID!]

  """All values less than the given value."""
  foxer360Id_lt: ID

  """All values less than or equal the given value."""
  foxer360Id_lte: ID

  """All values greater than the given value."""
  foxer360Id_gt: ID

  """All values greater than or equal the given value."""
  foxer360Id_gte: ID

  """All values containing the given string."""
  foxer360Id_contains: ID

  """All values not containing the given string."""
  foxer360Id_not_contains: ID

  """All values starting with the given string."""
  foxer360Id_starts_with: ID

  """All values not starting with the given string."""
  foxer360Id_not_starts_with: ID

  """All values ending with the given string."""
  foxer360Id_ends_with: ID

  """All values not ending with the given string."""
  foxer360Id_not_ends_with: ID
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

type WebsiteSubscriptionPayload {
  mutation: MutationType!
  node: Website
  updatedFields: [String!]
  previousValues: WebsitePreviousValues
}

input WebsiteSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [WebsiteSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [WebsiteSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WebsiteSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: WebsiteWhereInput
}

input WebsiteUpdateDataInput {
  foxer360Id: ID
  name: String
  client: ClientUpdateOneRequiredWithoutWebsitesInput
  project: ProjectUpdateOneRequiredWithoutWebsitesInput
}

input WebsiteUpdateInput {
  foxer360Id: ID
  name: String
  client: ClientUpdateOneRequiredWithoutWebsitesInput
  project: ProjectUpdateOneRequiredWithoutWebsitesInput
}

input WebsiteUpdateManyDataInput {
  foxer360Id: ID
  name: String
}

input WebsiteUpdateManyInput {
  create: [WebsiteCreateInput!]
  connect: [WebsiteWhereUniqueInput!]
  set: [WebsiteWhereUniqueInput!]
  disconnect: [WebsiteWhereUniqueInput!]
  delete: [WebsiteWhereUniqueInput!]
  update: [WebsiteUpdateWithWhereUniqueNestedInput!]
  updateMany: [WebsiteUpdateManyWithWhereNestedInput!]
  deleteMany: [WebsiteScalarWhereInput!]
  upsert: [WebsiteUpsertWithWhereUniqueNestedInput!]
}

input WebsiteUpdateManyMutationInput {
  foxer360Id: ID
  name: String
}

input WebsiteUpdateManyWithoutClientInput {
  create: [WebsiteCreateWithoutClientInput!]
  connect: [WebsiteWhereUniqueInput!]
  set: [WebsiteWhereUniqueInput!]
  disconnect: [WebsiteWhereUniqueInput!]
  delete: [WebsiteWhereUniqueInput!]
  update: [WebsiteUpdateWithWhereUniqueWithoutClientInput!]
  updateMany: [WebsiteUpdateManyWithWhereNestedInput!]
  deleteMany: [WebsiteScalarWhereInput!]
  upsert: [WebsiteUpsertWithWhereUniqueWithoutClientInput!]
}

input WebsiteUpdateManyWithoutProjectInput {
  create: [WebsiteCreateWithoutProjectInput!]
  connect: [WebsiteWhereUniqueInput!]
  set: [WebsiteWhereUniqueInput!]
  disconnect: [WebsiteWhereUniqueInput!]
  delete: [WebsiteWhereUniqueInput!]
  update: [WebsiteUpdateWithWhereUniqueWithoutProjectInput!]
  updateMany: [WebsiteUpdateManyWithWhereNestedInput!]
  deleteMany: [WebsiteScalarWhereInput!]
  upsert: [WebsiteUpsertWithWhereUniqueWithoutProjectInput!]
}

input WebsiteUpdateManyWithWhereNestedInput {
  where: WebsiteScalarWhereInput!
  data: WebsiteUpdateManyDataInput!
}

input WebsiteUpdateWithoutClientDataInput {
  foxer360Id: ID
  name: String
  project: ProjectUpdateOneRequiredWithoutWebsitesInput
}

input WebsiteUpdateWithoutProjectDataInput {
  foxer360Id: ID
  name: String
  client: ClientUpdateOneRequiredWithoutWebsitesInput
}

input WebsiteUpdateWithWhereUniqueNestedInput {
  where: WebsiteWhereUniqueInput!
  data: WebsiteUpdateDataInput!
}

input WebsiteUpdateWithWhereUniqueWithoutClientInput {
  where: WebsiteWhereUniqueInput!
  data: WebsiteUpdateWithoutClientDataInput!
}

input WebsiteUpdateWithWhereUniqueWithoutProjectInput {
  where: WebsiteWhereUniqueInput!
  data: WebsiteUpdateWithoutProjectDataInput!
}

input WebsiteUpsertWithWhereUniqueNestedInput {
  where: WebsiteWhereUniqueInput!
  update: WebsiteUpdateDataInput!
  create: WebsiteCreateInput!
}

input WebsiteUpsertWithWhereUniqueWithoutClientInput {
  where: WebsiteWhereUniqueInput!
  update: WebsiteUpdateWithoutClientDataInput!
  create: WebsiteCreateWithoutClientInput!
}

input WebsiteUpsertWithWhereUniqueWithoutProjectInput {
  where: WebsiteWhereUniqueInput!
  update: WebsiteUpdateWithoutProjectDataInput!
  create: WebsiteCreateWithoutProjectInput!
}

input WebsiteWhereInput {
  """Logical AND on all given filters."""
  AND: [WebsiteWhereInput!]

  """Logical OR on all given filters."""
  OR: [WebsiteWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WebsiteWhereInput!]
  foxer360Id: ID

  """All values that are not equal to given value."""
  foxer360Id_not: ID

  """All values that are contained in given list."""
  foxer360Id_in: [ID!]

  """All values that are not contained in given list."""
  foxer360Id_not_in: [ID!]

  """All values less than the given value."""
  foxer360Id_lt: ID

  """All values less than or equal the given value."""
  foxer360Id_lte: ID

  """All values greater than the given value."""
  foxer360Id_gt: ID

  """All values greater than or equal the given value."""
  foxer360Id_gte: ID

  """All values containing the given string."""
  foxer360Id_contains: ID

  """All values not containing the given string."""
  foxer360Id_not_contains: ID

  """All values starting with the given string."""
  foxer360Id_starts_with: ID

  """All values not starting with the given string."""
  foxer360Id_not_starts_with: ID

  """All values ending with the given string."""
  foxer360Id_ends_with: ID

  """All values not ending with the given string."""
  foxer360Id_not_ends_with: ID
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  client: ClientWhereInput
  project: ProjectWhereInput
}

input WebsiteWhereUniqueInput {
  foxer360Id: ID
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type ActionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ClientOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'secret_ASC' |
  'secret_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type ProjectOrderByInput =   'foxer360Id_ASC' |
  'foxer360Id_DESC' |
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type RoleOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'auth0Id_ASC' |
  'auth0Id_DESC' |
  'avatar_ASC' |
  'avatar_DESC' |
  'email_ASC' |
  'email_DESC' |
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'superuser_ASC' |
  'superuser_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserProjectRolesOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserWebsiteRolesOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type WebsiteOrderByInput =   'foxer360Id_ASC' |
  'foxer360Id_DESC' |
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface ActionCreateInput {
  name: String
  description?: String | null
}

export interface ActionCreateManyInput {
  create?: ActionCreateInput[] | ActionCreateInput | null
  connect?: ActionWhereUniqueInput[] | ActionWhereUniqueInput | null
}

export interface ActionScalarWhereInput {
  AND?: ActionScalarWhereInput[] | ActionScalarWhereInput | null
  OR?: ActionScalarWhereInput[] | ActionScalarWhereInput | null
  NOT?: ActionScalarWhereInput[] | ActionScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
}

export interface ActionSubscriptionWhereInput {
  AND?: ActionSubscriptionWhereInput[] | ActionSubscriptionWhereInput | null
  OR?: ActionSubscriptionWhereInput[] | ActionSubscriptionWhereInput | null
  NOT?: ActionSubscriptionWhereInput[] | ActionSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ActionWhereInput | null
}

export interface ActionUpdateDataInput {
  name?: String | null
  description?: String | null
}

export interface ActionUpdateInput {
  name?: String | null
  description?: String | null
}

export interface ActionUpdateManyDataInput {
  name?: String | null
  description?: String | null
}

export interface ActionUpdateManyInput {
  create?: ActionCreateInput[] | ActionCreateInput | null
  connect?: ActionWhereUniqueInput[] | ActionWhereUniqueInput | null
  set?: ActionWhereUniqueInput[] | ActionWhereUniqueInput | null
  disconnect?: ActionWhereUniqueInput[] | ActionWhereUniqueInput | null
  delete?: ActionWhereUniqueInput[] | ActionWhereUniqueInput | null
  update?: ActionUpdateWithWhereUniqueNestedInput[] | ActionUpdateWithWhereUniqueNestedInput | null
  updateMany?: ActionUpdateManyWithWhereNestedInput[] | ActionUpdateManyWithWhereNestedInput | null
  deleteMany?: ActionScalarWhereInput[] | ActionScalarWhereInput | null
  upsert?: ActionUpsertWithWhereUniqueNestedInput[] | ActionUpsertWithWhereUniqueNestedInput | null
}

export interface ActionUpdateManyMutationInput {
  name?: String | null
  description?: String | null
}

export interface ActionUpdateManyWithWhereNestedInput {
  where: ActionScalarWhereInput
  data: ActionUpdateManyDataInput
}

export interface ActionUpdateWithWhereUniqueNestedInput {
  where: ActionWhereUniqueInput
  data: ActionUpdateDataInput
}

export interface ActionUpsertWithWhereUniqueNestedInput {
  where: ActionWhereUniqueInput
  update: ActionUpdateDataInput
  create: ActionCreateInput
}

export interface ActionWhereInput {
  AND?: ActionWhereInput[] | ActionWhereInput | null
  OR?: ActionWhereInput[] | ActionWhereInput | null
  NOT?: ActionWhereInput[] | ActionWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
}

export interface ActionWhereUniqueInput {
  id?: ID_Input | null
  name?: String | null
}

export interface ClientCreateInput {
  name: String
  secret?: String | null
  projects?: ProjectCreateManyWithoutClientInput | null
  roles?: RoleCreateManyWithoutClientInput | null
  websites?: WebsiteCreateManyWithoutClientInput | null
  owners?: UserCreateManyWithoutOwnsInput | null
}

export interface ClientCreateManyInput {
  create?: ClientCreateInput[] | ClientCreateInput | null
  connect?: ClientWhereUniqueInput[] | ClientWhereUniqueInput | null
}

export interface ClientCreateManyWithoutOwnersInput {
  create?: ClientCreateWithoutOwnersInput[] | ClientCreateWithoutOwnersInput | null
  connect?: ClientWhereUniqueInput[] | ClientWhereUniqueInput | null
}

export interface ClientCreateOneInput {
  create?: ClientCreateInput | null
  connect?: ClientWhereUniqueInput | null
}

export interface ClientCreateOneWithoutProjectsInput {
  create?: ClientCreateWithoutProjectsInput | null
  connect?: ClientWhereUniqueInput | null
}

export interface ClientCreateOneWithoutRolesInput {
  create?: ClientCreateWithoutRolesInput | null
  connect?: ClientWhereUniqueInput | null
}

export interface ClientCreateOneWithoutWebsitesInput {
  create?: ClientCreateWithoutWebsitesInput | null
  connect?: ClientWhereUniqueInput | null
}

export interface ClientCreateWithoutOwnersInput {
  name: String
  secret?: String | null
  projects?: ProjectCreateManyWithoutClientInput | null
  roles?: RoleCreateManyWithoutClientInput | null
  websites?: WebsiteCreateManyWithoutClientInput | null
}

export interface ClientCreateWithoutProjectsInput {
  name: String
  secret?: String | null
  roles?: RoleCreateManyWithoutClientInput | null
  websites?: WebsiteCreateManyWithoutClientInput | null
  owners?: UserCreateManyWithoutOwnsInput | null
}

export interface ClientCreateWithoutRolesInput {
  name: String
  secret?: String | null
  projects?: ProjectCreateManyWithoutClientInput | null
  websites?: WebsiteCreateManyWithoutClientInput | null
  owners?: UserCreateManyWithoutOwnsInput | null
}

export interface ClientCreateWithoutWebsitesInput {
  name: String
  secret?: String | null
  projects?: ProjectCreateManyWithoutClientInput | null
  roles?: RoleCreateManyWithoutClientInput | null
  owners?: UserCreateManyWithoutOwnsInput | null
}

export interface ClientScalarWhereInput {
  AND?: ClientScalarWhereInput[] | ClientScalarWhereInput | null
  OR?: ClientScalarWhereInput[] | ClientScalarWhereInput | null
  NOT?: ClientScalarWhereInput[] | ClientScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  secret?: String | null
  secret_not?: String | null
  secret_in?: String[] | String | null
  secret_not_in?: String[] | String | null
  secret_lt?: String | null
  secret_lte?: String | null
  secret_gt?: String | null
  secret_gte?: String | null
  secret_contains?: String | null
  secret_not_contains?: String | null
  secret_starts_with?: String | null
  secret_not_starts_with?: String | null
  secret_ends_with?: String | null
  secret_not_ends_with?: String | null
}

export interface ClientSubscriptionWhereInput {
  AND?: ClientSubscriptionWhereInput[] | ClientSubscriptionWhereInput | null
  OR?: ClientSubscriptionWhereInput[] | ClientSubscriptionWhereInput | null
  NOT?: ClientSubscriptionWhereInput[] | ClientSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ClientWhereInput | null
}

export interface ClientUpdateDataInput {
  name?: String | null
  secret?: String | null
  projects?: ProjectUpdateManyWithoutClientInput | null
  roles?: RoleUpdateManyWithoutClientInput | null
  websites?: WebsiteUpdateManyWithoutClientInput | null
  owners?: UserUpdateManyWithoutOwnsInput | null
}

export interface ClientUpdateInput {
  name?: String | null
  secret?: String | null
  projects?: ProjectUpdateManyWithoutClientInput | null
  roles?: RoleUpdateManyWithoutClientInput | null
  websites?: WebsiteUpdateManyWithoutClientInput | null
  owners?: UserUpdateManyWithoutOwnsInput | null
}

export interface ClientUpdateManyDataInput {
  name?: String | null
  secret?: String | null
}

export interface ClientUpdateManyInput {
  create?: ClientCreateInput[] | ClientCreateInput | null
  connect?: ClientWhereUniqueInput[] | ClientWhereUniqueInput | null
  set?: ClientWhereUniqueInput[] | ClientWhereUniqueInput | null
  disconnect?: ClientWhereUniqueInput[] | ClientWhereUniqueInput | null
  delete?: ClientWhereUniqueInput[] | ClientWhereUniqueInput | null
  update?: ClientUpdateWithWhereUniqueNestedInput[] | ClientUpdateWithWhereUniqueNestedInput | null
  updateMany?: ClientUpdateManyWithWhereNestedInput[] | ClientUpdateManyWithWhereNestedInput | null
  deleteMany?: ClientScalarWhereInput[] | ClientScalarWhereInput | null
  upsert?: ClientUpsertWithWhereUniqueNestedInput[] | ClientUpsertWithWhereUniqueNestedInput | null
}

export interface ClientUpdateManyMutationInput {
  name?: String | null
  secret?: String | null
}

export interface ClientUpdateManyWithoutOwnersInput {
  create?: ClientCreateWithoutOwnersInput[] | ClientCreateWithoutOwnersInput | null
  connect?: ClientWhereUniqueInput[] | ClientWhereUniqueInput | null
  set?: ClientWhereUniqueInput[] | ClientWhereUniqueInput | null
  disconnect?: ClientWhereUniqueInput[] | ClientWhereUniqueInput | null
  delete?: ClientWhereUniqueInput[] | ClientWhereUniqueInput | null
  update?: ClientUpdateWithWhereUniqueWithoutOwnersInput[] | ClientUpdateWithWhereUniqueWithoutOwnersInput | null
  updateMany?: ClientUpdateManyWithWhereNestedInput[] | ClientUpdateManyWithWhereNestedInput | null
  deleteMany?: ClientScalarWhereInput[] | ClientScalarWhereInput | null
  upsert?: ClientUpsertWithWhereUniqueWithoutOwnersInput[] | ClientUpsertWithWhereUniqueWithoutOwnersInput | null
}

export interface ClientUpdateManyWithWhereNestedInput {
  where: ClientScalarWhereInput
  data: ClientUpdateManyDataInput
}

export interface ClientUpdateOneRequiredWithoutProjectsInput {
  create?: ClientCreateWithoutProjectsInput | null
  connect?: ClientWhereUniqueInput | null
  update?: ClientUpdateWithoutProjectsDataInput | null
  upsert?: ClientUpsertWithoutProjectsInput | null
}

export interface ClientUpdateOneRequiredWithoutRolesInput {
  create?: ClientCreateWithoutRolesInput | null
  connect?: ClientWhereUniqueInput | null
  update?: ClientUpdateWithoutRolesDataInput | null
  upsert?: ClientUpsertWithoutRolesInput | null
}

export interface ClientUpdateOneRequiredWithoutWebsitesInput {
  create?: ClientCreateWithoutWebsitesInput | null
  connect?: ClientWhereUniqueInput | null
  update?: ClientUpdateWithoutWebsitesDataInput | null
  upsert?: ClientUpsertWithoutWebsitesInput | null
}

export interface ClientUpdateWithoutOwnersDataInput {
  name?: String | null
  secret?: String | null
  projects?: ProjectUpdateManyWithoutClientInput | null
  roles?: RoleUpdateManyWithoutClientInput | null
  websites?: WebsiteUpdateManyWithoutClientInput | null
}

export interface ClientUpdateWithoutProjectsDataInput {
  name?: String | null
  secret?: String | null
  roles?: RoleUpdateManyWithoutClientInput | null
  websites?: WebsiteUpdateManyWithoutClientInput | null
  owners?: UserUpdateManyWithoutOwnsInput | null
}

export interface ClientUpdateWithoutRolesDataInput {
  name?: String | null
  secret?: String | null
  projects?: ProjectUpdateManyWithoutClientInput | null
  websites?: WebsiteUpdateManyWithoutClientInput | null
  owners?: UserUpdateManyWithoutOwnsInput | null
}

export interface ClientUpdateWithoutWebsitesDataInput {
  name?: String | null
  secret?: String | null
  projects?: ProjectUpdateManyWithoutClientInput | null
  roles?: RoleUpdateManyWithoutClientInput | null
  owners?: UserUpdateManyWithoutOwnsInput | null
}

export interface ClientUpdateWithWhereUniqueNestedInput {
  where: ClientWhereUniqueInput
  data: ClientUpdateDataInput
}

export interface ClientUpdateWithWhereUniqueWithoutOwnersInput {
  where: ClientWhereUniqueInput
  data: ClientUpdateWithoutOwnersDataInput
}

export interface ClientUpsertWithoutProjectsInput {
  update: ClientUpdateWithoutProjectsDataInput
  create: ClientCreateWithoutProjectsInput
}

export interface ClientUpsertWithoutRolesInput {
  update: ClientUpdateWithoutRolesDataInput
  create: ClientCreateWithoutRolesInput
}

export interface ClientUpsertWithoutWebsitesInput {
  update: ClientUpdateWithoutWebsitesDataInput
  create: ClientCreateWithoutWebsitesInput
}

export interface ClientUpsertWithWhereUniqueNestedInput {
  where: ClientWhereUniqueInput
  update: ClientUpdateDataInput
  create: ClientCreateInput
}

export interface ClientUpsertWithWhereUniqueWithoutOwnersInput {
  where: ClientWhereUniqueInput
  update: ClientUpdateWithoutOwnersDataInput
  create: ClientCreateWithoutOwnersInput
}

export interface ClientWhereInput {
  AND?: ClientWhereInput[] | ClientWhereInput | null
  OR?: ClientWhereInput[] | ClientWhereInput | null
  NOT?: ClientWhereInput[] | ClientWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  secret?: String | null
  secret_not?: String | null
  secret_in?: String[] | String | null
  secret_not_in?: String[] | String | null
  secret_lt?: String | null
  secret_lte?: String | null
  secret_gt?: String | null
  secret_gte?: String | null
  secret_contains?: String | null
  secret_not_contains?: String | null
  secret_starts_with?: String | null
  secret_not_starts_with?: String | null
  secret_ends_with?: String | null
  secret_not_ends_with?: String | null
  projects_every?: ProjectWhereInput | null
  projects_some?: ProjectWhereInput | null
  projects_none?: ProjectWhereInput | null
  roles_every?: RoleWhereInput | null
  roles_some?: RoleWhereInput | null
  roles_none?: RoleWhereInput | null
  websites_every?: WebsiteWhereInput | null
  websites_some?: WebsiteWhereInput | null
  websites_none?: WebsiteWhereInput | null
  owners_every?: UserWhereInput | null
  owners_some?: UserWhereInput | null
  owners_none?: UserWhereInput | null
}

export interface ClientWhereUniqueInput {
  id?: ID_Input | null
  secret?: String | null
}

export interface ProjectCreateInput {
  foxer360Id: ID_Output
  name: String
  client: ClientCreateOneWithoutProjectsInput
  websites?: WebsiteCreateManyWithoutProjectInput | null
}

export interface ProjectCreateManyInput {
  create?: ProjectCreateInput[] | ProjectCreateInput | null
  connect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput | null
}

export interface ProjectCreateManyWithoutClientInput {
  create?: ProjectCreateWithoutClientInput[] | ProjectCreateWithoutClientInput | null
  connect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput | null
}

export interface ProjectCreateOneInput {
  create?: ProjectCreateInput | null
  connect?: ProjectWhereUniqueInput | null
}

export interface ProjectCreateOneWithoutWebsitesInput {
  create?: ProjectCreateWithoutWebsitesInput | null
  connect?: ProjectWhereUniqueInput | null
}

export interface ProjectCreateWithoutClientInput {
  foxer360Id: ID_Output
  name: String
  websites?: WebsiteCreateManyWithoutProjectInput | null
}

export interface ProjectCreateWithoutWebsitesInput {
  foxer360Id: ID_Output
  name: String
  client: ClientCreateOneWithoutProjectsInput
}

export interface ProjectScalarWhereInput {
  AND?: ProjectScalarWhereInput[] | ProjectScalarWhereInput | null
  OR?: ProjectScalarWhereInput[] | ProjectScalarWhereInput | null
  NOT?: ProjectScalarWhereInput[] | ProjectScalarWhereInput | null
  foxer360Id?: ID_Input | null
  foxer360Id_not?: ID_Input | null
  foxer360Id_in?: ID_Output[] | ID_Output | null
  foxer360Id_not_in?: ID_Output[] | ID_Output | null
  foxer360Id_lt?: ID_Input | null
  foxer360Id_lte?: ID_Input | null
  foxer360Id_gt?: ID_Input | null
  foxer360Id_gte?: ID_Input | null
  foxer360Id_contains?: ID_Input | null
  foxer360Id_not_contains?: ID_Input | null
  foxer360Id_starts_with?: ID_Input | null
  foxer360Id_not_starts_with?: ID_Input | null
  foxer360Id_ends_with?: ID_Input | null
  foxer360Id_not_ends_with?: ID_Input | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
}

export interface ProjectSubscriptionWhereInput {
  AND?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput | null
  OR?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput | null
  NOT?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ProjectWhereInput | null
}

export interface ProjectUpdateDataInput {
  foxer360Id?: ID_Input | null
  name?: String | null
  client?: ClientUpdateOneRequiredWithoutProjectsInput | null
  websites?: WebsiteUpdateManyWithoutProjectInput | null
}

export interface ProjectUpdateInput {
  foxer360Id?: ID_Input | null
  name?: String | null
  client?: ClientUpdateOneRequiredWithoutProjectsInput | null
  websites?: WebsiteUpdateManyWithoutProjectInput | null
}

export interface ProjectUpdateManyDataInput {
  foxer360Id?: ID_Input | null
  name?: String | null
}

export interface ProjectUpdateManyInput {
  create?: ProjectCreateInput[] | ProjectCreateInput | null
  connect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput | null
  set?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput | null
  disconnect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput | null
  delete?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput | null
  update?: ProjectUpdateWithWhereUniqueNestedInput[] | ProjectUpdateWithWhereUniqueNestedInput | null
  updateMany?: ProjectUpdateManyWithWhereNestedInput[] | ProjectUpdateManyWithWhereNestedInput | null
  deleteMany?: ProjectScalarWhereInput[] | ProjectScalarWhereInput | null
  upsert?: ProjectUpsertWithWhereUniqueNestedInput[] | ProjectUpsertWithWhereUniqueNestedInput | null
}

export interface ProjectUpdateManyMutationInput {
  foxer360Id?: ID_Input | null
  name?: String | null
}

export interface ProjectUpdateManyWithoutClientInput {
  create?: ProjectCreateWithoutClientInput[] | ProjectCreateWithoutClientInput | null
  connect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput | null
  set?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput | null
  disconnect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput | null
  delete?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput | null
  update?: ProjectUpdateWithWhereUniqueWithoutClientInput[] | ProjectUpdateWithWhereUniqueWithoutClientInput | null
  updateMany?: ProjectUpdateManyWithWhereNestedInput[] | ProjectUpdateManyWithWhereNestedInput | null
  deleteMany?: ProjectScalarWhereInput[] | ProjectScalarWhereInput | null
  upsert?: ProjectUpsertWithWhereUniqueWithoutClientInput[] | ProjectUpsertWithWhereUniqueWithoutClientInput | null
}

export interface ProjectUpdateManyWithWhereNestedInput {
  where: ProjectScalarWhereInput
  data: ProjectUpdateManyDataInput
}

export interface ProjectUpdateOneRequiredWithoutWebsitesInput {
  create?: ProjectCreateWithoutWebsitesInput | null
  connect?: ProjectWhereUniqueInput | null
  update?: ProjectUpdateWithoutWebsitesDataInput | null
  upsert?: ProjectUpsertWithoutWebsitesInput | null
}

export interface ProjectUpdateWithoutClientDataInput {
  foxer360Id?: ID_Input | null
  name?: String | null
  websites?: WebsiteUpdateManyWithoutProjectInput | null
}

export interface ProjectUpdateWithoutWebsitesDataInput {
  foxer360Id?: ID_Input | null
  name?: String | null
  client?: ClientUpdateOneRequiredWithoutProjectsInput | null
}

export interface ProjectUpdateWithWhereUniqueNestedInput {
  where: ProjectWhereUniqueInput
  data: ProjectUpdateDataInput
}

export interface ProjectUpdateWithWhereUniqueWithoutClientInput {
  where: ProjectWhereUniqueInput
  data: ProjectUpdateWithoutClientDataInput
}

export interface ProjectUpsertWithoutWebsitesInput {
  update: ProjectUpdateWithoutWebsitesDataInput
  create: ProjectCreateWithoutWebsitesInput
}

export interface ProjectUpsertWithWhereUniqueNestedInput {
  where: ProjectWhereUniqueInput
  update: ProjectUpdateDataInput
  create: ProjectCreateInput
}

export interface ProjectUpsertWithWhereUniqueWithoutClientInput {
  where: ProjectWhereUniqueInput
  update: ProjectUpdateWithoutClientDataInput
  create: ProjectCreateWithoutClientInput
}

export interface ProjectWhereInput {
  AND?: ProjectWhereInput[] | ProjectWhereInput | null
  OR?: ProjectWhereInput[] | ProjectWhereInput | null
  NOT?: ProjectWhereInput[] | ProjectWhereInput | null
  foxer360Id?: ID_Input | null
  foxer360Id_not?: ID_Input | null
  foxer360Id_in?: ID_Output[] | ID_Output | null
  foxer360Id_not_in?: ID_Output[] | ID_Output | null
  foxer360Id_lt?: ID_Input | null
  foxer360Id_lte?: ID_Input | null
  foxer360Id_gt?: ID_Input | null
  foxer360Id_gte?: ID_Input | null
  foxer360Id_contains?: ID_Input | null
  foxer360Id_not_contains?: ID_Input | null
  foxer360Id_starts_with?: ID_Input | null
  foxer360Id_not_starts_with?: ID_Input | null
  foxer360Id_ends_with?: ID_Input | null
  foxer360Id_not_ends_with?: ID_Input | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  client?: ClientWhereInput | null
  websites_every?: WebsiteWhereInput | null
  websites_some?: WebsiteWhereInput | null
  websites_none?: WebsiteWhereInput | null
}

export interface ProjectWhereUniqueInput {
  foxer360Id?: ID_Input | null
  id?: ID_Input | null
}

export interface RoleCreateInput {
  name: String
  actions?: ActionCreateManyInput | null
  client: ClientCreateOneWithoutRolesInput
}

export interface RoleCreateManyInput {
  create?: RoleCreateInput[] | RoleCreateInput | null
  connect?: RoleWhereUniqueInput[] | RoleWhereUniqueInput | null
}

export interface RoleCreateManyWithoutClientInput {
  create?: RoleCreateWithoutClientInput[] | RoleCreateWithoutClientInput | null
  connect?: RoleWhereUniqueInput[] | RoleWhereUniqueInput | null
}

export interface RoleCreateWithoutClientInput {
  name: String
  actions?: ActionCreateManyInput | null
}

export interface RoleScalarWhereInput {
  AND?: RoleScalarWhereInput[] | RoleScalarWhereInput | null
  OR?: RoleScalarWhereInput[] | RoleScalarWhereInput | null
  NOT?: RoleScalarWhereInput[] | RoleScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
}

export interface RoleSubscriptionWhereInput {
  AND?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput | null
  OR?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput | null
  NOT?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: RoleWhereInput | null
}

export interface RoleUpdateDataInput {
  name?: String | null
  actions?: ActionUpdateManyInput | null
  client?: ClientUpdateOneRequiredWithoutRolesInput | null
}

export interface RoleUpdateInput {
  name?: String | null
  actions?: ActionUpdateManyInput | null
  client?: ClientUpdateOneRequiredWithoutRolesInput | null
}

export interface RoleUpdateManyDataInput {
  name?: String | null
}

export interface RoleUpdateManyInput {
  create?: RoleCreateInput[] | RoleCreateInput | null
  connect?: RoleWhereUniqueInput[] | RoleWhereUniqueInput | null
  set?: RoleWhereUniqueInput[] | RoleWhereUniqueInput | null
  disconnect?: RoleWhereUniqueInput[] | RoleWhereUniqueInput | null
  delete?: RoleWhereUniqueInput[] | RoleWhereUniqueInput | null
  update?: RoleUpdateWithWhereUniqueNestedInput[] | RoleUpdateWithWhereUniqueNestedInput | null
  updateMany?: RoleUpdateManyWithWhereNestedInput[] | RoleUpdateManyWithWhereNestedInput | null
  deleteMany?: RoleScalarWhereInput[] | RoleScalarWhereInput | null
  upsert?: RoleUpsertWithWhereUniqueNestedInput[] | RoleUpsertWithWhereUniqueNestedInput | null
}

export interface RoleUpdateManyMutationInput {
  name?: String | null
}

export interface RoleUpdateManyWithoutClientInput {
  create?: RoleCreateWithoutClientInput[] | RoleCreateWithoutClientInput | null
  connect?: RoleWhereUniqueInput[] | RoleWhereUniqueInput | null
  set?: RoleWhereUniqueInput[] | RoleWhereUniqueInput | null
  disconnect?: RoleWhereUniqueInput[] | RoleWhereUniqueInput | null
  delete?: RoleWhereUniqueInput[] | RoleWhereUniqueInput | null
  update?: RoleUpdateWithWhereUniqueWithoutClientInput[] | RoleUpdateWithWhereUniqueWithoutClientInput | null
  updateMany?: RoleUpdateManyWithWhereNestedInput[] | RoleUpdateManyWithWhereNestedInput | null
  deleteMany?: RoleScalarWhereInput[] | RoleScalarWhereInput | null
  upsert?: RoleUpsertWithWhereUniqueWithoutClientInput[] | RoleUpsertWithWhereUniqueWithoutClientInput | null
}

export interface RoleUpdateManyWithWhereNestedInput {
  where: RoleScalarWhereInput
  data: RoleUpdateManyDataInput
}

export interface RoleUpdateWithoutClientDataInput {
  name?: String | null
  actions?: ActionUpdateManyInput | null
}

export interface RoleUpdateWithWhereUniqueNestedInput {
  where: RoleWhereUniqueInput
  data: RoleUpdateDataInput
}

export interface RoleUpdateWithWhereUniqueWithoutClientInput {
  where: RoleWhereUniqueInput
  data: RoleUpdateWithoutClientDataInput
}

export interface RoleUpsertWithWhereUniqueNestedInput {
  where: RoleWhereUniqueInput
  update: RoleUpdateDataInput
  create: RoleCreateInput
}

export interface RoleUpsertWithWhereUniqueWithoutClientInput {
  where: RoleWhereUniqueInput
  update: RoleUpdateWithoutClientDataInput
  create: RoleCreateWithoutClientInput
}

export interface RoleWhereInput {
  AND?: RoleWhereInput[] | RoleWhereInput | null
  OR?: RoleWhereInput[] | RoleWhereInput | null
  NOT?: RoleWhereInput[] | RoleWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  actions_every?: ActionWhereInput | null
  actions_some?: ActionWhereInput | null
  actions_none?: ActionWhereInput | null
  client?: ClientWhereInput | null
}

export interface RoleWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  auth0Id: ID_Output
  avatar?: String | null
  email: String
  name: String
  superuser?: Boolean | null
  clients?: ClientCreateManyInput | null
  enabledProjects?: ProjectCreateManyInput | null
  enabledWebsites?: WebsiteCreateManyInput | null
  owns?: ClientCreateManyWithoutOwnersInput | null
  roles?: RoleCreateManyInput | null
  projectRoles?: UserProjectRolesCreateManyWithoutUserInput | null
  websiteRoles?: UserWebsiteRolesCreateManyWithoutUserInput | null
}

export interface UserCreateManyWithoutOwnsInput {
  create?: UserCreateWithoutOwnsInput[] | UserCreateWithoutOwnsInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutProjectRolesInput {
  create?: UserCreateWithoutProjectRolesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutWebsiteRolesInput {
  create?: UserCreateWithoutWebsiteRolesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutOwnsInput {
  auth0Id: ID_Output
  avatar?: String | null
  email: String
  name: String
  superuser?: Boolean | null
  clients?: ClientCreateManyInput | null
  enabledProjects?: ProjectCreateManyInput | null
  enabledWebsites?: WebsiteCreateManyInput | null
  roles?: RoleCreateManyInput | null
  projectRoles?: UserProjectRolesCreateManyWithoutUserInput | null
  websiteRoles?: UserWebsiteRolesCreateManyWithoutUserInput | null
}

export interface UserCreateWithoutProjectRolesInput {
  auth0Id: ID_Output
  avatar?: String | null
  email: String
  name: String
  superuser?: Boolean | null
  clients?: ClientCreateManyInput | null
  enabledProjects?: ProjectCreateManyInput | null
  enabledWebsites?: WebsiteCreateManyInput | null
  owns?: ClientCreateManyWithoutOwnersInput | null
  roles?: RoleCreateManyInput | null
  websiteRoles?: UserWebsiteRolesCreateManyWithoutUserInput | null
}

export interface UserCreateWithoutWebsiteRolesInput {
  auth0Id: ID_Output
  avatar?: String | null
  email: String
  name: String
  superuser?: Boolean | null
  clients?: ClientCreateManyInput | null
  enabledProjects?: ProjectCreateManyInput | null
  enabledWebsites?: WebsiteCreateManyInput | null
  owns?: ClientCreateManyWithoutOwnersInput | null
  roles?: RoleCreateManyInput | null
  projectRoles?: UserProjectRolesCreateManyWithoutUserInput | null
}

export interface UserProjectRolesCreateInput {
  user: UserCreateOneWithoutProjectRolesInput
  client: ClientCreateOneInput
  project: ProjectCreateOneInput
  roles?: RoleCreateManyInput | null
}

export interface UserProjectRolesCreateManyWithoutUserInput {
  create?: UserProjectRolesCreateWithoutUserInput[] | UserProjectRolesCreateWithoutUserInput | null
}

export interface UserProjectRolesCreateWithoutUserInput {
  client: ClientCreateOneInput
  project: ProjectCreateOneInput
  roles?: RoleCreateManyInput | null
}

export interface UserProjectRolesSubscriptionWhereInput {
  AND?: UserProjectRolesSubscriptionWhereInput[] | UserProjectRolesSubscriptionWhereInput | null
  OR?: UserProjectRolesSubscriptionWhereInput[] | UserProjectRolesSubscriptionWhereInput | null
  NOT?: UserProjectRolesSubscriptionWhereInput[] | UserProjectRolesSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserProjectRolesWhereInput | null
}

export interface UserProjectRolesUpdateManyWithoutUserInput {
  create?: UserProjectRolesCreateWithoutUserInput[] | UserProjectRolesCreateWithoutUserInput | null
}

export interface UserProjectRolesWhereInput {
  AND?: UserProjectRolesWhereInput[] | UserProjectRolesWhereInput | null
  OR?: UserProjectRolesWhereInput[] | UserProjectRolesWhereInput | null
  NOT?: UserProjectRolesWhereInput[] | UserProjectRolesWhereInput | null
  user?: UserWhereInput | null
  client?: ClientWhereInput | null
  project?: ProjectWhereInput | null
  roles_every?: RoleWhereInput | null
  roles_some?: RoleWhereInput | null
  roles_none?: RoleWhereInput | null
}

export interface UserScalarWhereInput {
  AND?: UserScalarWhereInput[] | UserScalarWhereInput | null
  OR?: UserScalarWhereInput[] | UserScalarWhereInput | null
  NOT?: UserScalarWhereInput[] | UserScalarWhereInput | null
  auth0Id?: ID_Input | null
  auth0Id_not?: ID_Input | null
  auth0Id_in?: ID_Output[] | ID_Output | null
  auth0Id_not_in?: ID_Output[] | ID_Output | null
  auth0Id_lt?: ID_Input | null
  auth0Id_lte?: ID_Input | null
  auth0Id_gt?: ID_Input | null
  auth0Id_gte?: ID_Input | null
  auth0Id_contains?: ID_Input | null
  auth0Id_not_contains?: ID_Input | null
  auth0Id_starts_with?: ID_Input | null
  auth0Id_not_starts_with?: ID_Input | null
  auth0Id_ends_with?: ID_Input | null
  auth0Id_not_ends_with?: ID_Input | null
  avatar?: String | null
  avatar_not?: String | null
  avatar_in?: String[] | String | null
  avatar_not_in?: String[] | String | null
  avatar_lt?: String | null
  avatar_lte?: String | null
  avatar_gt?: String | null
  avatar_gte?: String | null
  avatar_contains?: String | null
  avatar_not_contains?: String | null
  avatar_starts_with?: String | null
  avatar_not_starts_with?: String | null
  avatar_ends_with?: String | null
  avatar_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  superuser?: Boolean | null
  superuser_not?: Boolean | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateInput {
  auth0Id?: ID_Input | null
  avatar?: String | null
  email?: String | null
  name?: String | null
  superuser?: Boolean | null
  clients?: ClientUpdateManyInput | null
  enabledProjects?: ProjectUpdateManyInput | null
  enabledWebsites?: WebsiteUpdateManyInput | null
  owns?: ClientUpdateManyWithoutOwnersInput | null
  roles?: RoleUpdateManyInput | null
  projectRoles?: UserProjectRolesUpdateManyWithoutUserInput | null
  websiteRoles?: UserWebsiteRolesUpdateManyWithoutUserInput | null
}

export interface UserUpdateManyDataInput {
  auth0Id?: ID_Input | null
  avatar?: String | null
  email?: String | null
  name?: String | null
  superuser?: Boolean | null
}

export interface UserUpdateManyMutationInput {
  auth0Id?: ID_Input | null
  avatar?: String | null
  email?: String | null
  name?: String | null
  superuser?: Boolean | null
}

export interface UserUpdateManyWithoutOwnsInput {
  create?: UserCreateWithoutOwnsInput[] | UserCreateWithoutOwnsInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutOwnsInput[] | UserUpdateWithWhereUniqueWithoutOwnsInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutOwnsInput[] | UserUpsertWithWhereUniqueWithoutOwnsInput | null
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput
  data: UserUpdateManyDataInput
}

export interface UserUpdateWithoutOwnsDataInput {
  auth0Id?: ID_Input | null
  avatar?: String | null
  email?: String | null
  name?: String | null
  superuser?: Boolean | null
  clients?: ClientUpdateManyInput | null
  enabledProjects?: ProjectUpdateManyInput | null
  enabledWebsites?: WebsiteUpdateManyInput | null
  roles?: RoleUpdateManyInput | null
  projectRoles?: UserProjectRolesUpdateManyWithoutUserInput | null
  websiteRoles?: UserWebsiteRolesUpdateManyWithoutUserInput | null
}

export interface UserUpdateWithWhereUniqueWithoutOwnsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutOwnsDataInput
}

export interface UserUpsertWithWhereUniqueWithoutOwnsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutOwnsDataInput
  create: UserCreateWithoutOwnsInput
}

export interface UserWebsiteRolesCreateInput {
  user: UserCreateOneWithoutWebsiteRolesInput
  client: ClientCreateOneInput
  project: ProjectCreateOneInput
  website: WebsiteCreateOneInput
  roles?: RoleCreateManyInput | null
}

export interface UserWebsiteRolesCreateManyWithoutUserInput {
  create?: UserWebsiteRolesCreateWithoutUserInput[] | UserWebsiteRolesCreateWithoutUserInput | null
}

export interface UserWebsiteRolesCreateWithoutUserInput {
  client: ClientCreateOneInput
  project: ProjectCreateOneInput
  website: WebsiteCreateOneInput
  roles?: RoleCreateManyInput | null
}

export interface UserWebsiteRolesSubscriptionWhereInput {
  AND?: UserWebsiteRolesSubscriptionWhereInput[] | UserWebsiteRolesSubscriptionWhereInput | null
  OR?: UserWebsiteRolesSubscriptionWhereInput[] | UserWebsiteRolesSubscriptionWhereInput | null
  NOT?: UserWebsiteRolesSubscriptionWhereInput[] | UserWebsiteRolesSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWebsiteRolesWhereInput | null
}

export interface UserWebsiteRolesUpdateManyWithoutUserInput {
  create?: UserWebsiteRolesCreateWithoutUserInput[] | UserWebsiteRolesCreateWithoutUserInput | null
}

export interface UserWebsiteRolesWhereInput {
  AND?: UserWebsiteRolesWhereInput[] | UserWebsiteRolesWhereInput | null
  OR?: UserWebsiteRolesWhereInput[] | UserWebsiteRolesWhereInput | null
  NOT?: UserWebsiteRolesWhereInput[] | UserWebsiteRolesWhereInput | null
  user?: UserWhereInput | null
  client?: ClientWhereInput | null
  project?: ProjectWhereInput | null
  website?: WebsiteWhereInput | null
  roles_every?: RoleWhereInput | null
  roles_some?: RoleWhereInput | null
  roles_none?: RoleWhereInput | null
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  auth0Id?: ID_Input | null
  auth0Id_not?: ID_Input | null
  auth0Id_in?: ID_Output[] | ID_Output | null
  auth0Id_not_in?: ID_Output[] | ID_Output | null
  auth0Id_lt?: ID_Input | null
  auth0Id_lte?: ID_Input | null
  auth0Id_gt?: ID_Input | null
  auth0Id_gte?: ID_Input | null
  auth0Id_contains?: ID_Input | null
  auth0Id_not_contains?: ID_Input | null
  auth0Id_starts_with?: ID_Input | null
  auth0Id_not_starts_with?: ID_Input | null
  auth0Id_ends_with?: ID_Input | null
  auth0Id_not_ends_with?: ID_Input | null
  avatar?: String | null
  avatar_not?: String | null
  avatar_in?: String[] | String | null
  avatar_not_in?: String[] | String | null
  avatar_lt?: String | null
  avatar_lte?: String | null
  avatar_gt?: String | null
  avatar_gte?: String | null
  avatar_contains?: String | null
  avatar_not_contains?: String | null
  avatar_starts_with?: String | null
  avatar_not_starts_with?: String | null
  avatar_ends_with?: String | null
  avatar_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  superuser?: Boolean | null
  superuser_not?: Boolean | null
  clients_every?: ClientWhereInput | null
  clients_some?: ClientWhereInput | null
  clients_none?: ClientWhereInput | null
  enabledProjects_every?: ProjectWhereInput | null
  enabledProjects_some?: ProjectWhereInput | null
  enabledProjects_none?: ProjectWhereInput | null
  enabledWebsites_every?: WebsiteWhereInput | null
  enabledWebsites_some?: WebsiteWhereInput | null
  enabledWebsites_none?: WebsiteWhereInput | null
  owns_every?: ClientWhereInput | null
  owns_some?: ClientWhereInput | null
  owns_none?: ClientWhereInput | null
  roles_every?: RoleWhereInput | null
  roles_some?: RoleWhereInput | null
  roles_none?: RoleWhereInput | null
  projectRoles_every?: UserProjectRolesWhereInput | null
  projectRoles_some?: UserProjectRolesWhereInput | null
  projectRoles_none?: UserProjectRolesWhereInput | null
  websiteRoles_every?: UserWebsiteRolesWhereInput | null
  websiteRoles_some?: UserWebsiteRolesWhereInput | null
  websiteRoles_none?: UserWebsiteRolesWhereInput | null
}

export interface UserWhereUniqueInput {
  auth0Id?: ID_Input | null
  id?: ID_Input | null
}

export interface WebsiteCreateInput {
  foxer360Id: ID_Output
  name: String
  client: ClientCreateOneWithoutWebsitesInput
  project: ProjectCreateOneWithoutWebsitesInput
}

export interface WebsiteCreateManyInput {
  create?: WebsiteCreateInput[] | WebsiteCreateInput | null
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
}

export interface WebsiteCreateManyWithoutClientInput {
  create?: WebsiteCreateWithoutClientInput[] | WebsiteCreateWithoutClientInput | null
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
}

export interface WebsiteCreateManyWithoutProjectInput {
  create?: WebsiteCreateWithoutProjectInput[] | WebsiteCreateWithoutProjectInput | null
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
}

export interface WebsiteCreateOneInput {
  create?: WebsiteCreateInput | null
  connect?: WebsiteWhereUniqueInput | null
}

export interface WebsiteCreateWithoutClientInput {
  foxer360Id: ID_Output
  name: String
  project: ProjectCreateOneWithoutWebsitesInput
}

export interface WebsiteCreateWithoutProjectInput {
  foxer360Id: ID_Output
  name: String
  client: ClientCreateOneWithoutWebsitesInput
}

export interface WebsiteScalarWhereInput {
  AND?: WebsiteScalarWhereInput[] | WebsiteScalarWhereInput | null
  OR?: WebsiteScalarWhereInput[] | WebsiteScalarWhereInput | null
  NOT?: WebsiteScalarWhereInput[] | WebsiteScalarWhereInput | null
  foxer360Id?: ID_Input | null
  foxer360Id_not?: ID_Input | null
  foxer360Id_in?: ID_Output[] | ID_Output | null
  foxer360Id_not_in?: ID_Output[] | ID_Output | null
  foxer360Id_lt?: ID_Input | null
  foxer360Id_lte?: ID_Input | null
  foxer360Id_gt?: ID_Input | null
  foxer360Id_gte?: ID_Input | null
  foxer360Id_contains?: ID_Input | null
  foxer360Id_not_contains?: ID_Input | null
  foxer360Id_starts_with?: ID_Input | null
  foxer360Id_not_starts_with?: ID_Input | null
  foxer360Id_ends_with?: ID_Input | null
  foxer360Id_not_ends_with?: ID_Input | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
}

export interface WebsiteSubscriptionWhereInput {
  AND?: WebsiteSubscriptionWhereInput[] | WebsiteSubscriptionWhereInput | null
  OR?: WebsiteSubscriptionWhereInput[] | WebsiteSubscriptionWhereInput | null
  NOT?: WebsiteSubscriptionWhereInput[] | WebsiteSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: WebsiteWhereInput | null
}

export interface WebsiteUpdateDataInput {
  foxer360Id?: ID_Input | null
  name?: String | null
  client?: ClientUpdateOneRequiredWithoutWebsitesInput | null
  project?: ProjectUpdateOneRequiredWithoutWebsitesInput | null
}

export interface WebsiteUpdateInput {
  foxer360Id?: ID_Input | null
  name?: String | null
  client?: ClientUpdateOneRequiredWithoutWebsitesInput | null
  project?: ProjectUpdateOneRequiredWithoutWebsitesInput | null
}

export interface WebsiteUpdateManyDataInput {
  foxer360Id?: ID_Input | null
  name?: String | null
}

export interface WebsiteUpdateManyInput {
  create?: WebsiteCreateInput[] | WebsiteCreateInput | null
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  set?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  disconnect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  delete?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  update?: WebsiteUpdateWithWhereUniqueNestedInput[] | WebsiteUpdateWithWhereUniqueNestedInput | null
  updateMany?: WebsiteUpdateManyWithWhereNestedInput[] | WebsiteUpdateManyWithWhereNestedInput | null
  deleteMany?: WebsiteScalarWhereInput[] | WebsiteScalarWhereInput | null
  upsert?: WebsiteUpsertWithWhereUniqueNestedInput[] | WebsiteUpsertWithWhereUniqueNestedInput | null
}

export interface WebsiteUpdateManyMutationInput {
  foxer360Id?: ID_Input | null
  name?: String | null
}

export interface WebsiteUpdateManyWithoutClientInput {
  create?: WebsiteCreateWithoutClientInput[] | WebsiteCreateWithoutClientInput | null
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  set?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  disconnect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  delete?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  update?: WebsiteUpdateWithWhereUniqueWithoutClientInput[] | WebsiteUpdateWithWhereUniqueWithoutClientInput | null
  updateMany?: WebsiteUpdateManyWithWhereNestedInput[] | WebsiteUpdateManyWithWhereNestedInput | null
  deleteMany?: WebsiteScalarWhereInput[] | WebsiteScalarWhereInput | null
  upsert?: WebsiteUpsertWithWhereUniqueWithoutClientInput[] | WebsiteUpsertWithWhereUniqueWithoutClientInput | null
}

export interface WebsiteUpdateManyWithoutProjectInput {
  create?: WebsiteCreateWithoutProjectInput[] | WebsiteCreateWithoutProjectInput | null
  connect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  set?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  disconnect?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  delete?: WebsiteWhereUniqueInput[] | WebsiteWhereUniqueInput | null
  update?: WebsiteUpdateWithWhereUniqueWithoutProjectInput[] | WebsiteUpdateWithWhereUniqueWithoutProjectInput | null
  updateMany?: WebsiteUpdateManyWithWhereNestedInput[] | WebsiteUpdateManyWithWhereNestedInput | null
  deleteMany?: WebsiteScalarWhereInput[] | WebsiteScalarWhereInput | null
  upsert?: WebsiteUpsertWithWhereUniqueWithoutProjectInput[] | WebsiteUpsertWithWhereUniqueWithoutProjectInput | null
}

export interface WebsiteUpdateManyWithWhereNestedInput {
  where: WebsiteScalarWhereInput
  data: WebsiteUpdateManyDataInput
}

export interface WebsiteUpdateWithoutClientDataInput {
  foxer360Id?: ID_Input | null
  name?: String | null
  project?: ProjectUpdateOneRequiredWithoutWebsitesInput | null
}

export interface WebsiteUpdateWithoutProjectDataInput {
  foxer360Id?: ID_Input | null
  name?: String | null
  client?: ClientUpdateOneRequiredWithoutWebsitesInput | null
}

export interface WebsiteUpdateWithWhereUniqueNestedInput {
  where: WebsiteWhereUniqueInput
  data: WebsiteUpdateDataInput
}

export interface WebsiteUpdateWithWhereUniqueWithoutClientInput {
  where: WebsiteWhereUniqueInput
  data: WebsiteUpdateWithoutClientDataInput
}

export interface WebsiteUpdateWithWhereUniqueWithoutProjectInput {
  where: WebsiteWhereUniqueInput
  data: WebsiteUpdateWithoutProjectDataInput
}

export interface WebsiteUpsertWithWhereUniqueNestedInput {
  where: WebsiteWhereUniqueInput
  update: WebsiteUpdateDataInput
  create: WebsiteCreateInput
}

export interface WebsiteUpsertWithWhereUniqueWithoutClientInput {
  where: WebsiteWhereUniqueInput
  update: WebsiteUpdateWithoutClientDataInput
  create: WebsiteCreateWithoutClientInput
}

export interface WebsiteUpsertWithWhereUniqueWithoutProjectInput {
  where: WebsiteWhereUniqueInput
  update: WebsiteUpdateWithoutProjectDataInput
  create: WebsiteCreateWithoutProjectInput
}

export interface WebsiteWhereInput {
  AND?: WebsiteWhereInput[] | WebsiteWhereInput | null
  OR?: WebsiteWhereInput[] | WebsiteWhereInput | null
  NOT?: WebsiteWhereInput[] | WebsiteWhereInput | null
  foxer360Id?: ID_Input | null
  foxer360Id_not?: ID_Input | null
  foxer360Id_in?: ID_Output[] | ID_Output | null
  foxer360Id_not_in?: ID_Output[] | ID_Output | null
  foxer360Id_lt?: ID_Input | null
  foxer360Id_lte?: ID_Input | null
  foxer360Id_gt?: ID_Input | null
  foxer360Id_gte?: ID_Input | null
  foxer360Id_contains?: ID_Input | null
  foxer360Id_not_contains?: ID_Input | null
  foxer360Id_starts_with?: ID_Input | null
  foxer360Id_not_starts_with?: ID_Input | null
  foxer360Id_ends_with?: ID_Input | null
  foxer360Id_not_ends_with?: ID_Input | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  client?: ClientWhereInput | null
  project?: ProjectWhereInput | null
}

export interface WebsiteWhereUniqueInput {
  foxer360Id?: ID_Input | null
  id?: ID_Input | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface Action extends Node {
  id: ID_Output
  name: String
  description?: String | null
}

/*
 * A connection to a list of items.

 */
export interface ActionConnection {
  pageInfo: PageInfo
  edges: Array<ActionEdge | null>
  aggregate: AggregateAction
}

/*
 * An edge in a connection.

 */
export interface ActionEdge {
  node: Action
  cursor: String
}

export interface ActionPreviousValues {
  id: ID_Output
  name: String
  description?: String | null
}

export interface ActionSubscriptionPayload {
  mutation: MutationType
  node?: Action | null
  updatedFields?: Array<String> | null
  previousValues?: ActionPreviousValues | null
}

export interface AggregateAction {
  count: Int
}

export interface AggregateClient {
  count: Int
}

export interface AggregateProject {
  count: Int
}

export interface AggregateRole {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface AggregateUserProjectRoles {
  count: Int
}

export interface AggregateUserWebsiteRoles {
  count: Int
}

export interface AggregateWebsite {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Client extends Node {
  id: ID_Output
  name: String
  projects?: Array<Project> | null
  roles?: Array<Role> | null
  websites?: Array<Website> | null
  owners?: Array<User> | null
  secret?: String | null
}

/*
 * A connection to a list of items.

 */
export interface ClientConnection {
  pageInfo: PageInfo
  edges: Array<ClientEdge | null>
  aggregate: AggregateClient
}

/*
 * An edge in a connection.

 */
export interface ClientEdge {
  node: Client
  cursor: String
}

export interface ClientPreviousValues {
  id: ID_Output
  name: String
  secret?: String | null
}

export interface ClientSubscriptionPayload {
  mutation: MutationType
  node?: Client | null
  updatedFields?: Array<String> | null
  previousValues?: ClientPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Project extends Node {
  foxer360Id: ID_Output
  id: ID_Output
  name: String
  client: Client
  websites?: Array<Website> | null
}

/*
 * A connection to a list of items.

 */
export interface ProjectConnection {
  pageInfo: PageInfo
  edges: Array<ProjectEdge | null>
  aggregate: AggregateProject
}

/*
 * An edge in a connection.

 */
export interface ProjectEdge {
  node: Project
  cursor: String
}

export interface ProjectPreviousValues {
  foxer360Id: ID_Output
  id: ID_Output
  name: String
}

export interface ProjectSubscriptionPayload {
  mutation: MutationType
  node?: Project | null
  updatedFields?: Array<String> | null
  previousValues?: ProjectPreviousValues | null
}

export interface Role extends Node {
  id: ID_Output
  name: String
  actions?: Array<Action> | null
  client: Client
}

/*
 * A connection to a list of items.

 */
export interface RoleConnection {
  pageInfo: PageInfo
  edges: Array<RoleEdge | null>
  aggregate: AggregateRole
}

/*
 * An edge in a connection.

 */
export interface RoleEdge {
  node: Role
  cursor: String
}

export interface RolePreviousValues {
  id: ID_Output
  name: String
}

export interface RoleSubscriptionPayload {
  mutation: MutationType
  node?: Role | null
  updatedFields?: Array<String> | null
  previousValues?: RolePreviousValues | null
}

export interface User extends Node {
  auth0Id: ID_Output
  avatar?: String | null
  email: String
  id: ID_Output
  name: String
  clients?: Array<Client> | null
  enabledProjects?: Array<Project> | null
  enabledWebsites?: Array<Website> | null
  owns?: Array<Client> | null
  roles?: Array<Role> | null
  projectRoles?: Array<UserProjectRoles> | null
  websiteRoles?: Array<UserWebsiteRoles> | null
  superuser: Boolean
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  auth0Id: ID_Output
  avatar?: String | null
  email: String
  id: ID_Output
  name: String
  superuser: Boolean
}

export interface UserProjectRoles {
  user: User
  client: Client
  project: Project
  roles?: Array<Role> | null
}

/*
 * A connection to a list of items.

 */
export interface UserProjectRolesConnection {
  pageInfo: PageInfo
  edges: Array<UserProjectRolesEdge | null>
  aggregate: AggregateUserProjectRoles
}

/*
 * An edge in a connection.

 */
export interface UserProjectRolesEdge {
  node: UserProjectRoles
  cursor: String
}

export interface UserProjectRolesSubscriptionPayload {
  mutation: MutationType
  node?: UserProjectRoles | null
  updatedFields?: Array<String> | null
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

export interface UserWebsiteRoles {
  user: User
  client: Client
  project: Project
  website: Website
  roles?: Array<Role> | null
}

/*
 * A connection to a list of items.

 */
export interface UserWebsiteRolesConnection {
  pageInfo: PageInfo
  edges: Array<UserWebsiteRolesEdge | null>
  aggregate: AggregateUserWebsiteRoles
}

/*
 * An edge in a connection.

 */
export interface UserWebsiteRolesEdge {
  node: UserWebsiteRoles
  cursor: String
}

export interface UserWebsiteRolesSubscriptionPayload {
  mutation: MutationType
  node?: UserWebsiteRoles | null
  updatedFields?: Array<String> | null
}

export interface Website extends Node {
  foxer360Id: ID_Output
  id: ID_Output
  name: String
  client: Client
  project: Project
}

/*
 * A connection to a list of items.

 */
export interface WebsiteConnection {
  pageInfo: PageInfo
  edges: Array<WebsiteEdge | null>
  aggregate: AggregateWebsite
}

/*
 * An edge in a connection.

 */
export interface WebsiteEdge {
  node: Website
  cursor: String
}

export interface WebsitePreviousValues {
  foxer360Id: ID_Output
  id: ID_Output
  name: String
}

export interface WebsiteSubscriptionPayload {
  mutation: MutationType
  node?: Website | null
  updatedFields?: Array<String> | null
  previousValues?: WebsitePreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string