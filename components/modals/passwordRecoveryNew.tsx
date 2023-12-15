import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { useModalsContext } from "../../context/ModalsContext";
import { useForm } from "react-hook-form";
import InputWrapper from "../InputWrapper";
import { changePasswordSchemes } from "./validationSchemes";
import ChangePasswordComplete from "./changePasswordComplete";
import { useRouter } from "next/router";
import { PasswrodRecoveryFetch } from "../../utils/formFetchs";
import { useHandleScroll } from "../../hooks";

type FormValuesType = {
  password: string;
  confirm_password: string;
};

const PasswordRecoveryNew = () => {
  const [completeModalActive, setCompleteModalActive] = useState(false);
  const { setLoginActive } = useModalsContext();
  const router = useRouter();

  useHandleScroll(completeModalActive);

  const clearQueryParams = () => {
    const { pathname, query } = router;
    const newUrl = { pathname };
    router.replace({ pathname: newUrl.pathname, query: {} }, undefined, {
      shallow: true,
    });
  };

  const login = decodeURIComponent(String(router.query.USER_LOGIN));
  const control_string = router.query.USER_CHECKWORD;

  const toggleComplete = () => {
    if (completeModalActive) {
      setLoginActive(true);
      setCompleteModalActive(false);
    } else {
      setCompleteModalActive(true);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesType>({ mode: "onBlur" });

  const onSubmit = (values: FormValuesType) => {
    PasswrodRecoveryFetch({
      login,
      control_string: String(control_string),
      password: values.password,
      confirm_password: values.confirm_password,
    }).then(() => {
      clearQueryParams();
      toggleComplete();
    });
  };

  return (
    <>
      <div
        className={`modal modal--wide ${control_string && "is--active"}`}
        id="modal-change-password"
      >
        <div className="modal__wrap">
          <div className="modal__wrapper">
            <div className="modal__left">
              <picture className="modal__logotype">
                <img src="/img/logotype.svg" alt="SCROLL" />
              </picture>
              <button
                onClick={() => {}}
                className="modal__close-btn modal__close-btn--mobile"
              >
                <ReactSVG src="/img/sprite/icon-close-thin.svg" />
              </button>
            </div>
            <div className="modal__right">
              <button
                onClick={() => {}}
                className="modal__close-btn modal__close-btn--desktop"
              >
                <ReactSVG src="/img/sprite/icon-close-thin.svg" />
              </button>
              <div className="modal__content">
                <h3 className="modal__heading">Восстановление пароля</h3>
                <p className="modal__description">Введите новый пароль.</p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="modal-form modal__form"
                >
                  <InputWrapper
                    labelValue="Новый пароль"
                    htmlForValue="modal-recovery-password-1"
                    error={errors.password}
                    errorMessage={errors.password?.message}
                  >
                    <input
                      type="password"
                      id="modal-recovery-password-1"
                      className="input-field__input"
                      placeholder=""
                      autoComplete="current-password"
                      {...register("password", changePasswordSchemes.passwrd)}
                    />
                  </InputWrapper>
                  <InputWrapper
                    labelValue="Повторите пароль"
                    htmlForValue="modal-recovery-password-2"
                    error={errors.confirm_password}
                    errorMessage={errors.confirm_password?.message}
                  >
                    <input
                      type="password"
                      id="modal-recovery-password-2"
                      className="input-field__input"
                      placeholder=""
                      autoComplete="current-password"
                      {...register(
                        "confirm_password",
                        changePasswordSchemes.re_password
                      )}
                    />
                  </InputWrapper>
                  <button className="modal-form__btn btn btn--blue">
                    Сохранить новый пароль
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChangePasswordComplete
        active={completeModalActive}
        setActive={toggleComplete}
      />
    </>
  );
};

export default PasswordRecoveryNew;
