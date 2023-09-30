import { createAsyncThunk } from "@reduxjs/toolkit";
import { RubricType } from "./types";
import { server } from "../../utils/server";

export const fetchRubrics = createAsyncThunk<RubricType[]>(
  "rubrics/fetchRubrics",
  async (params) => {
    const { data } = await server.get("/api/v1/navigation/main", {
      params,
    });
    const rubrics: RubricType[] = Object.values(data.message);
    return rubrics;
  }
);
