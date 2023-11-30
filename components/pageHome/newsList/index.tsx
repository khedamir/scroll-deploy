import React, { FC, MouseEvent } from "react";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { NewType } from "../../../redux/news/types";
import { formatDateDifference } from "../../../utils/formatDate";
import { useSelector } from "react-redux";
import { useFavoriteContext } from "../../../context/FavoritesContext";
import { useModalsContext } from "../../../context/ModalsContext";
import { selectUser } from "../../../redux/auth/slice";
import { selectFavorites } from "../../../redux/favorites/slice";
import { FavoriteNew } from "../../../redux/favorites/types";

interface NewsListProps {
  news: NewType[];
  largeNewIndex?: number;
}

const NewsList: FC<NewsListProps> = ({ news, largeNewIndex }) => {
  const { user } = useSelector(selectUser);
  const favorites = useSelector(selectFavorites);
  const { setLoginActive } = useModalsContext();
  const { addFavorite, deleteFavorite } = useFavoriteContext();

  const isFavorite = (id: string) => {
    if (favorites.data["9"] && favorites.data["9"].items) {
      const sectionItems = favorites.data["9"].items;
      return sectionItems.some((item) => item.id === id);
    }

    return false;
  };

  const changeFavorite = (
    event: MouseEvent<HTMLButtonElement>,
    newItem: NewType
  ) => {
    event.preventDefault();
    if (!user) {
      setLoginActive(true);
      return;
    }

    if (isFavorite(newItem.id)) {
      deleteFavorite({ itemId: newItem.id, sectionId: "9" });
    }

    if (!isFavorite(newItem.id)) {
      const favoriteItem: FavoriteNew = {
        id: newItem.id,
        data: {
          NAME: newItem.name,
          props: {
            PUB_TAG: {
              VALUE: newItem.poperties.PUB_TAG,
            },
          },
        },
      };
      addFavorite({
        itemId: newItem.id,
        sectionId: "9",
        newItem: favoriteItem,
      });
    }
  };
  return (
    <div className="news-card mobile-wide section-indent">
      {news && (
        <div className="news-card__wrapper">
          {news.map((item, id) => (
            <Link
              href={`/news/${item.id}`}
              key={item.id}
              className="news-card__item"
            >
              <div className="news-card__body">
                <span
                  className={`news-card__name ${
                    largeNewIndex === id && "news-card__name--lg"
                  }`}
                >
                  {item.name}
                </span>
                <div className="news-card__inner-wrap">
                  <div className="news-card__inner">
                    <span className="news-card__help">{item.rubric}</span>
                    <span className="news-card__help">
                      {formatDateDifference(item.date)}
                    </span>
                  </div>
                  <button
                    onClick={(event) => changeFavorite(event, item)}
                    className={`c-bookmark news-card__bookmark ${
                      isFavorite(item.id) && "is--active"
                    } `}
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
              {item.images.detail && largeNewIndex !== id && (
                <picture className="news-card__img news-card__img--sm">
                  <img src={`${item.images.detail}`} alt="Image" />
                </picture>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsList;
