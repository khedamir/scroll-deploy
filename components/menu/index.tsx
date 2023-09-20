import React, { FC } from "react";
import "./Menu.scss";
import Image from "next/image";
import aiImg from "../../app/assets/img/ai-img.png";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useGetLeftMenuValues } from "../../hooks/useGetLeftMenuValues";
import Link from "next/link";
import { server } from "../../utils/serverUrl";
import { setNameRubric } from "../../store/slices/leftMenuSlice";
import Footer from "../footer";
import { ReactSVG } from "react-svg";
import ChatAi from "../chatAi";

interface MenuProps {
  active: boolean;
  setActive: (v: boolean) => void;
  chatAiActive: boolean;
  setChatAiActive: (v: boolean) => void;
}

const Menu: FC<MenuProps> = ({
  active,
  setActive,
  chatAiActive,
  setChatAiActive,
}) => {
  const { values } = useAppSelector((state) => state.leftMenuReducer);
  const dispatch = useAppDispatch();
  useGetLeftMenuValues();
  return (
    <div className={`menu ${active && "is--active"}`}>
      <div className="menu__wrap">
        <div className="menu__main">
          <div className="menu__block">
            <nav className="nav menu__nav">
              <ul className="nav__list">
                {values.map((value) => (
                  <li
                    onClick={() => dispatch(setNameRubric(value.NAME))}
                    key={value.ID}
                    className="nav__item"
                  >
                    <Link
                      href={`/rubrics/${value.CODE}/${value.ID}`}
                      className="nav__link"
                    >
                      <img src={`${server}${value.THEME_ICON_PATH}`} />
                      <span>{value.NAME}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="menu__block">
            <div className="menu__controls">
              <ChatAi
                active={chatAiActive}
                setActive={setChatAiActive}
                buttonClasses="ai-btn--lg menu__ai"
              />

              <button className="menu__btn">
                <span>Закладки</span>
                <ReactSVG src="img/sprite/icon-bookmarks.svg" />
              </button>
              <button className="menu__btn menu__btn--mobile notifications-btn">
                <span>Уведомления</span>
                <ReactSVG src="img/sprite/icon-notifications.svg" />
              </button>
              <button
                onClick={() => setActive(false)}
                className="menu__btn menu__btn--mobile menu__close"
              >
                <span>Закрыть</span>
                <ReactSVG src="img/sprite/icon-close.svg" />
              </button>
            </div>
            <div className="c-account menu__account">
              <button className="c-account__inner">
                <span className="c-account__name">Александр Македонский</span>
                <span className="c-account__help">Аккаунт</span>
              </button>
            </div>
          </div>
        </div>
        <Footer otherClassName="menu__footer" />
      </div>
    </div>
  );
};

export default Menu;
