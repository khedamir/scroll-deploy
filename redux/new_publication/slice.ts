import { FullNewType } from "./../types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  NewPublicationSliceState,
  PreviewNewType,
  PublishedNewType,
} from "./type";
import { AppState } from "../store";

const initialState: NewPublicationSliceState = {
  preview: null,
  published: [],
  drafts: [],
};

export const newPublicationSlice = createSlice({
  name: "newpublication",
  initialState,
  reducers: {
    addPreview: (state, action: PayloadAction<PreviewNewType>) => {
      state.preview = action.payload;
    },
    setPublished: (state, action: PayloadAction<PublishedNewType[]>) => {
      state.published = action.payload;
    },
    addDraft: (state, action: PayloadAction<PublishedNewType>) => {
      const index = state.drafts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        state.drafts[index] = action.payload;
      } else {
        console.log(action.payload);
        state.drafts = [...state.drafts, action.payload];
      }
    },
    deleteDraft: (state, action: PayloadAction<{ publication_id: string }>) => {
      state.drafts = state.drafts.filter(
        (item) => item.id !== action.payload.publication_id
      );
    },
    setDrafts: (state, action: PayloadAction<PublishedNewType[]>) => {
      state.drafts = action.payload;
    },
  },
});

export const selectNewPublication = (state: AppState) => state.newpublication;
export const { addPreview, setPublished, setDrafts, addDraft, deleteDraft } =
  newPublicationSlice.actions;
export default newPublicationSlice.reducer;
