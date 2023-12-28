import {
  EditionType,
  NewType,
  RubricType,
  Status,
  TrendType,
  VideoType,
  WebinarType,
} from "../types";

export interface MainPageDataSlice {
  // ssr
  rubrics: RubricType[];
  news: NewType[];
  trends: TrendType[];
  editions: EditionType[];
  lectures: VideoType[];
  webinars: WebinarType[];

  //   client
  popularRubrics: {
    status: Status;
    data: [];
  };
  widget: {
    status: Status;
    data: {};
  };
}
