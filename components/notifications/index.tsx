import React from "react";
import { ReactSVG } from "react-svg";
import { useModalsContext } from "../../context/ModalsContext";
import { useHandleScroll } from "../../hooks";
import { useSelector } from "react-redux";
import {
  allNotificationsViewed,
  selectNotifications,
} from "../../redux/notifications/slice";
import CommentItem from "./commentItem";
import { NotificationTypesValues } from "../../redux/notifications/types";
import WebinarItem from "./webinarItem";
import SupportItem from "./supportItem";
import SubcriptionItem from "./subcriptionItem";
import { selectUser } from "../../redux/auth/slice";
import { server } from "../../utils/server";
import { useAppDispatch } from "../../redux/store";

const Notification = () => {
  const { notification, setNotification } = useModalsContext();
  useHandleScroll(notification);
  const { data } = useSelector(selectNotifications);
  const { user } = useSelector(selectUser);
  const dispatch = useAppDispatch();

  const fetchNotificationViewed = async () => {
    try {
      const params = {
        userId: user?.id,
        type: "allViewed",
      };

      const result = await server.post("/sw/v1/notifications.php", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      return result.data;
    } catch (error) {
      console.error("Произошла ошибка", error);
    }
  };

  const addViewed = () => {
    fetchNotificationViewed().then(() => {
      dispatch(allNotificationsViewed());
    });
  };

  return (
    <div
      onClick={() => setNotification(false)}
      className={`notifications ${notification && "is--active"}`}
      id="notifications"
    >
      <div onClick={(e) => e.stopPropagation()} className="notifications__wrap">
        <div className="notifications__top">
          <h3 className="notifications__heading">Уведомления</h3>
          <button
            onClick={() => setNotification(false)}
            className="notifications__close"
          >
            <ReactSVG src="/img/sprite/icon-close-thin.svg" />
          </button>
        </div>
        <div className="notifications__main scroll-x" data-simplebar>
          {data?.length ? (
            <div className="notifications__scroll">
              <span onClick={addViewed} className="notifications__link">
                Пометить все как прочитанные
              </span>
              <div className="notifications__wrapper">
                {data?.map((notification) =>
                  notification.type === NotificationTypesValues.webinar ? (
                    <WebinarItem
                      key={notification.id}
                      notification={notification}
                      setNotification={setNotification}
                    />
                  ) : notification.type === NotificationTypesValues.support ? (
                    <SupportItem
                      key={notification.id}
                      notification={notification}
                    />
                  ) : notification.type ===
                    NotificationTypesValues.subscription ? (
                    <SubcriptionItem
                      key={notification.id}
                      notification={notification}
                    />
                  ) : notification.type === NotificationTypesValues.comment ? (
                    <CommentItem
                      key={notification.id}
                      notification={notification}
                      setNotification={setNotification}
                    />
                  ) : (
                    ""
                  )
                )}
              </div>
            </div>
          ) : (
            <p>У вас пока нет новых уведомлений.</p>
          )}
        </div>
      </div>
      <div className="notifications__overlay"></div>
    </div>
  );
};

export default Notification;
