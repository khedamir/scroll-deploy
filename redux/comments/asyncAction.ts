import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchParams, CommentType } from "./types";
import { server } from "../../utils/server";
import { PaginationType } from "../types";

export const fetchComments = createAsyncThunk<
  {
    datas: CommentType[];
    all_comments_count: number;
    pagination: PaginationType;
  },
  FetchParams
>("comments/fetchComments", async (params) => {
  const { data } = await server.post(`/sw/v1/comments.php`, params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return data;
});
