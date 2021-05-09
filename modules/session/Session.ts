import { string, object, array, number } from 'yup';
import { BaseModel, Persistable, validate } from '../shared/model/Base';
import { TriggerEventResponse } from '../shared/real-time/realTimeProvider';
import { UserModel, userSchema } from '../user/User';
import { addUserToSession } from '../user/usersRepository';
import { JoinSessionEvent } from './join/JoinSessionEvent';
import { ShowAllCardsEvent } from './show-all-cards/ShowAllCardsEvent';
import { createSession, getSession } from './sessionsRepository';

export interface SessionModel  {
  id: number;
  displayId: string;
  name: string;
  creator: UserModel;
  participants: UserModel[];
}

interface SessionModelMethods extends BaseModel, Persistable<SessionModel> {
  hasParticipant: (userId: number) => boolean;
  join: (user: UserModel) => Promise<TriggerEventResponse>;
  showAllCards: (sender: UserModel) => Promise<TriggerEventResponse>;
}

export const sessionSchema = object().shape({
  id: number(),
  displayId: string(),
  name: string().required(),
  creator: userSchema.required(),
  participants: array().of(userSchema)
});

export function Session({id = 0, displayId='', name='', creator = null, participants = []} = {}): SessionModel & SessionModelMethods {  
  return {
    id,
    displayId,
    name,
    creator,
    participants,

    setModel(model) {
      this.id = model.id;
      this.displayId = model.displayId;
      this.name = model.name;
      this.creator = model.creator;
      this.participants = model.participants;
    },

    hasParticipant(userId: number): boolean {
      const participants = [...this.participants, this.creator];
      return participants.find(participant => participant.id === userId);
    },
  
    async join(user: UserModel) {
      await addUserToSession(user, this);
  
      this.participants.push(user);
  
      const event = JoinSessionEvent({
        // @ts-ignore
        session: this,
        // @ts-ignore
        user
      });
  
      return await event.trigger();
    },

    async showAllCards(sender: UserModel) {
      // @ts-ignore
      const event = ShowAllCardsEvent({ sender });
      return await event.trigger();
    },
  
    async save() {
      const model = await createSession(this, this.creator);
      this.setModel(model);
    },
  
    async fetch() {
      const model = await getSession(this.displayId);
      this.setModel(model);
    },

    async validate() {
      return await validate(this, sessionSchema);
    }
  };
};
