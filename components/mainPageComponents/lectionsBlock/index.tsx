import Link from "next/link";
import React from "react";

const LectionsBlock = () => {
  return (
    <div className="content-card">
      <div className="content-card__wrap">
        <div className="content-card__wrapper content-card__wrapper--flex">
          <Link href="#" className="content-card__item">
            <picture className="content-card__img">
              <img src="img/lectures-card-01.jpg" alt="Image" />
            </picture>
            <div className="content-card__body">
              <h3 className="content-card__title">
                Люди не готовы к ошибкам нейросетей
              </h3>
              <span className="content-card__help">Александр Македонский</span>
            </div>
          </Link>
          <Link href="#" className="content-card__item">
            <picture className="content-card__img">
              <img src="img/lectures-card-02.jpg" alt="Image" />
            </picture>
            <div className="content-card__body">
              <h3 className="content-card__title">
                Люди не готовы к ошибкам нейросетей
              </h3>
              <span className="content-card__help">Александр Македонский</span>
            </div>
          </Link>
          <Link href="#" className="content-card__item">
            <picture className="content-card__img">
              <img src="img/lectures-card-03.jpg" alt="Image" />
            </picture>
            <div className="content-card__body">
              <h3 className="content-card__title">
                Люди не готовы к ошибкам нейросетей
              </h3>
              <span className="content-card__help">Александр Македонский</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LectionsBlock;
