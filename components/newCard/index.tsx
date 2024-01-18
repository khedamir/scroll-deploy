import Link from "next/link";
import React, { FC, RefObject, useEffect, useRef, useState } from "react";
import { ReactSVG } from "react-svg";
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
import Image from "next/image";
import { NewType } from "../../redux/types";

interface NewCardProps {
  newItem: NewType;
  isLast?: boolean;
  newLimit?: () => void;
  end?: boolean;
}

const NewCard: FC<NewCardProps> = ({ newItem, isLast, newLimit, end }) => {
  const cardRef: RefObject<HTMLDivElement> = useRef(null);
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
    if (isFavorite) {
      deleteFavorite({ itemId: newItem.id, sectionId: "9" });
    }

    if (!isFavorite) {
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
    <div className="big-news-card section-indent mobile-wide" ref={cardRef}>
      <div className="big-news-card__body">
        <div className="big-news-card__top">
          <div className="big-news-card__group">
            <span className="big-news-card__author">
              {newItem.poperties.SOURCE ? (
                <>
                  <span className="big-news-card__author--img">
                    <Image
                      width={32}
                      height={32}
                      src={`${newItem.poperties.PUB_SOURCE_LOGO}`}
                      alt="Icon"
                    />
                  </span>
                  <span>{newItem.poperties.SOURCE}</span>
                </>
              ) : newItem.author_name ? (
                <>
                  <Link href={`/author/${newItem.poperties.AUTHOR}`}>
                    <span className="big-news-card__author--img">
                      <UserIcon
                        userPhoto={newItem.author_photo}
                        nameLatter={newItem.author_name[0]}
                        avatarColor={newItem.author_avatar_color}
                      />
                    </span>
                  </Link>
                  <Link href={`/author/${newItem.poperties.AUTHOR}`}>
                    <span>
                      {newItem.author_name} {newItem.author_surname}
                    </span>
                  </Link>
                </>
              ) : (
                <>
                  <Image
                    width={32}
                    height={32}
                    src="/img/logotype-small.svg"
                    alt="Image"
                  />
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
              className={`c-bookmark big-news-card__bookmark ${
                isFavorite && "is--active"
              }`}
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
        <Link href={`/news/${newItem.id}`} className="big-news-card__title">
          {newItem.name}
        </Link>
      </div>
      {newItem.images.detail && (
        <Link href={`/news/${newItem.id}`} className="big-news-card__img">
          <Image fill priority src={`${newItem.images.detail}`} alt="Image" />
        </Link>
      )}
    </div>
  );
};

export default NewCard;
