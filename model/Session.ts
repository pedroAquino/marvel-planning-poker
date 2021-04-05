import { UserModel } from './User';

export interface SessionModel  {
  id: number;
  displayId: string;
  name: string;
  creator: UserModel;
  participants: UserModel[];
}

export const Session = ({id = 0, displayId='', name='', creator = null, participants = []} = {}): SessionModel => ({
  id,
  displayId,
  name,
  creator,
  participants
});
