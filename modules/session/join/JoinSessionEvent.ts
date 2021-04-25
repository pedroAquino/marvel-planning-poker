import { UserModel, User } from '../..//user/User';
import { SessionModel, Session } from '../Session';

export interface JoinSessionEventModel {
  session: SessionModel;
  user: UserModel
}

export function JoinSessionEvent({ session = Session(), user = User() } = {}) {
  return {
    session,
    user,
  }
}
