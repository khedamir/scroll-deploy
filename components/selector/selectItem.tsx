import React, { FC, ReactNode } from "react";

interface SelectItemProps {
  children: ReactNode;
}

const SelectItem: FC<SelectItemProps> = ({ children, ...props }) => {
  return (
    <li className="c-share__item" {...props}>
      <span className="c-share__btn">{children}</span>
    </li>
  );
};

export default SelectItem;
