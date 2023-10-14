import Link from "next/link";
import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import { WebinarType } from "../../redux/webinars/types";

interface WebinarItemProps {
  webinar: {
    title: string;
    heading: string;
    author: string;
  };
}

const WebinerItem: FC<WebinarItemProps> = ({ webinar }) => {
  return (
    <div className="webinar-grid__wrapper webinar-grid__wrapper--indent">
      <div className="webinar-grid__left">
        <div className="meetings-card webinar-grid__item">
          <div className="meetings-card__wrapper">
            <div className="meetings-card__body">
              <div className="meetings-card__top">
                <span className="meetings-card__subtitle">Вебинар</span>
                <button className="meetings-card__control">
                  <ReactSVG src="/img/sprite/icon-notifications.svg" />
                </button>
              </div>
              <div className="meetings-card__bottom meetings-card__bottom--flex">
                <div className="meetings-card__images">
                  <Link href="#" className="meetings-card__preview">
                    <img src="/img/meetings-card-01.jpg" alt="Image" />
                  </Link>
                  <Link href="#" className="meetings-card__preview">
                    <img src="/img/meetings-card-02.jpg" alt="Image" />
                  </Link>
                </div>
                <Link href="/webinar/1" className="meetings-card__title">
                  {webinar.title}
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
                  <ReactSVG src="/img/sprite/icon-play.svg" />
                </button>
                <button className="meetings-card__control">
                  <ReactSVG src="/img/sprite/icon-notifications.svg" />
                </button>
              </div>
              <div className="meetings-card__bottom">
                <Link href="/webinar/1" className="meetings-card__heading">
                  {webinar.heading}
                </Link>
                <span className="meetings-card__author">{webinar.author}</span>
              </div>
            </div>
            <Link href="/webinar/1" className="meetings-card__img">
              <img src="/img/webinar-card-img-02.jpg" alt="Image" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinerItem;
