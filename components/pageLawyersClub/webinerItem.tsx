import Link from "next/link";
import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import Image from "next/image";
import { WebinarType } from "../../redux/types";

interface WebinarItemProps {
  webinars: WebinarType[];
}

const WebinerItem: FC<WebinarItemProps> = ({ webinars }) => {
  return (
    <div className="webinar-grid__wrapper webinar-grid__wrapper--indent">
      <div className="webinar-grid__left">
        <div className="meetings-card webinar-grid__item">
          <div className="meetings-card__wrapper">
            <div className="meetings-card__body">
              <div className="meetings-card__top">
                <span className="meetings-card__subtitle">Вебинар</span>
                <button className="c-notification meetings-card__notification">
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
              <div className="meetings-card__bottom meetings-card__bottom--flex">
                <div className="meetings-card__images">
                  <Link
                    href={`/webinar/${webinars[0].id}`}
                    className="meetings-card__preview"
                  >
                    <Image
                      fill
                      loading="lazy"
                      src={`${webinars[0].images?.preview}`}
                      alt="Image"
                    />
                  </Link>
                  <Link
                    href={`/webinar/${webinars[0].id}`}
                    className="meetings-card__preview"
                  >
                    <Image
                      fill
                      loading="lazy"
                      src="/img/meetings-card-02.jpg"
                      alt="Image"
                    />
                  </Link>
                </div>
                <Link
                  href={`/webinar/${webinars[0].id}`}
                  className="meetings-card__title"
                >
                  {webinars[0].name}
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
                <button className="c-notification meetings-card__notification">
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
              <div className="meetings-card__bottom">
                <Link
                  href={`/webinar/${webinars[1].id}`}
                  className="meetings-card__heading"
                >
                  {webinars[1].name}
                </Link>
                <span className="meetings-card__author">
                  {webinars[1]?.poperties.FIO_SPIKERS?.[0]}
                </span>
              </div>
            </div>
            <Link
              href={`/webinar/${webinars[1].id}`}
              className="meetings-card__img"
            >
              <Image
                fill
                loading="lazy"
                src={`${webinars[1].images.preview}`}
                alt="Image"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinerItem;
