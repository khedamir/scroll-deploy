import React, { FormEvent, useRef, useState } from "react";
import WebinarThanks from "../modals/webinarThanks";

const RegisterBlock = () => {
  const [modalActive, setModalActive] = useState(false);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setModalActive(true);
  };

  return (
    <>
      <div className="webinar__block">
        <h3 className="webinar__title">
          Запишитесь на вебинар, чтобы не пропустить
        </h3>
        <div className="webinar-subscribe webinar__subscribe">
          <form onSubmit={onSubmit} className="webinar-subscribe__wrapper">
            <input
              type="text"
              className="webinar-subscribe__input"
              placeholder="Email"
            />
            <button className="webinar-subscribe__btn btn">Записаться</button>
          </form>
        </div>
      </div>
      <WebinarThanks active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default RegisterBlock;
