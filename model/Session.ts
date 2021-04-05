import { IUser, User } from './User';

export interface SessionModel  {
  id: number;
  displayId: string;
  name: string;
  creator: IUser;
  participants: IUser[];
}

export const Session = ({id = 0, displayId='', name='', creator = User(), participants = []} = {}): SessionModel => ({
  id,
  displayId,
  name,
  creator,
  participants
});
