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
    items: FavoriteNew[];
  };
  "15": {
    items: FavoriteVideo[];
  };
  "26": {
    items: FavoriteVideo[];
  };
  "28": {
    items: FavoriteVideo[];
  };
  "34": {
    items: FavoritePodcast[];
  };
};

export type FavoriteSections = "9" | "15" | "26" | "28" | "34";

export interface FavoritesSliceState {
  data: FavoritesType;
  filled: boolean;
  status: Status;
}
