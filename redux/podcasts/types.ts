import { ImageType, PaginationType, Status } from "../types";

export type FetchParams = {
  limit?: number;
  page?: number;
  rubric?: number;
};

export type PodcastType = {
  id: string;
  name: string;
  anons: string;
  images: ImageType;
  date: string;
  poperties: {
    EDITION: string;
    DURATION: string;
    LINK_AUDIO: string;
  };
  podcastId: string;
  podcastName: string;
  podcastAuthor: string;
  podcastPhoto: string;
};

export type PodcastsData = {
  datas: PodcastType[];
  pagination: PaginationType | null;
};

export interface PodcastsSliceState {
  data: PodcastsData;
  status: Status;
}
