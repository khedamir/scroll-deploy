import React from "react";
import { ReactSVG } from "react-svg";

const QuoteCards = () => {
  return (
    <div className="news-card mobile-wide">
      <div className="news-card__grid">
        <div className="news-card__grid-left">
          <article className="quote-card news-card__grid-card news-card__grid-card--full">
            <div className="quote-card__wrapper">
              <div className="quote-card__main">
                <p className="quote-card__description">
                  Ничего страшного, никакого пенальти не было. Просто немного
                  накопилась усталость в мышцах, и я почувствовал боль, которую
                  не хотелось усугублять.
                </p>
                <span className="quote-card__author">
                  Александр Македонский
                </span>
              </div>
              <div className="quote-card__inner">
                <span className="quote-card__help">30 минут назад</span>
              </div>
            </div>
            <picture className="quote-card__img">
              <img src="img/quote-card-img.jpg" alt="Image" />
            </picture>
          </article>
        </div>
        <div className="news-card__grid-right">
          <a href="#" className="tidings-card news-card__grid-card">
            <div className="tidings-card__wrapper">
              <picture className="tidings-card__img tidings-card__img--full tidings-card__img--vr">
                <img src="img/news-card-vertical.jpg" alt="Image" />
              </picture>
              <div className="tidings-card__body">
                <span className="tidings-card__name">
                  Компании Маска Neuralink разрешили испытывать чипы на мозгах
                  людей
                </span>
                <div className="tidings-card__inner-wrap">
                  <div className="tidings-card__inner">
                    <span className="tidings-card__help">30 минут назад</span>
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
          </a>
          <div className="rubrics-bookmarks news-card__rubrics">
            <div className="rubrics-bookmarks__inner">
              <a href="#" className="rubrics-bookmarks__title">
                Пособия
              </a>
              <button className="c-bookmark rubrics-bookmarks__bookmark">
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
      </div>
    </div>
  );
};

export default QuoteCards;
