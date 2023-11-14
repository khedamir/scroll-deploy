import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { useModalsContext } from "../../context/ModalsContext";
import { useForm } from "react-hook-form";
import ContactInput from "../ContactInput";
import { RegisterParamsType, registerSubmit } from "../../utils/register";

interface FormType {
  name: string;
  contact: string;
  password: string;
}

export type ContactInputType = "email" | "phone";

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
  } = useForm<FormType>({
    defaultValues: {
      name: "kheda",
      contact: "kheda_amirova@mail.ru",
      password: "Hbm1ep72SEOSegF",
    },
    mode: "onBlur",
  });

  useEffect(() => {
    setValue("contact", "kheda_amirova@mail.ru");

  }, [contactType]);

  const loginButtonClick = () => {
    setLoginActive(true);
    setRegisterActive(false);
  };

  const onSubmit = async (values: FormType) => {
    console.log(values);
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
              <img src="img/logotype.svg" alt="SCROLL" />
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
                <div className="input-field input-field--border modal-form__input">
                  <div className="input-field__top">
                    <label
                      htmlFor="modal-register-name"
                      className="input-field__label"
                    >
                      Имя Фамилия
                    </label>
                  </div>
                  <div className="input-field__inner">
                    <input
                      type="text"
                      id="modal-register-name"
                      className="input-field__input"
                      placeholder="Имя"
                      {...register("name", { required: "", minLength: 2 })}
                    />
                  </div>
                  <span className="input-field__error">
                    Это обязательное поле
                  </span>
                </div>
                <ContactInput
                  contactType={contactType}
                  setContactType={setContactType}
                  control={control}
                  register={register}
                />
                {/* <div className="input-field input-field--border modal-form__input">
                  <div className="input-field__top">
                    <label
                      htmlFor="modal-register-email"
                      className="input-field__tab is--active"
                    >
                      Email
                    </label>
                    <label
                      htmlFor="modal-register-email"
                      className="input-field__tab"
                    >
                      Телефон
                    </label>
                  </div>
                  <div className="input-field__inner">
                    <input
                      type="text"
                      id="modal-register-email"
                      className="input-field__input"
                      placeholder="Email"
                    />
                  </div>
                  <span className="input-field__error">
                    Это обязательное поле
                  </span>
                </div> */}
                <div className="input-field input-field--border modal-form__input">
                  <div className="input-field__top">
                    <label
                      htmlFor="modal-register-password"
                      className="input-field__label"
                    >
                      Пароль
                    </label>
                  </div>
                  <div className="input-field__inner">
                    <input
                      type="password"
                      id="modal-register-password"
                      className="input-field__input"
                      placeholder="Пароль"
                      {...register("password", { required: "", minLength: 2 })}
                    />
                  </div>
                  <span className="input-field__error">
                    Это обязательное поле
                  </span>
                </div>
                <button className="modal-form__btn btn btn--blue">
                  Зарегистрироваться
                </button>
                <div className="modal-form__links">
                  <p className="modal-form__help">
                    Есть аккаунт? <span onClick={loginButtonClick}>Войти</span>
                  </p>
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

export default Register;
