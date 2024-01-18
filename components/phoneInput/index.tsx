import React, { forwardRef } from "react";
import InputMask, { ReactInputMask } from "react-input-mask";

interface PhoneInputProps {
  value?: string;
  classes: string;
  id: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}

const PhoneInput = forwardRef<ReactInputMask, PhoneInputProps>(
  ({ value, onChange, classes, id, ...rest }, ref) => (
    <InputMask
      mask={"+7 (999) 999-99-99"}
      placeholder={"+7 (999) 999-99-99"}
      className={classes}
      id={id}
      {...rest}
      ref={ref}
    />
  )
);

PhoneInput.displayName = "PhoneInput";
export default PhoneInput;
