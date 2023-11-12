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

export type FullPodcastType = {
  id: string;
  name: string;
  content: string;
  date: string;
  images: ImageType;
  props: {
    AUTHOR_PODCAST: PropType;
  };
  editions: EditionType[];
};

export type EditionType = {
  anons: string;
  name: string;
  props: {
    AUDIO_FILE: PropType;
    DURATION: PropType;
    EDITION: PropType;
    LINK_AUDIO: PropType;
  };
};

export type FullWebinarType = {
  id: string;
  name: string;
  content: string;
  images: string[];
  date: string;
  props: {
    DATE_WEBINAR: { VALUE: string };
    FIO_SPIKERS: PropType;
    FOTO_SPIKERS: PropType;
    PROF_SPIKERS: PropType;
    PRISE_EVENTS: PropType;
    THEME_EVENTS: PropType;
    PRISE_SLOGAN: { VALUE: string };
    VIDEO: { VALUE: string };
  };
};
