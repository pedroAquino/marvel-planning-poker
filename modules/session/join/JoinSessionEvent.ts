import { UserModel, User } from '../..//user/User';
import { SessionModel, Session } from '../Session';
import { Event } from '../../shared/model/Event';
import { triggerEvent, CHANNELS, EVENTS } from '../../shared/real-time/realTimeProvider';

type JoinSessionEvent = {
  session: SessionModel;
  user: UserModel;
};

export interface JoinSessionEventModel extends Event<JoinSessionEvent>, JoinSessionEvent {}

export function JoinSessionEvent({ session = Session(), user = User() } = {}): JoinSessionEventModel {
  const model = {
    session,
    user,
  };
  
  async function trigger() {
    return await triggerEvent({
      channel: CHANNELS['MPP_CHANNEL'],
      event: EVENTS['JOIN_SESSION_EVENT'],
      payload: model
    });
  };

  return {
    ...model,
    trigger
  };
  
}
