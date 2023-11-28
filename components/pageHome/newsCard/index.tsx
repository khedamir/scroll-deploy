import Link from "next/link";
import React, { FC } from "react";
import { NewType } from "../../../redux/news/types";
import { formatDateDifference } from "../../../utils/formatDate";
import { ReactSVG } from "react-svg";

interface NewsCardProps {
  news: NewType[];
}

const NewsCard: FC<NewsCardProps> = ({ news }) => {
  return (
    news &&
    news.length === 5 && (
      <div className="news-card mobile-wide">
        <div className="news-card__grid">
          <div className="news-card__grid-left">
            <div className="news-card__grid-wrapper">
              <Link
                href={`/news/${news[0].id}`}
                className="tidings-card tidings-card--md news-card__grid-card news-card__grid-card--full"
              >
                <div className="tidings-card__wrapper">
                  <picture className="tidings-card__bg">
                    <img src={`${news[0].images.detail}`} alt="Image" />
                  </picture>
                  <div className="tidings-card__body">
                    <span className="tidings-card__name">{news[0].name}</span>
                    <div className="tidings-card__inner-wrap">
                      <div className="tidings-card__inner">
                        <span className="tidings-card__help">
                          {news[0].rubric}
                        </span>
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
              <Link
                href={`/news/${news[1].id}`}
                className="tidings-card tidings-card--lg news-card__grid-card"
              >
                <div className="tidings-card__wrapper">
                  <div className="tidings-card__body">
                    <span className="tidings-card__name">{news[1].name}</span>
                    <div className="tidings-card__inner-wrap">
                      <div className="tidings-card__inner">
                        <span className="tidings-card__help">
                          {news[1].rubric}
                        </span>
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
            </div>
          </div>
          <div className="news-card__grid-right">
            <Link
              href={`/news/${news[2].id}`}
              className="tidings-card news-card__grid-card"
            >
              <div className="tidings-card__wrapper">
                <div className="tidings-card__body">
                  <span className="tidings-card__name text__wrapping">
                    {news[2].name}
                  </span>
                  <div className="tidings-card__inner-wrap">
                    <div className="tidings-card__inner">
                      <span className="tidings-card__help">
                        {news[2].rubric}
                      </span>
                      <span className="tidings-card__help">
                        {formatDateDifference(news[2].date)}
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
            <Link
              href={`/news/${news[3].id}`}
              className="tidings-card news-card__grid-card"
            >
              <div className="tidings-card__wrapper">
                <div className="tidings-card__body">
                  <span className="tidings-card__name text__wrapping">
                    {news[3].name}
                  </span>
                  <div className="tidings-card__inner-wrap">
                    <div className="tidings-card__inner">
                      <span className="tidings-card__help">
                        {news[3].rubric}
                      </span>
                      <span className="tidings-card__help">
                        {formatDateDifference(news[3].date)}
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
            <Link
              href={`/news/${news[4].id}`}
              className="tidings-card news-card__grid-card"
            >
              <div className="tidings-card__wrapper">
                <div className="tidings-card__body">
                  <span className="tidings-card__name text__wrapping">
                    {news[4].name}
                  </span>
                  <div className="tidings-card__inner-wrap">
                    <div className="tidings-card__inner">
                      <span className="tidings-card__help">
                        {news[4].rubric}
                      </span>
                      <span className="tidings-card__help">
                        {formatDateDifference(news[4].date)}
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
          </div>
        </div>
      </div>
    )
  );
};

export default NewsCard;
