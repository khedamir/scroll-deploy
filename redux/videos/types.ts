import { Status } from "../types";

export type FetchParams = {
  limit?: number;
  page?: number;
  rubric?: number;
};

export type VideoType = {
  id: string;
  name: string;
  images: string[];
  date: string;
  rubric: string;
  author: string;
  poperties: {
    LINK_VIDEO: string;
    PUB_AUTOR: string;
    PUB_TAG: [];
  };
};

export type PaginationType = {
  page: number;
  perPage: number;
  totalCount: string;
  totalPages: number;
};

export type VideosData = {
  datas: VideoType[];
  pagination: PaginationType | null;
};

export interface NewsSliceState {
  data: VideosData;
  status: Status;
}
