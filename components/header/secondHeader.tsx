import Link from "next/link";
import React, { FC } from "react";
import { ReactSVG } from "react-svg";

interface HeaderProps {
  menuActive: boolean;
  setMenuActive: (v: boolean) => void;
}

const SecondHeader: FC<HeaderProps> = () => {
  return (
    <header className="header" id="header">
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
              <Link
                href="#"
                className="header__btn header__btn--mobile search-btn"
              >
                <ReactSVG src="/img/sprite/icon-search.svg" />
              </Link>
              <Link href="#" className="header__btn header__btn--tablet-hidden">
                <ReactSVG src="/img/sprite/icon-bookmarks.svg" />
              </Link>
              <Link href="#" className="header__btn notifications-btn">
                <ReactSVG src="/img/sprite/icon-notifications.svg" />
              </Link>
            </div>
            <div className="header__controls header__controls--second">
              <Link href="#" className="header__btn">
                <span>Войти</span>
              </Link>
              <div
                className="hamburger"
                id="hamburger-toggle"
                aria-label="Меню"
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

export default SecondHeader;
