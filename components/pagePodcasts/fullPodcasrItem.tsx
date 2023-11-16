import Link from "next/link";
import React, { FC, RefObject, useEffect, useRef, useState } from "react";
import { ReactSVG } from "react-svg";
import { PodcastType } from "../../redux/podcasts/types";
import RenderHTML from "../renderHTML";
import AudioPlayer from "../audioPlayer";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/slice";
import { useModalsContext } from "../../context/ModalsContext";
import { changeFavoriteItem } from "../../utils/controls";
import { useFavoriteContext } from "../../context/FavoritesContext";
import { isElementInFavorites } from "../../redux/favorites/slice";
import { FavoritePodcast, FavoriteVideo } from "../../redux/favorites/types";
import { AppState } from "../../redux/store";

interface PodcastItemProps {
  podcast: PodcastType;
  isLast?: boolean;
  newLimit?: () => void;
  end?: boolean;
}

const FullPodcastItem: FC<PodcastItemProps> = ({
  podcast,
  isLast,
  newLimit,
  end,
}) => {
  const cardRef: RefObject<HTMLAnchorElement> = useRef(null);
  const { user } = useSelector(selectUser);
  const { setLoginActive } = useModalsContext();
  const { addFavorite, deleteFavorite } = useFavoriteContext();
  const isFavorite = useSelector((state: AppState) =>
    isElementInFavorites(state, "34", podcast.id)
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerVisible, setPlayerVisible] = useState(false);

  useEffect(() => {
    if (isLast && newLimit && !end) {
      if (!cardRef?.current) return;

      const observer = new IntersectionObserver(([entry]) => {
        if (isLast && entry.isIntersecting) {
          newLimit();
          observer.unobserve(entry.target);
        }
      });

      observer.observe(cardRef.current);
    }
  }, [isLast]);

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
          podcastId: podcast.podcastId,
          podcastAuthor: podcast.podcastAuthor,
          podcastPhoto: podcast.podcastPhoto,
          props: {
            EDITION: { VALUE: [podcast.poperties.EDITION] },
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

  const playClick = () => {
    setIsPlaying(true);
    setPlayerVisible(true);
  };

  return (
    <div className="podcasts__item">
      {/* {podcast.poperties.AUDIO_FILE ? (
        <AudioPlayer
          audioUrl={podcast.poperties.AUDIO_FILE}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          active={playerVisible}
        />
      ) : (
        <AudioPlayer
          audioUrl={podcast.poperties.LINK_AUDIO}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          active={playerVisible}
        />
      )} */}
      <Link href={`/podcasts/${podcast.id}`} className="podcasts__img">
        <img src={`${podcast.podcastPhoto}`} alt="Image" />
      </Link>
      <div className="podcasts__main">
        <div className="podcasts__body">
          <span className="podcasts__help">
            {podcast.poperties.EDITION} выпуск
          </span>
          <Link
            href={`/podcasts/${podcast.podcastId}`}
            className="podcasts__name mt8"
          >
            {podcast.name}
          </Link>
          <span className="podcasts__description mt8">
            <RenderHTML content={podcast.anons} />
          </span>
          <div className="podcasts__inner">
            <Link
              href={`/podcasts/${podcast.podcastId}`}
              className="podcasts__text"
            >
              {podcast.podcastName}
            </Link>
            <Link
              href={`/podcasts/${podcast.podcastId}`}
              className="podcasts__text"
            >
              {podcast.podcastAuthor}
            </Link>
          </div>
        </div>
        <div className="podcasts__additional">
          <span className="podcasts__play c-play" onClick={playClick}>
            <ReactSVG src="/img/sprite/icon-play.svg" />
            <span>{podcast.poperties.DURATION}</span>
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

export default FullPodcastItem;
