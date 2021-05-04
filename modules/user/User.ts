import { string, object, number, array } from 'yup';
import { BaseModel, Persistable, validate } from '../shared/model/Base';
import { PokerCard, PokerCardModel, pokerCardSchema } from './poker-card/PokerCard';
import { PickCardEvent } from './poker-card/PickCardEvent';
import { TriggerEventResponse } from '../shared/real-time/realTimeProvider';
import { createUser, getUser } from './usersRepository';

export enum UserRole {
  OBSERVER = 'OBSERVER',
  PLAYER = 'PLAYER'
}

export interface UserModel {
  id: number;
  name: string;
  role: UserRole;
  deck: PokerCardModel[];
}

interface UserModelMethods extends BaseModel, Persistable<UserModel> {
  pickCard: (cardSize: number) => Promise<TriggerEventResponse>;
}

const deck = [
  PokerCard({ size: 1 }),
  PokerCard({ size: 2 }),
  PokerCard({ size: 3 }),
  PokerCard({ size: 5 }),
  PokerCard({ size: 8 }),
  PokerCard({ size: 13 })
];

export const userSchema = object().shape({
  id: number(),
  name: string().required(),
  role: string().oneOf([UserRole['OBSERVER'], UserRole['PLAYER']]),
  deck: array().of(pokerCardSchema)
});

export function User({ id= 0, name = '', role = UserRole['PLAYER'] } = {}): UserModel & UserModelMethods {
  return {
    id,
    name,
    role,
    deck,

    setModel(model) {
      this.id = model.id;
      this.name = model.name;
      this.role = model.role;
    },

    async pickCard(cardSize: number) {
      const card = this.deck.find(c => c.size === cardSize);
  
      if (!card) {
        throw new Error('card not found')
      }
  
      const event = PickCardEvent({
        // @ts-ignore
        user: this,
        card
      });
  
      return await event.trigger();
    },
  
    async save() {
      const model = await createUser(this);
      this.setModel(model);
    },
  
    async fetch() {
      const model = await getUser(this.id);
      this.setModel(model);
    },

    async validate() {
      return await validate(this, userSchema);
    }

  };
}
