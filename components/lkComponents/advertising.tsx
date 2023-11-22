import React, { FC, FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/slice";
import { advertisingFetch } from "../../utils/formFetchs";

interface AdvertisingProps {
  active: boolean;
}

const Advertising: FC<AdvertisingProps> = ({ active }) => {
  const { user } = useSelector(selectUser);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user) {
      setName(user?.main.VALUES.NAME.VALUE);
      setPhone(user?.personal.VALUES.PERSONAL_PHONE.VALUE);
      setEmail(user?.main.VALUES.EMAIL.VALUE);
    }
  }, [user]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const params = {
      name,
      phone,
      email,
    };
    advertisingFetch(params);
  };

  return (
    <div className={`lk-tabs__wrapper ${active && "is--active"}`}>
      <div className="lk-order-ads">
        <div className="lk-order-ads__wrapper">
          <div className="lk-order-ads__top">
            <h3 className="lk-order-ads__heading">Заказать рекламу</h3>
            <p className="lk-order-ads__description">
              Покажем все кейсы и подберем формат под любую задачу
            </p>
          </div>
          <form onSubmit={onSubmit} className="lk-order-ads__form">
            <div className="input-field lk-order-ads__input">
              <div className="input-field__top">
                <label htmlFor="lk-edit-name" className="input-field__label">
                  Имя представителя
                </label>
              </div>
              <div className="input-field__inner">
                <input
                  type="text"
                  id="lk-edit-name"
                  className="input-field__input"
                  placeholder="Имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <span className="input-field__error">Это обязательное поле</span>
            </div>
            {/* <div className="input-field lk-order-ads__input is--error"> */}
            <div className="input-field lk-order-ads__input">
              <div className="input-field__top">
                <label htmlFor="lk-edit-phone" className="input-field__label">
                  Номер телефона
                </label>
              </div>
              <div className="input-field__inner">
                <input
                  type="text"
                  id="lk-edit-phone"
                  className="input-field__input"
                  placeholder="+7 000 000 00 00"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <span className="input-field__error">Это обязательное поле</span>
            </div>
            <div className="input-field lk-order-ads__input">
              <div className="input-field__top">
                <label htmlFor="lk-edit-email" className="input-field__label">
                  Email
                </label>
              </div>
              <div className="input-field__inner">
                <input
                  type="text"
                  id="lk-edit-email"
                  className="input-field__input"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <span className="input-field__error">Это обязательное поле</span>
            </div>
            <button
              className="lk-order-ads__btn btn btn--md-bold btn--orange modal-btn"
              data-id="modal-application"
            >
              Оформить заявку
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Advertising;
