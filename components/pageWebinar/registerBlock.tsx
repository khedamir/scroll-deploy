import React, { FC, FormEvent, useRef, useState } from "react";
import ThanksModal from "../modals/thanks";
import { eventFetch } from "../../utils/formFetchs";

interface RegisterBlockProps {
  event_name: string;
  description: string;
}

const RegisterBlock: FC<RegisterBlockProps> = ({ event_name, description }) => {
  const [modalActive, setModalActive] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setError(!emailRegex.test(email));
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!error) {
      eventFetch({
        event_name,
        email,
      }).then(() => {
        setModalActive(true);
      });
    } else {
      alert(error);
    }
  };

  return (
    <>
      <div className="webinar__block">
        <h3 className="webinar__title">{description}</h3>
        <div className="webinar-subscribe webinar__subscribe">
          <form onSubmit={onSubmit} className="webinar-subscribe__wrapper">
            <input
              type="text"
              className="webinar-subscribe__input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
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
