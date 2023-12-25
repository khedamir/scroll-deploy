import Link from "next/link";
import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import { FavoritePodcast, FavoriteSections } from "../../redux/favorites/types";
import { useFavoriteContext } from "../../context/FavoritesContext";
import Image from "next/image";

interface AudioProps {
  item: FavoritePodcast;
  sectionId: FavoriteSections;
}

const Audio: FC<AudioProps> = ({ item, sectionId }) => {
  const { deleteFavorite } = useFavoriteContext();

  const changeFavorite = () => {
    deleteFavorite({ itemId: item.id, sectionId });
  };

  return (
    <article className="bookmarks-card bookmarks__item">
      <Link
        href={`podcasts/${item.data.podcastId}`}
        className="bookmarks-card__img"
      >
        <Image
          width={110}
          height={69}
          src={item.data.podcastPhoto}
          alt="Image"
        />
        <ReactSVG
          className="bookmarks-card__img-icon"
          src="/img/sprite/icon-headheadset.svg"
        />
      </Link>
      <div className="bookmarks-card__body">
        <Link
          href={`podcasts/${item.data.podcastId}`}
          className="bookmarks-card__title"
        >
          {item.data.NAME}
        </Link>
        <div className="bookmarks-card__inner">
          <span className="bookmarks-card__help">Пособия</span>
          <button
            onClick={changeFavorite}
            className="c-bookmark bookmarks-card__bookmark is--active"
          >
            <ReactSVG
              className="c-bookmark__icon c-bookmark__icon--default"
              src="/img/sprite/icon-bookmarks.svg"
            />
            <ReactSVG
              className="c-bookmark__icon c-bookmark__icon--filled"
              src="/img/sprite/icon-bookmarks-filled.svg"
            />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Audio;
