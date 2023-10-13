import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../types";
import { fetchVideos } from "./asyncAction";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import { NewsSliceState } from "./types";

const initialState: NewsSliceState = {
  news: [],
  status: Status.LOADING,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.pending, (state) => {
      state.status = Status.LOADING;
      state.news = [];
    });
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.news = action.payload;
    });
    builder.addCase(fetchVideos.rejected, (state) => {
      state.status = Status.ERROR;
      state.news = [];
    });
    builder.addCase(HYDRATE as any, (state, action) => {
      const { news, status } = action.payload.news;
      if (!news) {
        return state;
      }
      state.news = news;
      state.status = status;
    });
  },
});

export const selectNews = (state: AppState) => state.news;

export default newsSlice.reducer;
