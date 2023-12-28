import { server } from "../utils/server";

export const fetchNew = async (itemId: string) => {
  const { data } = await server.get(`/sw/v1/publications/?id=${itemId}`);
  return data.datas[Number(itemId)];
};
