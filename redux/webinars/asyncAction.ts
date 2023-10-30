import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchParams, WebinarsData } from "./types";
import { server } from "../../utils/server";

export const fetchWebinars = createAsyncThunk<WebinarsData, FetchParams>(
  "webinars/fetchWebinars",
  async (params) => {
    const { data } = await server.get(
      `/sw/v1/publications/?iblockid=11`,
      {
        params,
      }
    );
    return data;
  }
);
