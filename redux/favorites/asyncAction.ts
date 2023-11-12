import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchParams, FavoritesType } from "./types";
import { server } from "../../utils/server";

export const fetchFavorites = createAsyncThunk<FavoritesType, FetchParams>(
  "favorites/fetchFavorites",
  async (params) => {
    const { data } = await server.post(`/sw/v1/favorites.php`, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    console.log(params, data);
    return data.datas;
  }
);
