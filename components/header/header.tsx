import React, { FC, useEffect, useState } from "react";

import SearchIcon from "../../public/img/sprite/icon-search.svg";
import BookmarksIcon from "../../public/img/sprite/icon-bookmarks.svg";
import NotificationIcon from "../../public/img/sprite/icon-notifications.svg";

import Link from "next/link";
import { useModalsContext } from "../../context/ModalsContext";
import Hamburger from "../hamburger";
import UserBlock from "./userBlock";
import { useFavoriteContext } from "../../context/FavoritesContext";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectNotifications } from "../../redux/notifications/slice";

interface HeaderProps {
  isScrolling: boolean;
}

const Header: FC<HeaderProps> = ({ isScrolling }) => {
  const {
    setAiChatActive,
    menuActive,
    setNotification,
    setBookmarks,
    setSearchActive,
  } = useModalsContext();

  const { bookmarksAnimateActive } = useFavoriteContext();
  const { data } = useSelector(selectNotifications);
  const [notificationsActive, setNotificationActive] = useState(false);

  useEffect(() => {
    if (notificationsActive) {
      setTimeout(() => {
        setNotificationActive(false);
      }, 1000);
    }
  }, [notificationsActive, setNotification]);

  useEffect(() => {
    setNotificationActive(true);
  }, [data]);

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
              <Image fill priority src="/img/logotype.svg" alt="SCROLL" />
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
              <Image width={79} height={62} src="/img/ai-img.png" alt="AI" />
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
                onClick={() => setBookmarks(true)}
                className={`header__btn header__btn--tablet-hidden bookmarks-btn ${
                  bookmarksAnimateActive && "is--new"
                }`}
              >
                <BookmarksIcon />
              </span>
              <span
                onClick={() => setNotification(true)}
                className={`header__btn notifications-btn ${
                  data.length && "is--new"
                }`}
              >
                <NotificationIcon />
              </span>
            </div>
            <div className="header__controls header__controls--second">
              <UserBlock />
              <Hamburger />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
