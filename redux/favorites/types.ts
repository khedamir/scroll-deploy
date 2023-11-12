import { ImageType, Status } from "../types";

export type FetchParams = {
  userId: string;
  type: string;
};

export type New = {
  id: string;
  data: {
    NAME: string;
    props: {
      PUB_TAG: { VALUE: string[] };
    };
  };
};

export type Video = {
  id: string;
  data: {
    images: ImageType;
  };
};


export type Podcast = {
  id: string;
  data: {
    images: ImageType;
    NAME: string;
    podcastId: string;
    podcastAuthor: string;
    podcastPhoto: string;
    props: {
      EDITION: { VALUE: string[] };
    };
  };
};

export type FavoritesType = {
  "9": {
    NAME: "Новости";
    items: New[];
  };
  "15": {
    NAME: "Видео";
    items: Video[];
  };
  "26": {
    NAME: "Лекции";
    items: Video[];
  };
  "28": {
    NAME: "Тренды";
    items: Video[];
  };
  "34": {
    NAME: "Выпуски (Подкасты)";
    items: Podcast[];
  };
};

export interface FavoritesSliceState {
  data: FavoritesType;
  status: Status;
}
