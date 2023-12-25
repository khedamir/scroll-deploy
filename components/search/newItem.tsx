import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import { SearchItem } from "../../utils/search";
import Link from "next/link";
import { formatDateDifference } from "../../utils/formatDate";
import { useSelector } from "react-redux";
import { useFavoriteContext } from "../../context/FavoritesContext";
import { selectUser } from "../../redux/auth/slice";
import { isElementInFavorites } from "../../redux/favorites/slice";
import { FavoriteNew } from "../../redux/favorites/types";
import { AppState } from "../../redux/store";
import { useModalsContext } from "../../context/ModalsContext";
import Image from "next/image";

interface NewItemProps {
  item: SearchItem;
}

const NewItem: FC<NewItemProps> = ({ item }) => {
  return (
    <div className="news-card search__news-card mobile-wide">
      <Link
        target="__blank"
        href={`/news/${item.id}`}
        className="news-card__item"
      >
        <div className="news-card__body">
          <span className="news-card__name news-card__name--lg">
            {item.title || item.name}
          </span>
          <div className="news-card__inner-wrap">
            <div className="news-card__inner">
              <span className="news-card__help">{item.rubric}</span>
              <span className="news-card__help">
                {formatDateDifference(item.date)}
              </span>
            </div>
          </div>
        </div>
        <picture className="news-card__img">
          <Image fill loading="lazy" src={item.images.detail} alt="Image" />
        </picture>
      </Link>
    </div>
  );
};

export default NewItem;
