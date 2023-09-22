import React from "react";
import Comments from "../../components/comments";
import Footer from "../../components/footer";
import SecondSidebar from "../../components/sidebar/secondSidebar";

const Lecture = () => {
  return (
    <div className="layout layout--sticky-bottom">
      <div className="container">
        <div className="layout__wrap">
          <div className="layout__left layout__left--visible">
            <SecondSidebar />
            <Footer otherClassName="layout__footer" />
          </div>
          <div className="layout__main">
            <div className="layout__main-wrapper">
              <div className="layout__center">
                <div className="video mobile-wide">
                  <div className="video__media">
                    <img src="/img/media-plug.jpg" alt="Image" />
                  </div>
                  <div className="video__main">
                    <div className="video__body">
                      <h3 className="video__heading">
                        Люди не готовы к ошибкам нейросетей
                      </h3>
                      <div className="video__inner">
                        <a href="#" className="video__author">
                          <img src="/img/user.jpg" alt="Image" />
                          <span>Александр Македонский</span>
                        </a>
                        <span className="video__time">30 минут назад</span>
                      </div>
                    </div>
                    <div className="media-controls video__bottom">
                      <div className="media-controls__wrapper">
                        <div className="media-controls__group">
                          <span className="media-controls__viewed">
                            4 565 просмотров
                          </span>
                        </div>
                        <div className="media-controls__group">
                          <div className="media-controls__btns">
                            <button className="btn-control btn-control--blue media-controls__btn">
                              <svg>
                                <use href="img/sprite.svg#icon-like-thumb-up"></use>
                              </svg>
                              <span>44</span>
                            </button>
                            <button className="btn-control media-controls__btn">
                              <svg>
                                <use href="img/sprite.svg#icon-reply"></use>
                              </svg>
                              <span>Поделиться</span>
                            </button>
                            <button className="btn-control media-controls__btn">
                              <svg>
                                <use href="img/sprite.svg#icon-bookmarks"></use>
                              </svg>
                              <span>В закладки</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="video__content">
                      <p>
                        Описание видео: <a href="#">#газлайтинг</a>{" "}
                        <a href="#">#нарцисс</a> <a href="#">#индифильм</a>
                        <br />
                        <br />
                        ТРИГГЕР ПРЕДУПРЕЖДЕНИЕ!
                        <br />
                        <br />
                        «Твоя реальность» — это короткометражный психологический
                        триллер, получивший множество наград, который
                        затрагивает текущую тему газлайтинга с целью привлечь
                        внимание к этому опасному эмоциональному насилию и
                        помочь вам распознать его признаки.
                        <br />
                        <br />
                        В фильме рассказывается об успешном молодом специалисте
                        по маркетингу, которая, переехав к своему
                        очаровательному парню-фотографу, рискует потерять все,
                        поскольку становится все более неуверенной в своей
                        способности доверять собственной памяти.
                        <br />
                        <br />
                        <a href="#">#нарциссизм</a> <a href="#">#нарцисс</a>{" "}
                        <a href="#">#газлайтинг</a> <a href="#">#индифильм</a>
                        <br />
                        <br />
                        Пожалуйста, не стесняйтесь связаться со мной в
                        Instagram, я всегда рад услышать ваши отзывы:
                        https://www.instam.com/tatjana.and...
                        <br />
                        <br />
                        * Большое спасибо Brucu Savas @sevgi_icinde за турецкие
                        субтитры!
                        <br />
                        * Огромное спасибо Ema Juniarsyah за индонезийские
                        субтитры!
                        <br />
                        * Большое спасибо Карлосу Ивану Чесневару за испанские
                        субтитры!
                        <br />
                        * Большое спасибо Абдулу Рахману Хасану Альшимали за
                        арабские субтитры!
                        <br />
                        <br />
                        (Если вы хотите предоставить субтитры на своем родном
                        языке, свяжитесь с нами через{" "}
                        <a href="#">www.tatjana-anders.com</a>)
                        <br />
                        <br />
                        Музыкальная тема:{" "}
                        <a href="#">https://echowanthervoiceback.com/</a>
                      </p>
                      <button className="video__content-more is--active">
                        <svg>
                          <use href="img/sprite.svg#icon-caret"></use>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <Comments otherClassName="video__comments" />
                </div>
              </div>
              <div className="layout__right">
                <div className="content-card mobile-wide">
                  <div className="content-card__wrapper">
                    <a
                      href="lecture.html"
                      className="category-card category-card--sm content-card__item"
                    >
                      <picture className="category-card__img">
                        <img src="/img/lectures-01.jpg" alt="Image" />
                      </picture>
                      <div className="category-card__body">
                        <span className="category-card__name">
                          Люди не готовы к ошибкам нейросетей
                        </span>
                        <div className="category-card__inner">
                          <span className="category-card__author">
                            Александр Македонский
                          </span>
                          <span className="category-card__help">
                            1 день назад
                          </span>
                        </div>
                      </div>
                    </a>
                    <a
                      href="lecture.html"
                      className="category-card category-card--sm content-card__item"
                    >
                      <picture className="category-card__img">
                        <img src="/img/lectures-03.jpg" alt="Image" />
                      </picture>
                      <div className="category-card__body">
                        <span className="category-card__name">
                          Люди не готовы к ошибкам нейросетей
                        </span>
                        <div className="category-card__inner">
                          <span className="category-card__author">
                            Александр Македонский
                          </span>
                          <span className="category-card__help">
                            1 день назад
                          </span>
                        </div>
                      </div>
                    </a>
                    <a
                      href="lecture.html"
                      className="category-card category-card--sm content-card__item"
                    >
                      <picture className="category-card__img">
                        <img src="/img/lectures-04.jpg" alt="Image" />
                      </picture>
                      <div className="category-card__body">
                        <span className="category-card__name">
                          Люди не готовы к ошибкам нейросетей
                        </span>
                        <div className="category-card__inner">
                          <span className="category-card__author">
                            Александр Македонский
                          </span>
                          <span className="category-card__help">
                            1 день назад
                          </span>
                        </div>
                      </div>
                    </a>
                    <a
                      href="lecture.html"
                      className="category-card category-card--sm content-card__item"
                    >
                      <picture className="category-card__img">
                        <img src="/img/lectures-01.jpg" alt="Image" />
                      </picture>
                      <div className="category-card__body">
                        <span className="category-card__name">
                          Люди не готовы к ошибкам нейросетей
                        </span>
                        <div className="category-card__inner">
                          <span className="category-card__author">
                            Александр Македонский
                          </span>
                          <span className="category-card__help">
                            1 день назад
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lecture;
