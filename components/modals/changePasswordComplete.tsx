import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import { useHandleScroll } from "../../hooks";

interface ChangePasswordCompleteProps {
  active: boolean;
  setActive: (v: boolean) => void;
}

const ChangePasswordComplete: FC<ChangePasswordCompleteProps> = ({
  active,
  setActive,
}) => {
  useHandleScroll(active);
  return (
    <div
      onClick={() => setActive(false)}
      className={`modal modal--wide ${active && "is--active"}`}
      id="modal-change-password"
    >
      <div className="modal__wrap">
        <div onClick={(e) => e.stopPropagation()} className="modal__wrapper">
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
              <h3 className="modal__heading">
                Пароль успешно <br /> сменен
              </h3>
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

export default ChangePasswordComplete;
