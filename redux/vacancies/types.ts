import { PaginationType, Status } from "../types";

export type FetchParams = {
  limit?: number;
  page?: number;
  rubric?: number;
};

export type VacancyType = {
  id: string;
  name: string;
  date: string;
  content: string;
  poperties: {
    POSITION_VACANCIES: string;
    TYPE_VACANCIES: string;
    GRAFIC_VACANCIES: string;
    SUMMA_ZP: string;
    LINK_VACANCIES: string;
  };
};

export type VacanciesData = {
  datas: VacancyType[];
  pagination: PaginationType | null;
};

export interface VacanciesSliceState {
  data: VacanciesData;
  status: Status;
}
