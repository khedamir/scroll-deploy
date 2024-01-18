import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/slice";
import { advertisingFetch } from "../../utils/formFetchs";
import { Controller, useForm } from "react-hook-form";
import InputWrapper from "../InputWrapper";
import { advertisingSchemes } from "../modals/validationSchemes";
import InputMask from "react-input-mask";
import ThanksModal from "../modals/thanks";

interface AdvertisingProps {
  active: boolean;
}

type FormValuesType = {
  name: string;
  phone: string;
  email: string;
};

const Advertising: FC<AdvertisingProps> = ({ active }) => {
  const { user } = useSelector(selectUser);
  const [thanksActive, setThanksActive] = useState(false);

  const getNameField = () => {
    let name = "";
    if (user) {
      if (user.name) {
        name += user.name;
      }
      if (user.last_name) {
        if (name.length) {
          name += " " + user.last_name;
        } else {
          name += user.last_name;
        }
      }
    }
    return name;
  };

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: getNameField(),
      phone: user?.phone ? user.phone : "",
      email: user?.email ? user.email : "",
    },
    mode: "onBlur",
  });

  const onSubmit = (values: FormValuesType) => {
    advertisingFetch(values).then(() => {
      setThanksActive(true);
    });
  };

  return (
    <div className={`lk-tabs__wrapper ${active && "is--active"}`}>
      <div className="lk-order-ads">
        <div className="lk-order-ads__wrapper">
          <div className="lk-order-ads__top">
            <h3 className="lk-order-ads__heading">Заказать рекламу</h3>
            <p className="lk-order-ads__description">
              Покажем все кейсы и подберем формат под любую задачу
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lk-order-ads__form"
          >
            <InputWrapper
              labelValue="Имя представителя"
              htmlForValue="lk-edit-name"
              error={errors.name}
              errorMessage={errors.name?.message}
              otherClassName="lk-order-ads__input"
            >
              <input
                type="text"
                id="lk-edit-name"
                className="input-field__input"
                placeholder="Имя"
                {...register("name", advertisingSchemes.name)}
              />
            </InputWrapper>

            <InputWrapper
              labelValue="Номер телефона"
              htmlForValue="lk-edit-phone__ads"
              error={errors.phone}
              errorMessage={errors.phone?.message}
              otherClassName="lk-order-ads__input"
            >
              <InputMask
                {...register("phone", advertisingSchemes.phone)}
                mask="+7 (999) 999-99-99"
                placeholder={"+7 (999) 999-99-99"}
                className="input-field__input"
                id="lk-edit-phone__ads"
                onChange={(e) => {
                  setValue("phone", e.target.value);
                }}
              />
            </InputWrapper>
            <InputWrapper
              labelValue="Email"
              htmlForValue="lk-edit-email"
              error={errors.email}
              errorMessage={errors.email?.message}
              otherClassName="lk-order-ads__input"
            >
              <input
                type="text"
                id="lk-edit-email"
                className="input-field__input"
                placeholder="example@gmail.com"
                {...register("email", advertisingSchemes.email)}
              />
            </InputWrapper>
            <button
              className="lk-order-ads__btn btn btn--md-bold btn--orange modal-btn"
              data-id="modal-application"
            >
              Оформить заявку
            </button>
          </form>
        </div>
      </div>
      <ThanksModal
        active={thanksActive}
        setActive={setThanksActive}
        title="Мы получили вашу заявку!"
        description="Мы свяжемся с вами в ближайшее время и подберем оптимальные условия."
      />
    </div>
  );
};

export default Advertising;
