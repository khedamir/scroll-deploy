import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchParams, NewType, NewsData } from "./types";
import { server } from "../../utils/server";

export const fetchNews = createAsyncThunk<NewsData, FetchParams>(
  "news/fetchNews",
  async (params) => {
    const { data } = await server.get(
      `/sw/v1/publications/?iblockid=9&sort=DESC`,
      {
        params,
      }
    );
    return data;
  }
);
