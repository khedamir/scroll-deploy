export type PreviewNewType = {
  date: string;
  name: string;
  rubric: string;
  image: string;
  content: string;
  anons: string;
  source: string;
  sourcePhoto: string;
};

export type PublishedNewType = {
  id: string;
  name: string;
  comments: number;
  likes: number;
  views: string;
  liked: boolean;
  rubric: string;
  anons: string;
  content: string;
  images: { detail: string };
  poperties: {
    SOURCE: string;
    PUB_SOURCE_LOGO: string;
    DRAFT?: "y";
    MODERATION?: "y";
  };
};

export interface NewPublicationSliceState {
  preview: PreviewNewType | null;
  published: PublishedNewType[];
  drafts: PublishedNewType[];
}
