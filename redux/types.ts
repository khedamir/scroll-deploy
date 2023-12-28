export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type RubricType = {
  CODE: string;
  ID: string;
  NAME: string;
  SHOW_IN_MAIN_MENU: boolean;
  THEME_ICON_PATH: string;
};

export type NewType = {
  id: string;
  name: string;
  likes: string;
  views: string;
  liked: boolean; // возможно надо убрать
  anons: string;
  images: { detail: string };
  date: string;
  rubric: string;
  author_name: string;
  author_surname: string;
  author_avatar_color: string;
  author_photo: string;
  poperties: {
    PUB_TAG: string[];
    SOURCE: string;
    PUB_SOURCE_LOGO: string;
    AUTHOR: number;
  };
};

export type VideoType = {
  id: string;
  name: string;
  likes: string;
  views: string;
  liked: boolean; // возможно надо убрать
  images: { preview: string };
  date: string;
  poperties: {
    PUB_TAG: string;
    PUB_AUTOR: string;
    LINK_VIDEO: string;
  };
};

export type TrendType = {
  id: string;
  name: string;
  likes: string;
  views: string;
  liked: boolean; // возможно надо убрать
  images: { preview: string };
  date: string;
  poperties: {
    PUB_TAG: string[];
    PUB_AUTOR: string;
    LINK_VIDEO: string;
    AUTHOR_LOGO: string;
  };
};

export type EditionType = {
  id: string;
  name: string;
  anons: string;
  date: string;
  podcastId: string;
  podcastName: string;
  podcastAuthor: string;
  podcastPhoto: string;
  poperties: {
    EDITION: string;
    DURATION: string;
    LINK_AUDIO: string;
  };
};

export type WebinarType = {
  id: string;
  name: string;
  anons: string;
  images: { preview: string };
  date: string;
  poperties: {
    FIO_SPIKERS: string[];
    PROF_SPIKERS: string[];
    FOTO_SPIKERS: string[]; // в апи надо исправить
    THEME_EVENTS: string[7];
    PRISE_EVENTS: string;
    PRISE_SLOGAN: string;
    DATE_WEBINAR: string;
    VIDEO_VEBINAR: string | undefined;
  };
};

// ???

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
  author_avatar_color: string;
  props: {
    PUB_RUBRIC: PropType;
    SOURCE: PropType;
    PUB_SOURCE_LOGO: PropType;
    PUB_TAG: PropType;
    WIDGET: PropType;
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
  editions: EDITIONType[];
};

export type EDITIONType = {
  id: string;
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
