export interface IOriginILocation {
  name: string;
  url: string;
}

export interface ICreateFavorite {
  user_id: string;
  char_id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOriginILocation;
  location: IOriginILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface IDeleteFavorite {
  id: string;
  charId: number;
}
