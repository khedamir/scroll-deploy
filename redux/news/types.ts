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
  author_name: string;
  author_surname: string;
  author_photo: string;
  poperties: {
    NEWS_LOGO: string;
    PUB_SOURCE: "";
    PUB_SOURCE_LOGO: "";
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
