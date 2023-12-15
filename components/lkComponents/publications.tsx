import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import MyEditor from "../modals/myEditor";
import { fetchRubrics } from "../../redux/rubrics/asyncAction";
import { useAppDispatch } from "../../redux/store";

interface PublicationsProps {
  active: boolean;
}

type ActiveBlockValue = "published" | "drafts";

const Publications: FC<PublicationsProps> = ({ active }) => {
  const [activeBlock, setActiveBlock] = useState<ActiveBlockValue>("published");
  const [formActive, setFormActive] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRubrics());
  }, [dispatch]);

  return (
    <div className={`lk-tabs__wrapper ${active && "is--active"}`}>
      <MyEditor active={formActive} setActive={setFormActive} />
      <div className="lk__body">
        <div className="lk__block">
          <div className="lk__fixed">
            <span
              onClick={() => setFormActive(true)}
              className="lk__fixed-btn btn-circle btn-circle--sm"
            >
              Предложить новость
            </span>
            <div className="lk__fixed-bg">
              <img src="/img/lines-vertical.svg" alt="Background" />
            </div>
          </div>
        </div>
        <div className="lk__block">
          <div className="lk-publications">
            <ul className="lk-publications__tabs">
              <li
                className={`lk-publications__tabs-item ${
                  activeBlock === "published" && "is--active"
                }`}
              >
                <button
                  onClick={() => setActiveBlock("published")}
                  className="lk-publications__tabs-button"
                >
                  Опубликованное
                </button>
              </li>
              <li
                className={`lk-publications__tabs-item ${
                  activeBlock === "drafts" && "is--active"
                }`}
              >
                <button
                  onClick={() => setActiveBlock("drafts")}
                  className="lk-publications__tabs-button"
                >
                  Черновики
                </button>
              </li>
            </ul>
            <div
              className={`lk-publications__wrapper ${
                activeBlock === "published" && "is--active"
              }`}
            >
              <div className="lk-publications__list">
                <div className="lk-publications-card lk-publications__item">
                  <div className="lk-publications-card__wrapper">
                    <div className="lk-publications-card__top">
                      <Link href="#" className="lk-publications-card__title">
                        Как получить материнский капитал
                      </Link>
                      <span className="lk-publications-card__date">
                        12 марта
                      </span>
                    </div>
                    <div className="lk-publications-card__bottom">
                      <div className="lk-publications-card__controls">
                        <button className="lk-publications-card__control lk-publications-card__control--red lk-publications-card__control--like">
                          <ReactSVG
                            className="lk-publications-card__control-icon lk-publications-card__control-icon--default"
                            src="/img/sprite/icon-like-thumb-up.svg"
                          />
                          <ReactSVG
                            className="lk-publications-card__control-icon lk-publications-card__control-icon--filled"
                            src="/img/sprite/icon-like-thumb-up-filled.svg"
                          />
                          <span>455</span>
                        </button>
                        <Link
                          href="#"
                          className="lk-publications-card__control"
                        >
                          <ReactSVG src="/img/sprite/icon-comment.svg" />
                          <span>34</span>
                        </Link>
                        <Link
                          href="#"
                          className="lk-publications-card__control"
                        >
                          <ReactSVG src="/img/sprite/icon-eye.svg" />
                          <span>1234</span>
                        </Link>
                      </div>
                      <Link href="#" className="lk-publications-card__arrow">
                        <ReactSVG src="/img/sprite/icon-arrow-link-down.svg" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="lk-publications-card lk-publications__item">
                  <div className="lk-publications-card__wrapper">
                    <div className="lk-publications-card__top">
                      <Link href="#" className="lk-publications-card__title">
                        Как получить материнский капитал
                      </Link>
                      <span className="lk-publications-card__date">
                        12 марта
                      </span>
                    </div>
                    <div className="lk-publications-card__bottom">
                      <div className="lk-publications-card__controls">
                        <button className="lk-publications-card__control lk-publications-card__control--red lk-publications-card__control--like">
                          <ReactSVG
                            className="lk-publications-card__control-icon lk-publications-card__control-icon--default"
                            src="/img/sprite/icon-like-thumb-up.svg"
                          />
                          <ReactSVG
                            className="lk-publications-card__control-icon lk-publications-card__control-icon--filled"
                            src="/img/sprite/icon-like-thumb-up-filled.svg"
                          />
                          <span>455</span>
                        </button>
                        <Link
                          href="#"
                          className="lk-publications-card__control"
                        >
                          <ReactSVG src="/img/sprite/icon-comment.svg" />
                          <span>34</span>
                        </Link>
                        <Link
                          href="#"
                          className="lk-publications-card__control"
                        >
                          <ReactSVG src="/img/sprite/icon-eye.svg" />
                          <span>1234</span>
                        </Link>
                      </div>
                      <Link href="#" className="lk-publications-card__arrow">
                        <ReactSVG src="/img/sprite/icon-arrow-link-down.svg" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="lk-publications-card lk-publications__item">
                  <div className="lk-publications-card__wrapper">
                    <div className="lk-publications-card__top">
                      <Link href="#" className="lk-publications-card__title">
                        Как получить материнский капитал
                      </Link>
                      <span className="lk-publications-card__date">
                        12 марта
                      </span>
                    </div>
                    <div className="lk-publications-card__bottom">
                      <div className="lk-publications-card__controls">
                        <button className="lk-publications-card__control lk-publications-card__control--red lk-publications-card__control--like">
                          <ReactSVG
                            className="lk-publications-card__control-icon lk-publications-card__control-icon--default"
                            src="/img/sprite/icon-like-thumb-up.svg"
                          />
                          <ReactSVG
                            className="lk-publications-card__control-icon lk-publications-card__control-icon--filled"
                            src="/img/sprite/icon-like-thumb-up-filled.svg"
                          />
                          <span>455</span>
                        </button>
                        <Link
                          href="#"
                          className="lk-publications-card__control"
                        >
                          <ReactSVG src="/img/sprite/icon-comment.svg" />
                          <span>34</span>
                        </Link>
                        <Link
                          href="#"
                          className="lk-publications-card__control"
                        >
                          <ReactSVG src="/img/sprite/icon-eye.svg" />
                          <span>1234</span>
                        </Link>
                      </div>
                      <Link href="#" className="lk-publications-card__arrow">
                        <ReactSVG src="/img/sprite/icon-arrow-link-down.svg" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lk__empty">
                <p className="lk__description">
                  У вас ещё нет публикаций. Напишите свою первую новость и здесь
                  будет не так пусто.
                </p>
              </div>
            </div>
            <div
              className={`lk-publications__wrapper ${
                activeBlock === "drafts" && "is--active"
              }`}
            >
              <div className="lk-publications__list">
                <div className="lk-publications-card lk-publications__item">
                  <div className="lk-publications-card__wrapper">
                    <div className="lk-publications-card__top">
                      <Link href="#" className="lk-publications-card__title">
                        Как получить материнский капитал
                      </Link>
                      <span className="lk-publications-card__date">
                        12 марта
                      </span>
                    </div>
                    <div className="lk-publications-card__bottom">
                      <div className="lk-publications-card__inner">
                        <span className="lk-publications-card__status lk-publications-card__status--purple">
                          Черновик
                        </span>
                        <div className="c-more lk-publications-card__more">
                          <button className="c-more__trigger">
                            <ReactSVG src="/img/sprite/icon-more-horizontal.svg" />
                          </button>
                          <div className="c-more__dropdown">
                            <ul className="c-more__list">
                              <li className="c-more__item">
                                <button className="c-more__btn">
                                  Редактировать
                                </button>
                              </li>
                              <li className="c-more__item">
                                <button className="c-more__btn">Удалить</button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <Link href="#" className="lk-publications-card__arrow">
                        <ReactSVG src="/img/sprite/icon-arrow-link-down.svg" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="lk-publications-card lk-publications__item">
                  <div className="lk-publications-card__wrapper">
                    <div className="lk-publications-card__top">
                      <Link href="#" className="lk-publications-card__title">
                        Как получить материнский капитал
                      </Link>
                      <span className="lk-publications-card__date">
                        12 марта
                      </span>
                    </div>
                    <div className="lk-publications-card__bottom">
                      <div className="lk-publications-card__inner">
                        <span className="lk-publications-card__status">
                          Ожидает модерации
                        </span>
                        <div className="c-more lk-publications-card__more">
                          <button className="c-more__trigger">
                            <ReactSVG src="/img/sprite/icon-more-horizontal.svg" />
                          </button>
                          <div className="c-more__dropdown">
                            <ul className="c-more__list">
                              <li className="c-more__item">
                                <button className="c-more__btn">
                                  Редактировать
                                </button>
                              </li>
                              <li className="c-more__item">
                                <button className="c-more__btn">Удалить</button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <Link href="#" className="lk-publications-card__arrow">
                        <ReactSVG src="/img/sprite/icon-arrow-link-down.svg" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="lk-publications-card lk-publications__item">
                  <div className="lk-publications-card__wrapper">
                    <div className="lk-publications-card__top">
                      <Link href="#" className="lk-publications-card__title">
                        Как получить материнский капитал
                      </Link>
                      <span className="lk-publications-card__date">
                        12 марта
                      </span>
                    </div>
                    <div className="lk-publications-card__bottom">
                      <div className="lk-publications-card__inner">
                        <span className="lk-publications-card__status lk-publications-card__status--red">
                          Ожидает модерации
                        </span>
                        <div className="c-more lk-publications-card__more">
                          <button className="c-more__trigger">
                            <ReactSVG src="/img/sprite/icon-more-horizontal.svg" />
                          </button>
                          <div className="c-more__dropdown">
                            <ul className="c-more__list">
                              <li className="c-more__item">
                                <button className="c-more__btn">
                                  Редактировать
                                </button>
                              </li>
                              <li className="c-more__item">
                                <button className="c-more__btn">Удалить</button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <Link href="#" className="lk-publications-card__arrow">
                        <ReactSVG src="/img/sprite/icon-arrow-link-down.svg" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lk__empty">
                <p className="lk__description">
                  У вас ещё нет публикаций. Напишите свою первую новость и здесь
                  будет не так пусто.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
