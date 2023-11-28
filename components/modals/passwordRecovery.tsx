import React from "react";
import { ReactSVG } from "react-svg";

const PasswordRecovery = () => {
  return (
    <div className="modal modal--wide" id="modal-password-recovery">
      <div className="modal__wrap">
        <div className="modal__wrapper">
          <div className="modal__left">
            <picture className="modal__logotype">
              <img src="/img/logotype.svg" alt="SCROLL" />
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
              <h3 className="modal__heading">Восстановление пароля</h3>
              <p className="modal__description">
                Введите адрес электронной почты или номер телефона, введенный
                вами при регистрации. Мы отправим вам ссылку для восстановления
                пароля.
              </p>
              <form action="#" className="modal-form modal__form">
                <div className="input-field input-field--border modal-form__input">
                  <div className="input-field__top">
                    <label
                      htmlFor="modal-password-recovery"
                      className="input-field__tab is--active"
                    >
                      Email
                    </label>
                    <label
                      htmlFor="modal-password-recovery"
                      className="input-field__tab"
                    >
                      Телефон
                    </label>
                  </div>
                  <div className="input-field__inner">
                    <input
                      type="text"
                      id="modal-password-recovery"
                      className="input-field__input"
                      placeholder="Email"
                    />
                  </div>
                  <span className="input-field__error">
                    Это обязательное поле
                  </span>
                </div>
                <button className="modal-form__btn btn btn--blue">
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;
