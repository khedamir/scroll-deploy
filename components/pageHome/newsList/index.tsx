import React, { FC } from "react";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { NewType } from "../../../redux/news/types";
import { formatDateDifference } from "../../../utils/formatDate";

interface NewsListProps {
  news: NewType[];
  largeNewIndex?: number;
}

const NewsList: FC<NewsListProps> = ({ news, largeNewIndex }) => {
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
                <div className="news-card__inner">
                  <span className="news-card__help">{item.rubric}</span>
                  <span className="news-card__help">
                    {formatDateDifference(item.date)}
                  </span>
                </div>
                <button className="c-icon-btn news-card__favorite">
                  <ReactSVG src="/img/sprite/icon-bookmarks.svg" />
                </button>
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
