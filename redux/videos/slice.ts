import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../types";
import { fetchVideos } from "./asyncAction";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import { NewsSliceState } from "./types";

const initialState: NewsSliceState = {
  data: {
    datas: [],
    pagination: null,
  },
  status: Status.LOADING,
};

export const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.pending, (state) => {
      state.status = Status.LOADING;
      state.data = {
        datas: [],
        pagination: null,
      };
    });
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.data = action.payload;
    });
    builder.addCase(fetchVideos.rejected, (state) => {
      state.status = Status.ERROR;
      state.data = {
        datas: [],
        pagination: null,
      };
    });
    builder.addCase(HYDRATE as any, (state, action) => {
      const { data, status } = action.payload.videos;
      if (!data.datas) {
        return state;
      }
      state.data = data;
      state.status = status;
    });
  },
});

export const selectVideos = (state: AppState) => state.videos;

export default videosSlice.reducer;
