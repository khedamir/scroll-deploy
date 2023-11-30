import React, { FC, useEffect } from "react";

import SearchIcon from "../../public/img/sprite/icon-search.svg";
import BookmarksIcon from "../../public/img/sprite/icon-bookmarks.svg";
import NotificationIcon from "../../public/img/sprite/icon-notifications.svg";

import Link from "next/link";
import { useModalsContext } from "../../context/ModalsContext";
import Hamburger from "../hamburger";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/slice";
import { useRouter } from "next/router";

interface HeaderProps {
  isScrolling: boolean;
}

const Header: FC<HeaderProps> = ({ isScrolling }) => {
  const {
    setAiChatActive,
    menuActive,
    setLoginActive,
    setRegisterActive,
    setNotification,
    setSearchActive,
  } = useModalsContext();

  const { user, status } = useSelector(selectUser);
  const router = useRouter();

  const login = () => {
    setLoginActive(true);
  };

  const bookmarks = () => {
    if (user) {
      router.push("/lk?block=bookmarks");
    } else {
      setLoginActive(true);
    }
  };

  return (
    <header
      className={`header header--center ${menuActive && "is--active"} ${
        isScrolling && "is--scrolling"
      }`}
      id="header"
    >
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
              <span
                onClick={bookmarks}
                className="header__btn header__btn--tablet-hidden"
              >
                <BookmarksIcon />
              </span>
              <span
                onClick={() => setNotification(true)}
                className="header__btn notifications-btn"
              >
                <NotificationIcon />
              </span>
            </div>
            <div className="header__controls header__controls--second">
              {user ? (
                <span className="header__btn">
                  <Link href="/lk">
                    <picture className="comments-new__img header-lk__logo">
                      <span>{user?.main.VALUES.NAME.VALUE[0]}</span>
                      {user?.main.VALUES.PERSONAL_PHOTO?.VALUE ? (
                        <img
                          src={user?.main.VALUES.PERSONAL_PHOTO?.VALUE}
                          alt=""
                        />
                      ) : (
                        <span>{user?.main.VALUES.NAME.VALUE[0]}</span>
                      )}
                    </picture>
                  </Link>
                </span>
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
