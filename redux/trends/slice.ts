import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Status } from "../types";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import { TrendsSliceState } from "./types";
import { fetchTrends } from "./asyncAction";

const initialState: TrendsSliceState = {
  data: {
    datas: [],
    pagination: null,
  },
  status: Status.LOADING,
};

export const trandsSlice = createSlice({
  name: "trends",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrends.pending, (state) => {
      state.status = Status.LOADING;
      state.data = {
        datas: [],
        pagination: null,
      };
    });
    builder.addCase(fetchTrends.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.data = action.payload;
    });
    builder.addCase(fetchTrends.rejected, (state) => {
      state.status = Status.ERROR;
      state.data = {
        datas: [],
        pagination: null,
      };
    });
    builder.addCase(HYDRATE as any, (state, action) => {
      const { data, status } = action.payload.trands;
      if (!data.datas) {
        return state;
      }
      state.data = data;
      state.status = status;
    });
  },
});

export const selectTrands = (state: AppState) => state.trands;

export default trandsSlice.reducer;
