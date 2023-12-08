import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { useModalsContext } from "../../context/ModalsContext";
import { useAppDispatch } from "../../redux/store";
import { fetchAuth, fetchAuthMe } from "../../redux/auth/asyncAction";
import { useForm } from "react-hook-form";
import ContactInput, { ContactInputType } from "../ContactInput";
import { loginSchemes } from "./validationSchemes";
import LoginWidthGoogle from "../loginWidthGoogle";
import InputWrapper from "../InputWrapper";

type FormValuesType = {
  contact: string;
  password: string;
};

const Login = () => {
  const {
    loginActive,
    setLoginActive,
    setRegisterActive,
    setRecoveryPasswordActive,
  } = useModalsContext();
  const [contactType, setContactType] = useState<ContactInputType>("email");

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormValuesType>({
    defaultValues: {
      contact: "ui@ui.ru",
      password: "Hbm1ep72SEOSegF",
    },
    mode: "onBlur",
  });

  useEffect(() => {
    setValue("contact", "ui@ui.ru");
  }, [contactType]);

  const onSubmit = async (values: FormValuesType) => {
    try {
      const resultAction = await dispatch(
        fetchAuth({ login: values.contact, password: values.password })
      );

      if (fetchAuth.fulfilled.match(resultAction)) {
        await dispatch(
          fetchAuthMe({ userId: String(localStorage.getItem("id")) })
        );
        setLoginActive(false);
      } else if (fetchAuth.rejected.match(resultAction)) {
        alert("error");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const recoveryPassword = () => {
    setRecoveryPasswordActive(true);
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
                <ContactInput
                  contactType={contactType}
                  setContactType={setContactType}
                  control={control}
                  register={register}
                  errors={errors}
                />
                <InputWrapper
                  labelValue="Пароль"
                  error={errors.password}
                  errorMessage={errors.password?.message}
                  htmlForValue="modal-login-password"
                >
                  <input
                    type="password"
                    id="modal-login-password"
                    className="input-field__input"
                    placeholder="Пароль"
                    autoComplete="current-password"
                    {...register("password", loginSchemes.password)}
                  />
                </InputWrapper>
                <button type="submit" className="modal-form__btn btn btn--blue">
                  Войти
                </button>
                <div className="modal-form__links">
                  <span
                    onClick={recoveryPassword}
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
                <LoginWidthGoogle />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
