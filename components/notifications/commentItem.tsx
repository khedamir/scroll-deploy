import Image from "next/image";
import React, { FC } from "react";
import { NotificationsType } from "../../redux/notifications/types";
import { formatDateDifference } from "../../utils/formatDate";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/slice";
import Link from "next/link";
import { server } from "../../utils/server";
import { useRouter } from "next/router";
import { useAppDispatch } from "../../redux/store";
import { addNotificationViewed } from "../../redux/notifications/slice";

interface CommentItemProps {
  notification: NotificationsType;
  setNotification: (v: boolean) => void;
}

const CommentItem: FC<CommentItemProps> = ({
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
      router.push(`/${notification.iblock_code}/${notification.element_id}`);
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
      <article className="notifications-card notifications__card">
        <div className="notifications-card__wrapper">
          <picture className="notifications-card__img">
            {notification.photo && (
              <Image
                width={34}
                height={34}
                src={notification.photo}
                alt="Image"
              />
            )}
          </picture>
          <div className="notifications-card__body">
            <span
              onClick={() => addViewed()}
              className="notifications-card__description"
            >
              {notification.title}
            </span>
            <span className="notifications-card__text">
              <span>@{`${user?.name} ${user?.last_name} `}</span>
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

export default CommentItem;
