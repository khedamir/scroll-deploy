export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type FullPublicationType = {
  id: string;
  name: string;
  images: string[];
  anons: string;
  istoc: string;
  tags: string;
  author: string;
  date: string;
  rubric: string;
  video: string;
};

// export type FullPublicationType = {
//   CREATED_USER_NAME: string;
//   CREATED_DATE: string;
//   DETAIL_PAGE_URL: string;
//   DETAIL_PICTURE: string;
//   DETAIL_TEXT: string;
//   NAME: string;
//   PREVIEW_TEXT: string;
//   TAGS: string;
// };
