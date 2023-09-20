import React, { FC, ReactNode } from "react";

interface SectionProps {
  children1: ReactNode;
  children2: ReactNode;
  rightVisible?: boolean;
}

const SectionLayout: FC<SectionProps> = ({
  children1,
  children2,
  rightVisible = true,
}) => {
  return (
    <div className="layout__main-wrapper">
      <div className="layout__center">{children1}</div>
      <div
        className={`layout__right ${rightVisible && "layout__right--visible"}`}
      >
        {children2}
      </div>
    </div>
  );
};

export default SectionLayout;
