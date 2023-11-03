import React, { FC, useEffect } from "react";

import SearchIcon from "../../public/img/sprite/icon-search.svg";
import BookmarksIcon from "../../public/img/sprite/icon-bookmarks.svg";
import NotificationIcon from "../../public/img/sprite/icon-notifications.svg";

import Link from "next/link";
import { useModalsContext } from "../../context/ModalsContext";
import Hamburger from "../hamburger";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/slice";

const Header = () => {
  const {
    setAiChatActive,
    menuActive,
    setLoginActive,
    setRegisterActive,
    setNotification,
    setSearchActive,
  } = useModalsContext();

  const { user, status } = useSelector(selectUser);

  const login = () => {
    setLoginActive(true);
  };

  return (
    <header className={`header ${menuActive && "is--active"}`} id="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link href="/" className="header__logotype">
              <img src="/img/logotype.svg" alt="SCROLL" />
            </Link>
          </div>
          <div className="header__center">
            <div className="c-search header__search">
              <div
                onClick={() => setSearchActive(true)}
                className="c-search__inner"
              >
                <input
                  type="text"
                  className="c-search__input"
                  placeholder="Поиск"
                />
              </div>
            </div>
            <button
              onClick={() => setAiChatActive(true)}
              className="ai-btn header__ai"
            >
              <span>Спросить у ИИ</span>
              <img src="/img/ai-img.png" alt="AI" />
            </button>
          </div>
          <div className="header__right">
            <div className="header__controls header__controls--first">
              <span
                onClick={() => setSearchActive(true)}
                className="header__btn header__btn--mobile header__btn--desktop-hidden search-btn"
              >
                <SearchIcon />
              </span>
              <Link href="#" className="header__btn header__btn--tablet-hidden">
                <BookmarksIcon />
              </Link>
              <span
                onClick={() => setNotification(true)}
                className="header__btn notifications-btn"
              >
                <NotificationIcon />
              </span>
            </div>
            <div className="header__controls header__controls--second">
              {user ? (
                <Link href="/lk">А</Link>
              ) : (
                <span onClick={login} className="header__btn">
                  <span>Войти</span>
                </span>
              )}
              <Hamburger />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
