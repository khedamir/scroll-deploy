import React from "react";
import { useModalsContext } from "../../context/ModalsContext";

const Hamburger = () => {
  const { menuActive, setMenuActive } = useModalsContext();

  return (
    <div
      className={`hamburger ${menuActive && "is--active"}`}
      id="hamburger-toggle"
      aria-label="Меню"
      onClick={() => setMenuActive(!menuActive)}
    >
      <span className="hamburger__inner"></span>
      <span className="hamburger__inner"></span>
      <span className="hamburger__inner"></span>
    </div>
  );
};

export default Hamburger;
