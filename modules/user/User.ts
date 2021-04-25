import { string, object, number } from 'yup';
import { BaseModel, validate } from '../shared/model/Base';

export enum UserRole {
  OBSERVER = 'OBSERVER',
  PLAYER = 'PLAYER'
}

export interface UserModel extends BaseModel {
  id: number;
  name: string;
  role: UserRole;
}

export const userSchema = object().shape({
  id: number(),
  name: string().required(),
  role: string().oneOf([UserRole['OBSERVER'], UserRole['PLAYER']])
});

export function User({ id= 0, name = '', role = UserRole['PLAYER'] } = {}): UserModel {
  const model = {
    id,
    name,
    role
  };

  return {
    ...model,
    validate: () => validate(model, userSchema)
  };
}
