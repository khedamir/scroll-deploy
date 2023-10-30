import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchParams, VacanciesData } from "./types";
import { server } from "../../utils/server";

export const fetchVacancies = createAsyncThunk<VacanciesData, FetchParams>(
  "vacancies/fetchVacancies",
  async (params) => {
    const { data } = await server.get(
      `/sw/v1/publications/?iblockid=30`,
      {
        params,
      }
    );
    return data;
  }
);
