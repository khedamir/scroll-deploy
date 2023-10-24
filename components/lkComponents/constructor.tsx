import Link from "next/link";
import React, { FC, useState } from "react";
import { ReactSVG } from "react-svg";

interface ConstructorProps {
  active: boolean;
}

type ActiveBlockValue = "history" | "purchases" | "tariff";

const Constructor: FC<ConstructorProps> = ({ active }) => {
  const [activeBlock, setActiveBlock] = useState<ActiveBlockValue>("history");
  return (
    <div className={`lk-tabs__wrapper ${active && "is--active"}`}>
      <div className="lk__body">
        <div className="lk__block">
          <div className="lk__fixed">
            <div className="lk__fixed-bg">
              <img src="img/bg-square.svg" alt="Background" />
            </div>
          </div>
        </div>
        <div className="lk__block">
          <div className="lk-document-designer">
            <ul className="lk-document-designer__tabs">
              <li
                className={`lk-document-designer__tabs-item ${
                  activeBlock === "history" && "is--active"
                }`}
                onClick={() => setActiveBlock("history")}
              >
                <button className="lk-document-designer__tabs-button">
                  История
                </button>
              </li>
              <li
                className={`lk-document-designer__tabs-item ${
                  activeBlock === "purchases" && "is--active"
                }`}
                onClick={() => setActiveBlock("purchases")}
              >
                <button className="lk-document-designer__tabs-button">
                  Купленные
                </button>
              </li>
              <li
                className={`lk-document-designer__tabs-item ${
                  activeBlock === "tariff" && "is--active"
                }`}
                onClick={() => setActiveBlock("tariff")}
              >
                <button className="lk-document-designer__tabs-button">
                  Тариф
                </button>
              </li>
            </ul>
            <div
              className={`lk-document-designer__wrapper ${
                activeBlock === "history" && "is--active"
              }`}
            >
              <div className="lk-history">
                <div className="lk-history__wrap">
                  <div className="lk-history__top">
                    <div className="lk-history-filter">
                      <div className="lk-history-filter__top">
                        <div className="lk-history-filter__search">
                          <input
                            type="text"
                            className="lk-history-filter__search-input"
                            placeholder="Поиск"
                          />
                          <button className="lk-history-filter__search-btn">
                            <ReactSVG src="/img/sprite/icon-search.svg" />
                          </button>
                        </div>
                        <button className="lk-history-filter__trigger">
                          <ReactSVG src="/img/sprite/icon-filter.svg" />
                        </button>
                      </div>
                      <div className="lk-history-filter__dropdown">
                        <h4 className="lk-history-filter__heading">
                          <ReactSVG src="/img/sprite/icon-filter.svg" />
                          <span>Фильтры</span>
                        </h4>
                        <div className="lk-history-filter__wrapper">
                          <div className="select-box control-group__select-box">
                            <div className="select-box__container">
                              <div className="select-box__wrap">
                                <div className="select-box__scroll">
                                  <div className="select-box__option">
                                    <input
                                      type="checkbox"
                                      className="select-box__radio"
                                      id="auction-status-01"
                                      name="auction-status"
                                    />
                                    <label
                                      htmlFor="auction-status-01"
                                      className="select-box__label"
                                    >
                                      <span className="select-box__icon"></span>
                                      <span className="select-box__title">
                                        Объявлены
                                      </span>
                                    </label>
                                  </div>
                                  <div className="select-box__option">
                                    <input
                                      type="checkbox"
                                      className="select-box__radio"
                                      id="auction-status-02"
                                      name="auction-status"
                                    />
                                    <label
                                      htmlFor="auction-status-02"
                                      className="select-box__label"
                                    >
                                      <span className="select-box__icon"></span>
                                      <span className="select-box__title">
                                        Прием заявок
                                      </span>
                                    </label>
                                  </div>
                                  <div className="select-box__option">
                                    <input
                                      type="checkbox"
                                      className="select-box__radio"
                                      id="auction-status-03"
                                      name="auction-status"
                                    />
                                    <label
                                      htmlFor="auction-status-03"
                                      className="select-box__label"
                                    >
                                      <span className="select-box__icon"></span>
                                      <span className="select-box__title">
                                        Прием заявок не активен
                                      </span>
                                    </label>
                                  </div>
                                  <div className="select-box__option">
                                    <input
                                      type="checkbox"
                                      className="select-box__radio"
                                      id="auction-status-04"
                                      name="auction-status"
                                    />
                                    <label
                                      htmlFor="auction-status-04"
                                      className="select-box__label"
                                    >
                                      <span className="select-box__icon"></span>
                                      <span className="select-box__title">
                                        Завершены
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="select-box__selected">
                              <span className="select-box__placeholder select-box__placeholder--active">
                                Любой
                              </span>
                              <span className="select-box__value"></span>
                            </div>
                            <div className="select-box__values">
                              <div className="select-box__values-list"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lk-history__wrapper">
                    <article className="lk-history__item">
                      <Link href="#" className="lk-history__name">
                        Заявление об отмене решения_ИФНC
                      </Link>
                      <div className="lk-history__inner">
                        <span className="lk-history__help">
                          Удаление через 30 дней
                        </span>
                        <div className="lk-history__controls">
                          <button className="lk-history__control">
                            <ReactSVG src="/img/sprite/icon-copy.svg" />
                          </button>
                          <button className="lk-history__control">
                            <ReactSVG src="/img/sprite/icon-download.svg" />
                          </button>
                          <button className="lk-history__control lk-history__control--red">
                            <ReactSVG src="/img/sprite/icon-delete.svg" />
                          </button>
                        </div>
                      </div>
                    </article>
                    <article className="lk-history__item">
                      <Link href="#" className="lk-history__name">
                        Публичное опровержение недостоверной рекламы
                      </Link>
                      <div className="lk-history__inner">
                        <span className="lk-history__help">
                          Удаление через 30 дней
                        </span>
                        <div className="lk-history__controls">
                          <button className="lk-history__control">
                            <ReactSVG src="/img/sprite/icon-copy.svg" />
                          </button>
                          <button className="lk-history__control">
                            <ReactSVG src="/img/sprite/icon-download.svg" />
                          </button>
                          <button className="lk-history__control lk-history__control--red">
                            <ReactSVG src="/img/sprite/icon-delete.svg" />
                          </button>
                        </div>
                      </div>
                    </article>
                    <article className="lk-history__item">
                      <Link href="#" className="lk-history__name">
                        Публичное опровержение недостоверной рекламы
                      </Link>
                      <div className="lk-history__inner">
                        <span className="lk-history__help">
                          Удаление через 30 дней
                        </span>
                        <div className="lk-history__controls">
                          <button className="lk-history__control">
                            <ReactSVG src="/img/sprite/icon-copy.svg" />
                          </button>
                          <button className="lk-history__control">
                            <ReactSVG src="/img/sprite/icon-download.svg" />
                          </button>
                          <button className="lk-history__control lk-history__control--red">
                            <ReactSVG src="/img/sprite/icon-delete.svg" />
                          </button>
                        </div>
                      </div>
                    </article>
                    <article className="lk-history__item">
                      <Link href="#" className="lk-history__name">
                        Публичное опровержение недостоверной рекламы
                      </Link>
                      <div className="lk-history__inner">
                        <span className="lk-history__help">
                          Удаление через 30 дней
                        </span>
                        <div className="lk-history__controls">
                          <button className="lk-history__control">
                            <ReactSVG src="/img/sprite/icon-copy.svg" />
                          </button>
                          <button className="lk-history__control">
                            <ReactSVG src="/img/sprite/icon-download.svg" />
                          </button>
                          <button className="lk-history__control lk-history__control--red">
                            <ReactSVG src="/img/sprite/icon-delete.svg" />
                          </button>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="lk__empty">
                  <p className="lk__description">
                    Здесь появятся ваши сохраненные документы. В конструкторе
                    доступно 1000 проверенных шаблонов документов. Выбирайте
                    нужный вам
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`lk-document-designer__wrapper ${
                activeBlock === "purchases" && "is--active"
              }`}
            >
              <div className="lk-history">
                <div className="lk-history__wrap">
                  <div className="lk-history__top"></div>
                  <div className="lk-history__wrapper">
                    <article className="lk-history__item">
                      <Link href="#" className="lk-history__name">
                        Заявление об отмене решения_ИФНC
                      </Link>
                      <div className="lk-history__inner">
                        <span className="lk-history__help">
                          Куплено: 12.01.2024
                        </span>
                        <span className="lk-history__value">500 ₽</span>
                      </div>
                    </article>
                    <article className="lk-history__item">
                      <Link href="#" className="lk-history__name">
                        Заявление об отмене решения_ИФНC
                      </Link>
                      <div className="lk-history__inner">
                        <span className="lk-history__help">
                          Куплено: 12.01.2024
                        </span>
                        <span className="lk-history__value">500 ₽</span>
                      </div>
                    </article>
                    <article className="lk-history__item">
                      <Link href="#" className="lk-history__name">
                        Заявление об отмене решения_ИФНC
                      </Link>
                      <div className="lk-history__inner">
                        <span className="lk-history__help">
                          Куплено: 12.01.2024
                        </span>
                        <span className="lk-history__value">500 ₽</span>
                      </div>
                    </article>
                    <article className="lk-history__item">
                      <Link href="#" className="lk-history__name">
                        Заявление об отмене решения_ИФНC
                      </Link>
                      <div className="lk-history__inner">
                        <span className="lk-history__help">
                          Куплено: 12.01.2024
                        </span>
                        <span className="lk-history__value">500 ₽</span>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="lk__empty">
                  <p className="lk__description">
                    Здесь появятся ваши купленные документы. В конструкторе
                    доступно 1000 проверенных шаблонов документов. Выбирайте
                    нужный вам
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`lk-document-designer__wrapper ${
                activeBlock === "tariff" && "is--active"
              }`}
            >
              <div className="lk-tariff">
                <div className="lk-tariff__wrap">
                  <div className="lk-tariff__current lk-tariff-current">
                    <div className="lk-tariff-current__wrapper">
                      <div className="lk-tariff-current__body">
                        <div className="lk-tariff-current__group">
                          <span className="lk-tariff-current__subtitle">
                            Текущий тариф
                          </span>
                          <div className="lk-tariff-current__value">
                            пробный месяц
                          </div>
                        </div>
                        <div className="lk-tariff-current__group">
                          <span className="lk-tariff-current__subtitle">
                            Осталось
                          </span>
                          <div className="lk-tariff-current__time">10 дней</div>
                        </div>
                      </div>
                      <button className="lk-tariff-current__up">
                        <ReactSVG src="/img/sprite/icon-stars.svg" />
                        <span>Поднять тариф</span>
                      </button>
                    </div>
                  </div>
                  <p className="lk-tariff__description">
                    Конструктор документов — современный помощник для
                    составления документов по различным категориям дел
                  </p>
                  <div className="lk-tariff__wrapper">
                    <article className="lk-tariff__item">
                      <div className="lk-tariff__body">
                        <h3 className="lk-tariff__title">3 месяца</h3>
                        <p className="lk-tariff__text">
                          Формируйте любой документ
                        </p>
                      </div>
                      <div className="lk-tariff__additional">
                        <span className="lk-tariff__price">5 000 ₽</span>
                        <Link href="#" className="lk-tariff__btn">
                          <ReactSVG src="/img/sprite/icon-arrow-next.svg" />
                        </Link>
                      </div>
                    </article>
                    <article className="lk-tariff__item">
                      <div className="lk-tariff__body">
                        <h3 className="lk-tariff__title">1 год</h3>
                        <p className="lk-tariff__text">
                          Формируйте любой документ
                        </p>
                      </div>
                      <div className="lk-tariff__additional">
                        <span className="lk-tariff__price">15 000 ₽</span>
                        <Link href="#" className="lk-tariff__btn">
                          <ReactSVG src="/img/sprite/icon-arrow-next.svg" />
                        </Link>
                      </div>
                    </article>
                    <article className="lk-tariff__item">
                      <div className="lk-tariff__body">
                        <h3 className="lk-tariff__title">3 месяца</h3>
                        <p className="lk-tariff__text">
                          Меняйте шаблоны документов по своим потребностям
                        </p>
                      </div>
                      <div className="lk-tariff__additional">
                        <span className="lk-tariff__price">30 000 ₽</span>
                        <Link href="#" className="lk-tariff__btn">
                          <ReactSVG src="/img/sprite/icon-arrow-next.svg" />
                        </Link>
                      </div>
                    </article>
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

export default Constructor;
