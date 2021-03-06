import { v4 as uuid } from 'uuid';

export enum UserRole {
  oberver = 'observer',
  player = 'player'
}

export interface IUser {
  name: string;
  role: UserRole;
}

export interface ISession  {
  id: string;
  creator: IUser;
  users: IUser[];
}

export const User = ({ name = '', role = UserRole['player'] } = {}): IUser => ({
  name,
  role
});

export const Session = ({id = uuid(), creator = User(), users = []} = {}): ISession => ({
  id,
  creator,
  users
});