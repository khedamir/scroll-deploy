import {
  EditionType,
  FullNewType,
  NewType,
  PaginationType,
  RubricType,
  TrendType,
  VideoType,
  WebinarType,
} from "../redux/types";
import { server } from "../utils/server";

type FetchParams = {
  limit?: number;
  page?: number;
  rubric?: number;
  type?: "userPublications";
  userId?: string;
  webinar?: 'old' | 'actual'
};

export const fetchNew = async (itemId: string) => {
  const { data } = await server.get(`/sw/v1/publications/?id=${itemId}`);
  return data.datas[Number(itemId)];
};

export const fetchPodcast = async (itemId: string) => {
  const { data } = await server.get(`/sw/v1/podcasts/?id=${itemId}`);
  return data.datas[Number(itemId)];
};

export const fetchNews = async (params: FetchParams) => {
  const { data } = await server.get(
    `/sw/v1/publications/?iblockid=9&width=400&height=300`,
    {
      params,
    }
  );
  return data as { datas: NewType[]; pagination: PaginationType };
};

export const fetchTrends = async (params: FetchParams) => {
  const { data } = await server.get(
    `/sw/v1/publications/?iblockid=28&width=500&height=400`,
    {
      params,
    }
  );
  return data as { datas: TrendType[]; pagination: PaginationType };
};

export const fetchEditions = async (params: FetchParams) => {
  const { data } = await server.get(
    `/sw/v1/podcasts/?iblockid=34&width=400&height=300`,
    {
      params,
    }
  );
  return data as { datas: EditionType[]; pagination: PaginationType };
};

export const fetchLectures = async (params: FetchParams) => {
  const { data } = await server.get(
    `/sw/v1/publications/?iblockid=26&width=250&height=150`,
    {
      params,
    }
  );
  return data as { datas: VideoType[]; pagination: PaginationType };
};

export const fetchWebinars = async (params: FetchParams) => {
  const { data } = await server.get(
    `/sw/v1/publications/?iblockid=11&width=450&height=300`,
    {
      params,
    }
  );
  return data as { datas: WebinarType[]; pagination: PaginationType };
};

export const fetchRubrics = async () => {
  const { data } = await server.get("/api/v1/navigation/main");
  const rubrics: RubricType[] = Object.values(data.message);
  return rubrics;
};

type fetchInfoParams = {
  type: "popularRubrics" | "lastWeekVideos" | "publicationLastComment";
  publicationId?: string;
};

export const fetchInfo = async (params: fetchInfoParams) => {
  const { data } = await server.post("/sw/v1/getInfo.php", params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return data.datas;
};
