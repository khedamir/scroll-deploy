import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../types";
import { fetchVacancies } from "./asyncAction";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import { VacanciesSliceState } from "./types";

const initialState: VacanciesSliceState = {
  data: {
    datas: [],
    pagination: null,
  },
  status: Status.LOADING,
};

export const vacanciesSlice = createSlice({
  name: "vacancies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVacancies.pending, (state) => {
      state.status = Status.LOADING;
      state.data = {
        datas: [],
        pagination: null,
      };
    });
    builder.addCase(fetchVacancies.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.data = action.payload;
    });
    builder.addCase(fetchVacancies.rejected, (state) => {
      state.status = Status.ERROR;
      state.data = {
        datas: [],
        pagination: null,
      };
    });
    builder.addCase(HYDRATE as any, (state, action) => {
      const { data, status } = action.payload.vacancies;
      if (!data.datas) {
        return state;
      }
      state.data = data;
      state.status = status;
    });
  },
});

export const selectVacancies = (state: AppState) => state.vacancies;

export default vacanciesSlice.reducer;
