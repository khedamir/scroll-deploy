import { FavoriteSections } from "../redux/favorites/types";
import { server } from "./server";

type favoritesParamsType = {
  id: string;
  type: "delete" | "add";
  userId: string;
};

type favoritesBlockParamsType = {
  iblockId: FavoriteSections;
  userId: string;
};

type likesParamsType = {
  userId: string;
  type: string;
  newsId: string;
};

export const changeFavoriteItem = async ({
  id,
  type,
  userId,
}: favoritesParamsType) => {
  try {
    const params = {
      id,
      type,
      userId,
    };

    await server.post(`/sw/v1/favorites.php`, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  } catch (error) {
    console.error("Произошла ошибка", error);
  }
};

export const deleteFavoritesBlock = async ({
  iblockId,
  userId,
}: favoritesBlockParamsType) => {
  try {
    const params = {
      userId,
      type: "deleteAll",
      iblockId,
    };

    await server.post(`/sw/v1/favorites.php`, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  } catch (error) {
    console.error("Произошла ошибка", error);
  }
};

export const changeItemLike = async ({
  newsId,
  type,
  userId,
}: likesParamsType) => {
  try {
    await server.get(`/sw/v1/likes`, {
      params: {
        newsId,
        type,
        userId,
      },
    });
  } catch (error) {
    console.error("Произошла ошибка при обработке лайка:", error);
  }
};
