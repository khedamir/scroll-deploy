import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchParams, CommentType } from "./types";
import { server } from "../../utils/server";

export const fetchComments = createAsyncThunk<
  { datas: CommentType[]; all_comments_count: number },
  FetchParams
>("comments/fetchComments", async (params) => {
  console.log(params);
  const { data } = await server.post(`/sw/v1/comments.php`, params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  console.log(data);
  return data;
});
