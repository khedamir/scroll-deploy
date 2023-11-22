import React, { FC, useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import ThanksModal from "./thanks";
import { useForm } from "react-hook-form";
import ContactInput, { ContactInputType } from "../ContactInput";
import { legalAdviceSchemes } from "./validationSchemes";
import { legalAdviceFetch } from "../../utils/formFetchs";
import InputWrapper from "../InputWrapper";

interface LegalAdviceProps {
  active: boolean;
  setActive: (v: boolean) => void;
}

type FormValuesType = {
  name: string;
  contact: string;
  answer: string;
};

const LegalAdvice: FC<LegalAdviceProps> = ({ active, setActive }) => {
  const [thanksModalActive, setThanksModalActive] = useState(false);
  const [contactType, setContactType] = useState<ContactInputType>("email");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValuesType>({
    defaultValues: {
      name: "",
      contact: "",
      answer: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (values: FormValuesType) => {
    const params = {
      name: values.name,
      phone: contactType === "phone" ? values.contact : "",
      email: contactType === "email" ? values.contact : "",
      answer: values.answer,
    };

    legalAdviceFetch(params).then(() => {
      setThanksModalActive(true);
      setActive(false);
      reset();
    });
  };

  return (
    <>
      <div
        className={`modal modal--wide ${active && "is--active"}`}
        id="modal-legal-advice"
      >
        <div className="modal__wrap">
          <div className="modal__wrapper">
            <div className="modal__left">
              <div className="modal__circles">
                <div className="modal__circle modal__circle--sm"></div>
                <div className="modal__circle modal__circle--md"></div>
                <div className="modal__circle modal__circle--lg"></div>
                <div className="modal__circle modal__circle--xl"></div>
              </div>
              <button
                onClick={() => setActive(false)}
                className="modal__close-btn modal__close-btn--mobile"
              >
                <ReactSVG src="/img/sprite/icon-close-thin.svg" />
              </button>
            </div>
            <div className="modal__right">
              <button
                onClick={() => setActive(false)}
                className="modal__close-btn modal__close-btn--desktop"
              >
                <ReactSVG src="/img/sprite/icon-close-thin.svg" />
              </button>
              <div className="modal__content">
                <h3 className="modal__heading">Консультация юриста</h3>
                <p className="modal__description">
                  Получите юридическую консультацию или услугу у проверенных
                  юристов и адвокатов
                </p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="modal-form modal__form"
                >
                  <InputWrapper
                    labelValue="Имя"
                    error={errors.name}
                    errorMessage={errors.name?.message}
                    htmlForValue="modal-legal-advice-name"
                  >
                    <input
                      type="text"
                      id="modal-legal-advice-name"
                      className="input-field__input"
                      placeholder="Имя"
                      {...register("name", legalAdviceSchemes.name)}
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
                    labelValue="Задайте вопрос"
                    error={errors.answer}
                    errorMessage={errors.answer?.message}
                    htmlForValue="modal-legal-advice-text"
                  >
                    <div className="input-field__textarea-wrap">
                      <textarea
                        id="modal-legal-advice-text"
                        className="input-field__textarea"
                        placeholder="Ваш вопрос..."
                        {...register("answer", legalAdviceSchemes.answer)}
                      ></textarea>
                      <button className="input-field__textarea-btn btn btn--sm btn--blue">
                        <ReactSVG src="/img/sprite/icon-arrow-next.svg" />
                      </button>
                    </div>
                  </InputWrapper>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ThanksModal
        active={thanksModalActive}
        setActive={setThanksModalActive}
        title="Благодарим за запись!"
        description="Мы свяжемся с вами в ближайшее время."
      />
    </>
  );
};

export default LegalAdvice;
