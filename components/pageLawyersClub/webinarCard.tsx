import Link from "next/link";
import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import { WebinarType } from "../../redux/webinars/types";

interface WebinarProps {
  webinar: WebinarType;
}

const WebinarCard: FC<WebinarProps> = ({ webinar }) => {
  return (
    <div className="webinar-card">
      <div className="webinar-card__wrapper">
        <div className="webinar-card__body">
          <div className="webinar-card__top">
            <div className="webinar-card__inner">
              <span className="webinar-card__subtitle">Вебинар</span>
              <button className="c-notification webinar-card__notification">
                <ReactSVG
                  className="c-notification__icon c-notification__icon--default"
                  src="/img/sprite/icon-notifications.svg"
                />
                <ReactSVG
                  className="c-notification__icon c-notification__icon--filled"
                  src="/img/sprite/icon-notifications-filled.svg"
                />
              </button>
            </div>
            <span className="webinar-card__date">
              {webinar.poperties.DATE_WEBINAR?.slice(0, -3)}
            </span>
          </div>
          <div className="webinar-card__main">
            <Link
              href={`/webinar/${webinar.id}`}
              className="webinar-card__title"
            >
              {webinar.name}
            </Link>
          </div>
          <div className="webinar-card__bottom">
            <span className="webinar-card__author">
              {webinar.poperties.FIO_SPIKERS &&
                webinar.poperties.FIO_SPIKERS[0]}
            </span>
          </div>
        </div>
        <Link href={`/webinar/${webinar.id}`} className="webinar-card__img">
          <img src={`${webinar.images.preview}`} alt="Image" />
        </Link>
      </div>
    </div>
  );
};

export default WebinarCard;
