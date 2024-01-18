import Image from "next/image";
import React, { FC } from "react";
import { NotificationsType } from "../../redux/notifications/types";
import { format } from "util";
import { formatDateDifference } from "../../utils/formatDate";
import { ReactSVG } from "react-svg";

interface SupportItemProps {
  notification: NotificationsType;
}

const SupportItem: FC<SupportItemProps> = ({ notification }) => {
  return (
    <div className="notifications__item notifications__item--divider">
      <article className="notifications-card notifications__card">
        <div className="notifications-card__wrapper">
          <div className="notifications-card__img support-img">
            <ReactSVG
              width={34}
              height={34}
              src={'/img/sprite/icon-support.svg'}
            />
          </div>
          <div className="notifications-card__body">
            <span className="notifications-card__description">
              {notification.title}
            </span>
            <span className="notifications-card__subtitle">
              {notification.text}
            </span>
            <span className="notifications-card__time">
              {formatDateDifference(notification.date)}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SupportItem;
