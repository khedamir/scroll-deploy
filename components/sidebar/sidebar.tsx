import React, { FC, useState } from "react";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { useRouter } from "next/router";
import { baseURL } from "../../utils/server";
import Image from "next/image";
import { RubricType } from "../../redux/types";
import Footer from "../footer";

interface SidebarProps {
  rubrics: RubricType[];
}

const Sidebar: FC<SidebarProps> = ({ rubrics }) => {
  const router = useRouter();
  const [itemsVisible, setItemsVisible] = useState<boolean>(false);

  return (
    <div className="layout__sticky layout__scroll scroll-x" data-simplebar>
      <div className="layout__scroll-inner">
        <nav className="nav layout__nav">
          <ul className={`nav__list ${itemsVisible && "is--open"}`}>
            {rubrics.map(
              (value) =>
                (value.SHOW_IN_MAIN_MENU || itemsVisible) && (
                  <li
                    key={value.ID}
                    className={`nav__item ${
                      router.query.id === value.ID && "is--active"
                    }`}
                  >
                    <Link href={`/rubrics/${value.ID}`} className="nav__link">
                      <Image
                        width={32}
                        height={32}
                        src={`${baseURL}${value.THEME_ICON_PATH}`}
                        alt="rubric-icon"
                      />
                      <span>{value.NAME}</span>
                    </Link>
                  </li>
                )
            )}
          </ul>
          <button
            onClick={() => setItemsVisible(!itemsVisible)}
            className={`nav__more ${itemsVisible && "is--open"}`}
            aria-label="Показать больше"
          >
            <ReactSVG src="/img/sprite/icon-arrow-down.svg" />
          </button>
        </nav>
        <Footer otherClassName="layout__footer" />
      </div>
    </div>
  );
};

export default Sidebar;
