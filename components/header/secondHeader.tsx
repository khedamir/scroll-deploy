import Link from "next/link";
import React from "react";
import { useModalsContext } from "../../context/ModalsContext";
import Hamburger from "../hamburger";

import SearchIcon from "../../public/img/sprite/icon-search.svg";
import BookmarksIcon from "../../public/img/sprite/icon-bookmarks.svg";
import NotificationIcon from "../../public/img/sprite/icon-notifications.svg";

import UserBlock from "./userBlock";
import Image from "next/image";
import { useFavoriteContext } from "../../context/FavoritesContext";

const SecondHeader = () => {
  const { menuActive, setNotification, setSearchActive, setBookmarks } =
    useModalsContext();
  const { bookmarksAnimateActive } = useFavoriteContext();
  return (
    <header className={`header ${menuActive && "is--active"}`} id="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link href="/" className="header__logotype">
              <Image fill priority src="/img/logotype.svg" alt="SCROLL" />
            </Link>
          </div>
          <div className="header__center"></div>
          <div className="header__right">
            <div className="header__controls header__controls--first">
              <span
                onClick={() => setSearchActive(true)}
                className="header__btn header__btn--mobile search-btn"
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
                className="header__btn notifications-btn"
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

export default SecondHeader;
