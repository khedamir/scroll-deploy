import Link from "next/link";
import React from "react";

const NewsCard = () => {
  return (
    <div className="news-card mobile-wide">
      <div className="news-card__grid">
        <div className="news-card__grid-left">
          <div className="news-card__grid-wrapper">
            <Link
              href="#"
              className="tidings-card tidings-card--md news-card__grid-card news-card__grid-card--full"
            >
              <div className="tidings-card__wrapper">
                <picture className="tidings-card__bg">
                  <img src="img/tidings-card-03.jpg" alt="Image" />
                </picture>
                <div className="tidings-card__body">
                  <span className="tidings-card__name">
                    Компании Маска Neuralink разрешили испытывать чипы на мозгах
                    людей
                  </span>
                  <div className="tidings-card__inner">
                    <span className="tidings-card__help">Спорт</span>
                    <span className="tidings-card__help">30 минут назад</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href="#"
              className="tidings-card tidings-card--lg news-card__grid-card"
            >
              <div className="tidings-card__wrapper">
                <div className="tidings-card__body">
                  <span className="tidings-card__name">
                    Компании Маска Neuralink разрешили испытывать чипы на мозгах
                    людей
                  </span>
                  <div className="tidings-card__inner">
                    <span className="tidings-card__help">Спорт</span>
                    <span className="tidings-card__help">30 минут назад</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="news-card__grid-right">
          <Link href="#" className="tidings-card news-card__grid-card">
            <div className="tidings-card__wrapper">
              <div className="tidings-card__body">
                <span className="tidings-card__name">
                  Компании Маска Neuralink разрешили испытывать чипы на мозгах
                  людей
                </span>
                <div className="tidings-card__inner">
                  <span className="tidings-card__help">Спорт</span>
                  <span className="tidings-card__help">30 минут назад</span>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#" className="tidings-card news-card__grid-card">
            <div className="tidings-card__wrapper">
              <div className="tidings-card__body">
                <span className="tidings-card__name">
                  Компании Маска Neuralink разрешили испытывать чипы на мозгах
                  людей
                </span>
                <div className="tidings-card__inner">
                  <span className="tidings-card__help">Спорт</span>
                  <span className="tidings-card__help">30 минут назад</span>
                </div>
              </div>
            </div>
          </Link>
          <Link href="#" className="tidings-card news-card__grid-card">
            <div className="tidings-card__wrapper">
              <div className="tidings-card__body">
                <span className="tidings-card__name">
                  Компании Маска Neuralink разрешили испытывать чипы на мозгах
                  людей
                </span>
                <div className="tidings-card__inner">
                  <span className="tidings-card__help">Спорт</span>
                  <span className="tidings-card__help">30 минут назад</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
