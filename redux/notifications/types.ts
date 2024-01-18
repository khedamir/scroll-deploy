import { Status } from "../types";

export type FetchParams = {
  userId: string;
  type: string;
};

export enum NotificationTypesValues {
  webinar = "Вебинары",
  support = "Ответ от ТП",
  subscription = "Подписка",
  comment = "Комменты",
}

export type NotificationsType = {
  id: string;
  title: string;
  text: string;
  type: NotificationTypesValues;
  date: string;
  viewed: "Y" | "N";
  photo: string;

  element_id?: string;
  iblock_code?: string;
  webinar_date?: string;
};

export interface NotificationsSliceState {
  data: NotificationsType[];
  status: Status;
}
