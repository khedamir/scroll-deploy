import React from "react";
import Footer from "../../components/footer";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import SecondSidebar from "../../components/sidebar/secondSidebar";

const LawyersClub = () => {
  return (
    <div className="layout">
      <div className="container">
        <div className="layout__wrap">
          <div className="layout__left layout__left--visible">
            <SecondSidebar />
            <Footer otherClassName="layout__footer" />
          </div>
          <div className="layout__main">
            <div className="layout__main-wrapper">
              <div className="layout__center">
                <div className="webinar-card">
                  <div className="webinar-card__wrapper">
                    <div className="webinar-card__body">
                      <div className="webinar-card__top">
                        <div className="webinar-card__inner">
                          <span className="webinar-card__subtitle">
                            Вебинар
                          </span>
                          <button className="webinar-card__control">
                            <ReactSVG src="/img/sprite/icon-notifications.svg" />
                          </button>
                        </div>
                        <span className="webinar-card__date">
                          29 июля 14:00
                        </span>
                      </div>
                      <div className="webinar-card__main">
                        <Link href="/webinar/1" className="webinar-card__title">
                          Все о заработной плате: по закону согласно ст. 136
                          трудового кодекса
                        </Link>
                      </div>
                      <div className="webinar-card__bottom">
                        <span className="webinar-card__author">
                          Юрий Алексеев
                        </span>
                      </div>
                    </div>
                    <Link href="/webinar/1" className="webinar-card__img">
                      <img src="/img/webinar-card-img.jpg" alt="Image" />
                    </Link>
                  </div>
                </div>
                <div className="webinar-grid section-indent section-indent--lg">
                  <h3 className="webinar-grid__head">Прошедшие встречи</h3>
                  <div className="webinar-grid__wrapper webinar-grid__wrapper--indent">
                    <div className="webinar-grid__left">
                      <div className="meetings-card webinar-grid__item">
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
                                <Link
                                  href="#"
                                  className="meetings-card__preview"
                                >
                                  <img
                                    src="/img/meetings-card-01.jpg"
                                    alt="Image"
                                  />
                                </Link>
                                <Link
                                  href="#"
                                  className="meetings-card__preview"
                                >
                                  <img
                                    src="/img/meetings-card-02.jpg"
                                    alt="Image"
                                  />
                                </Link>
                              </div>
                              <Link
                                href="/webinar/1"
                                className="meetings-card__title"
                              >
                                Мосбиржа переведет акции и облигации на режим
                                торгов T+1
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="webinar-grid__right">
                      <div className="meetings-card webinar-grid__item">
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
                              <Link
                                href="/webinar/1"
                                className="meetings-card__heading"
                              >
                                Что будет с рублем в&nbsp;этом&nbsp;году
                              </Link>
                              <span className="meetings-card__author">
                                Юрий Алексеев
                              </span>
                            </div>
                          </div>
                          <Link
                            href="/webinar/1"
                            className="meetings-card__img"
                          >
                            <img
                              src="/img/webinar-card-img-02.jpg"
                              alt="Image"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="webinar-grid__wrapper webinar-grid__wrapper--indent">
                    <div className="webinar-grid__left">
                      <div className="meetings-card webinar-grid__item">
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
                                <Link
                                  href="#"
                                  className="meetings-card__preview"
                                >
                                  <img
                                    src="/img/meetings-card-01.jpg"
                                    alt="Image"
                                  />
                                </Link>
                                <Link
                                  href="#"
                                  className="meetings-card__preview"
                                >
                                  <img
                                    src="/img/meetings-card-02.jpg"
                                    alt="Image"
                                  />
                                </Link>
                              </div>
                              <Link
                                href="/webinar/1"
                                className="meetings-card__title"
                              >
                                Мосбиржа переведет акции и облигации на режим
                                торгов T+1
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="webinar-grid__right">
                      <div className="meetings-card webinar-grid__item">
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
                              <Link
                                href="/webinar/1"
                                className="meetings-card__heading"
                              >
                                Что будет с рублем в&nbsp;этом&nbsp;году
                              </Link>
                              <span className="meetings-card__author">
                                Юрий Алексеев
                              </span>
                            </div>
                          </div>
                          <Link
                            href="/webinar/1"
                            className="meetings-card__img"
                          >
                            <img
                              src="/img/webinar-card-img-02.jpg"
                              alt="Image"
                            />
                          </Link>
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

export default LawyersClub;
