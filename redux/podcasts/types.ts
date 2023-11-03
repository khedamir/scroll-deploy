import { ImageType, PaginationType, Status } from "../types";

export type FetchParams = {
  limit?: number;
  page?: number;
  rubric?: number;
};

export type PodcastType = {
  id: string;
  name: string;
  images: ImageType;
  date: string;
  poperties: {
    PODCAST_AUTOR: string;
    LINK_AUDIO_PODCAST: string;
    PAGETITLE_PODCAST: string;
    DESCRIPTION_PODCAST: { TEXT: string };
  };
};

export type PodcastsData = {
  datas: PodcastType[];
  pagination: PaginationType | null;
};

export interface PodcastsSliceState {
  data: PodcastsData;
  status: Status;
}
