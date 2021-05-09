import Pusher from 'pusher';

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: false
});

export const CHANNELS = {
  MPP_CHANNEL: 'mpp-channel'
};

export const EVENTS = {
  JOIN_SESSION_EVENT: 'join-session-event',
  PICK_CARD_EVENT: 'pick-card-event',
  SHOW_ALL_CARDS_EVENT: 'show-all-cards-event'
};

export interface TriggerEventRequest {
  channel: string;
  event: string;
  payload: any;
}

export interface TriggerEventResponse {
  response: any;
}

export async function triggerEvent({channel, event, payload}: TriggerEventRequest): Promise<TriggerEventResponse> {
  const response = await pusher.trigger(
    channel,
    event,
    payload
  );

  return {
    response
  };
}
