import { ImageType, PaginationType, Status } from "../types";

export type FetchParams = {
  limit?: number;
  page?: number;
  rubric?: number;
};

export type WebinarType = {
  id: string;
  name: string;
  images: ImageType;
  date: string;
  poperties: {
    FIO_SPIKERS: string[];
    FOTO_SPIKERS: string;
    PRISE_EVENTS: string;
    PRISE_SLOGAN: { TEXT: string };
    PROF_SPIKERS: string[];
    THEME_EVENTS: string[];
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
