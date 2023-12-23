import React, { FC, useState } from "react";
import { ReactSVG } from "react-svg";
import { feadbackFetch } from "../../utils/formFetchs";
import { useForm } from "react-hook-form";
import ThanksModal from "./thanks";
import InputWrapper from "../InputWrapper";
import { feadbackSchemes } from "./validationSchemes";
import { useHandleScroll } from "../../hooks";

interface FeadbackProps {
  active: boolean;
  setActive: (v: boolean) => void;
}

type FormValuesType = {
  value: string;
};

const Feadback: FC<FeadbackProps> = ({ active, setActive }) => {
  const [thanksModalActive, setThanksModalActive] = useState(false);
  useHandleScroll(thanksModalActive);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValuesType>({ mode: "onBlur" });

  const onSubmit = ({ value }: FormValuesType) => {
    feadbackFetch({ value }).then(() => {
      setThanksModalActive(true);
      setActive(false);
      reset();
    });
  };

  return (
    <>
      <div
        onClick={() => setActive(false)}
        className={`modal modal--wide ${active && "is--active"}`}
        id="modal-impression"
      >
        <div className="modal__wrap">
          <div onClick={(e) => e.stopPropagation()} className="modal__wrapper">
            <div className="modal__left modal__left--red">
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
                <h3 className="modal__heading">Впечатления о платформе</h3>
                <p className="modal__description">
                  Что вам понравилось, а что хотелось бы улучшить?
                </p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="modal-form modal__form"
                >
                  <InputWrapper
                    error={errors.value}
                    errorMessage={errors.value?.message}
                  >
                    <div className="input-field__textarea-wrap">
                      <textarea
                        id="modal-impression"
                        className="input-field__textarea input-field__textarea--high"
                        placeholder="Ваши пожелания, предложения"
                        {...register("value", feadbackSchemes.value)}
                      ></textarea>
                      <button className="input-field__textarea-btn btn btn--sm btn--red">
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
        title="Благодарим за обратную связь!"
        description="Это поможет нам сделать платформу еще полезнее и интереснее."
      />
    </>
  );
};

export default Feadback;
