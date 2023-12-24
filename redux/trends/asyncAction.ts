import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchParams, TrendsData } from "./types";
import { server } from "../../utils/server";

export const fetchTrends = createAsyncThunk<TrendsData, FetchParams>(
  "trends/fetchTrends",
  async (params) => {
    const { data } = await server.get(
      `/sw/v1/publications/?iblockid=28&width=500&height=400`,
      {
        params,
      }
    );
    return data;
  }
);
