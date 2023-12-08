import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginData, TokenType, UserData } from "./types";
import { server } from "../../utils/server";

export const fetchAuth = createAsyncThunk<TokenType, LoginData>(
  "auth/fetchAuth",
  async (params) => {
    const { data } = await server.post("/api/v1/auth", params);
    return data.message;
  }
);

export const fetchAuthMe = createAsyncThunk<UserData, { userId: string }>(
  "auth/fetchAuthMe",
  async (params) => {
    const { data } = await server.post(
      "/sw/v1/userData.php",
      { type: "get", userId: params.userId },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return data.datas[0];
  }
);
