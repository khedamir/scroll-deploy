import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { useModalsContext } from "../../context/ModalsContext";
import { encryptEmail } from "../../utils/encryptEmail";
import { server } from "../../utils/server";

const PassworRecoverySend = () => {
  const [resendActive, setResendActive] = useState(false);
  const {
    recoveryPasswordSend,
    setRecoveryPasswordSend,
    setLoginActive,
    setRecoveryPasswordActive,
  } = useModalsContext();

  const buttonBackClick = () => {
    setRecoveryPasswordActive(true);
    setRecoveryPasswordSend("");
  };

  const reSend = () => {
    server
      .post("/api/v1/auth/forgot", { email: recoveryPasswordSend })
      .then(() => {
        setResendActive(true);
      })
      .catch((errors) => {
        console.error(errors);
      });
  };

  return (
    <div
      className={`modal modal--wide ${recoveryPasswordSend && "is--active"}`}
      id="modal-password-recovery-send"
    >
      <div className="modal__wrap">
        <div className="modal__wrapper">
          <div className="modal__left">
            <picture className="modal__logotype">
              <img src="/img/logotype.svg" alt="SCROLL" />
            </picture>
            <button
              onClick={() => setRecoveryPasswordSend("")}
              className="modal__close-btn modal__close-btn--mobile"
            >
              <ReactSVG src="/img/sprite/icon-close-thin.svg" />
            </button>
          </div>
          <div className="modal__right">
            <button
              onClick={() => setRecoveryPasswordSend("")}
              className="modal__close-btn modal__close-btn--desktop"
            >
              <ReactSVG src="/img/sprite/icon-close-thin.svg" />
            </button>
            <div className="modal__content">
              <button onClick={buttonBackClick} className="modal__back">
                <ReactSVG src="/img/sprite/icon-arrow-s-prev.svg" />
                <span>Назад</span>
              </button>
              <h3 className="modal__heading">Проверьте ваши письма</h3>
              <p className="modal__description">
                Мы отправили письмо со ссылкой на изменение пароля на вашу почту{" "}
                {encryptEmail(recoveryPasswordSend)}. Проверьте папку «Спам»,
                если письмо не найдено
              </p>
              <form action="#" className="modal-form modal__form">
                <button
                  onClick={reSend}
                  disabled={resendActive}
                  className="modal-form__btn modal-form__btn--indent-lg btn btn--blue"
                >
                  {resendActive
                    ? "Письмо было отправлено повторно"
                    : "Отправить повторно"}
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
