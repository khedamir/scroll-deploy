import Link from "next/link";
import React, { FC } from "react";
import { ReactSVG } from "react-svg";

interface ProProps {
  active: boolean;
}

const Pro: FC<ProProps> = ({ active }) => {
  return (
    <div className={`lk-tabs__wrapper ${active && "is--active"}`}>
      <div className="pro-subscription">
        <div className="pro-subscription__wrapper">
          <h3 className="pro-subscription__heading">1 месяц </h3>
          <div className="pro-subscription__list">
            <div className="pro-subscription__item">
              <div className="pro-subscription__icon">
                <ReactSVG src="/img/sprite/icon-sort.svg" />
              </div>
              <div className="pro-subscription__body">
                <h4 className="pro-subscription__title">Быстрая модерация</h4>
                <p className="pro-subscription__description">
                  С подпиской PRO ваши предложенные публикации быстрее будут
                  проходить модерацию
                </p>
              </div>
            </div>
            <div className="pro-subscription__item">
              <div className="pro-subscription__icon">
                <ReactSVG src="/img/sprite/icon-spa.svg" />
              </div>
              <div className="pro-subscription__body">
                <h4 className="pro-subscription__title">Без рекламы</h4>
                <p className="pro-subscription__description">
                  Отключение рекламных баннеров
                </p>
              </div>
            </div>
            <div className="pro-subscription__item">
              <div className="pro-subscription__icon">
                <ReactSVG src="/img/sprite/icon-spa.svg" />
              </div>
              <div className="pro-subscription__body">
                <h4 className="pro-subscription__title">Без рекламы</h4>
                <p className="pro-subscription__description">
                  Отключение рекламных баннеров
                </p>
              </div>
            </div>
          </div>
          <Link
            href="#"
            className="pro-subscription__btn btn btn--md btn--violet"
          >
            Купить за 100 ₽ в месяц
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pro;
