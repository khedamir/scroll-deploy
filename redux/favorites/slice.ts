import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../types";
import { fetchFavorites } from "./asyncAction";
import { AppState } from "../store";
import { FavoritesSliceState } from "./types";

const initialState: FavoritesSliceState = {
  data: {
    "9": {
      NAME: "Новости",
      items: [],
    },
    "15": {
      NAME: "Видео",
      items: [],
    },
    "26": {
      NAME: "Лекции",
      items: [],
    },
    "28": {
      NAME: "Тренды",
      items: [],
    },
    "34": {
      NAME: "Выпуски (Подкасты)",
      items: [],
    },
  },
  status: Status.LOADING,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFavorites.pending, (state) => {
      state.status = Status.LOADING;
      state.data = initialState.data;
    });
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.data = action.payload;
    });
    builder.addCase(fetchFavorites.rejected, (state) => {
      state.status = Status.ERROR;
      state.data = initialState.data;
    });
  },
});

export const selectFavorites = (state: AppState) => state.favorites;

export default favoritesSlice.reducer;
