import Link from "next/link";
import React, { FC, RefObject, useEffect, useRef, useState } from "react";
import { ReactSVG } from "react-svg";
import { NewType } from "../../redux/news/types";
import { formatDateDifference } from "../../utils/formatDate";
import { useSelector } from "react-redux";
import { useModalsContext } from "../../context/ModalsContext";
import { selectUser } from "../../redux/auth/slice";
import { changeFavoriteItem } from "../../utils/controls";

interface NewCardProps {
  newItem: NewType;
  isLast?: boolean;
  newLimit?: () => void;
  end?: boolean;
}

const NewCard: FC<NewCardProps> = ({ newItem, isLast, newLimit, end }) => {
  const cardRef: RefObject<HTMLDivElement> = useRef(null);
  const { id, user } = useSelector(selectUser);
  const { setLoginActive } = useModalsContext();
  const [isFavorited, setIsFavorited] = useState(false);

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

  const addFavorite = () => {
    if (!user) {
      setLoginActive(true);
      return;
    }

    changeFavoriteItem({
      id: newItem.id,
      type: isFavorited ? "delete" : "add",
      userId: id,
    }).then(() => {
      setIsFavorited(true);
    });
  };

  return (
    <div className="big-news-card section-indent mobile-wide" ref={cardRef}>
      <div className="big-news-card__body">
        <div className="big-news-card__top">
          <div className="big-news-card__group">
            <span className="big-news-card__author">
              {newItem.poperties.SOURCE ? (
                <>
                  <img
                    src={`${newItem.poperties.PUB_SOURCE_LOGO}`}
                    alt="Image"
                  />
                  <span>{newItem.poperties.SOURCE}</span>
                </>
              ) : newItem.author_name ? (
                <>
                  <img src={`${newItem.author_photo}`} alt="Image" />
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
            <button onClick={addFavorite} className="big-news-card__control">
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
