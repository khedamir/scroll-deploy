import React from "react";
import Footer from "../../components/footer";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import WebinerItem from "../../components/pageLawyersClub/webinerItem";
import AuthorItem from "../../components/pageWebinar/authorItem";
import RegisterBlock from "../../components/pageWebinar/registerBlock";

const data = {
  webinar: {
    title:
      "Все о заработной плате: по закону согласно ст. 136 трудового кодекса",
    description:
      "В вебинаре эксперт расскажет о том, какие бывают формы и системы оплаты труда, когда какая из них подойдет для разных видов бизнеса и что такое МРОТ.",
    authors: [
      {
        id: 1,
        name: "Юрий Алексеев",
        position: "Эксперт по кадровому делопроизводству",
      },
      {
        id: 2,
        name: "Юрий Алексеев",
        position: "Эксперт по кадровому делопроизводству",
      },
      {
        id: 3,
        name: "Юрий Алексеев",
        position: "Эксперт по кадровому делопроизводству",
      },
    ],
    themes: [
      "Какие бывают формы оплаты труда",
      "Какие бывают системы оплаты труда",
      "Что такое МРОТ и зачем государство его устанавливает",
      "Удержания из заработной платы",
    ],
    date: "29 июля 14:00",
  },
  pastWebinar: [
    {
      id: 1,
      title: "Мосбиржа переведет акции и облигации на режим торгов T+1",
      heading: "Что будет с рублем в этом году",
      author: "Юрий Алексеев",
    },
    {
      id: 2,
      title: "Мосбиржа переведет акции и облигации на режим торгов T+1",
      heading: "Что будет с рублем в этом году",
      author: "Юрий Алексеев",
    },
  ],
};

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
                        <span className="webinar__time">
                          {data.webinar.date}
                        </span>
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
                      <h1 className="webinar__heading">{data.webinar.title}</h1>
                      <p className="webinar__description">
                        {data.webinar.description}
                      </p>
                    </div>
                    <div className="webinar__block">
                      <h3 className="webinar__title">Спикеры</h3>
                      <div className="webinar__speakers">
                        {data.webinar.authors.map((author) => (
                          <AuthorItem key={author.id} author={author} />
                        ))}
                      </div>
                    </div>
                    <div className="webinar__themes">
                      <div className="webinar__theme">
                        <h3 className="webinar__title">Основные темы</h3>
                        <ul className="webinar__list">
                          {data.webinar.themes.map((theme, id) => (
                            <li key={id} className="webinar__list-item">
                              <a href="#" className="webinar__link">
                                {theme}
                              </a>
                            </li>
                          ))}
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
                    <RegisterBlock />
                  </div>
                </div>
                <div className="webinar-grid section-indent section-indent--lg">
                  <h3 className="webinar-grid__head">Прошедшие встречи</h3>
                  {data.pastWebinar.map((web) => (
                    <WebinerItem key={web.id} webinar={web} />
                  ))}
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
