export enum UserRole {
  observer = 'observer',
  player = 'player'
}

export interface IUser {
  name: string;
  role: UserRole;
}

export const User = ({ name = '', role = UserRole['player'] } = {}): IUser => ({
  name,
  role
});
