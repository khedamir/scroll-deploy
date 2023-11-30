import Link from "next/link";
import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import { formatDateDifference } from "../../utils/formatDate";
import { NewType } from "../../redux/news/types";
import { useSelector } from "react-redux";
import { useFavoriteContext } from "../../context/FavoritesContext";
import { useModalsContext } from "../../context/ModalsContext";
import { selectUser } from "../../redux/auth/slice";
import { isElementInFavorites } from "../../redux/favorites/slice";
import { FavoriteNew } from "../../redux/favorites/types";
import { AppState } from "../../redux/store";

interface MoreNewItemProps {
  item: NewType;
}

const MoreNewItem: FC<MoreNewItemProps> = ({ item }) => {
  const { user } = useSelector(selectUser);
  const { setLoginActive } = useModalsContext();
  const isFavorite = useSelector((state: AppState) =>
    isElementInFavorites(state, "9", item.id)
  );
  const { addFavorite, deleteFavorite } = useFavoriteContext();
  const changeFavorite = () => {
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
    <div key={item.id} className="swiper-slide">
      <article className="more-topic__item">
        <Link href={`/news/${item.id}`} className="more-topic__img-wrap">
          <picture className="more-topic__img">
            <img src={item.images.detail} alt="Image" />
          </picture>
        </Link>
        <div className="more-topic__body">
          <Link href={`/news/${item.id}`} className="more-topic__title">
            {item.name}
          </Link>
          <div className="more-topic__inner">
            <div className="more-topic__elems">
              <span className="more-topic__elem">{item.rubric}</span>
              <span className="more-topic__elem">
                {formatDateDifference(item.date)}
              </span>
            </div>
            <button
              onClick={changeFavorite}
              className={`c-bookmark more-topic__bookmark ${
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
      </article>
    </div>
  );
};

export default MoreNewItem;
