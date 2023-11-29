import { Status } from "../types";

export type CommentsFetchType = "get" | "add" | "addLike" | "deleteLike";

export type FetchParams = {
  id_publication: string;
  type: CommentsFetchType;
};


export type CommentType = {
  ID: string;
  UF_ACTIVE: string;
  UF_ID_PUBLICATION: string;
  UF_DEPTH_LEVEL: string;
  UF_AUTHOR: string;
  UF_DATE: string;
  UF_TEXT: string;
  UF_IBLOCK_ID: string;
  UF_IBLOCK_NAME: string;
  UF_PARENT_ID: string;
  UF_LIKES: string;
  author_name: string;
  author_surname: string;
  author_photo: string;
  ANSWERS: CommentType[];
};

export interface CommentsSliceState {
  data: CommentType[];
  status: Status;
}
