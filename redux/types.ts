export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type PaginationType = {
  page: number;
  perPage: number;
  totalCount: string;
  totalPages: number;
};

export type ImageType = {
  preview: string;
  detail: string;
};

export type PropType = { VALUE: string[] };

export type FullPublicationType = {
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

export type FullNewType = FullPublicationType & {
  author_name: string;
  author_surname: string;
  author_photo: string;
  props: {
    PUB_RUBRIC: PropType;
    SOURCE: PropType;
    PUB_SOURCE_LOGO: PropType;
    PUB_TAG: PropType;
  };
};

export type FullVideoType = FullPublicationType & {
  props: {
    LINK_VIDEO: PropType;
    PUB_AUTOR: PropType;
    PUB_TAG: PropType;
  };
};
