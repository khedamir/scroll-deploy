import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../types";
import { RubricsSliceState } from "./types";
import { fetchRubrics } from "./asyncAction";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

const initialState: RubricsSliceState = {
  rubrics: [],
  status: Status.LOADING,
};

export const rubricsSlice = createSlice({
  name: "rubrics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRubrics.pending, (state) => {
      state.status = Status.LOADING;
      state.rubrics = [];
    });
    builder.addCase(fetchRubrics.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.rubrics = action.payload;
    });
    builder.addCase(fetchRubrics.rejected, (state) => {
      state.status = Status.ERROR;
      state.rubrics = [];
    });
    builder.addCase(HYDRATE as any, (state, action) => {
      const { rubrics, status } = action.payload.rubrics;
      if (!rubrics) {
        return state;
      }
      state.rubrics = rubrics;
      state.status = status;
    });
  },
});

export const selectRubrics = (state: AppState) => state.rubrics;

export default rubricsSlice.reducer;
