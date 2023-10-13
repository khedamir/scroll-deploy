import { Status } from "../types";

export type FetchParams = {
  limit: number;
  page?: number;
  rubric?: number;
};

export type NewType = {
  id: string;
  name: string;
  images: string[];
  date: string;
  rubric: string;
  author: string;
  poperties: {
    NEWS_LOGO: string;
  };
};

export type PaginationType = {
  page: number;
  perPage: number;
  totalCount: string;
  totalPages: number;
};

export type NewsData = {
  datas: NewType[];
  pagination: PaginationType | null;
};

export interface NewsSliceState {
  data: NewsData;
  status: Status;
}
