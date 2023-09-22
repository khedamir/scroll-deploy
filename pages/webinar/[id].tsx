import React from "react";
import Footer from "../../components/footer";
import { ReactSVG } from "react-svg";
import Link from "next/link";

const Webinar = () => {
  return (
    <div className="layout">
      <div className="container">
        <div className="layout__wrap">
          <div className="layout__left">
            <Footer otherClassName="layout__footer" />
          </div>
          <div className="layout__main">
            <div className="layout__main-wrapper">
              <div className="layout__center">
                <div className="webinar mobile-wide">
                  <div className="webinar__wrap">
                    <div className="webinar__top">
                      <div className="webinar__group">
                        <span className="webinar__time">29 июля 14:00</span>
                        <button className="webinar__notification">
                          <ReactSVG src="/img/sprite/icon-notifications.svg" />
                        </button>
                      </div>
                      <div className="webinar__group">
                        <Link href="/lawyers-club" className="webinar__close">
                          <ReactSVG src="/img/sprite/icon-close-thin.svg" />
                        </Link>
                      </div>
                    </div>
                    <div className="webinar__body">
                      <h1 className="webinar__heading">
                        Все о заработной плате: по закону согласно ст. 136
                        трудового кодекса
                      </h1>
                      <p className="webinar__description">
                        В вебинаре эксперт расскажет о том, какие бывают формы и
                        системы оплаты труда, когда какая из них подойдет для
                        разных видов бизнеса и что такое МРОТ.
                      </p>
                    </div>
                    <div className="webinar__block">
                      <h3 className="webinar__title">Спикеры</h3>
                      <div className="webinar__speakers">
                        <article className="speaker-card webinar__speaker">
                          <picture className="speaker-card__img">
                            <img src="/img/speaker-01.jpg" alt="Image" />
                          </picture>
                          <div className="speaker-card__body">
                            <h3 className="speaker-card__title">
                              Юрий Алексеев
                            </h3>
                            <span className="speaker-card__description">
                              Эксперт по кадровому делопроизводству
                            </span>
                          </div>
                        </article>
                        <article className="speaker-card webinar__speaker">
                          <picture className="speaker-card__img">
                            <img src="/img/speaker-02.jpg" alt="Image" />
                          </picture>
                          <div className="speaker-card__body">
                            <h3 className="speaker-card__title">
                              Юрий Алексеев
                            </h3>
                            <span className="speaker-card__description">
                              Эксперт по кадровому делопроизводству
                            </span>
                          </div>
                        </article>
                        <article className="speaker-card webinar__speaker">
                          <picture className="speaker-card__img">
                            <img src="/img/speaker-03.jpg" alt="Image" />
                          </picture>
                          <div className="speaker-card__body">
                            <h3 className="speaker-card__title">
                              Юрий Алексеев
                            </h3>
                            <span className="speaker-card__description">
                              Эксперт по кадровому делопроизводству
                            </span>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div className="webinar__themes">
                      <div className="webinar__theme">
                        <h3 className="webinar__title">Основные темы</h3>
                        <ul className="webinar__list">
                          <li className="webinar__list-item">
                            <a href="#" className="webinar__link">
                              Какие бывают формы оплаты труда
                            </a>
                          </li>
                          <li className="webinar__list-item">
                            <a href="#" className="webinar__link">
                              Какие бывают системы оплаты труда
                            </a>
                          </li>
                          <li className="webinar__list-item">
                            <a href="#" className="webinar__link">
                              Что такое МРОТ и зачем государство его
                              устанавливает
                            </a>
                          </li>
                          <li className="webinar__list-item">
                            <a href="#" className="webinar__link">
                              Удержания из заработной платы
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="webinar__theme">
                        <h3 className="webinar__title">Стоимость</h3>
                        <ul className="webinar__list">
                          <li className="webinar__list-item">
                            <span className="webinar__text">Бесплатно</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="webinar__block">
                      <h3 className="webinar__title">
                        Запишитесь на вебинар, чтобы не пропустить
                      </h3>
                      <div className="webinar-subscribe webinar__subscribe">
                        <form action="#" className="webinar-subscribe__wrapper">
                          <input
                            type="text"
                            className="webinar-subscribe__input"
                            placeholder="Email"
                          />
                          <button className="webinar-subscribe__btn btn">
                            Записаться
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="webinar-grid section-indent section-indent--lg">
                  <h3 className="webinar-grid__head">Прошедшие встречи</h3>
                  <div className="webinar-grid__wrapper webinar-grid__wrapper--indent">
                    <div className="webinar-grid__left">
                      <div
                        className="meetings-card webinar-grid__item"
                        // style="--background: #6F8BB4;"
                      >
                        <div className="meetings-card__wrapper">
                          <div className="meetings-card__body">
                            <div className="meetings-card__top">
                              <span className="meetings-card__subtitle">
                                Вебинар
                              </span>
                              <button className="meetings-card__control">
                                <ReactSVG src="/img/sprite/icon-notifications.svg" />
                              </button>
                            </div>
                            <div className="meetings-card__bottom meetings-card__bottom--flex">
                              <div className="meetings-card__images">
                                <a href="#" className="meetings-card__preview">
                                  <img
                                    src="/img/meetings-card-01.jpg"
                                    alt="Image"
                                  />
                                </a>
                                <a href="#" className="meetings-card__preview">
                                  <img
                                    src="/img/meetings-card-02.jpg"
                                    alt="Image"
                                  />
                                </a>
                              </div>
                              <a
                                href="webinar.html"
                                className="meetings-card__title"
                              >
                                Мосбиржа переведет акции и облигации на режим
                                торгов T+1
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="webinar-grid__right">
                      <div
                        className="meetings-card webinar-grid__item"
                        // style="--background: #EEEADD;"
                      >
                        <div className="meetings-card__wrapper">
                          <div className="meetings-card__body">
                            <div className="meetings-card__top">
                              <button className="meetings-card__play">
                                <ReactSVG src="/img/sprite/icon-play.svg" />
                              </button>
                              <button className="meetings-card__control">
                                <ReactSVG src="/img/sprite/icon-notifications.svg" />
                              </button>
                            </div>
                            <div className="meetings-card__bottom">
                              <a
                                href="webinar.html"
                                className="meetings-card__heading"
                              >
                                Что будет с рублем в&nbsp;этом&nbsp;году
                              </a>
                              <span className="meetings-card__author">
                                Юрий Алексеев
                              </span>
                            </div>
                          </div>
                          <a href="webinar.html" className="meetings-card__img">
                            <img
                              src="/img/webinar-card-img-03.jpg"
                              alt="Image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="webinar-grid__wrapper webinar-grid__wrapper--indent">
                    <div className="webinar-grid__left">
                      <div
                        className="meetings-card webinar-grid__item"
                        // style="--background: #FF8B59;"
                      >
                        <div className="meetings-card__wrapper">
                          <div className="meetings-card__body">
                            <div className="meetings-card__top">
                              <span className="meetings-card__subtitle">
                                Вебинар
                              </span>
                              <button className="meetings-card__control">
                                <ReactSVG src="/img/sprite/icon-notifications.svg" />
                              </button>
                            </div>
                            <div className="meetings-card__bottom meetings-card__bottom--flex">
                              <div className="meetings-card__images">
                                <a href="#" className="meetings-card__preview">
                                  <img
                                    src="/img/meetings-card-01.jpg"
                                    alt="Image"
                                  />
                                </a>
                                <a href="#" className="meetings-card__preview">
                                  <img
                                    src="/img/meetings-card-02.jpg"
                                    alt="Image"
                                  />
                                </a>
                              </div>
                              <a
                                href="webinar.html"
                                className="meetings-card__title"
                              >
                                Мосбиржа переведет акции и облигации на режим
                                торгов T+1
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="webinar-grid__right">
                      <div
                        className="meetings-card webinar-grid__item"
                        // style="--background: #FFC8E5;"
                      >
                        <div className="meetings-card__wrapper">
                          <div className="meetings-card__body">
                            <div className="meetings-card__top">
                              <button className="meetings-card__play">
                                <ReactSVG src="/img/sprite/icon-play.svg" />
                              </button>
                              <button className="meetings-card__control">
                                <ReactSVG src="/img/sprite/icon-notifications.svg" />
                              </button>
                            </div>
                            <div className="meetings-card__bottom">
                              <a
                                href="webinar.html"
                                className="meetings-card__heading"
                              >
                                Что будет с рублем в&nbsp;этом&nbsp;году
                              </a>
                              <span className="meetings-card__author">
                                Юрий Алексеев
                              </span>
                            </div>
                          </div>
                          <a href="webinar.html" className="meetings-card__img">
                            <img
                              src="/img/webinar-card-img-04.jpg"
                              alt="Image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="layout__right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
