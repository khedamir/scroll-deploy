import { Status } from "../types";

export type TokenType = {
  Authorization: string;
  user_id: string;
};

export type LoginData = {
  login: string;
  password: string;
};

export type UserDataParams = {
  userId: string;
};

export type UserData = {
  id: string;
  login: string;
  active: string;
  name: string;
  last_name: string;
  email: string;
  date_register: string;
  phone: string;
  city: string;
  gender: string;
  photo: string;
  avatar_color: string;
};

export interface AuthSliceState {
  user: UserData | null;
  status: Status;
}
