import React, { FC } from "react";
import Link from "next/link";
import { useGetValuesNews } from "../../../hooks/useGetValues";
import { server } from "../../../utils/serverUrl";
import { ReactSVG } from "react-svg";

interface NewsListProps {
  name: string;
  limit: number;
  largeNewIndex?: number;
}

const NewsList: FC<NewsListProps> = ({ name, limit, largeNewIndex }) => {
  const news = useGetValuesNews(name, limit);
  return (
    <div className="news-card mobile-wide section-indent">
      {news && (
        <div className="news-card__wrapper">
          {news.map((item, id) => (
            <Link
              href={`/events/${item.ID}`}
              key={item.ID}
              className="news-card__item"
            >
              <div className="news-card__body">
                <span
                  className={`news-card__name ${
                    largeNewIndex === id && "news-card__name--lg"
                  }`}
                >
                  {item.NAME}
                </span>
                <div className="news-card__inner">
                  <span className="news-card__help">Спорт</span>
                  <span className="news-card__help">30 минут назад</span>
                </div>
                <button className="c-icon-btn news-card__favorite">
                  <ReactSVG src="img/sprite/icon-bookmarks.svg" />
                </button>
              </div>
              {item.PREVIEW_PICTURE && largeNewIndex !== id && (
                <picture className="news-card__img news-card__img--sm">
                  <img
                    src={`${server}${item.PREVIEW_PICTURE.ORIGINAL}`}
                    alt="Image"
                  />
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
