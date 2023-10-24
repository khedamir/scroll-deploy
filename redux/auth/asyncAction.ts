import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginData, TokenType, UserData } from "./types";
import { server, serverWithJwt } from "../../utils/server";

export const fetchAuth = createAsyncThunk<TokenType, LoginData>(
  "auth/fetchAuth",
  async (params) => {
    const { data } = await server.post("/api/v1/auth", params);
    return data.message;
  }
);

export const fetchAuthMe = createAsyncThunk<UserData>(
  "auth/fetchAuthMe",
  async () => {
    const { data } = await serverWithJwt.get("/api/v1/users");
    return data.message;
  }
);
