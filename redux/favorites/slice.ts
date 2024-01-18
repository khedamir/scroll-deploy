import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Status } from "../types";
import { fetchFavorites } from "./asyncAction";
import { AppState } from "../store";
import { FavoriteSections, FavoritesSliceState, FavoritesType } from "./types";

const initialState: FavoritesSliceState = {
  data: {
    "9": {
      items: [],
    },
    "15": {
      items: [],
    },
    "26": {
      items: [],
    },
    "28": {
      items: [],
    },
    "34": {
      items: [],
    },
  },
  filled: false,
  status: Status.LOADING,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<FavoritesType>) => {
      state.data = action.payload;
    },
    addToFavorites: (
      state,
      action: PayloadAction<{
        sectionId: FavoriteSections;
        element: any;
        auth?: boolean;
      }>
    ) => {
      const { sectionId, element, auth = true } = action.payload;
      if (state.data[sectionId]) {
        state.data[sectionId].items.push(element);
      } else {
        state.data[sectionId] = {
          items: [element],
        };
      }
      if (!auth) {
        localStorage.setItem("favorites", JSON.stringify(state.data));
      }
    },
    removeFromFavorites: (
      state,
      action: PayloadAction<{
        sectionId: FavoriteSections;
        elementId: string;
        auth?: boolean;
      }>
    ) => {
      const { sectionId, elementId, auth = true } = action.payload;
      const itemitems = state.data[sectionId].items.filter(
        (item) => item.id !== elementId
      );
      // @ts-ignore
      state.data[sectionId].items = itemitems;
      if (!auth) {
        localStorage.setItem("favorites", JSON.stringify(state.data));
      }
    },
    removeFromFavoritesBlock: (
      state,
      action: PayloadAction<{ sectionId: FavoriteSections; auth?: boolean }>
    ) => {
      const { sectionId, auth = true } = action.payload;
      state.data[sectionId] = {
        items: [],
      };
      if (!auth) {
        localStorage.setItem("favorites", JSON.stringify(state.data));
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFavorites.pending, (state) => {
      state.status = Status.LOADING;
      state.data = initialState.data;
    });
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      if (Object.values(action.payload).length) {
        state.data = action.payload;
        state.filled = true;
      }
    });
    builder.addCase(fetchFavorites.rejected, (state) => {
      state.status = Status.ERROR;
      state.data = initialState.data;
    });
  },
});

export const selectFavorites = (state: AppState) => state.favorites;

export const isElementInFavorites = (
  state: AppState,
  sectionId: FavoriteSections,
  elementId: string
): boolean => {
  const favorites: FavoritesSliceState = state.favorites;

  if (favorites.data[sectionId] && favorites.data[sectionId].items) {
    const sectionItems = favorites.data[sectionId].items;
    return sectionItems.some((item) => item.id === elementId);
  }

  return false;
};

export const areAllElementsInFavorites = (
  state: AppState,
  sectionId: FavoriteSections,
  elementsId: string[]
): boolean => {
  const favorites: FavoritesSliceState = state.favorites;

  if (favorites.data[sectionId] && favorites.data[sectionId].items) {
    const sectionItems = favorites.data[sectionId].items;
    return elementsId.every((elementId) =>
      sectionItems.some((item) => item.id === elementId)
    );
  }

  return false;
};

export const {
  removeFromFavorites,
  addToFavorites,
  removeFromFavoritesBlock,
  setFavorites,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
