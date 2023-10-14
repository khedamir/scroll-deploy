import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../types";
import { fetchPodcasts } from "./asyncAction";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import { PodcastsSliceState } from "./types";

const initialState: PodcastsSliceState = {
  data: {
    datas: [],
    pagination: null,
  },
  status: Status.LOADING,
};

export const podcastsSlice = createSlice({
  name: "podcasts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPodcasts.pending, (state) => {
      state.status = Status.LOADING;
      state.data = {
        datas: [],
        pagination: null,
      };
    });
    builder.addCase(fetchPodcasts.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.data = action.payload;
    });
    builder.addCase(fetchPodcasts.rejected, (state) => {
      state.status = Status.ERROR;
      state.data = {
        datas: [],
        pagination: null,
      };
    });
    builder.addCase(HYDRATE as any, (state, action) => {
      const { data, status } = action.payload.podcasts;
      if (!data.datas) {
        return state;
      }
      state.data = data;
      state.status = status;
    });
  },
});

export const selectPodcasts = (state: AppState) => state.podcasts;

export default podcastsSlice.reducer;
