import { createSlice } from "@reduxjs/toolkit";

import { AppState } from "../store";
import { fetchAuth, fetchAuthMe } from "./asyncAction";
import { Status } from "../types";
import { AuthSliceState } from "./types";

const initialState: AuthSliceState = {
  id: "9",
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
      state.id = "";
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      localStorage.setItem("token", action.payload.Authorization);
      state.id = action.payload.user_id;
    });
    builder.addCase(fetchAuth.rejected, (state, action) => {
      console.log(action);
      state.status = Status.ERROR;
      state.user = null;
      state.id = "";
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
