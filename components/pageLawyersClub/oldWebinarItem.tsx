import Link from "next/link";
import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import Image from "next/image";
import { WebinarType } from "../../redux/types";

interface WebinarItemProps {
  webinars: WebinarType[];
}

const OldWebinerItem: FC<WebinarItemProps> = ({ webinars }) => {
  return (
    <div className="webinar-grid__wrapper webinar-grid__wrapper--indent">
      <div className="webinar-grid__left">
        <div className="meetings-card webinar-grid__item">
          <div className="meetings-card__wrapper">
            <div className="meetings-card__body">
              <div className="meetings-card__top">
                <span className="meetings-card__subtitle">Вебинар</span>
              </div>
              <div className="meetings-card__bottom meetings-card__bottom--flex">
                <div className="meetings-card__images">
                  <Link
                    href={`/webinar/${webinars[0].id}?webinar=old`}
                    className="meetings-card__preview"
                  >
                    <Image
                      fill
                      loading="lazy"
                      src={`${webinars[0].images.preview}`}
                      alt="Image"
                    />
                  </Link>
                  <Link
                    href={`/webinar/${webinars[0].id}?webinar=old`}
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
                  href={`/webinar/${webinars[0].id}?webinar=old`}
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
                <Link
                  href={`/webinar/${webinars[1].id}?webinar=old`}
                  className="meetings-card__play"
                >
                  <ReactSVG src="/img/sprite/icon-play.svg" />
                </Link>
              </div>
              <div className="meetings-card__bottom">
                <Link
                  href={`/webinar/${webinars[1].id}?webinar=old`}
                  className="meetings-card__heading"
                >
                  {webinars[1].name}
                </Link>
                <span className="meetings-card__author">
                  {webinars[1].poperties.FIO_SPIKERS[0]}
                </span>
              </div>
            </div>
            <Link
              href={`/webinar/${webinars[1].id}?webinar=old`}
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

export default OldWebinerItem;
