export enum UserRole {
  observer = 'OBSERVER',
  player = 'PLAYER'
}

export interface UserModel {
  name: string;
  role: UserRole;
}

export const User = ({ name = '', role = UserRole['PLAYER'] } = {}): UserModel => ({
  name,
  role
});
