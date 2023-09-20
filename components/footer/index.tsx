import React, { FC } from "react";
import "./footer.scss";
import VCRUIcon from "../../public/img/sprite/icon-vcru.svg";
import TelegramIcon from "../../public/img/sprite/icon-telegram.svg";
import VKIcon from "../../public/img/sprite/icon-vk.svg";
import DzenIcon from "../../public/img/sprite/icon-dzen.svg";

interface FooterProps {
  otherClassName?: string;
}

const Footer: FC<FooterProps> = ({ otherClassName }) => {
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
              <a href="#" className="footer-nav__link">
                Заказать рекламу
              </a>
            </li>
            <li className="footer-nav__item">
              <a href="#" className="footer-nav__link">
                О проекте
              </a>
            </li>
            <li className="footer-nav__item">
              <a href="#" className="footer-nav__link">
                Конфиденциальность
              </a>
            </li>
          </ul>
          <ul className="footer-nav__list">
            <li className="footer-nav__item">
              <a href="#" className="footer-nav__link">
                Правила
              </a>
            </li>
            <li className="footer-nav__item">
              <a href="#" className="footer-nav__link">
                Помощь
              </a>
            </li>
            <li className="footer-nav__item">
              <a href="#" className="footer-nav__link">
                Вакансии
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
