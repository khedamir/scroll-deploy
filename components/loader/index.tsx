import React, { FC } from "react";

interface LoaderProps {
  text?: string;
}

const Loader: FC<LoaderProps> = ({ text }) => {
  return (
    <div className="loader">
      {text && <h3 className="title">{text}</h3>}
      <span className="loader__wrapper"></span>
    </div>
  );
};

export default Loader;
