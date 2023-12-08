import React, { FC, useState } from "react";
import { ReactSVG } from "react-svg";
import { useModalsContext } from "../../context/ModalsContext";
import { encryptEmail } from "../../utils/encryptEmail";
import { server } from "../../utils/server";

interface RegisterCompleteProps {
  email: string;
  active: boolean;
  setActive: (v: boolean) => void;
}

const RegisterComplete: FC<RegisterCompleteProps> = ({
  active,
  setActive,
  email,
}) => {
  const [resendActive, setResendActive] = useState(false);
  const { setLoginActive, setRecoveryPasswordActive } = useModalsContext();

  const buttonBackClick = () => {
    setRecoveryPasswordActive(true);
  };

  return (
    <div
      className={`modal modal--wide ${active && "is--active"}`}
      id="modal-password-recovery-send"
    >
      <div className="modal__wrap">
        <div className="modal__wrapper">
          <div className="modal__left">
            <picture className="modal__logotype">
              <img src="/img/logotype.svg" alt="SCROLL" />
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
            <div className="modal__body">
              <h3 className="modal__heading">Проверьте ваши письма</h3>
              <p className="modal__description">
                Мы отправили письмо со ссылкой для активации аккаунта на вашу
                почту {encryptEmail(email)}. Проверьте папку «Спам», если письмо
                не найдено
              </p>
              <div className="modal__description">
                <ReactSVG src="/img/sprite/icon-complete.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
