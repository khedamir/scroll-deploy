import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../types";
import { fetchLectures } from "./asyncAction";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import { LecturesSliceState } from "./types";

const initialState: LecturesSliceState = {
  data: {
    datas: [],
    pagination: null,
  },
  status: Status.LOADING,
};

export const lecturesSlice = createSlice({
  name: "lectures",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLectures.pending, (state) => {
      state.status = Status.LOADING;
      state.data = {
        datas: [],
        pagination: null,
      };
    });
    builder.addCase(fetchLectures.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.data = action.payload;
    });
    builder.addCase(fetchLectures.rejected, (state) => {
      state.status = Status.ERROR;
      state.data = {
        datas: [],
        pagination: null,
      };
    });
    builder.addCase(HYDRATE as any, (state, action) => {
      const { data, status } = action.payload.lectures;
      if (!data.datas) {
        return state;
      }
      state.data = data;
      state.status = status;
    });
  },
});

export const selectLectures = (state: AppState) => state.lectures;

export default lecturesSlice.reducer;
