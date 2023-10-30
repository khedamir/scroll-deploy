export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type PropType = { VALUE: string[] };

export type PublicationType = {
  id: string;
  name: string;
  images: string[];
  content: string;
  anons: string;
  date: string;
  liked: boolean;
  likes: string;
  views: string;
};

export type FullNewType = PublicationType & {
  author_name: string;
  author_surname: string;
  author_photo: string;
  props: {
    NEWS_LOGO: PropType;
    PUB_RUBRIC: PropType;
    SOURCE: PropType;
    PUB_SOURCE: PropType;
    PUB_SOURCE_LOGO: PropType;
    PUB_TAG: PropType;
  };
};

export type FullVideoType = PublicationType & {
  props: {
    PUB_AUTOR: PropType;
    PUB_TAG: PropType;
    LINK_VIDEO: PropType;
  };
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
