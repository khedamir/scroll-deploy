import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Status } from "../types";
import { fetchNotifications } from "./asyncAction";
import { AppState } from "../store";
import { NotificationsSliceState, NotificationsType } from "./types";

const initialState: NotificationsSliceState = {
  data: [],
  status: Status.LOADING,
};

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    allNotificationsViewed: (state) => {
      state.data = [];
    },
    addNotificationViewed: (
      state,
      action: PayloadAction<{
        id: string;
      }>
    ) => {
      const { id } = action.payload;
      state.data = state.data.filter((item) => item.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.pending, (state) => {
      state.status = Status.LOADING;
      state.data = initialState.data;
    });
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.data = action.payload;
    });
    builder.addCase(fetchNotifications.rejected, (state) => {
      state.status = Status.ERROR;
      state.data = initialState.data;
    });
  },
});

export const selectNotifications = (state: AppState) => state.notifications;

export const { allNotificationsViewed, addNotificationViewed } = notificationsSlice.actions;

export default notificationsSlice.reducer;
