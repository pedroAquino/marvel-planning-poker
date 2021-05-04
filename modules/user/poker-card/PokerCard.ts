import { number, object, string } from 'yup';
import { BaseModel, validate } from '../../shared/model/Base';

export interface PokerCardModel extends BaseModel {
  size: number;
}

export const pokerCardSchema = object().shape({
  size: number().oneOf([1,2,3,5,8,13])
});

export function PokerCard({ size = 1 } = {}): PokerCardModel {
  const sizes = {
    1:1,
    2:2,
    3:3,
    5:5,
    8:8,
    13:13
  };
  return {
    size: sizes[size],
    async validate() {
      return await validate(this, pokerCardSchema);
    }
  }
};
 