import Link from "next/link";
import React, { FC } from "react";
import { ReactSVG } from "react-svg";

interface LoginProps {
  active: boolean;
  setActive: (v: boolean) => void;
}

const Login: FC<LoginProps> = ({ active, setActive }) => {
  return (
    <div
      className={`modal modal--wide ${active && "is--active"}`}
      id="modal-login"
    >
      <div className="modal__wrap">
        <div className="modal__wrapper">
          <div className="modal__left">
            <picture className="modal__logotype">
              <img src="img/logotype.svg" alt="SCROLL" />
            </picture>
            <button
              onClick={() => setActive(false)}
              className="modal__close-btn modal__close-btn--mobile"
            >
              <ReactSVG src="/img/sprite/icon-close-thin.svg" />
            </button>
          </div>
          <div className="modal__right">
            <button
              onClick={() => setActive(false)}
              className="modal__close-btn modal__close-btn--desktop"
            >
              <ReactSVG src="/img/sprite/icon-close-thin.svg" />
            </button>
            <div className="modal__content">
              <h3 className="modal__heading">Вход в аккаунт</h3>
              <form action="#" className="modal-form modal__form">
                <div className="input-field input-field--border modal-form__input">
                  <div className="input-field__top">
                    <label
                      htmlFor="modal-login-email"
                      className="input-field__tab is--active"
                    >
                      Email
                    </label>
                    <label
                      htmlFor="modal-login-email"
                      className="input-field__tab"
                    >
                      Телефон
                    </label>
                  </div>
                  <div className="input-field__inner">
                    <input
                      type="text"
                      id="modal-login-email"
                      className="input-field__input"
                      placeholder="Email"
                    />
                  </div>
                  <span className="input-field__error">
                    Это обязательное поле
                  </span>
                </div>
                <div className="input-field input-field--border modal-form__input">
                  <div className="input-field__top">
                    <label
                      htmlFor="modal-login-password"
                      className="input-field__label"
                    >
                      Пароль
                    </label>
                  </div>
                  <div className="input-field__inner">
                    <input
                      type="password"
                      id="modal-login-password"
                      className="input-field__input"
                      placeholder="Пароль"
                    />
                  </div>
                  <span className="input-field__error">
                    Это обязательное поле
                  </span>
                </div>
                <button className="modal-form__btn btn btn--blue">Войти</button>
                <div className="modal-form__links">
                  <Link
                    href="#"
                    className="modal-form__link modal-form__link--red"
                  >
                    Забыли пароль?
                  </Link>
                  <a href="#" className="modal-form__link">
                    Регистрация
                  </a>
                </div>
                <div className="resource-auth modal-form__resource">
                  <div className="resource-auth__or">
                    <span className="resource-auth__delimiter"></span>
                    <span className="resource-auth__help">или</span>
                    <span className="resource-auth__delimiter"></span>
                  </div>
                  <div className="resource-auth__buttons">
                    <button className="resource-auth__btn">
                      <ReactSVG src="/img/sprite/icon-google-color.svg" />
                      <span>Войти через Google account</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
