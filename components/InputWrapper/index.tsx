import React, { FC, ReactNode } from "react";
import { FieldError } from "react-hook-form";

interface InputWrapperProps {
  labelValue?: string;
  htmlForValue?: string;
  error: FieldError | undefined;
  errorMessage: string | undefined;
  children: ReactNode;
  otherClassName?: string;
}

const InputWrapper: FC<InputWrapperProps> = ({
  labelValue,
  error,
  errorMessage,
  htmlForValue,
  children,
  otherClassName = "input-field--border modal-form__input",
}) => {
  return (
    <div className={`input-field ${otherClassName} ${error && "is--error"}`}>
      {labelValue && htmlForValue && (
        <div className="input-field__top">
          <label htmlFor={htmlForValue} className="input-field__label">
            {labelValue}
          </label>
        </div>
      )}
      <div className="input-field__inner">{children}</div>
      <span className="input-field__error">{errorMessage}</span>
    </div>
  );
};

export default InputWrapper;
