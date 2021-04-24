import { PokerCard, PokerCardModel } from "./PokerCard";
import { User, UserModel } from "./User";

export interface PickCardEventModel {
  user: UserModel;
  card: PokerCardModel;
}

export function PickCardEvent({ user=User(), card=PokerCard() } = {}): PickCardEventModel {
  return {
    user,
    card,
  };
}