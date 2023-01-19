export interface IProject {
  id: string
  clientId: string
  name: string
  description: string
  status: string
}

export interface IClient {
  id: string
  name: string
  email: string
  phone: string
}

export interface IClients { clients: Array<IClient> }
export interface IProjects { projects: Array<IProject> }