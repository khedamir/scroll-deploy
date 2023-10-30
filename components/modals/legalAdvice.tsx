import React, { FC, FormEvent, useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import ThanksModal from "./thanks";
import { useForm } from "react-hook-form";
import ContactInput from "../ContactInput";
import { legalAdviceScheme } from "./validationSchemes";
import { server, serverWithJwt } from "../../utils/server";
import axios from "axios";

interface LegalAdviceProps {
  active: boolean;
  setActive: (v: boolean) => void;
}

export type FormValues = {
  name: string;
  contact: string;
  answer: string;
};

export type ContactInputType = "email" | "phone";

const LegalAdvice: FC<LegalAdviceProps> = ({ active, setActive }) => {
  const [thanksModalActive, setThanksModalActive] = useState(false);

  const [contactType, setContactType] = useState<ContactInputType>("email");

  const { register, handleSubmit, control, setValue } = useForm<FormValues>({
    defaultValues: {
      name: "",
      contact: "",
      answer: "",
    },
  });

  useEffect(() => {
    setValue("contact", "");
  }, [contactType]);

  const fetch = async (values: FormValues) => {
    const params = {
      form_text_3: values.name,
      form_text_5: values.contact,
      form_textarea_6: values.answer,
    };
    console.log(params);
    const result = await server.post("/sw/v1//webform/?id=2", params);
    console.log(result);
  };

  const onSubmit = (values: FormValues) => {
    console.log(values);
    fetch(values);
    // setThanksModalActive(true);
    // setActive(false);
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
                  action="#"
                  className="modal-form modal__form"
                >
                  <div className="input-field input-field--border modal-form__input">
                    <div className="input-field__top">
                      <label
                        htmlFor="modal-legal-advice-name"
                        className="input-field__label"
                      >
                        Имя
                      </label>
                    </div>
                    <div className="input-field__inner">
                      <input
                        type="text"
                        id="modal-legal-advice-name"
                        className="input-field__input"
                        placeholder="Имя"
                        {...register("name")}
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
                  <div className="input-field input-field--border modal-form__input">
                    <div className="input-field__top">
                      <label
                        htmlFor="modal-legal-advice-text"
                        className="input-field__label"
                      >
                        Задайте вопрос
                      </label>
                    </div>
                    <div className="input-field__inner">
                      <div className="input-field__textarea-wrap">
                        <textarea
                          id="modal-legal-advice-text"
                          className="input-field__textarea"
                          placeholder="Ваш вопрос..."
                          {...register("answer", legalAdviceScheme.answer)}
                        ></textarea>
                        <button className="input-field__textarea-btn btn btn--sm btn--blue">
                          <ReactSVG src="/img/sprite/icon-arrow-next.svg" />
                        </button>
                      </div>
                    </div>
                    <span className="input-field__error">
                      Это обязательное поле
                    </span>
                  </div>
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
