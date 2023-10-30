import React, { FC } from "react";
import { ContactInputType } from "../modals/legalAdvice";
import InputMask from "react-input-mask";
import { Controller, UseFormRegister } from "react-hook-form";
import { contactsSchemes } from "../modals/validationSchemes";

interface ContactInputProps {
  contactType: ContactInputType;
  setContactType: (v: ContactInputType) => void;
  control: any;
  register: UseFormRegister<any>;
}

const ContactInput: FC<ContactInputProps> = ({
  contactType,
  setContactType,
  control,
  register,
}) => {
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
            {...register("contact", contactsSchemes.email)}
          />
        ) : (
          <Controller
            name="contact"
            control={control}
            rules={contactsSchemes.phone}
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
};

export default ContactInput;
