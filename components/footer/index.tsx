import React, { FC } from "react";
import VCRUIcon from "../../public/img/sprite/icon-vcru.svg";
import TelegramIcon from "../../public/img/sprite/icon-telegram.svg";
import VKIcon from "../../public/img/sprite/icon-vk.svg";
import DzenIcon from "../../public/img/sprite/icon-dzen.svg";
import Link from "next/link";
import { useModalsContext } from "../../context/ModalsContext";

interface FooterProps {
  otherClassName?: string;
}

const Footer: FC<FooterProps> = ({ otherClassName }) => {
  const { setMenuActive } = useModalsContext();

  return (
    <footer className={`footer ${otherClassName}`} id="footer">
      <div className="footer-socmedia footer__socmedia">
        <div className="footer-socmedia__wrapper">
          <a href="#" className="footer-socmedia__btn">
            <VCRUIcon />
          </a>
          <a href="#" className="footer-socmedia__btn">
            <TelegramIcon />
          </a>
          <a href="#" className="footer-socmedia__btn">
            <VKIcon />
          </a>
          <a href="#" className="footer-socmedia__btn">
            <DzenIcon />
          </a>
        </div>
      </div>
      <div className="footer-nav footer__nav">
        <div className="footer-nav__wrapper">
          <ul className="footer-nav__list">
            <li className="footer-nav__item">
              <Link href="#" className="footer-nav__link">
                Заказать рекламу
              </Link>
            </li>
            <li className="footer-nav__item">
              <Link href="#" className="footer-nav__link">
                О проекте
              </Link>
            </li>
            <li className="footer-nav__item">
              <Link href="#" className="footer-nav__link">
                Конфиденциальность
              </Link>
            </li>
          </ul>
          <ul className="footer-nav__list">
            <li className="footer-nav__item">
              <Link href="#" className="footer-nav__link">
                Правила
              </Link>
            </li>
            <li className="footer-nav__item">
              <Link href="/faq" className="footer-nav__link">
                Помощь
              </Link>
            </li>
            <li className="footer-nav__item">
              <Link href="/vacancies" className="footer-nav__link">
                Вакансии
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
