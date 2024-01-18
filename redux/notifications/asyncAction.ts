import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchParams, NotificationsType } from "./types";
import { server } from "../../utils/server";

export const fetchNotifications = createAsyncThunk<NotificationsType[], FetchParams>(
  "notifications/fetchNotifications",
  async (params) => {
    const { data } = await server.post(`/sw/v1/notifications.php`, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return data.datas;
  }
);
