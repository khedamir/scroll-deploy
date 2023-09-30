import { Status } from "../types";

export type RubricType = {
  CODE: string;
  ID: string;
  NAME: string;
  THEME_ICON_PATH: string;
  SHOW_IN_MAIN_MENU: boolean;
};

export interface RubricsSliceState {
  rubrics: RubricType[];
  status: Status;
}
