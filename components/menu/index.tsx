import React, { useEffect } from "react";
import Link from "next/link";
import Footer from "../footer";
import { ReactSVG } from "react-svg";
import { useModalsContext } from "../../context/ModalsContext";
import { useSelector } from "react-redux";
import { selectRubrics } from "../../redux/rubrics/slice";
import { baseURL } from "../../utils/server";
import { useRouter } from "next/router";
import { selectUser } from "../../redux/auth/slice";
import Image from "next/image";

const Menu = () => {
  const { setAiChatActive, menuActive, setMenuActive, setLoginActive } =
    useModalsContext();
  const { rubrics } = useSelector(selectRubrics);
  const router = useRouter();
  const { user, status } = useSelector(selectUser);

  useEffect(() => {
    setMenuActive(false);
  }, [router.query.id, router.pathname]);

  const loginClick = () => {
    setLoginActive(true);
    setMenuActive(false);
  };

  return (
    <div className={`menu ${menuActive && "is--active"}`}>
      <div className="menu__wrap">
        <div className="menu__main">
          <div className="menu__block">
            <nav className="nav menu__nav">
              <ul className="nav__list">
                {rubrics.map((value) => (
                  <li key={value.ID} className="nav__item">
                    <Link href={`/rubrics/${value.ID}`} className="nav__link">
                      <Image
                        width={32}
                        height={32}
                        src={`${baseURL}${value.THEME_ICON_PATH}`}
                        alt="rubric-logo"
                      />
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
                <Image width={140} height={97} src="/img/ai-img.png" alt="AI" />
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
            {user ? (
              <div className="c-account menu__account">
                <Link href="/lk" className="c-account__inner">
                  <span className="c-account__name">
                    {user?.name} {user?.last_name}
                  </span>
                  <span className="c-account__help">Аккаунт</span>
                </Link>
              </div>
            ) : (
              <div className="c-account menu__account">
                <button onClick={loginClick} className="c-account__inner">
                  <span className="c-account__name">Войти</span>
                  <span className="c-account__help">Аккаунт</span>
                </button>
              </div>
            )}
          </div>
        </div>
        <Footer otherClassName="menu__footer" />
      </div>
    </div>
  );
};

export default Menu;
