import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import newsReducer from "./news/slice";
import videosReducer from "./videos/slice";
import lecturesReducer from "./lectures/slice";
import podcastsReducer from "./podcasts/slice";
import trandsReducer from "./trends/slice";
import vacanciesReducer from "./vacancies/slice";
import webinarsReducer from "./webinars/slice";
import commentsReducer from "./comments/slice";
import authReducer from "./auth/slice";
import favoritesReducer from "./favorites/slice";
import newpublicationReducer from "./new_publication/slice";

import mainPageReducer from "./main_page/slice";

const store = () =>
  configureStore({
    reducer: {
      mainPage: mainPageReducer,

      news: newsReducer,
      videos: videosReducer,
      lectures: lecturesReducer,
      podcasts: podcastsReducer,
      trands: trandsReducer,
      vacancies: vacanciesReducer,
      webinars: webinarsReducer,
      comments: commentsReducer,
      auth: authReducer,
      newpublication: newpublicationReducer,
      favorites: favoritesReducer,
    },
  });

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const wrapper = createWrapper<AppStore>(store);
