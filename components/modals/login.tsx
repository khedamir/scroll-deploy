import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { useModalsContext } from "../../context/ModalsContext";
import { useAppDispatch } from "../../redux/store";
import { fetchAuth, fetchAuthMe } from "../../redux/auth/asyncAction";
import { useForm } from "react-hook-form";
import ContactInput from "../ContactInput";

interface FormType {
  contact: string;
  password: string;
}

export type ContactInputType = "email" | "phone";

const Login = () => {
  const { loginActive, setLoginActive, setRegisterActive } = useModalsContext();
  const [contactType, setContactType] = useState<ContactInputType>("email");

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: {
      contact: "ui@ui.ru",
      password: "Hbm1ep72SEOSegF",
    },
    mode: "onBlur",
  });

  useEffect(() => {
    setValue("contact", "ui@ui.ru");
  }, [contactType]);

  const onSubmit = async (values: FormType) => {
    console.log(values);
    try {
      const resultAction = await dispatch(
        fetchAuth({ login: values.contact, password: values.password })
      );

      if (fetchAuth.fulfilled.match(resultAction)) {
        await dispatch(fetchAuthMe());
        setLoginActive(false);
      } else if (fetchAuth.rejected.match(resultAction)) {
        alert("error");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const changePassword = () => {
    setLoginActive(false);
  };

  const registerButtonClick = () => {
    setRegisterActive(true);
    setLoginActive(false);
  };

  return (
    <div
      className={`modal modal--wide ${loginActive && "is--active"}`}
      id="modal-login"
    >
      <div className="modal__wrap">
        <div className="modal__wrapper">
          <div className="modal__left">
            <picture className="modal__logotype">
              <img src="/img/logotype.svg" alt="SCROLL" />
            </picture>
            <button
              onClick={() => setLoginActive(false)}
              className="modal__close-btn modal__close-btn--mobile"
            >
              <ReactSVG src="/img/sprite/icon-close-thin.svg" />
            </button>
          </div>
          <div className="modal__right">
            <button
              onClick={() => setLoginActive(false)}
              className="modal__close-btn modal__close-btn--desktop"
            >
              <ReactSVG src="/img/sprite/icon-close-thin.svg" />
            </button>
            <div className="modal__content">
              <h3 className="modal__heading">Вход в аккаунт</h3>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="modal-form modal__form"
              >
                {/* <div
                  className={`input-field input-field--border modal-form__input ${
                    errors.login && "is--error"
                  }
                  `}
                >
                  <div className="input-field__top">
                    <label
                      htmlFor="modal-login-email"
                      className="input-field__tab is--active"
                    >
                      Email
                    </label>
                    <label
                      htmlFor="modal-login-email"
                      className="input-field__tab"
                    >
                      Телефон
                    </label>
                  </div>
                  <div className="input-field__inner">
                    <input
                      type="text"
                      id="modal-login-email"
                      className="input-field__input"
                      placeholder="Email"
                      autoComplete="current-username"
                      {...register("login", { required: "", minLength: 2 })}
                    />
                  </div>
                  <span className="input-field__error">
                    Это обязательное поле
                  </span>
                </div> */}
                <ContactInput
                  contactType={contactType}
                  setContactType={setContactType}
                  control={control}
                  register={register}
                />
                <div
                  className={`input-field input-field--border modal-form__input ${
                    errors.password && "is--error"
                  }`}
                >
                  <div className="input-field__top">
                    <label
                      htmlFor="modal-login-password"
                      className="input-field__label"
                    >
                      Пароль
                    </label>
                  </div>
                  <div className="input-field__inner">
                    <input
                      type="password"
                      id="modal-login-password"
                      className="input-field__input"
                      placeholder="Пароль"
                      autoComplete="current-password"
                      {...register("password", { required: "", minLength: 2 })}
                    />
                  </div>
                  <span className="input-field__error">
                    Это обязательное поле
                  </span>
                </div>
                <button type="submit" className="modal-form__btn btn btn--blue">
                  Войти
                </button>
                <div className="modal-form__links">
                  <span
                    onClick={changePassword}
                    className="modal-form__link modal-form__link--red"
                  >
                    Забыли пароль?
                  </span>
                  <div
                    onClick={registerButtonClick}
                    className="modal-form__link"
                  >
                    Регистрация
                  </div>
                </div>
                <div className="resource-auth modal-form__resource">
                  <div className="resource-auth__or">
                    <span className="resource-auth__delimiter"></span>
                    <span className="resource-auth__help">или</span>
                    <span className="resource-auth__delimiter"></span>
                  </div>
                  <div className="resource-auth__buttons">
                    <button className="resource-auth__btn">
                      <ReactSVG src="/img/sprite/icon-google-color.svg" />
                      <span>Войти через Google account</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
