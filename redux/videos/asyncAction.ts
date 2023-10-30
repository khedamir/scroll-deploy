import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchParams, VideoType, VideosData } from "./types";
import { server } from "../../utils/server";

export const fetchVideos = createAsyncThunk<VideosData, FetchParams>(
  "videos/fetchVideos",
  async (params) => {
    const { data } = await server.get(
      `/sw/v1/publications/?iblockid=15`,
      {
        params,
      }
    );
    console.log(data);
    return data;
  }
);
