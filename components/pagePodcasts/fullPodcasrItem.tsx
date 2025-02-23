import Link from "next/link";
import React, { FC, RefObject, useEffect, useRef, useState } from "react";
import { ReactSVG } from "react-svg";
import RenderHTML from "../renderHTML";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/slice";
import { useModalsContext } from "../../context/ModalsContext";
import { changeFavoriteItem } from "../../utils/controls";
import { useFavoriteContext } from "../../context/FavoritesContext";
import { isElementInFavorites } from "../../redux/favorites/slice";
import { FavoritePodcast, FavoriteVideo } from "../../redux/favorites/types";
import { AppState } from "../../redux/store";
import { useAudioContext } from "../../context/audioContext";
import Image from "next/image";
import { EditionType } from "../../redux/types";

interface PodcastItemProps {
  podcast: EditionType;
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
  const {
    setPlayerActive,
    setAudioLink,
    setIsPlaying,
    setPodcastId,
    setPodcastName,
    isPlaying,
    podcastId,
  } = useAudioContext();

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

  const PlayClick = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setPlayerActive(false);
    } else {
      setPlayerActive(true);
      if (podcast.poperties.LINK_AUDIO) {
        setAudioLink(podcast.poperties.LINK_AUDIO);
      } else {
        setAudioLink(podcast.poperties.AUDIO_FILE);
      }
      setIsPlaying(true);
      setPodcastId(podcast.id);
      setPodcastName(podcast.name);
    }
  };

  return (
    <div className="podcasts__item">
      <Link href={`/podcasts/${podcast.podcastId}`} className="podcasts__img">
        <Image fill priority src={`${podcast.podcastPhoto}`} alt="Image" />
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
          <span className="podcasts__play c-play" onClick={PlayClick}>
            {isPlaying && podcastId === podcast.id ? (
              <ReactSVG src="/img/sprite/icon-pause.svg" />
            ) : (
              <ReactSVG src="/img/sprite/icon-play.svg" />
            )}
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
