import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ReactSVG } from "react-svg";

const SecondSidebar = () => {
  const goToBack = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    window.history.back();
  };
  const router = useRouter();
  return (
    <div className="layout__sections layout__sticky">
      <Link onClick={goToBack} href="#" className="back-btn layout__back">
        <ReactSVG src="/img/sprite/icon-back.svg" />
      </Link>
      <div className="nav-sections layout__nav-sections">
        <ul className="nav-sections__list">
          <li
            className={`nav-sections__item ${
              (router.pathname === "/videos" ||
                router.pathname === "/videos/[id]") &&
              "is--active"
            }`}
          >
            <Link href="/videos" className="nav-sections__link">
              Видео
            </Link>
          </li>
          <li
            className={`nav-sections__item ${
              (router.pathname === "/tranding-videos" ||
                router.pathname === "/tranding-videos/[id]") &&
              "is--active"
            }`}
          >
            <Link href="/tranding-videos" className="nav-sections__link">
              Тренды
            </Link>
          </li>
          <li
            className={`nav-sections__item ${
              (router.pathname === "/lectures" ||
                router.pathname === "/lectures/[id]") &&
              "is--active"
            }`}
          >
            <Link href="/lectures" className="nav-sections__link">
              Лекции
            </Link>
          </li>
          <li
            className={`nav-sections__item ${
              (router.pathname === "/podcasts" ||
                router.pathname === "/podcasts/[id]") &&
              "is--active"
            }`}
          >
            <Link href="/podcasts" className="nav-sections__link">
              Аудиоподкасты
            </Link>
          </li>
          <li
            className={`nav-sections__item ${
              (router.pathname === "/lawyers-club" ||
                router.pathname === "/lawyers-club/[id]") &&
              "is--active"
            }`}
          >
            <Link href="/lawyers-club" className="nav-sections__link">
              Клуб юристов
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SecondSidebar;
