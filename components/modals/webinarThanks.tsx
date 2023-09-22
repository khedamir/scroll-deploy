import React, { FC } from "react";
import { ReactSVG } from "react-svg";

interface WebinarThanksProps {
  active: boolean;
  setActive: (v: boolean) => void;
}

const WebinarThanks: FC<WebinarThanksProps> = ({ active, setActive }) => {
  return (
    <div
      className={`modal ${active && "is--active"}`}
      id="modal-thanks-webinar"
    >
      <div className="modal__wrap">
        <div className="modal__wrapper">
          <button className="modal__close-btn modal__close-btn--mobile">
            <ReactSVG src="/img/sprite/icon-close-thin.svg" />
          </button>
          <div className="modal__left modal__left--bg"></div>
          <div className="modal__right">
            <button
              onClick={() => setActive(false)}
              className="modal__close-btn modal__close-btn--desktop"
            >
              <ReactSVG src="/img/sprite/icon-close-thin.svg" />
            </button>
            <div className="modal__body">
              <h3 className="modal__heading">
                Благодарим за запись на вебинар!
              </h3>
              <p className="modal__description">
                Мы отправили вам на почту всю необходимую информацию.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarThanks;
