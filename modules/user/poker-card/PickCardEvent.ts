import { PokerCard, PokerCardModel } from "./PokerCard";
import { User, UserModel } from "../User";
import { Event } from "../../shared/model/Event";
import { CHANNELS, EVENTS, triggerEvent } from "../../shared/real-time/realTimeProvider";

type PickCardEvent = {
  user: UserModel;
  card: PokerCardModel;
};

export interface PickCardEventModel extends Event<PickCardEvent>, PickCardEvent {};

export function PickCardEvent({ user=User(), card=PokerCard() } = {}): PickCardEventModel {
  const model = {
    user,
    card,
  };

  async function trigger() {
    return await triggerEvent({
      channel: CHANNELS['MPP_CHANNEL'],
      event: EVENTS['PICK_CARD_EVENT'],
      payload: model
    });
  }

  return {
    ...model,
    trigger
  }; 
}