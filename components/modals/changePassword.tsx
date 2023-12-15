import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { useModalsContext } from "../../context/ModalsContext";
import { useForm } from "react-hook-form";
import InputWrapper from "../InputWrapper";
import { changePasswordSchemes } from "./validationSchemes";
import ChangePasswordComplete from "./changePasswordComplete";
import { ChangeUserDataProps, UserDataChange } from "../../utils/formFetchs";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/slice";

type FormValuesType = {
  password: string;
  confirm_password: string;
};

const ChangePassword = () => {
  const { changePasswordActive, setChangePasswordActive } = useModalsContext();
  const [completeModalActive, setCompleteModalActive] = useState(false);
  const { user } = useSelector(selectUser);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValuesType>({ mode: "onBlur" });

  const onSubmit = (values: FormValuesType) => {
    if (!user) {
      return;
    }
    const params: ChangeUserDataProps = {
      userId: user.id,
      data: {
        password: values.password,
        confirm_password: values.confirm_password,
      },
    };
    UserDataChange(params).then(() => {
      setCompleteModalActive(true);
      setValue("password", "");
      setValue("confirm_password", "");
      setChangePasswordActive(false);
    });
  };

  return (
    <>
      <div
        className={`modal modal--wide ${changePasswordActive && "is--active"}`}
        id="modal-change-password"
      >
        <div className="modal__wrap">
          <div className="modal__wrapper">
            <div className="modal__left">
              <picture className="modal__logotype">
                <img src="/img/logotype.svg" alt="SCROLL" />
              </picture>
              <button
                onClick={() => setChangePasswordActive(false)}
                className="modal__close-btn modal__close-btn--mobile"
              >
                <ReactSVG src="/img/sprite/icon-close-thin.svg" />
              </button>
            </div>
            <div className="modal__right">
              <button
                onClick={() => setChangePasswordActive(false)}
                className="modal__close-btn modal__close-btn--desktop"
              >
                <ReactSVG src="/img/sprite/icon-close-thin.svg" />
              </button>
              <div className="modal__content">
                <h3 className="modal__heading">Смена пароля</h3>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="modal-form modal__form"
                >
                  <InputWrapper
                    labelValue="Новый пароль"
                    htmlForValue="modal-change-password-1"
                    error={errors.password}
                    errorMessage={errors.password?.message}
                  >
                    <input
                      type="password"
                      id="modal-change-password-1"
                      className="input-field__input"
                      placeholder=""
                      autoComplete="current-password"
                      {...register("password", changePasswordSchemes.passwrd)}
                    />
                  </InputWrapper>
                  <InputWrapper
                    labelValue="Повторите пароль"
                    htmlForValue="modal-change-password-2"
                    error={errors.confirm_password}
                    errorMessage={errors.confirm_password?.message}
                  >
                    <input
                      type="password"
                      id="modal-change-password-2"
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
                    Сменить пароль
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChangePasswordComplete
        active={completeModalActive}
        setActive={setCompleteModalActive}
      />
    </>
  );
};

export default ChangePassword;
