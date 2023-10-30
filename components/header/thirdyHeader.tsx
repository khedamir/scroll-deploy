import Link from "next/link";
import React, { FC } from "react";
import { useModalsContext } from "../../context/ModalsContext";
import Hamburger from "../hamburger";

import SearchIcon from "../../public/img/sprite/icon-search.svg";
import BookmarksIcon from "../../public/img/sprite/icon-bookmarks.svg";
import NotificationIcon from "../../public/img/sprite/icon-notifications.svg";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/slice";

interface HeaderProps {
  title: string;
}

const ThirdyHeader: FC<HeaderProps> = ({ title }) => {
  const { menuActive, setLoginActive, setSearchActive } = useModalsContext();

  const { user, status } = useSelector(selectUser);

  const login = () => {
    setLoginActive(true);
  };

  return (
    <header className={`header ${menuActive && "is--active"}`} id="header">
      <div className="container">
        <div className="header__wrapper header__wrapper--inner">
          <div className="header__left">
            <Link href="/" className="header__logotype header__logotype--small">
              <picture>
                <source srcSet="/img/logotype.svg" media="(min-width: 768px)" />
                <img src="/img/logotype-small.svg" alt="SCROLL" />
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
              <Link href="#" className="header__btn header__btn--tablet-hidden">
                <BookmarksIcon />
              </Link>
              <Link href="#" className="header__btn notifications-btn">
                <NotificationIcon />
              </Link>
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

export default ThirdyHeader;
