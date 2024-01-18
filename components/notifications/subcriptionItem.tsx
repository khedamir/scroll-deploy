import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import { NotificationsType } from "../../redux/notifications/types";
import Link from "next/link";

interface SubcriptionItemProps {
  notification: NotificationsType;
}

const SubcriptionItem: FC<SubcriptionItemProps> = ({ notification }) => {
  return (
    <div className="notifications__item">
      <div className="notifications-subscribe">
        <div className="notifications-subscribe__wrapper">
          <div className="notifications-subscribe__body">
            <p className="notifications-subscribe__description">
              {notification.text}
            </p>
          </div>
          <Link
            href="/lk"
            className="notifications-subscribe__btn btn btn--md btn--white"
          >
            <span>Продлить</span>
            <ReactSVG src="/img/sprite/icon-arrow-next.svg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubcriptionItem;
