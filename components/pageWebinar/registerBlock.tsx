import React, { FormEvent, useRef, useState } from "react";
import ThanksModal from "../modals/thanks";

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
      <ThanksModal
        active={modalActive}
        setActive={setModalActive}
        title="Благодарим за запись на вебинар!"
        description="Мы отправили вам на почту всю необходимую информацию."
      />
    </>
  );
};

export default RegisterBlock;
