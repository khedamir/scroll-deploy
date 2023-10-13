import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchParams, VideoType } from "./types";
import { server } from "../../utils/server";

export const fetchVideos = createAsyncThunk<VideoType[], FetchParams>(
  "videos/fetchVideos",
  async (params) => {
    const { data } = await server.get(
      `/sw/v1/publications/?iblockid=15&sort=ASC`,
      {
        params,
      }
    );
    return data.datas;
  }
);
