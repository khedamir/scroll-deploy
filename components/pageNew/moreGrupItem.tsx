import React, { FC, MouseEvent } from "react";
import { NewType } from "../../redux/news/types";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { formatDateDifference } from "../../utils/formatDate";
import { useSelector } from "react-redux";
import { useFavoriteContext } from "../../context/FavoritesContext";
import { useModalsContext } from "../../context/ModalsContext";
import { selectUser } from "../../redux/auth/slice";
import { isElementInFavorites } from "../../redux/favorites/slice";
import { FavoriteNew } from "../../redux/favorites/types";
import { AppState } from "../../redux/store";

interface MoreGrupItemProps {
  item: NewType;
}

const MoreGrupItem: FC<MoreGrupItemProps> = ({ item }) => {
  const { user } = useSelector(selectUser);
  const { setLoginActive } = useModalsContext();
  const isFavorite = useSelector((state: AppState) =>
    isElementInFavorites(state, "9", item.id)
  );
  const { addFavorite, deleteFavorite } = useFavoriteContext();
  const changeFavorite = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!user) {
      setLoginActive(true);
      return;
    }

    if (isFavorite) {
      deleteFavorite({ itemId: item.id, sectionId: "9" });
    }

    if (!isFavorite) {
      const favoriteItem: FavoriteNew = {
        id: item.id,
        data: {
          NAME: item.name,
          props: {
            PUB_TAG: {
              VALUE: item.poperties.PUB_TAG,
            },
          },
        },
      };
      addFavorite({
        itemId: item.id,
        sectionId: "9",
        newItem: favoriteItem,
      });
    }
  };
  return (
    <Link
      href={`/news/${item.id}`}
      className="tidings-card more-topic__tidings-card"
    >
      <div className="tidings-card__wrapper">
        <div className="tidings-card__body">
          <span className="tidings-card__name">{item.name}</span>
          <div className="tidings-card__inner-wrap">
            <div className="tidings-card__inner">
              <span className="tidings-card__help">{item.rubric}</span>
              <span className="tidings-card__help">
                {formatDateDifference(item.date)}
              </span>
            </div>
            <button
              onClick={changeFavorite}
              className={`c-bookmark tidings-card__bookmark ${
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
      </div>
    </Link>
  );
};

export default MoreGrupItem;
