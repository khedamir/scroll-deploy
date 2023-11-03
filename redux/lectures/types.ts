import { ImageType, PaginationType, Status } from "../types";

export type FetchParams = {
  limit?: number;
  page?: number;
  rubric?: number;
};

export type LectureType = {
  id: string;
  name: string;
  images: ImageType;
  date: string;
  poperties: {
    PUB_AUTOR: string;
    LINK_VIDEO: string;
  };
};

export type LecturesData = {
  datas: LectureType[];
  pagination: PaginationType | null;
};

export interface LecturesSliceState {
  data: LecturesData;
  status: Status;
}
