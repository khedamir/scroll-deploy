import React from "react";
import "./commments.scss";

const Comments = () => {
  return (
    <div className="comments">
      <div className="comments__top">
        <h3 className="comments__heading">5 комментариев</h3>
      </div>
      <div className="comments-new comments__new">
        <div className="comments-new__wrapper">
          <picture className="comments-new__img">
            <span>М</span>
          </picture>
          <div className="comments-new__body">
            <textarea
              className="comments-new__input comments-new__trigger"
              placeholder="Введите комментарий"
            ></textarea>
            <div className="comments-new__holder">
              <div className="comments-new__inner">
                <div className="comments-new__controls">
                  <button className="comments-new__emoji">
                    <svg>
                      <use href="img/sprite.svg#icon-emoji"></use>
                    </svg>
                  </button>
                </div>
                <div className="comments-new__controls">
                  <button className="comments-new__clear">Отмена</button>
                  <button className="comments-new__enter" disabled>
                    <svg>
                      <use href="img/sprite.svg#icon-arrow-next"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="comments-all comments__all">
        <div className="comments-all__wrapper">
          <div className="comments-all__item">
            <div className="comment-card comments-all__card">
              <div className="comment-card__top">
                <a href="#" className="comment-card__author">
                  <img src="img/user.jpg" alt="Image" />
                  <span>Александр Македонский</span>
                </a>
                <span className="comment-card__time comment-card__time--desktop">
                  11 часов назад
                </span>
              </div>
              <div className="comment-card__body">
                <div className="comment-card__content">
                  <p>
                    На днях научное сообщество обошла новость об исследовании
                    университета Лозанны, в котором говорилось о прикованном к
                    постели 40-летнем голландце, попавшем в ДТП 12 лет назад.
                  </p>
                </div>
              </div>
              <div className="comment-card__bottom">
                <button className="feedback-btn comment-card__like">
                  <svg>
                    <use href="img/sprite.svg#icon-like-thumb-up"></use>
                  </svg>
                  <span>44</span>
                </button>
                <span className="comment-card__time comment-card__time--mobile">
                  11 часов назад
                </span>
                <button className="comment-card__answer">Ответить</button>
              </div>
            </div>
            <div className="comments-all__sub">
              <div className="comment-card comments-all__card">
                <div className="comment-card__top">
                  <a href="#" className="comment-card__author">
                    <img src="img/user.jpg" alt="Image" />
                    <span>Александр Македонский</span>
                  </a>
                  <span className="comment-card__time comment-card__time--desktop">
                    11 часов назад
                  </span>
                </div>
                <div className="comment-card__body">
                  <div className="comment-card__content">
                    <p>
                      На днях научное сообщество обошла новость об исследовании
                      университета Лозанны, в котором говорилось о прикованном к
                      постели 40-летнем голландце, попавшем в ДТП 12 лет назад.
                    </p>
                  </div>
                </div>
                <div className="comment-card__bottom">
                  <button className="feedback-btn comment-card__like">
                    <svg>
                      <use href="img/sprite.svg#icon-like-thumb-up"></use>
                    </svg>
                    <span>44</span>
                  </button>
                  <span className="comment-card__time comment-card__time--mobile">
                    11 часов назад
                  </span>
                  <button className="comment-card__answer">Ответить</button>
                </div>
              </div>
              <div className="comment-card comments-all__card">
                <div className="comment-card__top">
                  <a href="#" className="comment-card__author">
                    <img src="img/user-02.jpg" alt="Image" />
                    <span>Eminem</span>
                  </a>
                  <span className="comment-card__time comment-card__time--desktop">
                    11 часов назад
                  </span>
                </div>
                <div className="comment-card__body">
                  <div className="comment-card__content">
                    <p>
                      На днях научное сообщество обошла новость об исследовании
                      университета Лозанны, в котором говорилось о прикованном к
                      постели 40-летнем голландце, попавшем в ДТП 12 лет назад.
                    </p>
                  </div>
                </div>
                <div className="comment-card__bottom">
                  <button className="feedback-btn comment-card__like">
                    <svg>
                      <use href="img/sprite.svg#icon-like-thumb-up"></use>
                    </svg>
                    <span>44</span>
                  </button>
                  <span className="comment-card__time comment-card__time--mobile">
                    11 часов назад
                  </span>
                  <button className="comment-card__answer">Ответить</button>
                </div>
              </div>
              <div className="comment-card comments-all__card">
                <div className="comment-card__top">
                  <a href="#" className="comment-card__author">
                    <img src="img/user-01.jpg" alt="Image" />
                    <span>Dr. Dre</span>
                  </a>
                  <span className="comment-card__time comment-card__time--desktop">
                    1 день назад
                  </span>
                </div>
                <div className="comment-card__body">
                  <div className="comment-card__content">
                    <p>
                      На днях научное сообщество обошла новость об исследовании
                      университета Лозанны, в котором говорилось о прикованном к
                      постели 40-летнем голландце, попавшем в ДТП 12 лет назад.
                    </p>
                  </div>
                </div>
                <div className="comment-card__bottom">
                  <button className="feedback-btn comment-card__like">
                    <svg>
                      <use href="img/sprite.svg#icon-like-thumb-up"></use>
                    </svg>
                    <span>44</span>
                  </button>
                  <span className="comment-card__time comment-card__time--mobile">
                    1 день назад
                  </span>
                  <button className="comment-card__answer">Ответить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
