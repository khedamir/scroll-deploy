import Link from "next/link";
import React, { useState } from "react";
import LegalAdvice from "../modals/legalAdvice";

const NewWidget = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <div className="layout__sticky-block">
        <div className="content-widget layout__sticky">
          <div className="content-widget__wrapper">
            <div className="content-widget__body">
              <span className="content-widget__help">Консультация юриста</span>
              <h3 className="content-widget__title">
                Как получить материнский капитал
              </h3>
              <picture className="content-widget__img">
                <img src="/img/widget-consultation-01.jpg" alt="Image" />
              </picture>
              <a href="#" className="content-widget__circle-btn">
                Записаться
              </a>
            </div>
            <button
              onClick={() => setModalActive(true)}
              className="content-widget__btn btn"
            >
              Записаться
            </button>
          </div>
        </div>
      </div>
      <LegalAdvice active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default NewWidget;
