import { object, string } from 'yup';
import { BaseModel, validate } from '../shared/model/Base';

export enum PokerCardSize {
  one = '1',
  two = '2',
  three = '3',
  five = '5',
  eight = '8',
  thirteen = '13',
}

export interface PokerCardModel extends BaseModel {
  size: PokerCardSize;
}

const schema = object().shape({
  size: string().oneOf([
    PokerCardSize['one'],
    PokerCardSize['two'],
    PokerCardSize['three'],
    PokerCardSize['five'],
    PokerCardSize['eight'],
    PokerCardSize['thirteen']
  ])
});

export function PokerCard({ size = PokerCardSize['one'] } = {}): PokerCardModel {
  const model = {
    size,
  };
  
  return {
    ...model,
    validate: () => validate(model, schema),
  }
};
 