import React, { FC } from "react";
import InputMask from "react-input-mask";
import { Controller, FieldErrors, UseFormRegister } from "react-hook-form";
import { contactsSchemes } from "../modals/validationSchemes";

export type ContactInputType = "email" | "phone";

interface ContactInputProps {
  contactType: ContactInputType;
  setContactType: (v: ContactInputType) => void;
  control: any;
  errors: FieldErrors<{ contact: string }>;
  register: UseFormRegister<any>;
}

const ContactInput: FC<ContactInputProps> = ({
  contactType,
  setContactType,
  control,
  errors,
  register,
}) => {
  return (
    <div
      className={`input-field input-field--border modal-form__input ${
        errors?.contact && "is--error"
      }`}
    >
      <div className="input-field__top">
        <label
          htmlFor="email"
          className={`input-field__tab ${
            contactType === "email" && "is--active"
          }`}
          onClick={() => setContactType("email")}
        >
          Email
        </label>
        {/* <label
          htmlFor="phone"
          className={`input-field__tab ${
            contactType === "phone" && "is--active"
          }`}
          onClick={() => setContactType("phone")}
        >
          Телефон
        </label> */}
      </div>

      <div className="input-field__inner">
        {contactType === "email" ? (
          <input
            type="text"
            // id="email"
            className="input-field__input"
            placeholder="Email"
            autoComplete="email"
            {...register("contact", contactsSchemes.email)}
          />
        ) : (
          <Controller
            name="contact"
            control={control}
            rules={contactsSchemes.phone}
            render={({ field }) => (
              <InputMask
                mask={"+7 (999) 999-99-99"}
                placeholder={"+7 (999) 999-99-99"}
                className="input-field__input"
                id="phone"
                {...field}
              />
            )}
          />
        )}
      </div>
      <span className="input-field__error">{errors?.contact?.message}</span>
    </div>
  );
};

export default ContactInput;
