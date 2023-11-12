import { ImageType, PaginationType, Status } from "../types";

export type FetchParams = {
  limit: number;
  page?: number;
  rubric?: number;
};

export type TrendType = {
  id: string;
  name: string;
  images: ImageType;
  date: string;
  likes: string;
  poperties: {
    PUB_TAG: string[];
    PUB_AUTOR: string;
    LINK_VIDEO: string;
    AUTHOR_LOGO: string;
  };
};

export type TrendsData = {
  datas: TrendType[];
  pagination: PaginationType | null;
};

export interface TrendsSliceState {
  data: TrendsData;
  status: Status;
}
