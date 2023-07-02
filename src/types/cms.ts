export type Show = {
  id: string;
  title: string;
  startingTime: string;
  endingTime: string;
  destination: Destination;
  ticketsUrl?: string;
  moreInfoUrl?: string;
};

export type CMSImage = {
  id: string;
  url: string;
  width: number;
  height: number;
  alt?: string;
};

export type Destination = {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  coordinates: Coordinates;
};

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type Album = {
  id: string;
  title: string;
  releaseDate: string;
  albumCover: CMSImage;
  songs: Song[];
  url: URL;
};

export type Song = {
  id: string;
  trackNumber: number;
  releaseDate: string;
  title: string;
  singleCover: CMSImage;
  isSingle: boolean;
  url: URL;
};

export type URL = {
  id: string;
  spotifyUrl: string;
  appleMusicUrl: string;
};

export type BandMember = {
  id: string;
  firstName: string;
  lastName: string;
  image: CMSImage;
  role: string;
};

export type BlogPost = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  description: string;
  slug: string;
  image: CMSImage;
  bandMember: BandMember;
  releaseDate: string;
  article: Article;
};

type Article = {
  html: string;
  json: string;
  text: string;
};

export type Gallery = {
  id: string;
  image: CMSImage;
};
