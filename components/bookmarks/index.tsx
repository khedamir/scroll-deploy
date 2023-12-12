import React from "react";
import { useModalsContext } from "../../context/ModalsContext";
import { ReactSVG } from "react-svg";

const Bookmarks = () => {
  const { bookmarks, setBookmarks } = useModalsContext();
  return (
    <div className={`bookmarks ${bookmarks && "is--active"}`} id="bookmarks">
      <div className="bookmarks__wrap">
        <div className="bookmarks__top">
          <h3 className="bookmarks__heading">Закладки</h3>
          <button
            onClick={() => setBookmarks(false)}
            className="bookmarks__close"
          >
            <ReactSVG src="/img/sprite/icon-close-thin.svg" />
          </button>
        </div>
        <div className="bookmarks__main scroll-x" data-simplebar>
          <div className="bookmarks__scroll">
            <div className="bookmarks__wrapper">
              <article className="bookmarks-card bookmarks__item">
                <a href="#" className="bookmarks-card__img">
                  <img src="/img/lectures-01.jpg" alt="Image" />
                  <ReactSVG
                    className="bookmarks-card__img-icon"
                    src="/img/sprite/icon-play.svg"
                  />
                </a>
                <div className="bookmarks-card__body">
                  <a href="#" className="bookmarks-card__title">
                    Компании Маска Neuralink разрешили испытывать чипы на мозгах
                    людей
                  </a>
                  <div className="bookmarks-card__inner">
                    <span className="bookmarks-card__help">Пособия</span>
                    <button className="c-bookmark bookmarks-card__bookmark is--active">
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
              </article>
              <article className="bookmarks-card bookmarks__item">
                <a href="#" className="bookmarks-card__img">
                  <img src="/img/lectures-01.jpg" alt="Image" />
                  <ReactSVG
                    className="bookmarks-card__img-icon"
                    src="/img/sprite/icon-headheadset.svg"
                  />
                </a>
                <div className="bookmarks-card__body">
                  <a href="#" className="bookmarks-card__title">
                    Компании Маска Neuralink разрешили испытывать чипы на мозгах
                    людей
                  </a>
                  <div className="bookmarks-card__inner">
                    <span className="bookmarks-card__help">Пособия</span>
                    <button className="c-bookmark bookmarks-card__bookmark is--active">
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
              </article>
              <article className="bookmarks-card bookmarks__item">
                <a href="#" className="bookmarks-card__img">
                  <img src="img/lectures-01.jpg" alt="Image" />
                  <ReactSVG
                    className="bookmarks-card__img-icon"
                    src="/img/sprite/icon-play.svg"
                  />
                </a>
                <div className="bookmarks-card__body">
                  <a href="#" className="bookmarks-card__title">
                    Компании Маска Neuralink разрешили испытывать чипы на мозгах
                    людей
                  </a>
                  <div className="bookmarks-card__inner">
                    <span className="bookmarks-card__help">Пособия</span>
                    <button className="c-bookmark bookmarks-card__bookmark is--active">
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
              </article>
              <article className="bookmarks-card bookmarks__item">
                <a href="#" className="bookmarks-card__img">
                  <img src="img/lectures-01.jpg" alt="Image" />
                  <ReactSVG
                    className="bookmarks-card__img-icon"
                    src="/img/sprite/icon-headheadset.svg"
                  />
                </a>
                <div className="bookmarks-card__body">
                  <a href="#" className="bookmarks-card__title">
                    Компании Маска Neuralink разрешили испытывать чипы на мозгах
                    людей
                  </a>
                  <div className="bookmarks-card__inner">
                    <span className="bookmarks-card__help">Пособия</span>
                    <button className="c-bookmark bookmarks-card__bookmark is--active">
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
              </article>
              <article className="bookmarks-card bookmarks__item">
                <a href="#" className="bookmarks-card__img">
                  <img src="img/lectures-01.jpg" alt="Image" />
                </a>
                <div className="bookmarks-card__body">
                  <a href="#" className="bookmarks-card__title">
                    Компании Маска Neuralink разрешили испытывать чипы на мозгах
                    людей
                  </a>
                  <div className="bookmarks-card__inner">
                    <span className="bookmarks-card__help">Пособия</span>
                    <button className="c-bookmark bookmarks-card__bookmark is--active">
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
              </article>
              <article className="bookmarks-card bookmarks__item">
                <a href="#" className="bookmarks-card__img">
                  <img src="img/lectures-01.jpg" alt="Image" />
                </a>
                <div className="bookmarks-card__body">
                  <a href="#" className="bookmarks-card__title">
                    Компании Маска Neuralink разрешили испытывать чипы на мозгах
                    людей
                  </a>
                  <div className="bookmarks-card__inner">
                    <span className="bookmarks-card__help">Пособия</span>
                    <button className="c-bookmark bookmarks-card__bookmark is--active">
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
              </article>
            </div>
            <a href="#" className="bookmarks__more btn btn--md btn--white-blue">
              <span>Все закладки</span>
              <ReactSVG src="/img/sprite/icon-arrow-next.svg" />
            </a>
          </div>
        </div>
      </div>
      <div className="bookmarks__overlay"></div>
    </div>
  );
};

export default Bookmarks;
