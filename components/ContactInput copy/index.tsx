import React, {
  ChangeEvent,
  InputHTMLAttributes,
  Ref,
  forwardRef,
  useState,
} from "react";
import { ContactInputType, FormValues } from "../modals/legalAdvice";
import InputMask from "react-input-mask";
import { Control, Controller } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  forwardedRef?: Ref<HTMLInputElement>;
  contactType: ContactInputType;
  setContactType: (v: ContactInputType) => void;
  control: any;
  rules: any;
}

const ContactInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    onChange,
    value,
    forwardedRef,
    contactType,
    setContactType,
    control,
    rules,
    ...rest
  } = props;

  return (
    <div className="input-field input-field--border modal-form__input">
      <div className="input-field__top">
        <label
          htmlFor="modal-legal-advice-email"
          className={`input-field__tab ${
            contactType === "email" && "is--active"
          }`}
          onClick={() => setContactType("email")}
        >
          Email
        </label>
        <label
          htmlFor="modal-legal-advice-email"
          className={`input-field__tab ${
            contactType === "phone" && "is--active"
          }`}
          onClick={() => setContactType("phone")}
        >
          Телефон
        </label>
      </div>
      <div className="input-field__inner">
        {contactType === "email" ? (
          <input
            type="text"
            id="modal-legal-advice-email"
            className="input-field__input"
            placeholder="Email"
            value={value}
            onChange={onChange}
            ref={forwardedRef ?? ref}
            {...rest}
          />
        ) : (
          <Controller
            name="contact"
            control={control}
            rules={rules}
            render={({ field }) => (
              <InputMask mask={"+7 (999) 999-99-99"} {...field}>
                {/* @ts-ignore */}
                {(inputProps) => (
                  <input
                    type="text"
                    id="modal-legal-advice-email"
                    className="input-field__input"
                    placeholder="+7 (999) 999-99-99"
                    {...inputProps}
                  />
                )}
              </InputMask>
            )}
          />
        )}
      </div>
      <span className="input-field__error">Это обязательное поле</span>
    </div>
  );
});

ContactInput.displayName = "Input";

export default ContactInput;
