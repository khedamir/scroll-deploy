import React from "react";
import InputMask from "react-input-mask";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { ReactSVG } from "react-svg";
import { selectUser } from "../../redux/auth/slice";
import InputWrapper from "../InputWrapper";
import { changeUserData } from "../modals/validationSchemes";
import { useModalsContext } from "../../context/ModalsContext";

type FormValuesType = {
  name: string;
  city: string;
  phone: string;
  email: string;
};

const UserDataForm = () => {
  const { user } = useSelector(selectUser);
  const { setChangePasswordActive } = useModalsContext();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValuesType>({
    defaultValues: {
      name: user ? user.main.VALUES.NAME.VALUE : "",
      city: user ? user.personal.VALUES.PERSONAL_CITY.VALUE : "",
      phone: user ? user.personal.VALUES.PERSONAL_PHONE.VALUE : "",
      email: user ? user.main.VALUES.EMAIL.VALUE : "",
    },
    mode: "onBlur",
  });

  const onSubmit = (values: FormValuesType) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lk-edit__wrapper">
      <div className="lk-edit__top">
        <div className="lk-edit__photo">
          <input
            type="file"
            id="upload-photo"
            className="lk-edit__photo-input"
          />
          <label htmlFor="upload-photo" className="lk-edit__photo-label">
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
          <InputWrapper
            labelValue="Имя"
            htmlForValue="lk-edit-name"
            error={errors.name}
            errorMessage={errors.name?.message}
            otherClassName="lk-edit__input"
          >
            <input
              type="text"
              id="lk-edit-name"
              className="input-field__input"
              placeholder="Имя"
              {...register("name", changeUserData.name)}
            />
          </InputWrapper>
          <InputWrapper
            labelValue="Город"
            htmlForValue="lk-edit-city"
            error={errors.city}
            errorMessage={errors.city?.message}
            otherClassName="lk-edit__input"
          >
            <input
              type="text"
              id="lk-edit-city"
              className="input-field__input"
              placeholder="Город"
              {...register("city")}
            />
          </InputWrapper>
          <InputWrapper
            labelValue="Номер телефона"
            htmlForValue="lk-edit-phone"
            error={errors.phone}
            errorMessage={errors.phone?.message}
            otherClassName="lk-edit__input"
          >
            <Controller
              name="phone"
              control={control}
              rules={changeUserData.phone}
              render={({ field }) => (
                <InputMask mask={"+7 (999) 999-99-99"} {...field}>
                  {/* @ts-ignore */}
                  {(inputProps) => (
                    <input
                      type="text"
                      id="lk-edit-phone"
                      className="input-field__input"
                      placeholder="+7 (999) 999-99-99"
                      {...inputProps}
                    />
                  )}
                </InputMask>
              )}
            />
          </InputWrapper>
          <InputWrapper
            labelValue="Email"
            htmlForValue="lk-edit-email"
            error={errors.email}
            errorMessage={errors.email?.message}
            otherClassName="lk-edit__input"
          >
            <input
              type="text"
              id="lk-edit-email"
              className="input-field__input"
              placeholder="example@gmail.com"
              {...register("email", changeUserData.email)}
            />
          </InputWrapper>
        </div>
        <div
          onClick={() => setChangePasswordActive(true)}
          className="lk-edit__link modal-btn"
          data-id="modal-change-password"
        >
          Изменить пароль
        </div>
      </div>
      <div className="lk-edit__bottom">
        <button className="lk-edit__btn btn btn--md-bold btn--orange">
          Сохранить
        </button>
      </div>
    </form>
  );
};

export default UserDataForm;
