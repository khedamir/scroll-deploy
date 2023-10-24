import Link from "next/link";
import React, { FC, useState } from "react";
import { ReactSVG } from "react-svg";

interface BookmarksProps {
  active: boolean;
}

type ActiveBlockValue = "articles" | "video" | "audio";
type orientationValue = "vertical" | "horizontal";

const Bookmarks: FC<BookmarksProps> = ({ active }) => {
  const [activeBlock, setActiveBlock] = useState<ActiveBlockValue>("articles");
  const [orientation, setOrientation] = useState<orientationValue>("vertical");
  return (
    <div className={`lk-tabs__wrapper ${active && "is--active"}`}>
      <div className="lk-bookmarks lk__main">
        <div className="lk-bookmarks__wrap">
          <ul className="lk-bookmarks__tabs">
            <li
              className={`lk-bookmarks__tabs-item ${
                activeBlock === "articles" && "is--active"
              }`}
              onClick={() => setActiveBlock("articles")}
            >
              <button className="lk-bookmarks__tabs-button">Статьи</button>
            </li>
            <li
              className={`lk-bookmarks__tabs-item ${
                activeBlock === "video" && "is--active"
              }`}
              onClick={() => setActiveBlock("video")}
            >
              <button className="lk-bookmarks__tabs-button">Видео</button>
            </li>
            <li
              className={`lk-bookmarks__tabs-item ${
                activeBlock === "audio" && "is--active"
              }`}
              onClick={() => setActiveBlock("audio")}
            >
              <button className="lk-bookmarks__tabs-button">Аудио</button>
            </li>
          </ul>
          <div className="lk-bookmarks__holder">
            <div
              className={`lk-bookmarks__wrapper ${
                activeBlock === "articles" && "is--active"
              }`}
            >
              <div className="lk-bookmarks__wrapper-inner">
                <div className="lk-articles lk-bookmarks__section">
                  <div className="lk-articles__wrapper">
                    <div className="lk-articles__column">
                      <article className="lk-articles__item">
                        <Link href="#" className="lk-articles__title">
                          Эксперты подсчитали переплаты невысыпающимся россиянам
                        </Link>
                        <div className="lk-articles__inner">
                          <span className="lk-articles__help">Политика</span>
                          <button className="lk-articles__favorites c-bookmark is--active">
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
                      </article>
                    </div>
                    <div className="lk-articles__column">
                      <article className="lk-articles__item">
                        <Link href="#" className="lk-articles__title">
                          Эксперты подсчитали переплаты невысыпающимся россиянам
                        </Link>
                        <div className="lk-articles__inner">
                          <span className="lk-articles__help">Спорт</span>
                          <button className="lk-articles__favorites c-bookmark is--active">
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
                      </article>
                    </div>
                  </div>
                </div>
                <button className="lk-bookmarks__favorites c-bookmark is--active">
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
            <div
              className={`lk-bookmarks__wrapper ${
                activeBlock === "video" && "is--active"
              }`}
            >
              <div className="lk-video lk-bookmarks__section">
                <div className="lk-video__top">
                  <ul className="lk-video__tabs">
                    <li
                      className={`lk-video__tabs-item ${
                        orientation === "vertical" && "is--active"
                      }`}
                    >
                      <button
                        onClick={() => setOrientation("vertical")}
                        className="lk-video__tabs-button"
                      >
                        <ReactSVG src="/img/sprite/icon-orientation-vertical.svg" />
                      </button>
                    </li>
                    <li
                      className={`lk-video__tabs-item ${
                        orientation === "horizontal" && "is--active"
                      }`}
                    >
                      <button
                        onClick={() => setOrientation("horizontal")}
                        className="lk-video__tabs-button"
                      >
                        <ReactSVG src="/img/sprite/icon-orientation-horizontal.svg" />
                      </button>
                    </li>
                  </ul>
                  <button className="lk-bookmarks__favorites c-bookmark is--active">
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
                <div
                  className={`lk-video__holder ${
                    orientation === "vertical" && "is--active"
                  }`}
                >
                  <div className="lk-video__wrapper">
                    <article className="lk-video__item lk-video__item--vertical">
                      <Link href="#" className="lk-video__media">
                        <img src="/img/trands-video-01.jpg" alt="Image" />
                      </Link>
                      <button className="lk-video__favorites c-bookmark is--active">
                        <ReactSVG
                          className="c-bookmark__icon c-bookmark__icon--default"
                          src="/img/sprite/icon-bookmarks.svg"
                        />
                        <ReactSVG
                          className="c-bookmark__icon c-bookmark__icon--filled"
                          src="/img/sprite/icon-bookmarks-filled.svg"
                        />
                      </button>
                    </article>
                    <article className="lk-video__item lk-video__item--vertical">
                      <Link href="#" className="lk-video__media">
                        <img src="img/trands-video-02.jpg" alt="Image" />
                      </Link>
                      <button className="lk-video__favorites c-bookmark is--active">
                        <ReactSVG
                          className="c-bookmark__icon c-bookmark__icon--default"
                          src="/img/sprite/icon-bookmarks.svg"
                        />
                        <ReactSVG
                          className="c-bookmark__icon c-bookmark__icon--filled"
                          src="/img/sprite/icon-bookmarks-filled.svg"
                        />
                      </button>
                    </article>
                    <article className="lk-video__item lk-video__item--vertical">
                      <a href="#" className="lk-video__media">
                        <img src="img/trands-video-03.jpg" alt="Image" />
                      </a>
                      <button className="lk-video__favorites c-bookmark is--active">
                        <svg className="c-bookmark__icon c-bookmark__icon--default">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks"></use> */}
                        </svg>
                        <svg className="c-bookmark__icon c-bookmark__icon--filled">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks-filled"></use> */}
                        </svg>
                      </button>
                    </article>
                    <article className="lk-video__item lk-video__item--vertical">
                      <a href="#" className="lk-video__media">
                        <img src="img/trands-video-04.jpg" alt="Image" />
                      </a>
                      <button className="lk-video__favorites c-bookmark is--active">
                        <svg className="c-bookmark__icon c-bookmark__icon--default">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks"></use> */}
                        </svg>
                        <svg className="c-bookmark__icon c-bookmark__icon--filled">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks-filled"></use> */}
                        </svg>
                      </button>
                    </article>
                    <article className="lk-video__item lk-video__item--vertical">
                      <a href="#" className="lk-video__media">
                        <img src="img/trands-video-05.jpg" alt="Image" />
                      </a>
                      <button className="lk-video__favorites c-bookmark is--active">
                        <svg className="c-bookmark__icon c-bookmark__icon--default">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks"></use> */}
                        </svg>
                        <svg className="c-bookmark__icon c-bookmark__icon--filled">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks-filled"></use> */}
                        </svg>
                      </button>
                    </article>
                    <article className="lk-video__item lk-video__item--vertical">
                      <a href="#" className="lk-video__media">
                        <img src="img/trands-video-06.jpg" alt="Image" />
                      </a>
                      <button className="lk-video__favorites c-bookmark is--active">
                        <svg className="c-bookmark__icon c-bookmark__icon--default">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks"></use> */}
                        </svg>
                        <svg className="c-bookmark__icon c-bookmark__icon--filled">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks-filled"></use> */}
                        </svg>
                      </button>
                    </article>
                    <article className="lk-video__item lk-video__item--vertical">
                      <a href="#" className="lk-video__media">
                        <img src="img/trands-video-07.jpg" alt="Image" />
                      </a>
                      <button className="lk-video__favorites c-bookmark is--active">
                        <svg className="c-bookmark__icon c-bookmark__icon--default">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks"></use> */}
                        </svg>
                        <svg className="c-bookmark__icon c-bookmark__icon--filled">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks-filled"></use> */}
                        </svg>
                      </button>
                    </article>
                    <article className="lk-video__item lk-video__item--vertical">
                      <a href="#" className="lk-video__media">
                        <img src="img/trands-video-08.jpg" alt="Image" />
                      </a>
                      <button className="lk-video__favorites c-bookmark is--active">
                        <svg className="c-bookmark__icon c-bookmark__icon--default">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks"></use> */}
                        </svg>
                        <svg className="c-bookmark__icon c-bookmark__icon--filled">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks-filled"></use> */}
                        </svg>
                      </button>
                    </article>
                  </div>
                </div>
                <div
                  className={`lk-video__holder ${
                    orientation === "horizontal" && "is--active"
                  }`}
                >
                  <div className="lk-video__wrapper">
                    <article className="lk-video__item">
                      <Link href="#" className="lk-video__media">
                        <img src="/img/videos-01.jpg" alt="Image" />
                      </Link>
                      <button className="lk-video__favorites c-bookmark is--active">
                        <ReactSVG
                          className="c-bookmark__icon c-bookmark__icon--default"
                          src="/img/sprite/icon-bookmarks.svg"
                        />
                        <ReactSVG
                          className="c-bookmark__icon c-bookmark__icon--filled"
                          src="/img/sprite/icon-bookmarks-filled.svg"
                        />
                      </button>
                    </article>
                    <article className="lk-video__item">
                      <Link href="#" className="lk-video__media">
                        <img src="/img/videos-02.jpg" alt="Image" />
                      </Link>
                      <button className="lk-video__favorites c-bookmark is--active">
                        <ReactSVG
                          className="c-bookmark__icon c-bookmark__icon--default"
                          src="/img/sprite/icon-bookmarks.svg"
                        />
                        <ReactSVG
                          className="c-bookmark__icon c-bookmark__icon--filled"
                          src="/img/sprite/icon-bookmarks-filled.svg"
                        />
                      </button>
                    </article>
                    <article className="lk-video__item">
                      <a href="#" className="lk-video__media">
                        <img src="img/videos-03.jpg" alt="Image" />
                      </a>
                      <button className="lk-video__favorites c-bookmark is--active">
                        <svg className="c-bookmark__icon c-bookmark__icon--default">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks"></use> */}
                        </svg>
                        <svg className="c-bookmark__icon c-bookmark__icon--filled">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks-filled"></use> */}
                        </svg>
                      </button>
                    </article>
                    <article className="lk-video__item">
                      <a href="#" className="lk-video__media">
                        <img src="img/videos-04.jpg" alt="Image" />
                      </a>
                      <button className="lk-video__favorites c-bookmark is--active">
                        <svg className="c-bookmark__icon c-bookmark__icon--default">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks"></use> */}
                        </svg>
                        <svg className="c-bookmark__icon c-bookmark__icon--filled">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks-filled"></use> */}
                        </svg>
                      </button>
                    </article>
                    <article className="lk-video__item">
                      <a href="#" className="lk-video__media">
                        <img src="img/videos-02.jpg" alt="Image" />
                      </a>
                      <button className="lk-video__favorites c-bookmark is--active">
                        <svg className="c-bookmark__icon c-bookmark__icon--default">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks"></use> */}
                        </svg>
                        <svg className="c-bookmark__icon c-bookmark__icon--filled">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks-filled"></use> */}
                        </svg>
                      </button>
                    </article>
                    <article className="lk-video__item">
                      <a href="#" className="lk-video__media">
                        <img src="img/videos-03.jpg" alt="Image" />
                      </a>
                      <button className="lk-video__favorites c-bookmark is--active">
                        <svg className="c-bookmark__icon c-bookmark__icon--default">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks"></use> */}
                        </svg>
                        <svg className="c-bookmark__icon c-bookmark__icon--filled">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks-filled"></use> */}
                        </svg>
                      </button>
                    </article>
                    <article className="lk-video__item">
                      <a href="#" className="lk-video__media">
                        <img src="img/videos-01.jpg" alt="Image" />
                      </a>
                      <button className="lk-video__favorites c-bookmark is--active">
                        <svg className="c-bookmark__icon c-bookmark__icon--default">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks"></use> */}
                        </svg>
                        <svg className="c-bookmark__icon c-bookmark__icon--filled">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks-filled"></use> */}
                        </svg>
                      </button>
                    </article>
                    <article className="lk-video__item">
                      <a href="#" className="lk-video__media">
                        <img src="img/videos-04.jpg" alt="Image" />
                      </a>
                      <button className="lk-video__favorites c-bookmark is--active">
                        <svg className="c-bookmark__icon c-bookmark__icon--default">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks"></use> */}
                        </svg>
                        <svg className="c-bookmark__icon c-bookmark__icon--filled">
                          {/* <use xlink:href="img/sprite.svg#icon-bookmarks-filled"></use> */}
                        </svg>
                      </button>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`lk-bookmarks__wrapper ${
                activeBlock === "audio" && "is--active"
              }`}
            >
              <div className="lk-bookmarks__wrapper-inner">
                <div className="lk-podcasts lk-bookmarks__section">
                  <div className="lk-podcasts__wrapper">
                    <div className="lk-podcasts__item">
                      <picture className="lk-podcasts__img">
                        <img src="/img/podcasts-01.jpg" alt="Image" />
                      </picture>
                      <div className="lk-podcasts__body">
                        <div className="lk-podcasts__main">
                          <span className="lk-podcasts__help">2 выпуск</span>
                          <Link href="#" className="lk-podcasts__title">
                            Мойдодыр и нейросеть
                          </Link>
                          <span className="lk-podcasts__help">
                            Александр Македонский
                          </span>
                        </div>
                        <div className="lk-podcasts__additional">
                          <button className="lk-podcasts__play">
                            <ReactSVG src="/img/sprite/icon-play-grey.svg" />
                          </button>
                          <button className="lk-podcasts__favorites c-bookmark is--active">
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
                    <div className="lk-podcasts__item">
                      <picture className="lk-podcasts__img">
                        <img src="/img/podcasts-02.jpg" alt="Image" />
                      </picture>
                      <div className="lk-podcasts__body">
                        <div className="lk-podcasts__main">
                          <span className="lk-podcasts__help">2 выпуск</span>
                          <Link href="#" className="lk-podcasts__title">
                            Мойдодыр и нейросеть
                          </Link>
                          <span className="lk-podcasts__help">
                            Александр Македонский
                          </span>
                        </div>
                        <div className="lk-podcasts__additional">
                          <button className="lk-podcasts__play">
                            <ReactSVG src="/img/sprite/icon-play-grey.svg" />
                          </button>
                          <button className="lk-podcasts__favorites c-bookmark is--active">
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
                    <div className="lk-podcasts__item">
                      <picture className="lk-podcasts__img">
                        <img src="/img/podcasts-03.jpg" alt="Image" />
                      </picture>
                      <div className="lk-podcasts__body">
                        <div className="lk-podcasts__main">
                          <span className="lk-podcasts__help">2 выпуск</span>
                          <a href="#" className="lk-podcasts__title">
                            Мойдодыр и нейросеть
                          </a>
                          <span className="lk-podcasts__help">
                            Александр Македонский
                          </span>
                        </div>
                        <div className="lk-podcasts__additional">
                          <button className="lk-podcasts__play">
                            <ReactSVG src="/img/sprite/icon-play-grey.svg" />
                          </button>
                          <button className="lk-podcasts__favorites c-bookmark is--active">
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
                <button className="lk-bookmarks__favorites c-bookmark is--active">
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
    </div>
  );
};

export default Bookmarks;
