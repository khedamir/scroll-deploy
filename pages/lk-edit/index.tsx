import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/auth/slice";
import { Status } from "../../redux/types";
import { useAppDispatch } from "../../redux/store";

const LkEdit = () => {
  const { user, status } = useSelector(selectUser);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      setName(user?.main.VALUES.NAME.VALUE);
      setCity(user?.personal.VALUES.PERSONAL_CITY.VALUE);
      setPhone(user?.personal.VALUES.PERSONAL_PHONE.VALUE);
      setEmail(user?.main.VALUES.EMAIL.VALUE);
    }
  }, [user]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate.push("/");
    }
    if (status === Status.ERROR) {
      navigate.push("/");
    }
  }, [user, status]);

  const logoutFn = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate.push("/");
  };

  return (
    <div className="layout layout--sticky-bottom">
      <div className="container">
        <div className="layout__wrap">
          <div className="layout__left">
            <Footer otherClassName="layout__footer layout__sticky layout__sticky--bottom" />
          </div>
          <div className="layout__main">
            <div className="layout__main-wrapper">
              <div className="layout__center">
                <div className="lk">
                  <div className="lk__wrap">
                    <div className="lk__wrapper">
                      <div className="lk__top">
                        <div className="lk__controls">
                          <Link href="/lk" className="back-btn lk__back">
                            <ReactSVG src="/img/sprite/icon-back.svg" />
                          </Link>
                        </div>
                        <div className="lk__controls">
                          <button onClick={logoutFn} className="lk__exit">
                            Выйти из аккаунта
                          </button>
                        </div>
                      </div>
                      <div className="lk__main">
                        <div className="lk-edit lk__edit">
                          <form action="#" className="lk-edit__wrapper">
                            <div className="lk-edit__top">
                              <div className="lk-edit__photo">
                                <input
                                  type="file"
                                  id="upload-photo"
                                  className="lk-edit__photo-input"
                                />
                                <label
                                  htmlFor="upload-photo"
                                  className="lk-edit__photo-label"
                                >
                                  <picture className="lk-edit__img">
                                    <img src="/img/user.jpg" alt="Image" />
                                  </picture>
                                  <div className="lk-edit__icon-wrap">
                                    <ReactSVG src="/img/sprite/icon-camera.svg" />
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="lk-edit__main">
                              <div className="lk-edit__inputs">
                                {/* <div className="input-field lk-edit__input is--error"> */}
                                <div className="input-field lk-edit__input">
                                  <div className="input-field__top">
                                    <label
                                      htmlFor="lk-edit-name"
                                      className="input-field__label"
                                    >
                                      Имя
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
                                  <span className="input-field__error">
                                    Это обязательное поле
                                  </span>
                                </div>
                                <div className="input-field lk-edit__input">
                                  <div className="input-field__top">
                                    <label
                                      htmlFor="lk-edit-city"
                                      className="input-field__label"
                                    >
                                      Город
                                    </label>
                                  </div>
                                  <div className="input-field__inner">
                                    <input
                                      type="text"
                                      id="lk-edit-city"
                                      className="input-field__input"
                                      placeholder="Москва"
                                      value={city}
                                      onChange={(e) => setCity(e.target.value)}
                                    />
                                  </div>
                                  <span className="input-field__error">
                                    Это обязательное поле
                                  </span>
                                </div>
                                <div className="input-field lk-edit__input">
                                  <div className="input-field__top">
                                    <label
                                      htmlFor="lk-edit-phone"
                                      className="input-field__label"
                                    >
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
                                  <span className="input-field__error">
                                    Это обязательное поле
                                  </span>
                                </div>
                                <div className="input-field lk-edit__input">
                                  <div className="input-field__top">
                                    <label
                                      htmlFor="lk-edit-email"
                                      className="input-field__label"
                                    >
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
                                  <span className="input-field__error">
                                    Это обязательное поле
                                  </span>
                                </div>
                              </div>
                              <Link
                                href="#"
                                className="lk-edit__link modal-btn"
                                data-id="modal-change-password"
                              >
                                Изменить пароль
                              </Link>
                            </div>
                            <div className="lk-edit__bottom">
                              <button className="lk-edit__btn btn btn--md-bold btn--orange">
                                Сохранить
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="layout__right">
                <span className="layout__info layout__sticky layout__sticky--bottom">
                  На проекте с 12 янв 2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LkEdit;
