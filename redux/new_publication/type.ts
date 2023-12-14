export type PreviewNewType = {
  date: string;
  name: string;
  rubric: string;
  image: string;
  content: string;
  author_name: string;
  author_surname: string;
  author_photo: string;
  author_avatar_color: string;
};

export interface NewPublicationSliceState {
  preview: PreviewNewType | null;
  published: [];
  drafts: [];
}
