import { v4 as uuid } from 'uuid';
import { IUser, User } from './User';

export interface ISession  {
  id: string;
  creator: IUser;
  users: IUser[];
}

export const Session = ({id = uuid(), creator = User(), users = []} = {}): ISession => ({
  id,
  creator,
  users
});
