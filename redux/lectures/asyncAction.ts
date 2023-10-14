import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchParams, LecturesData } from "./types";
import { server } from "../../utils/server";

export const fetchLectures = createAsyncThunk<LecturesData, FetchParams>(
  "lectures/fetchLectures",
  async (params) => {
    const { data } = await server.get(
      `/sw/v1/publications/?iblockid=26&sort=ASC`,
      {
        params,
      }
    );
    return data;
  }
);
