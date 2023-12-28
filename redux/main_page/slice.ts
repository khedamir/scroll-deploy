import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../types";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import { MainPageDataSlice } from "./types";
import {
  fetchEditions,
  fetchLectures,
  fetchNews,
  fetchRubrics,
  fetchTrends,
  fetchWebinars,
} from "./asyncAction";

const initialState: MainPageDataSlice = {
  rubrics: [],
  news: [],
  trends: [],
  editions: [],
  lectures: [],
  webinars: [],
  popularRubrics: {
    data: [],
    status: Status.LOADING,
  },
  widget: {
    data: {},
    status: Status.LOADING,
  },
};

export const mainPageSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRubrics.fulfilled, (state, action) => {
      state.rubrics = action.payload;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(fetchTrends.fulfilled, (state, action) => {
      state.trends = action.payload;
    });
    builder.addCase(fetchEditions.fulfilled, (state, action) => {
      state.editions = action.payload;
    });
    builder.addCase(fetchLectures.fulfilled, (state, action) => {
      state.lectures = action.payload;
    });
    builder.addCase(fetchWebinars.fulfilled, (state, action) => {
      state.webinars = action.payload;
    });
    builder.addCase(HYDRATE as any, (state, action) => {
      const { rubrics, news, trends, editions, lectures, webinars } =
        action.payload.mainPage;
      if (rubrics) {
        state.rubrics = rubrics;
      }
      if (news) {
        state.news = news;
      }
      if (trends) {
        state.trends = trends;
      }
      if (editions) {
        state.editions = editions;
      }
      if (lectures) {
        state.lectures = lectures;
      }
      if (webinars) {
        state.webinars = webinars;
      }

      return state;
    });
  },
});

export const selectMainPage = (state: AppState) => state.mainPage;

export default mainPageSlice.reducer;
