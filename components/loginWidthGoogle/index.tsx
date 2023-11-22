import React from "react";
import { ReactSVG } from "react-svg";

const LoginWidthGoogle = () => {
  return (
    <div className="resource-auth modal-form__resource">
      <div className="resource-auth__or">
        <span className="resource-auth__delimiter"></span>
        <span className="resource-auth__help">или</span>
        <span className="resource-auth__delimiter"></span>
      </div>
      <div className="resource-auth__buttons">
        <button className="resource-auth__btn">
          <ReactSVG src="/img/sprite/icon-google-color.svg" />
          <span>Войти через Google account</span>
        </button>
      </div>
    </div>
  );
};

export default LoginWidthGoogle;
