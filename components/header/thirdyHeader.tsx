import Link from "next/link";
import React, { FC } from "react";
import { useModalsContext } from "../../context/ModalsContext";
import Hamburger from "../hamburger";

import SearchIcon from "../../public/img/sprite/icon-search.svg";
import BookmarksIcon from "../../public/img/sprite/icon-bookmarks.svg";
import NotificationIcon from "../../public/img/sprite/icon-notifications.svg";

import UserBlock from "./userBlock";
import Image from "next/image";
import { useFavoriteContext } from "../../context/FavoritesContext";

interface HeaderProps {
  title: string;
}

const ThirdyHeader: FC<HeaderProps> = ({ title }) => {
  const { menuActive, setNotification, setSearchActive, setBookmarks } =
    useModalsContext();
  const { bookmarksAnimateActive } = useFavoriteContext();

  return (
    <header
      className={`header header--center ${menuActive && "is--active"}`}
      id="header"
    >
      <div className="container">
        <div className="header__wrapper header__wrapper--inner">
          <div className="header__left">
            <Link href="/" className="header__logotype header__logotype--small">
              <picture>
                <source srcSet="/img/logotype.svg" media="(min-width: 768px)" />
                <Image
                  width={24}
                  height={24}
                  src="/img/logotype-small.svg"
                  alt="SCROLL"
                />
              </picture>
            </Link>
          </div>
          <div className="header__center">
            <h3 className="header__heading">{title}</h3>
          </div>
          <div className="header__right">
            <div className="header__controls header__controls--first">
              <span
                onClick={() => setSearchActive(true)}
                className="header__btn header__btn--search search-btn"
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
                  false && "is--new"
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

export default ThirdyHeader;
