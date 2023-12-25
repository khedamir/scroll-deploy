import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { useModalsContext } from "../../context/ModalsContext";
import ContactInput, { ContactInputType } from "../ContactInput";
import { useForm } from "react-hook-form";
import { server } from "../../utils/server";
import { useHandleScroll } from "../../hooks";
import Image from "next/image";

type FormValuesType = {
  contact: string;
};

const PasswordRecovery = () => {
  const [contactType, setContactType] = useState<ContactInputType>("email");
  const {
    recoveryPasswordActive,
    setRecoveryPasswordActive,
    setLoginActive,
    setRecoveryPasswordSend,
  } = useModalsContext();

  useHandleScroll(recoveryPasswordActive);

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValuesType>({ defaultValues: { contact: "" } });

  const buttonBackClick = () => {
    setLoginActive(true);
    setRecoveryPasswordActive(false);
  };

  const onSubmit = (values: FormValuesType) => {
    server
      .post("/api/v1/auth/forgot", { email: values.contact })
      .then(() => {
        setRecoveryPasswordSend(values.contact);
        setRecoveryPasswordActive(false);
      })
      .catch((errors) => {
        console.error(errors);
      });
  };

  return (
    <div
      onClick={() => setRecoveryPasswordActive(false)}
      className={`modal modal--wide ${recoveryPasswordActive && "is--active"}`}
      id="modal-password-recovery"
    >
      <div className="modal__wrap">
        <div onClick={(e) => e.stopPropagation()} className="modal__wrapper">
          <div className="modal__left">
            <picture className="modal__logotype">
              <Image
                width={172}
                height={32}
                src="/img/logotype.svg"
                alt="SCROLL"
              />
            </picture>
            <button
              onClick={() => setRecoveryPasswordActive(false)}
              className="modal__close-btn modal__close-btn--mobile"
            >
              <ReactSVG src="/img/sprite/icon-close-thin.svg" />
            </button>
          </div>
          <div className="modal__right">
            <button
              onClick={() => setRecoveryPasswordActive(false)}
              className="modal__close-btn modal__close-btn--desktop"
            >
              <ReactSVG src="/img/sprite/icon-close-thin.svg" />
            </button>
            <div className="modal__content">
              <button onClick={buttonBackClick} className="modal__back">
                <ReactSVG src="/img/sprite/icon-arrow-s-prev.svg" />
                <span>Назад</span>
              </button>
              <h3 className="modal__heading">Восстановление пароля</h3>
              <p className="modal__description">
                Введите адрес электронной почты или номер телефона, введенный
                вами при регистрации. Мы отправим вам ссылку для восстановления
                пароля.
              </p>
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
                <button className="modal-form__btn btn btn--blue">
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;
