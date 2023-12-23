import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import { useHandleScroll } from "../../hooks";

interface ThanksModalProps {
  active: boolean;
  setActive: (v: boolean) => void;
  title: string;
  description: string;
}

const ThanksModal: FC<ThanksModalProps> = ({
  active,
  setActive,
  title,
  description,
}) => {
  useHandleScroll(active);
  return (
    <div
      onClick={() => setActive(false)}
      className={`modal ${active && "is--active"}`}
      id="modal-thanks-webinar"
    >
      <div className="modal__wrap">
        <div onClick={(e) => e.stopPropagation()} className="modal__wrapper">
          <button
            onClick={() => setActive(false)}
            className="modal__close-btn modal__close-btn--mobile"
          >
            <ReactSVG src="/img/sprite/icon-close-thin.svg" />
          </button>
          <div className="modal__left modal__left--bg"></div>
          <div className="modal__right modal__right--center">
            <button
              onClick={() => setActive(false)}
              className="modal__close-btn modal__close-btn--desktop"
            >
              <ReactSVG src="/img/sprite/icon-close-thin.svg" />
            </button>
            <div className="modal__body">
              <h3 className="modal__heading">{title}</h3>
              <p className="modal__description">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThanksModal;
