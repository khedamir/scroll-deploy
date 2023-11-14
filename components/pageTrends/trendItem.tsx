import React, { FC, useState } from "react";
import { ReactSVG } from "react-svg";
import { extractVideoId } from "../../utils/extractVideoId";
import { TrendType } from "../../redux/trends/types";
import { useSelector } from "react-redux";
import { useModalsContext } from "../../context/ModalsContext";
import { selectUser } from "../../redux/auth/slice";
import { changeFavoriteItem } from "../../utils/controls";
import { useFavoriteContext } from "../../context/FavoritesContext";
import { isElementInFavorites } from "../../redux/favorites/slice";
import { FavoriteVideo } from "../../redux/favorites/types";
import { AppState } from "../../redux/store";

interface TrendItemProps {
  trend: TrendType;
}

const TrendItem: FC<TrendItemProps> = ({ trend }) => {
  const { user } = useSelector(selectUser);
  const { setLoginActive } = useModalsContext();
  const { addFavorite, deleteFavorite } = useFavoriteContext();
  const isFavorite = useSelector((state: AppState) =>
    isElementInFavorites(state, "28", trend.id)
  );

  const changeFavorite = () => {
    if (!user) {
      setLoginActive(true);
      return;
    }

    if (isFavorite) {
      deleteFavorite({ itemId: trend.id, sectionId: "28" });
    }

    if (!isFavorite) {
      const favoriteItem: FavoriteVideo = {
        id: trend.id,
        data: {
          images: trend.images,
        },
      };
      addFavorite({
        itemId: trend.id,
        sectionId: "28",
        videoItem: favoriteItem,
      });
    }
  };

  return (
    <div key={trend.id} className="swiper-slide">
      <div className="trands__slide">
        <div className="trands__left">
          <div className="trands__media">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${extractVideoId(
                trend.poperties.LINK_VIDEO
              )}?autoplay=1`}
            />
          </div>
          <div className="trands__controls">
            <button className="trands__control c-like">
              <div className="c-like__inner">
                <ReactSVG
                  className="c-like__icon c-like__icon--default"
                  src="/img/sprite/icon-like-thumb-up.svg"
                />
                <ReactSVG
                  className="c-like__icon c-like__icon--filled"
                  src="/img/sprite/icon-like-thumb-up-filled.svg"
                />
              </div>
              <span>{trend.likes}</span>
            </button>
            <button className="trands__control">
              <ReactSVG src="/img/sprite/icon-comment.svg" />
              <span>44</span>
            </button>
            <button
              onClick={changeFavorite}
              className={`trands__control c-bookmark ${
                isFavorite && "is-active"
              }`}
            >
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
        <div className="trands__right">
          <div className="trands__info">
            <div className="trands__author">
              <a href="#" className="trands__author-inner">
                <picture className="trands__author-img">
                  <img src="/img/speaker-01.jpg" alt="Image" />
                </picture>
                <div className="trands__author-group">
                  <span className="trands__author-name">
                    {trend.poperties.PUB_AUTOR}
                  </span>
                </div>
              </a>
              <p className="trands__description">{trend.name}</p>
            </div>
            <div className="comments-all trands__comments">
              <div className="comments-all__scroll scroll-x" data-simplebar>
                <div className="comments-all__wrapper">
                  <div className="comments-all__item">
                    <div className="comment-card comments-all__card">
                      <div className="comment-card__top">
                        <a href="#" className="comment-card__author">
                          <img src="/img/user.jpg" alt="Image" />
                          <span>Александр Македонский</span>
                        </a>
                        <span className="comment-card__time comment-card__time--desktop">
                          11 часов назад
                        </span>
                      </div>
                      <div className="comment-card__body">
                        <div className="comment-card__content">
                          <p>
                            На днях научное сообщество обошла новость об
                            исследовании университета Лозанны, в котором
                            говорилось о прикованном к постели 40-летнем
                            голландце, попавшем в ДТП 12 лет назад.
                          </p>
                        </div>
                      </div>
                      <div className="comment-card__bottom">
                        <button className="feedback-btn comment-card__like">
                          <ReactSVG src="/img/sprite/icon-like-thumb-up.svg" />
                          <span>44</span>
                        </button>
                        <span className="comment-card__time comment-card__time--mobile">
                          11 часов назад
                        </span>
                        <button className="comment-card__answer">
                          Ответить
                        </button>
                      </div>
                    </div>
                    <div className="comments-all__sub">
                      <div className="comment-card comments-all__card">
                        <div className="comment-card__top">
                          <a href="#" className="comment-card__author">
                            <img src="/img/user.jpg" alt="Image" />
                            <span>Александр Македонский</span>
                          </a>
                          <span className="comment-card__time comment-card__time--desktop">
                            11 часов назад
                          </span>
                        </div>
                        <div className="comment-card__body">
                          <div className="comment-card__content">
                            <p>
                              На днях научное сообщество обошла новость об
                              исследовании университета Лозанны, в котором
                              говорилось о прикованном к постели 40-летнем
                              голландце, попавшем в ДТП 12 лет назад.
                            </p>
                          </div>
                        </div>
                        <div className="comment-card__bottom">
                          <button className="feedback-btn comment-card__like">
                            <ReactSVG src="/img/sprite/icon-like-thumb-up.svg" />
                            <span>44</span>
                          </button>
                          <span className="comment-card__time comment-card__time--mobile">
                            11 часов назад
                          </span>
                          <button className="comment-card__answer">
                            Ответить
                          </button>
                        </div>
                      </div>
                      <div className="comment-card comments-all__card">
                        <div className="comment-card__top">
                          <a href="#" className="comment-card__author">
                            <img src="/img/user-02.jpg" alt="Image" />
                            <span>Eminem</span>
                          </a>
                          <span className="comment-card__time comment-card__time--desktop">
                            11 часов назад
                          </span>
                        </div>
                        <div className="comment-card__body">
                          <div className="comment-card__content">
                            <p>
                              На днях научное сообщество обошла новость об
                              исследовании университета Лозанны, в котором
                              говорилось о прикованном к постели 40-летнем
                              голландце, попавшем в ДТП 12 лет назад.
                            </p>
                          </div>
                        </div>
                        <div className="comment-card__bottom">
                          <button className="feedback-btn comment-card__like">
                            <ReactSVG src="/img/sprite/icon-like-thumb-up.svg" />
                            <span>44</span>
                          </button>
                          <span className="comment-card__time comment-card__time--mobile">
                            11 часов назад
                          </span>
                          <button className="comment-card__answer">
                            Ответить
                          </button>
                        </div>
                      </div>
                      <div className="comment-card comments-all__card">
                        <div className="comment-card__top">
                          <a href="#" className="comment-card__author">
                            <img src="/img/user-01.jpg" alt="Image" />
                            <span>Dr. Dre</span>
                          </a>
                          <span className="comment-card__time comment-card__time--desktop">
                            1 день назад
                          </span>
                        </div>
                        <div className="comment-card__body">
                          <div className="comment-card__content">
                            <p>
                              На днях научное сообщество обошла новость об
                              исследовании университета Лозанны, в котором
                              говорилось о прикованном к постели 40-летнем
                              голландце, попавшем в ДТП 12 лет назад.
                            </p>
                          </div>
                        </div>
                        <div className="comment-card__bottom">
                          <button className="feedback-btn comment-card__like">
                            <ReactSVG src="/img/sprite/icon-like-thumb-up.svg" />
                            <span>44</span>
                          </button>
                          <span className="comment-card__time comment-card__time--mobile">
                            1 день назад
                          </span>
                          <button className="comment-card__answer">
                            Ответить
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comments-short-new comments-all__short-new">
                <div className="comments-short-new__inner">
                  <input
                    type="text"
                    className="comments-short-new__input"
                    placeholder="Введите комментарий"
                  />
                  <button className="comments-short-new__btn">
                    <ReactSVG src="/img/sprite/icon-arrow-next.svg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendItem;
