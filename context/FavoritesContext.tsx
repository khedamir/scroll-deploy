import { createContext, useContext } from "react";
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
  addFavorite: (props: addFavoritePropsType) => {},
  deleteFavorite: (props: removeFavoritePropsType) => {},
  deleteFavoriteBlock: (props: removeFavoriteBlockPropsType) => {},
  changeEditionsPodcast: (props: changeFavoritePodcastType) => {},
});

const FavoritesContextProvider = (props: any) => {
  const { id } = useSelector(selectUser);
  const dispatch = useAppDispatch();

  const addFavorite = ({
    itemId,
    sectionId,
    newItem,
    videoItem,
    lectureItem,
    trendItem,
    podcastItem,
  }: addFavoritePropsType) => {
    changeFavoriteItem({
      id: itemId,
      type: "add",
      userId: id,
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
    changeFavoriteItem({
      id: itemId,
      type: "delete",
      userId: id,
    }).then(() => {
      dispatch(removeFromFavorites({ sectionId, elementId: itemId }));
    });
  };

  const deleteFavoriteBlock = ({ sectionId }: removeFavoriteBlockPropsType) => {
    deleteFavoritesBlock({
      iblockId: sectionId,
      userId: id,
    }).then(() => {
      dispatch(removeFromFavoritesBlock({ sectionId }));
    });
  };

  const changeEditionsPodcast = async ({
    podcastId,
    type,
  }: changeFavoritePodcastType) => {
    try {
      await changeFavoriteItem({
        id: podcastId,
        type: type,
        userId: id,
      });
    } catch (error) {
      console.error("Произошла ошибка", error);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
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
