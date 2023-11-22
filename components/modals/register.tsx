import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { useModalsContext } from "../../context/ModalsContext";
import { useForm } from "react-hook-form";
import ContactInput, { ContactInputType } from "../ContactInput";
import { RegisterParamsType, registerSubmit } from "../../utils/formFetchs";
import InputWrapper from "../InputWrapper";
import { registerSchemes } from "./validationSchemes";
import LoginWidthGoogle from "../loginWidthGoogle";

type FormValuesType = {
  name: string;
  contact: string;
  password: string;
};

const Register = () => {
  const { registerActive, setRegisterActive, setLoginActive } =
    useModalsContext();
  const [contactType, setContactType] = useState<ContactInputType>("email");

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormValuesType>({
    defaultValues: {
      name: "",
      contact: "",
      password: "",
    },
    mode: "onBlur",
  });

  useEffect(() => {
    setValue("contact", "");
  }, [contactType]);

  const loginButtonClick = () => {
    setLoginActive(true);
    setRegisterActive(false);
  };

  const onSubmit = async (values: FormValuesType) => {
    const params: RegisterParamsType = {
      name: values.name,
      password: values.password,
    };

    if (contactType === "email") {
      params.email = values.contact;
    }

    if (contactType === "phone") {
      params.phone = values.contact;
    }

    registerSubmit(params);
  };

  return (
    <div
      className={`modal modal--wide ${registerActive && "is--active"}`}
      id="modal-register"
    >
      <div className="modal__wrap">
        <div className="modal__wrapper">
          <div className="modal__left">
            <picture className="modal__logotype">
              <img src="/img/logotype.svg" alt="SCROLL" />
            </picture>
            <button
              onClick={() => setRegisterActive(false)}
              className="modal__close-btn modal__close-btn--mobile"
            >
              <ReactSVG src="/img/sprite/icon-close-thin.svg" />
            </button>
          </div>
          <div className="modal__right">
            <button
              onClick={() => setRegisterActive(false)}
              className="modal__close-btn modal__close-btn--desktop"
            >
              <ReactSVG src="/img/sprite/icon-close-thin.svg" />
            </button>
            <div className="modal__content">
              <h3 className="modal__heading">Регистрация</h3>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="modal-form modal__form"
              >
                <InputWrapper
                  labelValue="Имя Фамилия"
                  error={errors.name}
                  errorMessage={errors.name?.message}
                  htmlForValue="modal-register-name"
                >
                  <input
                    type="text"
                    id="modal-register-name"
                    className="input-field__input"
                    placeholder="Имя"
                    {...register("name", registerSchemes.name)}
                  />
                </InputWrapper>
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
                  htmlForValue="modal-register-password"
                >
                  <input
                    type="password"
                    id="modal-register-password"
                    className="input-field__input"
                    placeholder="Пароль"
                    autoComplete="current-password"
                    {...register("password", registerSchemes.password)}
                  />
                </InputWrapper>
                <button className="modal-form__btn btn btn--blue">
                  Зарегистрироваться
                </button>
                <div className="modal-form__links">
                  <p className="modal-form__help">
                    Есть аккаунт? <span onClick={loginButtonClick}>Войти</span>
                  </p>
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

export default Register;
