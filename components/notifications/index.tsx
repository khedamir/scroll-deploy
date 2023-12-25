import React from "react";
import { ReactSVG } from "react-svg";
import { useModalsContext } from "../../context/ModalsContext";
import { useHandleScroll } from "../../hooks";
import Image from "next/image";

const Notification = () => {
  const { notification, setNotification } = useModalsContext();
  useHandleScroll(notification);

  return (
    <div
      onClick={() => setNotification(notification)}
      className={`notifications ${notification && "is--active"}`}
      id="notifications"
    >
      <div onClick={(e) => e.stopPropagation()} className="notifications__wrap">
        <div className="notifications__top">
          <h3 className="notifications__heading">Уведомления</h3>
          <button
            onClick={() => setNotification(false)}
            className="notifications__close"
          >
            <ReactSVG src="/img/sprite/icon-close-thin.svg" />
          </button>
        </div>
        <div className="notifications__main scroll-x" data-simplebar>
          <div className="notifications__scroll">
            <a href="#" className="notifications__link">
              Пометить все как прочитанные
            </a>
            <div className="notifications__wrapper">
              <div className="notifications__item notifications__item--divider">
                <article className="notifications-card notifications__card">
                  <div className="notifications-card__wrapper">
                    <picture className="notifications-card__img">
                      <Image
                        width={34}
                        height={34}
                        src="/img/user.jpg"
                        alt="Image"
                      />
                    </picture>
                    <div className="notifications-card__body">
                      <span className="notifications-card__description">
                        Адам ответил вам в публикации «Компании Маска Neuralink
                        разрешили испытывать чипы на мозгах людей»
                      </span>
                      <span className="notifications-card__text">
                        <a href="#">@Александр Македонский</a> Согласен с вами!
                      </span>
                      <span className="notifications-card__time">30 мин</span>
                    </div>
                  </div>
                </article>
              </div>
              <div className="notifications__item">
                <div className="notifications-subscribe">
                  <div className="notifications-subscribe__wrapper">
                    <div className="notifications-subscribe__body">
                      <p className="notifications-subscribe__description">
                        Ваша Подписка PRO истекает через 2 дня! Не забудьте
                        продлить
                      </p>
                    </div>
                    <a
                      href="#"
                      className="notifications-subscribe__btn btn btn--md btn--white"
                    >
                      <span>Продлить</span>
                      <ReactSVG src="/img/sprite/icon-arrow-next.svg" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="notifications__item notifications__item--divider">
                <div className="notifications-webinar">
                  <div className="notifications-webinar__wrapper">
                    <div className="notifications-webinar__main">
                      <div className="notifications-webinar__inner">
                        <picture className="notifications-webinar__img">
                          <Image
                            width={36}
                            height={36}
                            src="/img/user.jpg"
                            alt="Image"
                          />
                        </picture>
                        <div className="notifications-webinar__body">
                          <p className="notifications-webinar__description">
                            Вебинар «Все о заработной плате: по закону согласно
                            ст. 136 трудового кодекса»
                          </p>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="notifications-webinar__btn btn btn--md btn--white-blue"
                      >
                        <span>Перейти</span>
                        <ReactSVG src="/img/sprite/icon-arrow-next.svg" />
                      </a>
                    </div>
                    <div className="notifications-webinar__status">
                      <span className="notifications-webinar__date">
                        Сегодня
                      </span>
                      <span className="notifications-webinar__time">14:00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="notifications__item notifications__item--divider">
                <article className="notifications-card notifications__card">
                  <div className="notifications-card__wrapper">
                    <picture className="notifications-card__img">
                      <Image
                        width={34}
                        height={34}
                        src="/img/user.jpg"
                        alt="Image"
                      />
                    </picture>
                    <div className="notifications-card__body">
                      <span className="notifications-card__description">
                        Техподдержка ответила на ваш вопрос «Почему мою
                        публикацию отозвали»
                      </span>
                      <span className="notifications-card__subtitle">
                        Уважаемый, Александр! Информация, содержащаяся в вашей
                        публикации, больше не является допустимой на нашей
                        платформе.
                      </span>
                      <span className="notifications-card__time">30 мин</span>
                    </div>
                  </div>
                </article>
              </div>
              <div className="notifications__item notifications__item--divider">
                <article className="notifications-card notifications__card">
                  <div className="notifications-card__wrapper">
                    <picture className="notifications-card__img">
                      <Image
                        width={34}
                        height={34}
                        src="/img/user.jpg"
                        alt="Image"
                      />
                    </picture>
                    <div className="notifications-card__body">
                      <span className="notifications-card__description">
                        Техподдержка ответила на ваш вопрос «Почему мою
                        публикацию отозвали»
                      </span>
                      <span className="notifications-card__subtitle">
                        Уважаемый, Александр! Информация, содержащаяся в вашей
                        публикации, больше не является допустимой на нашей
                        платформе.
                      </span>
                      <span className="notifications-card__time">30 мин</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="notifications__overlay"></div>
    </div>
  );
};

export default Notification;
