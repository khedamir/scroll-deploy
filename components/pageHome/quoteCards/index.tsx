import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import { NewType } from "../../../redux/types";
import { formatDateDifference } from "../../../utils/formatDate";
import { useSelector } from "react-redux";
import { selectMainPage } from "../../../redux/main_page/slice";
import Link from "next/link";

interface QuoteCardsProps {
  news: NewType[];
}

const QuoteCards: FC<QuoteCardsProps> = ({ news }) => {
  const { rubrics } = useSelector(selectMainPage);

  return (
    news?.length === 2 && (
      <div className="news-card mobile-wide">
        <div className="news-card__grid">
          <div className="news-card__grid-left">
            <article className="quote-card news-card__grid-card news-card__grid-card--full">
              <Link
                href={`/news/${news[0].id}`}
                className="tidings-card news-card__grid-card"
              >
                <div className="tidings-card__wrapper">
                  <div className="tidings-card__body">
                    <span className="tidings-card__name">{news[0].name}</span>
                    <div className="tidings-card__inner-wrap">
                      <div className="tidings-card__inner">
                        <span className="tidings-card__help">
                          {formatDateDifference(news[0].date)}
                        </span>
                      </div>
                      <button className="c-bookmark tidings-card__bookmark">
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
              <div className="rubrics-bookmarks news-card__rubrics">
                <div className="rubrics-bookmarks__inner">
                  <div className="rubrics-bookmarks__inner">
                    <Link
                      href={`/rubrics/${
                        rubrics.find((rubric) => rubric.NAME === news[0].rubric)
                          ?.ID
                      }`}
                      className="rubrics-bookmarks__title"
                    >
                      {news[0].rubric}
                    </Link>
                  </div>
                </div>
              </div>
              <picture className="quote-card__img">
                <img src={news[0].images.detail} alt="Image" />
              </picture>
            </article>
          </div>
          <div className="news-card__grid-right">
            <Link href={`/news/${news[1].id}`} className="tidings-card news-card__grid-card">
              <div className="tidings-card__wrapper">
                <picture className="tidings-card__img tidings-card__img--full tidings-card__img--vr">
                  <img src={news[1].images.detail} alt="Image" />
                </picture>
                <div className="tidings-card__body">
                  <span className="tidings-card__name">{news[1].name}</span>
                  <div className="tidings-card__inner-wrap">
                    <div className="tidings-card__inner">
                      <span className="tidings-card__help">
                        {formatDateDifference(news[1].date)}
                      </span>
                    </div>
                    <button className="c-bookmark tidings-card__bookmark">
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
            <div className="rubrics-bookmarks news-card__rubrics">
              <div className="rubrics-bookmarks__inner">
                <Link
                  href={`/rubrics/${
                    rubrics.find((rubric) => rubric.NAME === news[1].rubric)?.ID
                  }`}
                  className="rubrics-bookmarks__title"
                >
                  {news[1].rubric}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default QuoteCards;
