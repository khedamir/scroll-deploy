import { Status } from "../types";

export type FetchParams = {
  limit?: number;
  page?: number;
  rubric?: number;
};

export type LectureType = {
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

export type LecturesData = {
  datas: LectureType[];
  pagination: PaginationType | null;
};

export interface LecturesSliceState {
  data: LecturesData;
  status: Status;
}
