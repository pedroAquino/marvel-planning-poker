import Pusher from 'pusher';
import { JoinSessionEventModel } from '../model/JoinSessionEvent';
import { PickCardEventModel } from '../model/PickCardEvent';

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
  JOIN_SESSION_EVENT: 'join-session-event',
  PICK_CARD_EVENT: 'pick-card-event',
};

type TriggerEventRequestPayload = 
  JoinSessionEventModel |
  PickCardEventModel;

interface TriggerEventRequest {
  channel: string;
  event: string;
  payload: TriggerEventRequestPayload;
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

export async function triggerPickCardEvent(payload:PickCardEventModel): Promise<TriggerEventResponse> {
  return await triggerEvent({
    channel: CHANNELS['MPP_CHANNEL'],
    event: EVENTS['PICK_CARD_EVENT'],
    payload
  });
}