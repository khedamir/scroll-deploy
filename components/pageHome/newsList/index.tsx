import React, { FC, MouseEvent } from "react";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { formatDateDifference } from "../../../utils/formatDate";
import { useSelector } from "react-redux";
import { useFavoriteContext } from "../../../context/FavoritesContext";
import { useModalsContext } from "../../../context/ModalsContext";
import { selectUser } from "../../../redux/auth/slice";
import { selectFavorites } from "../../../redux/favorites/slice";
import { FavoriteNew } from "../../../redux/favorites/types";
import Image from "next/image";
import { NewType } from "../../../redux/types";
import { selectMainPage } from "../../../redux/main_page/slice";
import Tooltip from "./tooltip";

interface NewsListProps {
  news: NewType[];
  largeNewIndex?: number;
}

const NewsList: FC<NewsListProps> = ({ news, largeNewIndex }) => {
  const { user } = useSelector(selectUser);
  const favorites = useSelector(selectFavorites);
  const { rubrics } = useSelector(selectMainPage);
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
    <div className="news-card mobile-wide section-indent">
      {news && (
        <div className="news-card__wrapper">
          {news.map((item, id) => (
            <span key={item.id} className="news-card__item">
              <div className="news-card__body">
                <Link
                  href={`/news/${item.id}`}
                  className={`news-card__name ${
                    largeNewIndex === id && "news-card__name--lg"
                  }`}
                >
                  {item.name}
                </Link>
                <div className="news-card__inner-wrap">
                  <div className="news-card__inner">
                    <Link
                      href={`/rubrics/${
                        rubrics.find((rubric) => rubric.NAME === item.rubric)
                          ?.ID
                      }`}
                      className="news-card__help"
                    >
                      {item.rubric}
                    </Link>
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
              {item.images.detail && largeNewIndex !== id ? (
                <Link
                  href={`/news/${item.id}`}
                  className="news-card__img news-card__img--sm"
                >
                  <Image
                    fill
                    priority
                    src={`${item.images.detail}`}
                    alt="Image"
                  />
                </Link>
              ) : (
                <Tooltip publicationId={item.id} />
              )}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsList;
