import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import Feadback from "../modals/feadback";

const FeadbackBlock = () => {
  const [feadbackActive, setFeadbackActive] = useState(false);
  return (
    <>
      <div className="feedback-widget faq__widget">
        <article className="feedback-widget__item">
          <div className="feedback-widget__body">
            <h3 className="feedback-widget__title">Помогите нам стать лучше</h3>
            <p className="feedback-widget__description">
              Пока мы изучаем для вас новые тренды, поделитесь впечатленими о
              прочитанном
            </p>
          </div>
          <span
            onClick={() => setFeadbackActive(true)}
            className="feedback-widget__btn"
          >
            <ReactSVG src="/img/sprite/icon-arrow-next.svg" />
          </span>
        </article>
      </div>
      <Feadback active={feadbackActive} setActive={setFeadbackActive} />
    </>
  );
};

export default FeadbackBlock;
