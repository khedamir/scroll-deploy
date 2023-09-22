import React, { FC, useState } from "react";

import SearchIcon from "../../public/img/sprite/icon-search.svg";
import BookmarksIcon from "../../public/img/sprite/icon-bookmarks.svg";
import NotificationIcon from "../../public/img/sprite/icon-notifications.svg";

import ChatAi from "../chatAi";
import Link from "next/link";

interface HeaderProps {
  chatAiActive: boolean;
  setChatAiActive: (v: boolean) => void;
  menuActive: boolean;
  setMenuActive: (v: boolean) => void;
}

const Header: FC<HeaderProps> = ({
  menuActive,
  setMenuActive,
  chatAiActive,
  setChatAiActive,
}) => {
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
              <div className="c-search__inner">
                <input
                  type="text"
                  className="c-search__input"
                  placeholder="Поиск"
                />
              </div>
            </div>
            <ChatAi
              buttonClasses="header__ai"
              active={chatAiActive}
              setActive={setChatAiActive}
            />
          </div>
          <div className="header__right">
            <div className="header__controls header__controls--first">
              <Link
                href="#"
                className="header__btn header__btn--mobile header__btn--desktop-hidden search-btn"
              >
                <SearchIcon />
              </Link>
              <Link href="#" className="header__btn header__btn--tablet-hidden">
                <BookmarksIcon />
              </Link>
              <Link href="#" className="header__btn notifications-btn">
                <NotificationIcon />
              </Link>
            </div>
            <div className="header__controls header__controls--second">
              <Link href="#" className="header__btn">
                <span>Войти</span>
              </Link>
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
