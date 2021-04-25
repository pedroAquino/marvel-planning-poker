import { string, object, array, number } from 'yup';
import { BaseModel, validate } from '../shared/model/Base';
import { UserModel, userSchema } from '../user/User';

export interface SessionModel extends BaseModel  {
  id: number;
  displayId: string;
  name: string;
  creator: UserModel;
  participants: UserModel[];
  hasParticipant: (userId: number) => boolean;
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

  function hasParticipant(userId: number): boolean {
    return model.participants.find(participant => participant.id === userId);
  }
  
  return {
    ...model,
    hasParticipant,
    validate: () => validate(model, sessionSchema)
  }
};
