import React from "react";
import { ReactSVG } from "react-svg";

const PassworRecoverySend = () => {
  return (
    <div className="modal modal--wide" id="modal-password-recovery-send">
      <div className="modal__wrap">
        <div className="modal__wrapper">
          <div className="modal__left">
            <picture className="modal__logotype">
              <img src="img/logotype.svg" alt="SCROLL" />
            </picture>
            <button className="modal__close-btn modal__close-btn--mobile">
              <ReactSVG src="/img/sprite/icon-close-thin.svg" />
            </button>
          </div>
          <div className="modal__right">
            <button className="modal__close-btn modal__close-btn--desktop">
              <ReactSVG src="/img/sprite/icon-close-thin.svg" />
            </button>
            <div className="modal__content">
              <button className="modal__back">
                <ReactSVG src="/img/sprite/icon-arrow-s-prev.svg" />
                <span>Назад</span>
              </button>
              <h3 className="modal__heading">Проверьте ваши письма</h3>
              <p className="modal__description">
                Мы отправили письмо со ссылкой на изменение пароля на вашу почту
                ex***@mail.ru. Проверьте папку «Спам», если письмо не найдено
              </p>
              <form action="#" className="modal-form modal__form">
                <button className="modal-form__btn modal-form__btn--indent-lg btn btn--blue">
                  Отправить повторно
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassworRecoverySend;
