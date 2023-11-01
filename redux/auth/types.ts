import { Status } from "../types";

export type TokenType = {
  Authorization: string;
  user_id: string;
};

export type LoginData = {
  login: string;
  password: string;
};

type FieldType = {
  VALUE: string;
};

export type UserData = {
  main: {
    VALUES: {
      EMAIL: FieldType;
      LAST_NAME: FieldType;
      NAME: FieldType;
      PERSONAL_PHOTO: FieldType;
    };
  };
  personal: {
    VALUES: {
      PERSONAL_CITY: FieldType;
      PERSONAL_PHONE: FieldType;
    };
  };
};

export interface AuthSliceState {
  id: string;
  user: UserData | null;
  status: Status;
}
