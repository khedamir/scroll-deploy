import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectNews } from "../../../redux/news/slice";
import { baseURL } from "../../../utils/server";
import { formatDateDifference } from "../../../utils/formatDate";

const LastNews = () => {
  const { data } = useSelector(selectNews);

  return (
    data.datas.length > 2 && (
      <div className="news-card mobile-wide">
        {data.datas && (
          <div className="news-card__grid">
            <div className="news-card__grid-left">
              <Link
                href={`/news/${data.datas[0].id}`}
                className="tidings-card tidings-card--lg news-card__grid-card news-card__grid-card--full"
              >
                <div className="tidings-card__wrapper">
                  <picture className="tidings-card__bg">
                    <img
                      src={`${data.datas[0].images[1]}`}
                      alt="Image"
                    />
                  </picture>
                  <div className="tidings-card__body">
                    <span className="tidings-card__name">
                      {data.datas[0].name}
                    </span>
                    <div className="tidings-card__inner">
                      <span className="tidings-card__help">
                        {formatDateDifference(data.datas[0].date)}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="news-card__grid-right">
              <Link
                href={`/news/${data.datas[1].id}`}
                className="tidings-card news-card__grid-card"
              >
                <div className="tidings-card__wrapper">
                  <picture className="tidings-card__bg">
                    <img
                      src={`${data.datas[1].images[1]}`}
                      alt="Image"
                    />
                  </picture>
                  <div className="tidings-card__body">
                    <span className="tidings-card__name">
                      {data.datas[1].name}
                    </span>
                    <div className="tidings-card__inner">
                      <span className="tidings-card__help">
                        {formatDateDifference(data.datas[1].date)}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href={`/news/${data.datas[2].id}`}
                className="tidings-card news-card__grid-card"
              >
                <div className="tidings-card__wrapper">
                  <div className="tidings-card__body">
                    <span className="tidings-card__name">
                      {data.datas[2].name}
                    </span>
                    <div className="tidings-card__inner">
                      <span className="tidings-card__help">
                        {formatDateDifference(data.datas[2].date)}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default LastNews;
