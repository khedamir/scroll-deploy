import React, { useEffect, useState } from "react";
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
  const [isDisabled, setIsDisabled] = useState(true);
  const [saved, setSaved] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    watch,
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

  const watchedName = watch("name");
  const watchedLastName = watch("last_name");
  const watchedCity = watch("city");
  const watchedPhone = watch("phone");
  const watchedEmail = watch("email");

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
        data: {
          name: values.name,
          last_name: values.last_name,
          city: values.city,
          phone: values.phone,
          email: values.email,
        },
      };

      if (userImg) {
        const path = await setImageFetch(inputImgValue);
        params.data.photo = path;
      }

      UserDataChange(params).then(() => {
        setSaved(true);
      });
    }
  };

  const isDisabledCheck = () => {
    if (user) {
      if (user.name !== getValues("name")) {
        return false;
      }

      if (user.last_name !== getValues("last_name")) {
        return false;
      }

      if (user.city !== getValues("city")) {
        return false;
      }

      if (user.phone !== getValues("phone")) {
        return false;
      }

      if (user.email !== getValues("email")) {
        return false;
      }

      if (userImg) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    setIsDisabled(isDisabledCheck());
  }, [
    watchedName,
    watchedLastName,
    watchedCity,
    watchedPhone,
    watchedEmail,
    userImg,
  ]);

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
        <button
          disabled={isDisabled}
          className="lk-edit__btn btn btn--md-bold btn--orange"
        >
          {saved ? "Сохранено" : "Сохранить"}
        </button>
      </div>
    </form>
  );
};

export default UserDataForm;
