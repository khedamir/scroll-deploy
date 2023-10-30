import React from "react";
import { ReactSVG } from "react-svg";
import { useModalsContext } from "../../context/ModalsContext";

const ChangePassword = () => {
  const { changePasswordActive, setChangePasswordActive } = useModalsContext();
  const closeModal = () => {
    setChangePasswordActive(false);
  };
  return (
    <div
      className={`modal modal--wide ${changePasswordActive && "is--active"}`}
      id="modal-change-password"
    >
      <div className="modal__wrap">
        <div className="modal__wrapper">
          <div className="modal__left">
            <picture className="modal__logotype">
              <img src="/img/logotype.svg" alt="SCROLL" />
            </picture>
            <button
              onClick={closeModal}
              className="modal__close-btn modal__close-btn--mobile"
            >
              <ReactSVG src="/img/sprite/icon-close-thin.svg" />
            </button>
          </div>
          <div className="modal__right">
            <button
              onClick={closeModal}
              className="modal__close-btn modal__close-btn--desktop"
            >
              <ReactSVG src="/img/sprite/icon-close-thin.svg" />
            </button>
            <div className="modal__content">
              <h3 className="modal__heading">Изменение пароля</h3>
              <form action="#" className="modal-form modal__form">
                <div className="input-field input-field--border modal-form__input">
                  <div className="input-field__top">
                    <label
                      htmlFor="modal-change-password-1"
                      className="input-field__label"
                    >
                      Новый пароль
                    </label>
                  </div>
                  <div className="input-field__inner">
                    <input
                      type="text"
                      id="modal-change-password-1"
                      className="input-field__input"
                      placeholder=""
                      autoComplete="current-password"
                    />
                  </div>
                  <span className="input-field__error">
                    Это обязательное поле
                  </span>
                </div>
                <div className="input-field input-field--border modal-form__input">
                  <div className="input-field__top">
                    <label
                      htmlFor="modal-change-password-2"
                      className="input-field__label"
                    >
                      Повторите пароль
                    </label>
                  </div>
                  <div className="input-field__inner">
                    <input
                      type="password"
                      id="modal-change-password-2"
                      className="input-field__input"
                      placeholder=""
                      autoComplete="current-password"
                    />
                  </div>
                  <span className="input-field__error">
                    Это обязательное поле
                  </span>
                </div>
                <button className="modal-form__btn btn btn--blue">
                  Сохранить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
