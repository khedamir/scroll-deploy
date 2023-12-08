import Link from "next/link";
import React from "react";
import { useModalsContext } from "../../context/ModalsContext";
import Hamburger from "../hamburger";

import SearchIcon from "../../public/img/sprite/icon-search.svg";
import BookmarksIcon from "../../public/img/sprite/icon-bookmarks.svg";
import NotificationIcon from "../../public/img/sprite/icon-notifications.svg";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/slice";
import UserBlock from "./userBlock";

const SecondHeader = () => {
  const { menuActive, setLoginActive, setSearchActive } = useModalsContext();

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
          <div className="header__center"></div>
          <div className="header__right">
            <div className="header__controls header__controls--first">
              <span
                onClick={() => setSearchActive(true)}
                className="header__btn header__btn--mobile search-btn"
              >
                <SearchIcon />
              </span>
              <Link
                href="/lk?block=bookmarks"
                className="header__btn header__btn--tablet-hidden"
              >
                <BookmarksIcon />
              </Link>
              <Link href="#" className="header__btn notifications-btn">
                <NotificationIcon />
              </Link>
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
