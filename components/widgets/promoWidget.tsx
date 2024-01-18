import Link from "next/link";
import React from "react";
import { ReactSVG } from "react-svg";

const PromoWidget = () => {
  return (
    <div className="promo-block">
      <div className="promo-block__body">
        <h3 className="promo-block__title">Помогите нам стать лучше</h3>
        <p className="promo-block__description">
          Пока мы изучаем для вас новые тренды, поделитесь впечатленими о
          прочитанном
        </p>
      </div>
      <Link
        href="#"
        className="promo-block__btn btn-circle btn-circle--xs btn-circle--black"
      >
        <ReactSVG src="/img/sprite/icon-arrow-next.svg" />
      </Link>
    </div>
  );
};

export default PromoWidget;
