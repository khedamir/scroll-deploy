import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import trandsReducer from "./trends/slice";
import commentsReducer from "./comments/slice";
import authReducer from "./auth/slice";
import favoritesReducer from "./favorites/slice";
import notificationsReducer from "./notifications/slice";
import newpublicationReducer from "./new_publication/slice";
import mainPageReducer from "./main_page/slice";

const store = () =>
  configureStore({
    reducer: {
      mainPage: mainPageReducer,

      trands: trandsReducer,

      comments: commentsReducer,
      auth: authReducer,
      newpublication: newpublicationReducer,
      favorites: favoritesReducer,
      notifications: notificationsReducer,
    },
  });

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const wrapper = createWrapper<AppStore>(store);
