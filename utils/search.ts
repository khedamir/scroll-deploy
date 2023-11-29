import { server } from "./server";

type SearchFetchProps = {
  text: string;
};

export type SearchItem = {
  id: string;
  images: { detail: string; preview: string };
  iblockId: string;
  iblockName: string;
  rubric: string;
  title: string;
  date: string;
};

export const searchFetch = async ({ text }: SearchFetchProps) => {
  const result = await server.post(`/sw/v1/search/?text=${text}`);
  return result.data.datas as SearchItem[];
};
