import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import RenderHTML from "../renderHTML";
import { EditionType } from "../../redux/types";
import { useSelector } from "react-redux";
import { useFavoriteContext } from "../../context/FavoritesContext";
import { useModalsContext } from "../../context/ModalsContext";
import { selectUser } from "../../redux/auth/slice";
import { isElementInFavorites } from "../../redux/favorites/slice";
import { FavoritePodcast } from "../../redux/favorites/types";
import { AppState } from "../../redux/store";

interface PodcastItemProps {
  podcast: EditionType;
  podcastId: string;
  podcastAuthor: string;
  podcastPhoto: string;
}

const PodcastItem: FC<PodcastItemProps> = ({
  podcast,
  podcastId,
  podcastAuthor,
  podcastPhoto,
}) => {
  const { user } = useSelector(selectUser);
  const { setLoginActive } = useModalsContext();
  const isFavorite = useSelector((state: AppState) =>
    isElementInFavorites(state, "34", podcast.id)
  );
  const { addFavorite, deleteFavorite } = useFavoriteContext();

  const changeFavorite = () => {
    if (!user) {
      setLoginActive(true);
      return;
    }

    if (isFavorite) {
      deleteFavorite({ itemId: podcast.id, sectionId: "34" });
    }

    if (!isFavorite) {
      const favoriteItem: FavoritePodcast = {
        id: podcast.id,
        data: {
          NAME: podcast.name,
          podcastId,
          podcastAuthor,
          podcastPhoto,
          props: {
            EDITION: podcast.props.DURATION,
          },
        },
      };
      addFavorite({
        itemId: podcast.id,
        sectionId: "34",
        podcastItem: favoriteItem,
      });
    }
  };
  return (
    <div className="podcasts__item">
      <div className="podcasts__main">
        <div className="podcasts__body">
          <span className="podcasts__help">
            {podcast.props.EDITION.VALUE[0]} выпуск
          </span>
          <span className="podcasts__name mt8">{podcast.name}</span>
          <span className="podcasts__description mt8">
            <RenderHTML content={podcast.anons} />
          </span>
        </div>
        <div className="podcasts__additional">
          <span className="podcasts__play c-play">
            <ReactSVG src="/img/sprite/icon-play.svg" />
            <span>{podcast.props.DURATION.VALUE}</span>
          </span>
          <button
            onClick={changeFavorite}
            className={`podcasts__favorites c-bookmark ${
              isFavorite && "is--active"
            }`}
          >
            <ReactSVG
              className="c-bookmark__icon c-bookmark__icon--default"
              src="/img/sprite/icon-bookmarks.svg"
            />
            <ReactSVG
              className="c-bookmark__icon c-bookmark__icon--filled"
              src="/img/sprite/icon-bookmarks.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PodcastItem;
