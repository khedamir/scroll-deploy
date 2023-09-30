import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import rubricsReducer from "./rubrics/slice";

const store = () =>
  configureStore({
    reducer: {
      rubrics: rubricsReducer,
    },
  });

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const wrapper = createWrapper<AppStore>(store);
