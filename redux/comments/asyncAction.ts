import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchParams, CommentType } from "./types";
import { server } from "../../utils/server";

export const fetchComments = createAsyncThunk<CommentType[], FetchParams>(
  "comments/fetchComments",
  async (params) => {
    const { data } = await server.post(`/sw/v1/comments.php`, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return data.datas;
  }
);