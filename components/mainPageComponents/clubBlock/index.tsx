import Link from "next/link";
import React from "react";
import { ReactSVG } from "react-svg";

const ClubBlock = () => {
  return (
    <div className="webinar-grid">
      <div className="webinar-grid__wrapper">
        <div className="webinar-grid__left">
          <div className="meetings-card webinar-grid__item">
            <div className="meetings-card__wrapper">
              <div className="meetings-card__body">
                <div className="meetings-card__top">
                  <span className="meetings-card__subtitle">Вебинар</span>
                  <button className="meetings-card__control">
                    {/* <svg>
                      <use href="img/sprite.svg#icon-notifications"></use>
                    </svg> */}
                    <ReactSVG src="img/sprite/icon-notifications.svg" />
                  </button>
                </div>
                <div className="meetings-card__bottom meetings-card__bottom--flex">
                  <div className="meetings-card__images">
                    <Link href="#" className="meetings-card__preview">
                      <img src="img/meetings-card-01.jpg" alt="Image" />
                    </Link>
                    <Link href="#" className="meetings-card__preview">
                      <img src="img/meetings-card-02.jpg" alt="Image" />
                    </Link>
                  </div>
                  <Link href="webinar.html" className="meetings-card__title">
                    Мосбиржа переведет акции и облигации на режим торгов T+1
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="webinar-grid__right">
          <div className="meetings-card webinar-grid__item">
            <div className="meetings-card__wrapper">
              <div className="meetings-card__body">
                <div className="meetings-card__top">
                  <button className="meetings-card__play">
                    {/* <svg>
                      <use href="img/sprite.svg#icon-play"></use>
                    </svg> */}
                    <ReactSVG src="img/sprite/icon-play.svg" />
                  </button>
                  <button className="meetings-card__control">
                    {/* <svg>
                      <use href="img/sprite.svg#icon-notifications"></use>
                    </svg> */}
                    <ReactSVG src="img/sprite/icon-notifications.svg" />
                  </button>
                </div>
                <div className="meetings-card__bottom">
                  <Link href="webinar.html" className="meetings-card__heading">
                    Что будет с рублем в&nbsp;этом&nbsp;году
                  </Link>
                  <span className="meetings-card__author">Юрий Алексеев</span>
                </div>
              </div>
              <Link href="webinar.html" className="meetings-card__img">
                <img src="img/webinar-card-img.jpg" alt="Image" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubBlock;
