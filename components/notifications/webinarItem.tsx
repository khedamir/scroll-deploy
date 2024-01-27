import Image from "next/image";
import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import { NotificationsType } from "../../redux/notifications/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppDispatch } from "../../redux/store";
import { selectUser } from "../../redux/auth/slice";
import { useSelector } from "react-redux";
import { server } from "../../utils/server";
import { addNotificationViewed } from "../../redux/notifications/slice";

interface WebinarItemProps {
  notification: NotificationsType;
  setNotification: (v: boolean) => void;
}

const WebinarItem: FC<WebinarItemProps> = ({
  notification,
  setNotification,
}) => {
  const { user } = useSelector(selectUser);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const addViewed = async () => {
    try {
      const params = {
        userId: user?.id,
        type: "addViewed",
        notificationId: notification.id,
      };

      await server.post("/sw/v1/notifications.php", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      router.push(`/webinar/${notification.element_id}`);
      dispatch(addNotificationViewed({ id: notification.id }));
      setNotification(false);
    } catch (error) {
      console.error("Произошла ошибка", error);
    }
  };
  return (
    <div
      className={`notifications__item notifications__item--divider ${
        notification.viewed === "Y" && "notifications__item--viewed"
      }`}
    >
      <div className="notifications-webinar">
        <div className="notifications-webinar__wrapper">
          <div className="notifications-webinar__main">
            <div className="notifications-webinar__inner">
              <picture className="notifications-webinar__img">
                {notification.photo && (
                  <Image
                    width={36}
                    height={36}
                    src={notification.photo}
                    alt="Image"
                  />
                )}
              </picture>
              <div className="notifications-webinar__body">
                <p className="notifications-webinar__description">
                  {notification.title} {notification.text}
                </p>
              </div>
            </div>
            <span
              onClick={addViewed}
              className="notifications-webinar__btn btn btn--md btn--white-blue"
            >
              <span>Перейти</span>
              <ReactSVG src="/img/sprite/icon-arrow-next.svg" />
            </span>
          </div>
          <div className="notifications-webinar__status">
            <span className="notifications-webinar__date">Сегодня</span>
            <span className="notifications-webinar__time">
              {notification.webinar_date?.slice(11, 16)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarItem;
