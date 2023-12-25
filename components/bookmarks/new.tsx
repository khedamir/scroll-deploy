import React, { FC } from "react";
import { FavoriteNew, FavoriteSections } from "../../redux/favorites/types";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import { useFavoriteContext } from "../../context/FavoritesContext";
import Image from "next/image";

interface NewProps {
  item: FavoriteNew;
  sectionId: FavoriteSections;
}

const New: FC<NewProps> = ({ item, sectionId }) => {
  const { deleteFavorite } = useFavoriteContext();

  const changeFavorite = () => {
    deleteFavorite({ itemId: item.id, sectionId });
  };

  return (
    <article className="bookmarks-card bookmarks__item">
      <Link href={`/news/${item.id}`} className="bookmarks-card__img">
        <Image
          width={110}
          height={69}
          src={item.data.images.detail}
          alt="Image"
        />
      </Link>
      <div className="bookmarks-card__body">
        <Link href={`/news/${item.id}`} className="bookmarks-card__title">
          {item.data.NAME}
        </Link>
        <div className="bookmarks-card__inner">
          <span className="bookmarks-card__help">
            {item.data.props.PUB_RUBRIC.VALUE[0]}
          </span>
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

export default New;
