import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../types";
import { fetchWebinars } from "./asyncAction";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import { WebinarsSliceState } from "./types";

const initialState: WebinarsSliceState = {
  data: {
    datas: [],
    pagination: null,
  },
  status: Status.LOADING,
};

export const webinarsSlice = createSlice({
  name: "webinars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWebinars.pending, (state) => {
      state.status = Status.LOADING;
      state.data = {
        datas: [],
        pagination: null,
      };
    });
    builder.addCase(fetchWebinars.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.data = action.payload;
    });
    builder.addCase(fetchWebinars.rejected, (state) => {
      state.status = Status.ERROR;
      state.data = {
        datas: [],
        pagination: null,
      };
    });
    builder.addCase(HYDRATE as any, (state, action) => {
      const { data, status } = action.payload.webinars;
      if (!data.datas) {
        return state;
      }
      state.data = data;
      state.status = status;
    });
  },
});

export const selectWebinars = (state: AppState) => state.webinars;

export default webinarsSlice.reducer;
