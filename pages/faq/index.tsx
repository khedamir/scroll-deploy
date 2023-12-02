import React, { useState } from "react";
import Footer from "../../components/footer";
import { ReactSVG } from "react-svg";
import Support from "../../components/modals/support";
import FeadbackBlock from "../../components/pageFaq/feadbackBlock";

const items = [
  {
    title: "Профиль",
    list: [
      {
        title: "Как зарегистрироваться?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
      {
        title: "Можно ли связать несколько аккаунтов?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
      {
        title: "Как восстановить доступ к аккаунту?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
      {
        title: "Как привязать почту?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
      {
        title: "Как удалить аккаунт?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
    ],
  },
  {
    title: "Редактор и создание публикаций",
    list: [
      {
        title: "Как отредактировать статью?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
      {
        title: "В какой раздел лучше опубликовать статью?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
      {
        title: "Какие есть ограничения на загрузку медиафайлов?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
      {
        title: "Как удалить аккаунт?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
    ],
  },
  {
    title: "Конструктор шаблонов",
    list: [
      {
        title: "Как отредактировать статью?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
      {
        title: "В какой раздел лучше опубликовать статью?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
      {
        title: "Какие есть ограничения на загрузку медиафайлов?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
      {
        title: "Как удалить аккаунт?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
    ],
  },
  {
    title: "Юридические консультации",
    list: [
      {
        title: "Как отредактировать статью?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
      {
        title: "В какой раздел лучше опубликовать статью?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
      {
        title: "Какие есть ограничения на загрузку медиафайлов?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
      {
        title: "Как удалить аккаунт?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
    ],
  },
  {
    title: "Подписка PRO",
    list: [
      {
        title: "Как отредактировать статью?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
      {
        title: "В какой раздел лучше опубликовать статью?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
      {
        title: "Какие есть ограничения на загрузку медиафайлов?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
      {
        title: "Как удалить аккаунт?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
    ],
  },
  {
    title: "Контент",
    list: [
      {
        title: "Как отредактировать статью?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
      {
        title: "В какой раздел лучше опубликовать статью?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
      {
        title: "Какие есть ограничения на загрузку медиафайлов?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
      {
        title: "Как удалить аккаунт?",
        description:
          "Вы можете зарегистрироваться по почте, с помощью Google-профиля или Apple ID.",
      },
    ],
  },
];

const Faq = () => {
  const [activeItem, setActiveItem] = useState(["", ""]);
  const [activeForm, setActiveForm] = useState(false);
  function toggleActiveItem(v1: string, v2: string) {
    if (activeItem[0] === v1 && activeItem[1] === v2) {
      setActiveItem(["", ""]);
    } else {
      setActiveItem([v1, v2]);
    }
  }
  return (
    <div className="layout">
      <Support active={activeForm} setActive={setActiveForm} />
      <div className="container">
        <div className="layout__wrap">
          <div className="layout__left">
            <Footer otherClassName="layout__footer" />
          </div>
          <div className="layout__main">
            <div className="layout__main-wrapper">
              <div className="layout__center">
                <div className="page-search">
                  <form action="#" className="page-search__inner">
                    <input
                      type="text"
                      className="page-search__input"
                      placeholder="Поиск"
                    />
                    <button className="page-search__btn">
                      <ReactSVG src="/img/sprite/icon-search.svg" />
                    </button>
                  </form>
                </div>
                <div className="faq">
                  <div className="faq__wrap">
                    <div className="faq__wrapper">
                      {items.map((item, id) => (
                        <div key={id} className="faq__item">
                          <h3 className="faq__title">{item.title}</h3>
                          <div className="faq-list faq__list">
                            <div className="faq-list__wrapper">
                              {item.list.map((v, i) => (
                                <div
                                  key={i}
                                  onClick={() =>
                                    toggleActiveItem(item.title, v.title)
                                  }
                                  className={`faq-list__item ${
                                    activeItem[0] === item.title &&
                                    activeItem[1] === v.title &&
                                    "is--open"
                                  }`}
                                >
                                  <button className="faq-list__trigger">
                                    <span>{v.title}</span>
                                    <ReactSVG src="/img/sprite/icon-plus.svg" />
                                  </button>
                                  <div className="faq-list__dropdown">
                                    <p className="faq-list__description">
                                      {v.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <FeadbackBlock />
                  </div>
                </div>
              </div>
              <div className="layout__right">
                <div
                  onClick={() => setActiveForm(true)}
                  className="answer-widget layout__sticky"
                >
                  <p>Задайте свой вопрос...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
