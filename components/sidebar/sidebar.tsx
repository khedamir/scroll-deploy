import React, { useState } from "react";
import { useGetLeftMenuValues } from "../../hooks/useGetLeftMenuValues";
import { server } from "../../utils/serverUrl";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Link from "next/link";
import { setNameRubric } from "../../store/slices/leftMenuSlice";
import { ReactSVG } from "react-svg";

const Sidebar = () => {
  const { values } = useAppSelector((state) => state.leftMenuReducer);
  const dispatch = useAppDispatch();
  useGetLeftMenuValues();
  const [itemsVisible, setItemsVisible] = useState(false);

  return (
    <nav className="nav layout__nav">
      <ul className={`nav__list ${itemsVisible && "is--open"}`}>
        {values.map(
          (value) =>
            (value.SHOW_IN_MAIN_MENU || itemsVisible) && (
              <li
                onClick={() => dispatch(setNameRubric(value.NAME))}
                key={value.ID}
                className="nav__item"
              >
                <Link
                  href={`/rubrics/${value.ID}`}
                  className="nav__link"
                >
                  <img src={`${server}${value.THEME_ICON_PATH}`} />
                  <span>{value.NAME}</span>
                </Link>
              </li>
            )
        )}
      </ul>
      <button
        onClick={() => setItemsVisible(!itemsVisible)}
        className={`nav__more ${itemsVisible && "is--open"}`}
        aria-label="Показать больше"
      >
        <ReactSVG src="/img/sprite/icon-arrow-down.svg" />
      </button>
    </nav>
  );
};

export default Sidebar;
