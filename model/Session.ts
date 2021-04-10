import { string, object, array, number } from 'yup';
import { BaseModel, validate } from './Base';
import { UserModel, userSchema } from './User';

export interface SessionModel extends BaseModel  {
  id: number;
  displayId: string;
  name: string;
  creator: UserModel;
  participants: UserModel[];
}

export const sessionSchema = object().shape({
  id: number(),
  displayId: string(),
  name: string().required(),
  creator: userSchema.required(),
  participants: array().of(userSchema)
});

export function Session({id = 0, displayId='', name='', creator = null, participants = []} = {}): SessionModel {
  const model = {
    id,
    displayId,
    name,
    creator,
    participants
  };
  
  return {
    ...model,
    validate: () => validate(model, sessionSchema)
  }
};
