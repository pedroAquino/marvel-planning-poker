export interface IMarvelCharacter {
  name: string;
  image: string;
}

export const MarvelCharacter = ({ name = '', image = '' } = {}): IMarvelCharacter => ({
  name,
  image
});
