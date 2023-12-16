import Link from "next/link";
import React, { FC, MouseEvent } from "react";
import { NewType } from "../../../redux/news/types";
import { formatDateDifference } from "../../../utils/formatDate";
import { ReactSVG } from "react-svg";
import { useSelector } from "react-redux";
import { useFavoriteContext } from "../../../context/FavoritesContext";
import { useModalsContext } from "../../../context/ModalsContext";
import { selectUser } from "../../../redux/auth/slice";
import { selectFavorites } from "../../../redux/favorites/slice";
import { FavoriteNew } from "../../../redux/favorites/types";

interface NewsCardProps {
  news: NewType[];
}

const NewsCard: FC<NewsCardProps> = ({ news }) => {
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

    if (isFavorite(newItem.id)) {
      deleteFavorite({ itemId: newItem.id, sectionId: "9" });
    }

    if (!isFavorite(newItem.id)) {
      const favoriteItem: FavoriteNew = {
        id: newItem.id,
        data: {
          NAME: newItem.name,
          images: newItem.images,
          props: {
            PUB_TAG: {
              VALUE: newItem.poperties.PUB_TAG,
            },
            PUB_RUBRIC: {
              VALUE: [newItem.rubric],
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
    news &&
    news.length === 5 && (
      <div className="news-card mobile-wide">
        <div className="news-card__grid">
          <div className="news-card__grid-left">
            <div className="news-card__grid-wrapper">
              <Link
                href={`/news/${news[0].id}`}
                className="tidings-card tidings-card--md news-card__grid-card news-card__grid-card--full"
              >
                <div className="tidings-card__wrapper">
                  <picture className="tidings-card__bg">
                    <img src={`${news[0].images.detail}`} alt="Image" />
                  </picture>
                  <div className="tidings-card__body">
                    <span className="tidings-card__name">{news[0].name}</span>
                    <div className="tidings-card__inner-wrap">
                      <div className="tidings-card__inner">
                        <span className="tidings-card__help">
                          {news[0].rubric}
                        </span>
                        <span className="tidings-card__help">
                          {formatDateDifference(news[0].date)}
                        </span>
                      </div>
                      <button
                        onClick={(event) => changeFavorite(event, news[0])}
                        className={`c-bookmark tidings-card__bookmark ${
                          isFavorite(news[0].id) && "is--active"
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
                </div>
              </Link>
              <Link
                href={`/news/${news[1].id}`}
                className="tidings-card tidings-card--lg news-card__grid-card"
              >
                <div className="tidings-card__wrapper">
                  <div className="tidings-card__body">
                    <span className="tidings-card__name">{news[1].name}</span>
                    <div className="tidings-card__inner-wrap">
                      <div className="tidings-card__inner">
                        <span className="tidings-card__help">
                          {news[1].rubric}
                        </span>
                        <span className="tidings-card__help">
                          {formatDateDifference(news[1].date)}
                        </span>
                      </div>
                      <button
                        onClick={(event) => changeFavorite(event, news[1])}
                        className={`c-bookmark tidings-card__bookmark ${
                          isFavorite(news[1].id) && "is--active"
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
                </div>
              </Link>
            </div>
          </div>
          <div className="news-card__grid-right">
            <Link
              href={`/news/${news[2].id}`}
              className="tidings-card news-card__grid-card"
            >
              <div className="tidings-card__wrapper">
                <div className="tidings-card__body">
                  <span className="tidings-card__name text__wrapping">
                    {news[2].name}
                  </span>
                  <div className="tidings-card__inner-wrap">
                    <div className="tidings-card__inner">
                      <span className="tidings-card__help">
                        {news[2].rubric}
                      </span>
                      <span className="tidings-card__help">
                        {formatDateDifference(news[2].date)}
                      </span>
                    </div>
                    <button
                      onClick={(event) => changeFavorite(event, news[2])}
                      className={`c-bookmark tidings-card__bookmark ${
                        isFavorite(news[2].id) && "is--active"
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
              </div>
            </Link>
            <Link
              href={`/news/${news[3].id}`}
              className="tidings-card news-card__grid-card"
            >
              <div className="tidings-card__wrapper">
                <div className="tidings-card__body">
                  <span className="tidings-card__name text__wrapping">
                    {news[3].name}
                  </span>
                  <div className="tidings-card__inner-wrap">
                    <div className="tidings-card__inner">
                      <span className="tidings-card__help">
                        {news[3].rubric}
                      </span>
                      <span className="tidings-card__help">
                        {formatDateDifference(news[3].date)}
                      </span>
                    </div>
                    <button
                      onClick={(event) => changeFavorite(event, news[3])}
                      className={`c-bookmark tidings-card__bookmark ${
                        isFavorite(news[3].id) && "is--active"
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
              </div>
            </Link>
            <Link
              href={`/news/${news[4].id}`}
              className="tidings-card news-card__grid-card"
            >
              <div className="tidings-card__wrapper">
                <div className="tidings-card__body">
                  <span className="tidings-card__name text__wrapping">
                    {news[4].name}
                  </span>
                  <div className="tidings-card__inner-wrap">
                    <div className="tidings-card__inner">
                      <span className="tidings-card__help">
                        {news[4].rubric}
                      </span>
                      <span className="tidings-card__help">
                        {formatDateDifference(news[4].date)}
                      </span>
                    </div>
                    <button
                      onClick={(event) => changeFavorite(event, news[4])}
                      className={`c-bookmark tidings-card__bookmark ${
                        isFavorite(news[4].id) && "is--active"
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
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default NewsCard;
