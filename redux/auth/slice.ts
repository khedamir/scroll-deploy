import { HYDRATE } from "next-redux-wrapper";
import {
  AnyAction,
  AsyncThunkAction,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { AppState } from "../store";
import { fetchAuth, fetchAuthMe } from "./asyncAction";
import { Status } from "../types";
import { AuthSliceState, UserData } from "./types";

const initialState: AuthSliceState = {
  user: null,
  status: Status.LOADING,
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.status = Status.LOADING;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.pending, (state) => {
      state.status = Status.LOADING;
      state.user = null;
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      localStorage.setItem("token", action.payload.Authorization);
    });
    builder.addCase(fetchAuth.rejected, (state, action) => {
      console.log(action);
      state.status = Status.ERROR;
      state.user = null;
    });
    builder.addCase(fetchAuthMe.pending, (state) => {
      state.status = Status.LOADING;
      state.user = null;
    });
    builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.user = action.payload;
    });
    builder.addCase(fetchAuthMe.rejected, (state) => {
      console.log("Ошибка при получении данных пользователя");
      state.status = Status.ERROR;
      state.user = null;
    });
  },
});

export const selectUser = (state: AppState) => state.auth;

export const { logout } = authSlice.actions;
export default authSlice.reducer;
