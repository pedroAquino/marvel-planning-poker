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

export interface IPokerCard {
  marvelCharacter: IMarvelCharacter;
  size: '1' | '2' | '3' | '5' | '8' | '13';
}

export const MarvelCharacter = ({ name = '', image = '' } = {}): IMarvelCharacter => ({
  name,
  image
});

export const PokerCard = ({ marvelCharacter = MarvelCharacter(), size }): IPokerCard => ({
  marvelCharacter,
  size
});
