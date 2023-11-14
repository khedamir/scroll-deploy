import { ImageType, PaginationType, Status } from "../types";

export type FetchParams = {
  limit: number;
  page?: number;
  rubric?: number;
};

export type NewType = {
  id: string;
  name: string;
  images: ImageType;
  date: string;
  rubric: string;
  author_name: string;
  author_surname: string;
  author_photo: string;
  poperties: {
    PUB_SOURCE_LOGO: string;
    SOURCE: string;
    PUB_TAG: string[];
  };
};

export type NewsData = {
  datas: NewType[];
  pagination: PaginationType | null;
};

export interface NewsSliceState {
  data: NewsData;
  status: Status;
}
