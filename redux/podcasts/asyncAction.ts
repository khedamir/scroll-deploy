import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchParams, PodcastsData } from "./types";
import { server } from "../../utils/server";

export const fetchPodcasts = createAsyncThunk<PodcastsData, FetchParams>(
  "podcasts/fetchPodcasts",
  async (params) => {
    const { data } = await server.get(
      `/sw/v1/publications/?iblockid=27`,
      {
        params,
      }
    );
    console.log(data);
    return data;
  }
);
