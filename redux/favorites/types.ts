import { ImageType, Status } from "../types";

export type FetchParams = {
  userId: string;
  type: string;
};

export type FavoriteNew = {
  id: string;
  data: {
    NAME: string;
    images: { detail: string };
    props: {
      PUB_TAG: { VALUE: string[] };
      PUB_RUBRIC: { VALUE: string[] };
    };
  };
};

export type FavoriteVideo = {
  id: string;
  data: {
    NAME: string;
    images: ImageType;
  };
};

export type FavoritePodcast = {
  id: string;
  data: {
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
    // NAME: "Новости";
    items: FavoriteNew[];
  };
  "15": {
    // NAME: "Видео";
    items: FavoriteVideo[];
  };
  "26": {
    // NAME: "Лекции";
    items: FavoriteVideo[];
  };
  "28": {
    // NAME: "Тренды";
    items: FavoriteVideo[];
  };
  "34": {
    // NAME: "Выпуски (Подкасты)";
    items: FavoritePodcast[];
  };
};

export type FavoriteSections = "9" | "15" | "26" | "28" | "34";

export interface FavoritesSliceState {
  data: FavoritesType;
  status: Status;
}
