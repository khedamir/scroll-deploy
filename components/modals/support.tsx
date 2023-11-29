import React, { FC, useState } from "react";
import { ReactSVG } from "react-svg";
import ContactInput, { ContactInputType } from "../ContactInput";
import { useForm } from "react-hook-form";
import { supportScheme } from "./validationSchemes";
import InputWrapper from "../InputWrapper";
import ThanksModal from "./thanks";
import { SupportFetch } from "../../utils/formFetchs";

interface SupportProps {
  active: boolean;
  setActive: (v: boolean) => void;
}

export type FormValuesType = {
  contact: string;
  answer: string;
};

const Support: FC<SupportProps> = ({ active, setActive }) => {
  const [thanksModalActive, setThanksModalActive] = useState(false);
  const [contactType, setContactType] = useState<ContactInputType>("email");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValuesType>({ mode: "onBlur" });

  const onSubmit = (values: FormValuesType) => {
    SupportFetch(values).then(() => {
      setThanksModalActive(true);
      setActive(false);
      reset();
    });
  };
  
  return (
    <>
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
                  Постарайтесь подробно описать возникшую проблему или вопрос.
                  Это позволит нам быстрее решить проблему.
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
                    errors={errors}
                  />
                  <InputWrapper
                    labelValue="Задайте вопрос"
                    error={errors.answer}
                    errorMessage={errors.answer?.message}
                    htmlForValue="modal-support-text"
                  >
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
        title="Спасибо за ваш вопрос!"
        description="Служба техподдержки уже рассматривает ваш вопрос. Ответ поступит в уведомления."
      />
    </>
  );
};

export default Support;
