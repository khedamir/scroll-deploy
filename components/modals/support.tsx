import React, { FC, useState } from "react";
import { ReactSVG } from "react-svg";
import ContactInput from "../ContactInput";
import { useForm } from "react-hook-form";
import { supportScheme } from "./validationSchemes";
import axios from "axios";
import { server } from "../../utils/server";

interface SupportProps {
  active: boolean;
  setActive: (v: boolean) => void;
}

export type FormValues = {
  contact: string;
  answer: string;
};

export type ContactInputType = "email" | "phone";

const Support: FC<SupportProps> = ({ active, setActive }) => {
  const { register, handleSubmit, control } = useForm<FormValues>();
  const [contactType, setContactType] = useState<ContactInputType>("email");

  const fetch = async (values: FormValues) => {
    const params = {
      form_text_5: values.contact,
      form_textarea_6: values.answer,
    };
    console.log(params);
    const result = await server.post("/sw/v1//webform/?id=?", params);
    console.log(result);
  };

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };
  return (
    <div
      className={`modal modal--wide ${active && "is--active"}`}
      id="modal-support"
    >
      <div className="modal__wrap">
        <div className="modal__wrapper">
          <div className="modal__left modal__left--orange">
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
              <h3 className="modal__heading">Вопрос в техподдержку</h3>
              <p className="modal__description">
                Постарайтесь подробно описать возникшую проблему или вопрос. Это
                позволит нам быстрее решить проблему.
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                action="#"
                className="modal-form modal__form"
              >
                <ContactInput
                  contactType={contactType}
                  setContactType={setContactType}
                  control={control}
                  register={register}
                />
                <div className="input-field input-field--border modal-form__input">
                  <div className="input-field__top">
                    <label
                      htmlFor="modal-support-text"
                      className="input-field__label"
                    >
                      Задайте вопрос
                    </label>
                  </div>
                  <div className="input-field__inner">
                    <div className="input-field__textarea-wrap">
                      <textarea
                        id="modal-support-text"
                        className="input-field__textarea input-field__textarea--high"
                        placeholder="Ваш вопрос..."
                        {...register("answer", supportScheme.answer)}
                      ></textarea>
                      <button className="input-field__textarea-btn btn btn--sm btn--orange">
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
  );
};

export default Support;
