import { Project } from './project';
import { Client } from './client';
import { User } from './user';
interface Budget {
  _id: string;
  total: string;
  project: Project._id;
  client: Client._id;
  status: string;
  created_by: User._id;
  edited_by?: User._id;
}

export type { Budget };
