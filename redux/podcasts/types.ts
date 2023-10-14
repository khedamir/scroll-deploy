import { Status } from "../types";

export type FetchParams = {
  limit?: number;
  page?: number;
  rubric?: number;
};

export type PodcastType = {
  id: string;
  name: string;
  images: string[];
  date: string;
  poperties: {
    DESCRIPTION_PODCAST: { TEXT: string };
    LINK_AUDIO_PODCAST: string;
    PAGETITLE_PODCAST: string;
    PODCAST_AUTOR: string;
  };
};

export type PaginationType = {
  page: number;
  perPage: number;
  totalCount: string;
  totalPages: number;
};

export type PodcastsData = {
  datas: PodcastType[];
  pagination: PaginationType | null;
};

export interface PodcastsSliceState {
  data: PodcastsData;
  status: Status;
}
