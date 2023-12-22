import { createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/slice";
import {
  FavoriteFetcthType,
  changeFavoriteItem,
  deleteFavoritesBlock,
} from "../utils/controls";
import {
  FavoriteNew,
  FavoritePodcast,
  FavoriteSections,
  FavoriteVideo,
} from "../redux/favorites/types";
import { useAppDispatch } from "../redux/store";
import {
  addToFavorites,
  removeFromFavorites,
  removeFromFavoritesBlock,
} from "../redux/favorites/slice";
import { useModalsContext } from "./ModalsContext";

type addFavoritePropsType = {
  itemId: string;
  sectionId: FavoriteSections;
  newItem?: FavoriteNew;
  videoItem?: FavoriteVideo;
  lectureItem?: FavoriteVideo;
  trendItem?: FavoriteVideo;
  podcastItem?: FavoritePodcast;
};

type removeFavoritePropsType = {
  itemId: string;
  sectionId: FavoriteSections;
};

type removeFavoriteBlockPropsType = {
  sectionId: FavoriteSections;
};

type changeFavoritePodcastType = {
  podcastId: string;
  type: FavoriteFetcthType;
};

const FavoritesContext = createContext({
  bookmarksAnimateActive: false,
  // setBookmarksAnimateActive: (v: boolean) => {},
  addFavorite: (props: addFavoritePropsType) => {},
  deleteFavorite: (props: removeFavoritePropsType) => {},
  deleteFavoriteBlock: (props: removeFavoriteBlockPropsType) => {},
  changeEditionsPodcast: (props: changeFavoritePodcastType) => {},
});

const FavoritesContextProvider = (props: any) => {
  const { user } = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const [bookmarksAnimateActive, setBookmarksAnimateActive] = useState(false);

  const addFavorite = ({
    itemId,
    sectionId,
    newItem,
    videoItem,
    lectureItem,
    trendItem,
    podcastItem,
  }: addFavoritePropsType) => {
    if (!user) {
      if (newItem) {
        dispatch(addToFavorites({ sectionId, element: newItem, auth: false }));
      }
      if (videoItem) {
        dispatch(
          addToFavorites({ sectionId, element: videoItem, auth: false })
        );
      }
      if (lectureItem) {
        dispatch(
          addToFavorites({ sectionId, element: lectureItem, auth: false })
        );
      }
      if (trendItem) {
        dispatch(
          addToFavorites({ sectionId, element: trendItem, auth: false })
        );
      }
      if (podcastItem) {
        dispatch(
          addToFavorites({ sectionId, element: podcastItem, auth: false })
        );
      }
      setBookmarksAnimateActive(true);
      setTimeout(() => {
        setBookmarksAnimateActive(false);
      }, 1000);
      return;
    }

    changeFavoriteItem({
      id: itemId,
      type: "add",
      userId: user?.id,
    }).then(() => {
      if (newItem) {
        dispatch(addToFavorites({ sectionId, element: newItem }));
      }
      if (videoItem) {
        dispatch(addToFavorites({ sectionId, element: videoItem }));
      }
      if (lectureItem) {
        dispatch(addToFavorites({ sectionId, element: lectureItem }));
      }
      if (trendItem) {
        dispatch(addToFavorites({ sectionId, element: trendItem }));
      }
      if (podcastItem) {
        dispatch(addToFavorites({ sectionId, element: podcastItem }));
      }
    });
  };

  const deleteFavorite = ({ itemId, sectionId }: removeFavoritePropsType) => {
    if (user) {
      changeFavoriteItem({
        id: itemId,
        type: "delete",
        userId: user?.id,
      }).then(() => {
        dispatch(removeFromFavorites({ sectionId, elementId: itemId }));
      });
    } else {
      dispatch(
        removeFromFavorites({ sectionId, elementId: itemId, auth: false })
      );
    }
  };

  const deleteFavoriteBlock = ({ sectionId }: removeFavoriteBlockPropsType) => {
    if (user) {
      deleteFavoritesBlock({
        iblockId: sectionId,
        userId: user?.id,
      }).then(() => {
        dispatch(removeFromFavoritesBlock({ sectionId }));
      });
    }
  };

  const changeEditionsPodcast = async ({
    podcastId,
    type,
  }: changeFavoritePodcastType) => {
    if (user) {
      try {
        await changeFavoriteItem({
          id: podcastId,
          type: type,
          userId: user?.id,
        });
      } catch (error) {
        console.error("Произошла ошибка", error);
      }
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        bookmarksAnimateActive,
        addFavorite,
        deleteFavorite,
        deleteFavoriteBlock,
        changeEditionsPodcast,
      }}
      {...props}
    />
  );
};

const useFavoriteContext = () => useContext(FavoritesContext);
export { FavoritesContextProvider, useFavoriteContext };
