import Link from "next/link";
import React, { FC, RefObject, useEffect, useRef, useState } from "react";
import { ReactSVG } from "react-svg";
import { NewType } from "../../redux/news/types";
import { formatDateDifference } from "../../utils/formatDate";
import { useSelector } from "react-redux";
import { useModalsContext } from "../../context/ModalsContext";
import { selectUser } from "../../redux/auth/slice";
import { changeFavoriteItem } from "../../utils/controls";
import {
  addToFavorites,
  isElementInFavorites,
  removeFromFavorites,
} from "../../redux/favorites/slice";
import { AppState, useAppDispatch } from "../../redux/store";
import { FavoriteNew } from "../../redux/favorites/types";
import { useFavoriteContext } from "../../context/FavoritesContext";
import UserIcon from "../userIcon";

interface NewCardProps {
  newItem: NewType;
  isLast?: boolean;
  newLimit?: () => void;
  end?: boolean;
}

const NewCard: FC<NewCardProps> = ({ newItem, isLast, newLimit, end }) => {
  const cardRef: RefObject<HTMLDivElement> = useRef(null);
  const { user } = useSelector(selectUser);
  const { setLoginActive } = useModalsContext();
  const isFavorite = useSelector((state: AppState) =>
    isElementInFavorites(state, "9", newItem.id)
  );
  const { addFavorite, deleteFavorite } = useFavoriteContext();
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
      deleteFavorite({ itemId: newItem.id, sectionId: "9" });
    }

    if (!isFavorite) {
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
    <div className="big-news-card section-indent mobile-wide" ref={cardRef}>
      <div className="big-news-card__body">
        <div className="big-news-card__top">
          <div className="big-news-card__group">
            <span className="big-news-card__author">
              {newItem.poperties.SOURCE ? (
                <>
                  <span className="big-news-card__author--img">
                    <img
                      src={`${newItem.poperties.PUB_SOURCE_LOGO}`}
                      alt="Icon"
                    />
                  </span>
                  <span>{newItem.poperties.SOURCE}</span>
                </>
              ) : newItem.author_name ? (
                <>
                  <span className="big-news-card__author--img">
                    <UserIcon
                      userPhoto={newItem.author_photo}
                      nameLatter={newItem.author_name[0]}
                    />
                  </span>
                  <span>
                    {newItem.author_name} {newItem.author_surname}
                  </span>
                </>
              ) : (
                <>
                  <img src="/img/logotype-small.svg" alt="Image" />
                  <span>Scroll</span>
                </>
              )}
            </span>
            <span className="big-news-card__time">
              {formatDateDifference(newItem.date)}
            </span>
          </div>
          <div className="big-news-card__group">
            <button
              onClick={changeFavorite}
              className={`big-news-card__control ${isFavorite && "is--active"}`}
            >
              <ReactSVG src="/img/sprite/icon-bookmarks.svg" />
            </button>
          </div>
        </div>
        <Link href={`/news/${newItem.id}`} className="big-news-card__title">
          {newItem.name}
        </Link>
      </div>
      {newItem.images.detail && (
        <Link href={`/news/${newItem.id}`} className="big-news-card__img">
          <img src={`${newItem.images.detail}`} alt="Image" />
        </Link>
      )}
    </div>
  );
};

export default NewCard;
