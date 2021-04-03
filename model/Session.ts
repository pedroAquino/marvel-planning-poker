import { v4 as uuid } from 'uuid';
import { IUser, User } from './User';

export interface ISession  {
  id: string;
  name: string;
  creator: IUser;
  participants: IUser[];
}

export const Session = ({id = uuid(), name='', creator = User(), participants = []} = {}): ISession => ({
  id,
  name,
  creator,
  participants
});
