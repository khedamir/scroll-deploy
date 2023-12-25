import { createAsyncThunk } from "@reduxjs/toolkit";
import { RubricType } from "./types";
import { server } from "../../utils/server";

export const fetchRubrics = createAsyncThunk<RubricType[]>(
  "rubrics/fetchRubrics",
  async () => {
    const { data } = await server.get("/api/v1/navigation/main");
    const rubrics: RubricType[] = Object.values(data.message);
    console.log("hello");

    // const { data } = await server.get("/sw/v1/references/?iblockid=7", {
    //   params,
    // });
    return rubrics;
  }
);
