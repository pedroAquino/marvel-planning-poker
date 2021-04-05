import { MarvelCharacter, IMarvelCharacter } from './MarvelCharacter';

export enum PokerCardSize {
  one = '1',
  two = '2',
  three = '3',
  five = '5',
  eight = '8',
  thirteen = '13',
}

export interface IPokerCard {
  marvelCharacter: IMarvelCharacter;
  size: PokerCardSize;
}

export const PokerCard = ({ marvelCharacter = MarvelCharacter(), size = PokerCardSize['one'] }): IPokerCard => ({
  marvelCharacter,
  size
});
 