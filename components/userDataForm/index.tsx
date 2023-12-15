import React, { useState } from "react";
import InputMask from "react-input-mask";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { ReactSVG } from "react-svg";
import { selectUser } from "../../redux/auth/slice";
import InputWrapper from "../InputWrapper";
import { changeUserData } from "../modals/validationSchemes";
import { useModalsContext } from "../../context/ModalsContext";
import {
  ChangeUserDataProps,
  FileUpload,
  UserDataChange,
} from "../../utils/formFetchs";
import UserIcon from "../userIcon";

type FormValuesType = {
  name: string;
  last_name: string;
  city: string;
  phone: string;
  email: string;
};

const UserDataForm = () => {
  const { user } = useSelector(selectUser);
  const { setChangePasswordActive } = useModalsContext();
  const [userImg, setUserImg] = useState("");
  const [inputImgValue, setInputImg] = useState<any>();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValuesType>({
    defaultValues: {
      name: user?.name || "",
      last_name: user?.last_name || "",
      city: user?.city || "",
      phone: user?.phone || "",
      email: user?.email || "",
    },
    mode: "onBlur",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const fileReader = new FileReader();
    if (file) {
      fileReader.onload = function (ev) {
        if (ev.target && typeof ev.target.result === "string") {
          setUserImg(ev.target.result);
        }
      };
      fileReader.readAsDataURL(file);
      setInputImg(file);
    }
  };

  const setImageFetch = async (file: string) => {
    const formData = new FormData();
    formData.append("image", file);
    const result = await FileUpload({ userId: "8", file });
    return result.filePath;
  };

  const onSubmit = async (values: FormValuesType) => {
    if (user) {
      const params: ChangeUserDataProps = {
        userId: user?.id,
        data: {},
      };
      if (user.name !== values.name) {
        params.data.name = values.name;
      }

      if (user.last_name !== values.last_name) {
        params.data.last_name = values.last_name;
      }

      if (user.city !== values.city) {
        params.data.city = values.city;
      }

      if (user.phone !== values.phone) {
        params.data.phone = values.phone;
      }

      if (user.email !== values.email) {
        params.data.email = values.email;
      }

      if (userImg) {
        const path = await setImageFetch(inputImgValue);
        params.data.photo = path;
      }

      UserDataChange(params).then(() => {
        console.log("changed");
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lk-edit__wrapper">
      <div className="lk-edit__top">
        <div className="lk-edit__photo">
          <input
            type="file"
            id="upload-photo"
            className="lk-edit__photo-input"
            onChange={handleFileChange}
          />
          <label htmlFor="upload-photo" className="lk-edit__photo-label">
            <div className="lk-user__img">
              <UserIcon
                userPhoto={user?.photo || ""}
                nameLatter={user?.name[0] || ""}
                photo={userImg}
                avatarColor={user?.avatar_color}
              />
            </div>
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
            labelValue="Фамилия"
            htmlForValue="lk-edit-last-name"
            error={errors.last_name}
            errorMessage={errors.last_name?.message}
            otherClassName="lk-edit__input"
          >
            <input
              type="text"
              id="lk-edit-last-name"
              className="input-field__input"
              placeholder="Фамилия"
              {...register("last_name", changeUserData.last_name)}
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
                <InputMask
                  mask={"+7 (999) 999-99-99"}
                  placeholder={"+7 (999) 999-99-99"}
                  className="input-field__input"
                  id="lk-edit-phone"
                  {...field}
                />
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
