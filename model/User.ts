export enum UserRole {
  OBSERVER = 'OBSERVER',
  PLAYER = 'PLAYER'
}

export interface UserModel {
  id: number;
  name: string;
  role: UserRole;
}

export const User = ({ id= 0, name = '', role = UserRole['PLAYER'] } = {}): UserModel => ({
  id,
  name,
  role
});
