import Link from "next/link";
import React from "react";

interface HeaderProps {
  menuActive: boolean;
  setMenuActive: (v: boolean) => void;
}

const ThirdyHeader = () => {
  return (
    <header className="header" id="header">
      <div className="container">
        <div className="header__wrapper header__wrapper--inner">
          <div className="header__left">
            <Link
              href="/"
              className="header__logotype header__logotype--small"
            >
              <picture>
                <source srcSet="/img/logotype.svg" media="(min-width: 768px)" />
                <img src="/img/logotype-small.svg" alt="SCROLL" />
              </picture>
            </Link>
          </div>
          <div className="header__center">
            <h3 className="header__heading">Вебинер</h3>
          </div>
          <div className="header__right">
            <div className="header__controls header__controls--first">
              <a
                href="#"
                className="header__btn header__btn--search search-btn"
              >
                <svg>
                  <use href="img/sprite.svg#icon-search"></use>
                </svg>
              </a>
              <a href="#" className="header__btn header__btn--tablet-hidden">
                <svg>
                  <use href="img/sprite.svg#icon-bookmarks"></use>
                </svg>
              </a>
              <a href="#" className="header__btn notifications-btn">
                <svg>
                  <use href="img/sprite.svg#icon-notifications"></use>
                </svg>
              </a>
            </div>
            <div className="header__controls header__controls--second">
              <a href="#" className="header__btn">
                <span>Войти</span>
              </a>
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

export default ThirdyHeader;
