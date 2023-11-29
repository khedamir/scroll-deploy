import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Status } from "../types";
import { AppState } from "../store";
import { CommentsSliceState } from "./types";
import { fetchComments } from "./asyncAction";

const initialState: CommentsSliceState = {
  data: [],
  status: Status.LOADING,
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    // addToFavorites: (
    //   state,
    //   action: PayloadAction<{ sectionId: FavoriteSections; element: any }>
    // ) => {
    //   const { sectionId, element } = action.payload;
    //   if (state.data[sectionId]) {
    //     state.data[sectionId].items.push(element);
    //   } else {
    //     state.data[sectionId] = {
    //       items: [element],
    //     };
    //   }
    // },
    // removeFromFavorites: (
    //   state,
    //   action: PayloadAction<{ sectionId: FavoriteSections; elementId: string }>
    // ) => {
    //   const { sectionId, elementId } = action.payload;
    //   const itemitems = state.data[sectionId].items.filter(
    //     (item) => item.id !== elementId
    //   );
    //   // @ts-ignore
    //   state.data[sectionId].items = itemitems;
    // },
    // removeFromFavoritesBlock: (
    //   state,
    //   action: PayloadAction<{ sectionId: FavoriteSections }>
    // ) => {
    //   const { sectionId } = action.payload;
    //   state.data[sectionId] = {
    //     items: [],
    //   };
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.status = Status.LOADING;
      state.data = initialState.data;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.data = action.payload.reverse();
    });
    builder.addCase(fetchComments.rejected, (state) => {
      state.status = Status.ERROR;
      state.data = initialState.data;
    });
  },
});

export const selectComments = (state: AppState) => state.comments;

export const {} = commentsSlice.actions;

export default commentsSlice.reducer;
