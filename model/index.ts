import { v4 as uuid } from 'uuid';

export enum UserRole {
  observer = 'observer',
  player = 'player'
}

export interface IUser {
  name: string;
  role: UserRole;
}

export const User = ({ name = '', role = UserRole['player'] } = {}): IUser => ({
  name,
  role
});

export interface ISession  {
  id: string;
  creator: IUser;
  users: IUser[];
}

export const Session = ({id = uuid(), creator = User(), users = []} = {}): ISession => ({
  id,
  creator,
  users
});

export interface IMarvelCharacter {
  name: string;
  image: string;
}

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

export const MarvelCharacter = ({ name = '', image = '' } = {}): IMarvelCharacter => ({
  name,
  image
});

export const PokerCard = ({ marvelCharacter = MarvelCharacter(), size = PokerCardSize['one'] }): IPokerCard => ({
  marvelCharacter,
  size
});
