import { Event } from '../../shared/model/Event';
import { CHANNELS, EVENTS, triggerEvent } from '../../shared/real-time/realTimeProvider';
import { User, UserModel } from '../../user/User';

type ShowAllCardsEvent = {
  sender: UserModel;
};

interface ShowAllCardsEventModel extends Event<ShowAllCardsEvent>, ShowAllCardsEvent {};

export function ShowAllCardsEvent({ sender = User() } = {}): ShowAllCardsEventModel {
  return {
    sender,
    async trigger() {
      const response = await triggerEvent({
        channel: CHANNELS.MPP_CHANNEL,
        event: EVENTS.SHOW_ALL_CARDS_EVENT,
        payload: {
          sender
        }
      });
      return response;
    }
  };
};
