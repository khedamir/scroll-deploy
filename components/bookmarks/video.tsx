import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import { FavoriteSections, FavoriteVideo } from "../../redux/favorites/types";
import Link from "next/link";
import { useFavoriteContext } from "../../context/FavoritesContext";
import Image from "next/image";

interface VideoProps {
  item: FavoriteVideo;
  sectionId: FavoriteSections;
  path: string;
}

const Video: FC<VideoProps> = ({ item, sectionId, path }) => {
  const { deleteFavorite } = useFavoriteContext();

  const changeFavorite = () => {
    deleteFavorite({ itemId: item.id, sectionId });
  };

  return (
    <article className="bookmarks-card bookmarks__item">
      <Link href={`/${path}/${item.id}`} className="bookmarks-card__img">
        <Image
          width={110}
          height={69}
          src={item.data.images.preview}
          alt="Image"
        />
        <ReactSVG
          className="bookmarks-card__img-icon"
          src="/img/sprite/icon-play.svg"
        />
      </Link>
      <div className="bookmarks-card__body">
        <Link href={`/new/${item.id}`} className="bookmarks-card__title">
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

export default Video;
