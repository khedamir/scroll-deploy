import Link from "next/link";
import React, { useEffect } from "react";
import { ReactSVG } from "react-svg";
import Swiper from "swiper";

const MoreNews = () => {
  useEffect(() => {
    const swiper = new Swiper(".more-topic__slider .swiper", {
      slidesPerView: "auto",
      spaceBetween: 16,
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div className="more-topic">
      <div className="container">
        <div className="more-topic__top">
          <h2 className="more-topic__heading">Еще по теме</h2>
        </div>
        <div className="more-topic__slider">
          <div className="more-topic__slider-wrapper">
            <div className="swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <article className="more-topic__item">
                    <Link href="#" className="more-topic__img-wrap">
                      <picture className="more-topic__img">
                        <img src="/img/more-topic-01.jpg" alt="Image" />
                      </picture>
                    </Link>
                    <div className="more-topic__body">
                      <Link href="#" className="more-topic__title">
                        Власти Турции не получали данных о попытках России
                        влиять на выборы
                      </Link>
                      <div className="more-topic__inner">
                        <div className="more-topic__elems">
                          <span className="more-topic__elem">Спорт</span>
                          <span className="more-topic__elem">
                            30 минут назад
                          </span>
                        </div>
                        <button className="c-bookmark more-topic__bookmark">
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
                <div className="swiper-slide">
                  <article className="more-topic__item">
                    <Link href="#" className="more-topic__img-wrap">
                      <picture className="more-topic__img more-topic__img--circle">
                        <img src="/img/more-topic-02.jpg" alt="Image" />
                      </picture>
                    </Link>
                    <div className="more-topic__body">
                      <Link href="#" className="more-topic__title">
                        Для чего нужны изделия Neuralink и как они устроены
                      </Link>
                      <div className="more-topic__inner">
                        <div className="more-topic__elems">
                          <span className="more-topic__elem">Спорт</span>
                          <span className="more-topic__elem">
                            30 минут назад
                          </span>
                        </div>
                        <button className="c-bookmark more-topic__bookmark">
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
                <div className="swiper-slide">
                  <article className="more-topic__item">
                    <Link href="#" className="more-topic__img-wrap">
                      <picture className="more-topic__img">
                        <img src="/img/more-topic-03.jpg" alt="Image" />
                      </picture>
                    </Link>
                    <div className="more-topic__body">
                      <Link href="#" className="more-topic__title">
                        Власти Турции не получали данных о попытках России
                        влиять на выборы
                      </Link>
                      <div className="more-topic__inner">
                        <div className="more-topic__elems">
                          <span className="more-topic__elem">Спорт</span>
                          <span className="more-topic__elem">
                            30 минут назад
                          </span>
                        </div>
                        <button className="c-bookmark more-topic__bookmark">
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
                <div className="swiper-slide">
                  <article className="more-topic__item">
                    <div className="more-topic__tidings">
                      <Link
                        href="#"
                        className="tidings-card more-topic__tidings-card"
                      >
                        <div className="tidings-card__wrapper">
                          <div className="tidings-card__body">
                            <span className="tidings-card__name">
                              Компании Маска Neuralink разрешили испытывать чипы
                              на&nbsp;мозгах людей
                            </span>
                            <div className="tidings-card__inner-wrap">
                              <div className="tidings-card__inner">
                                <span className="tidings-card__help">
                                  Спорт
                                </span>
                                <span className="tidings-card__help">
                                  30 минут назад
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
                        href="#"
                        className="tidings-card more-topic__news-card"
                      >
                        <div className="tidings-card__wrapper">
                          <div className="tidings-card__body">
                            <span className="tidings-card__name">
                              Компании Маска Neuralink разрешили испытывать чипы
                              на&nbsp;мозгах людей
                            </span>
                            <div className="tidings-card__inner-wrap">
                              <div className="tidings-card__inner">
                                <span className="tidings-card__help">
                                  Спорт
                                </span>
                                <span className="tidings-card__help">
                                  30 минут назад
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
                        href="#"
                        className="tidings-card more-topic__news-card"
                      >
                        <div className="tidings-card__wrapper">
                          <div className="tidings-card__body">
                            <span className="tidings-card__name">
                              Компании Маска Neuralink разрешили испытывать чипы
                              на&nbsp;мозгах людей
                            </span>
                            <div className="tidings-card__inner-wrap">
                              <div className="tidings-card__inner">
                                <span className="tidings-card__help">
                                  Спорт
                                </span>
                                <span className="tidings-card__help">
                                  30 минут назад
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
                  </article>
                </div>
                <div className="swiper-slide">
                  <article className="more-topic__item">
                    <Link href="#" className="more-topic__img-wrap">
                      <picture className="more-topic__img">
                        <img src="/img/more-topic-04.jpg" alt="Image" />
                      </picture>
                    </Link>
                    <div className="more-topic__body">
                      <Link href="#" className="more-topic__title">
                        Власти Турции не получали данных о попытках России
                        влиять на выборы
                      </Link>
                      <div className="more-topic__inner">
                        <div className="more-topic__elems">
                          <span className="more-topic__elem">Спорт</span>
                          <span className="more-topic__elem">
                            30 минут назад
                          </span>
                        </div>
                        <button className="c-bookmark more-topic__bookmark">
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
                <div className="swiper-slide">
                  <article className="more-topic__item">
                    <Link href="#" className="more-topic__img-wrap">
                      <picture className="more-topic__img">
                        <img src="/img/more-topic-05.jpg" alt="Image" />
                      </picture>
                    </Link>
                    <div className="more-topic__body">
                      <Link href="#" className="more-topic__title">
                        Власти Турции не получали данных о попытках России
                        влиять на выборы
                      </Link>
                      <div className="more-topic__inner">
                        <div className="more-topic__elems">
                          <span className="more-topic__elem">Спорт</span>
                          <span className="more-topic__elem">
                            30 минут назад
                          </span>
                        </div>
                        <button className="c-bookmark more-topic__bookmark">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreNews;
