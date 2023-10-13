import Link from "next/link";
import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import { NewType } from "../../redux/news/types";
import { baseURL } from "../../utils/server";
import { formatDateDifference } from "../../utils/formatDate";

interface NewCardProps {
  newItem: NewType;
}

const NewCard: FC<NewCardProps> = ({ newItem }) => {
  return (
    <div className="big-news-card section-indent mobile-wide">
      <div className="big-news-card__body">
        <div className="big-news-card__top">
          <div className="big-news-card__group">
            <span className="big-news-card__author">
              <img src="/img/user-02.jpg" alt="Image" />
              <span>Александр Македонский</span>
            </span>
            <span className="big-news-card__time">
              {formatDateDifference(newItem.date)}
            </span>
          </div>
          <div className="big-news-card__group">
            <button className="big-news-card__control">
              <ReactSVG src="/img/sprite/icon-bookmarks.svg" />
            </button>
          </div>
        </div>
        <Link href={`/news/${newItem.id}`} className="big-news-card__title">
          {newItem.name}
        </Link>
      </div>
      {newItem.images[1] && (
        <Link href={`/news/${newItem.id}`} className="big-news-card__img">
          <img src={`${baseURL}${newItem.images[1]}`} alt="Image" />
        </Link>
      )}
    </div>
  );
};

export default NewCard;
