import React, { useEffect } from "react";
import Link from "next/link";
import Footer from "../footer";
import { ReactSVG } from "react-svg";
import { useModalsContext } from "../../context/ModalsContext";
import { useSelector } from "react-redux";
import { selectRubrics } from "../../redux/rubrics/slice";
import { baseURL } from "../../utils/server";

const Menu = () => {
  const { rubrics } = useSelector(selectRubrics);

  const { setAiChatActive, menuActive, setMenuActive } = useModalsContext();

  useEffect(() => {
    console.log(rubrics);
  }, []);

  return (
    <div className={`menu ${menuActive && "is--active"}`}>
      <div className="menu__wrap">
        <div className="menu__main">
          <div className="menu__block">
            <nav className="nav menu__nav">
              <ul className="nav__list">
                {rubrics.map((value) => (
                  <li
                    // onClick={() => setMenuActive(false)}
                    key={value.ID}
                    className="nav__item"
                  >
                    <Link href={`/rubrics/${value.ID}`} className="nav__link">
                      <img src={`${baseURL}${value.THEME_ICON_PATH}`} />
                      <span>{value.NAME}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="menu__block">
            <div className="menu__controls">
              <button
                onClick={() => setAiChatActive(true)}
                className="ai-btn ai-btn--lg menu__ai"
              >
                <span>Спросить у ИИ</span>
                <img src="/img/ai-img.png" alt="AI" />
              </button>
              <button className="menu__btn">
                <span>Закладки</span>
                <ReactSVG src="/img/sprite/icon-bookmarks.svg" />
              </button>
              <button className="menu__btn menu__btn--mobile notifications-btn">
                <span>Уведомления</span>
                <ReactSVG src="/img/sprite/icon-notifications.svg" />
              </button>
              <button
                onClick={() => setMenuActive(false)}
                className="menu__btn menu__btn--mobile menu__close"
              >
                <span>Закрыть</span>
                <ReactSVG src="/img/sprite/icon-close.svg" />
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
