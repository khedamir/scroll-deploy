import Link from "next/link";
import React, { useState, FC } from "react";

interface LegalAdviceProps {
  title: string;
  setModalActive: (v: boolean) => void;
}

const LegalAdvice: FC<LegalAdviceProps> = ({ setModalActive, title }) => {
  return (
    <>
      <div className="layout__sticky-block">
        <div className="content-widget layout__sticky">
          <div className="content-widget__wrapper">
            <div className="content-widget__body">
              <span className="content-widget__help">Консультация юриста</span>
              <h3 className="content-widget__title">{title}</h3>
              <picture className="content-widget__img">
                <img src="/img/widget-consultation-01.jpg" alt="Image" />
              </picture>
              <button
                onClick={() => setModalActive(true)}
                className="content-widget__circle-btn"
              >
                Записаться
              </button>
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
    </>
  );
};

export default LegalAdvice;
