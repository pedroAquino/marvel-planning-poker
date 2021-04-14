import Pusher from 'pusher';
import { JoinSessionEventModel } from '../model/JoinSessionEvent';

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: false
});

const CHANNELS = {
  MPP_CHANNEL: 'mpp-channel'
};

const EVENTS = {
  JOIN_SESSION_EVENT: 'join-session-event'
};

interface TriggerEventRequest {
  channel: string;
  event: string;
  payload: JoinSessionEventModel;
}

interface TriggerEventResponse {
  response: any;
}

async function triggerEvent({channel, event, payload}: TriggerEventRequest): Promise<TriggerEventResponse> {
  const response = await pusher.trigger(
    channel,
    event,
    payload
  );

  return {
    response
  };
}

export async function triggerJoinSessionEvent(payload: JoinSessionEventModel): Promise<TriggerEventResponse> {
  return await triggerEvent({
    channel: CHANNELS['MPP_CHANNEL'],
    event: EVENTS['JOIN_SESSION_EVENT'],
    payload
  });
}
