import Link from "next/link";
import React from "react";
import { ReactSVG } from "react-svg";

const NewCard = () => {
  return (
    <div className="big-news-card section-indent mobile-wide">
      <div className="big-news-card__body">
        <div className="big-news-card__top">
          <div className="big-news-card__group">
            <span className="big-news-card__author">
              <img src="/img/user-02.jpg" alt="Image" />
              <span>Александр Македонский</span>
            </span>
            <span className="big-news-card__time">30 минут назад</span>
          </div>
          <div className="big-news-card__group">
            <button className="big-news-card__control">
              <ReactSVG src="/img/sprite/icon-bookmarks.svg" />
            </button>
          </div>
        </div>
        <Link href="#" className="big-news-card__title">
          Внешнеторговый оборот Кабардино-Балкарии вырос в 1,2 раза в 2022 году
        </Link>
      </div>
      <Link href="#" className="big-news-card__img">
        <img src="/img/big-news-img.jpg" alt="Image" />
      </Link>
    </div>
  );
};

export default NewCard;
