import { ImageType, PaginationType, Status } from "../types";

export type FetchParams = {
  limit?: number;
  page?: number;
  webinar?: "actual" | "old";
};

export type WebinarType = {
  id: string;
  name: string;
  images: ImageType;
  date: string;
  poperties: {
    FIO_SPIKERS: string[];
    DATE_WEBINAR: string;
  };
};

export type WebinarsData = {
  datas: WebinarType[];
  pagination: PaginationType | null;
};

export interface WebinarsSliceState {
  data: WebinarsData;
  status: Status;
}
