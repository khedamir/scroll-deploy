import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../utils/server";
import {
  EditionType,
  NewType,
  RubricType,
  TrendType,
  VideoType,
  WebinarType,
} from "../types";

type FetchParams = {
  limit: number;
  webinar?: "actual" | "old" | undefined;
};

export const fetchRubrics = createAsyncThunk<RubricType[]>(
  "mainPage/fetchRubrics",
  async () => {
    const { data } = await server.get("/api/v1/navigation/main");
    const rubrics: RubricType[] = Object.values(data.message);
    return rubrics;
  }
);

export const fetchNews = createAsyncThunk<NewType[], FetchParams>(
  "mainPage/fetchNews",
  async (params) => {
    const { data } = await server.get(
      `/sw/v1/publications/?iblockid=9&width=400&height=300`,
      {
        params,
      }
    );
    return data.datas;
  }
);

export const fetchTrends = createAsyncThunk<TrendType[], FetchParams>(
  "mainPage/fetchTrends",
  async (params) => {
    const { data } = await server.get(
      `/sw/v1/publications/?iblockid=28&width=500&height=400`,
      {
        params,
      }
    );
    return data.datas;
  }
);

export const fetchEditions = createAsyncThunk<EditionType[], FetchParams>(
  "mainPage/fetchEditions",
  async (params) => {
    const { data } = await server.get(
      `/sw/v1/podcasts/?iblockid=34&width=400&height=300`,
      {
        params,
      }
    );
    return data.datas;
  }
);

export const fetchLectures = createAsyncThunk<VideoType[], FetchParams>(
  "mainPage/fetchLectures",
  async (params) => {
    const { data } = await server.get(
      `/sw/v1/publications/?iblockid=26&width=250&height=150`,
      {
        params,
      }
    );
    return data.datas;
  }
);

export const fetchWebinars = createAsyncThunk<WebinarType[], FetchParams>(
  "mainPage/fetchWebinars",
  async (params) => {
    const { data } = await server.get(
      `/sw/v1/publications/?iblockid=11&width=450&height=300`,
      {
        params,
      }
    );
    return data.datas;
  }
);
