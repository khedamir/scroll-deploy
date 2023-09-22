import Link from "next/link";
import React, { FC } from "react";
import { ReactSVG } from "react-svg";

interface WebinarType {
  webinar: {
    title: string;
    author: string;
    date: string;
  };
}

const WebinarCard: FC<WebinarType> = ({ webinar }) => {
  return (
    <div className="webinar-card">
      <div className="webinar-card__wrapper">
        <div className="webinar-card__body">
          <div className="webinar-card__top">
            <div className="webinar-card__inner">
              <span className="webinar-card__subtitle">Вебинар</span>
              <button className="webinar-card__control">
                <ReactSVG src="/img/sprite/icon-notifications.svg" />
              </button>
            </div>
            <span className="webinar-card__date">{webinar.date}</span>
          </div>
          <div className="webinar-card__main">
            <Link href="/webinar/1" className="webinar-card__title">
              {webinar.title}
            </Link>
          </div>
          <div className="webinar-card__bottom">
            <span className="webinar-card__author">{webinar.author}</span>
          </div>
        </div>
        <Link href="/webinar/1" className="webinar-card__img">
          <img src="/img/webinar-card-img.jpg" alt="Image" />
        </Link>
      </div>
    </div>
  );
};

export default WebinarCard;
