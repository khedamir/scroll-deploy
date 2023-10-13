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
};

export interface NewsSliceState {
  news: VideoType[];
  status: Status;
}
