import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NewPublicationSliceState, PreviewNewType } from "./type";
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
  },
});

export const selectNewPublication = (state: AppState) => state.newpublication;
export const { addPreview } = newPublicationSlice.actions;
export default newPublicationSlice.reducer;
