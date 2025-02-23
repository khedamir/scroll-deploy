import React, { FC, MouseEvent } from "react";
import { NewType } from "../../redux/types";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { formatDateDifference } from "../../utils/formatDate";
import { useSelector } from "react-redux";
import { useFavoriteContext } from "../../context/FavoritesContext";
import { isElementInFavorites } from "../../redux/favorites/slice";
import { FavoriteNew } from "../../redux/favorites/types";
import { AppState } from "../../redux/store";

interface MoreGrupItemProps {
  item: NewType;
  rubricId: string | undefined;
}

const MoreGrupItem: FC<MoreGrupItemProps> = ({ item, rubricId }) => {
  const isFavorite = useSelector((state: AppState) =>
    isElementInFavorites(state, "9", item.id)
  );
  const { addFavorite, deleteFavorite } = useFavoriteContext();
  const changeFavorite = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (isFavorite) {
      deleteFavorite({ itemId: item.id, sectionId: "9" });
    }

    if (!isFavorite) {
      const favoriteItem: FavoriteNew = {
        id: item.id,
        data: {
          NAME: item.name,
          images: item.images,
          props: {
            PUB_TAG: {
              VALUE: item.poperties.PUB_TAG,
            },
            PUB_RUBRIC: {
              VALUE: [item.rubric],
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
    <span className="tidings-card more-topic__tidings-card">
      <div className="tidings-card__wrapper">
        <div className="tidings-card__body">
          <Link href={`/news/${item.id}`} className="tidings-card__name">
            {item.name}
          </Link>
          <div className="tidings-card__inner-wrap">
            <div className="tidings-card__inner">
              <Link
                href={`/rubrics/${rubricId}`}
                className="tidings-card__help"
              >
                {item.rubric}
              </Link>
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
    </span>
  );
};

export default MoreGrupItem;
