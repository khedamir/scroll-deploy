import { Status } from "../types";

export type FetchParams = {
  limit?: number;
  page?: number;
  rubric?: number;
};

export type VacancyType = {
  id: string;
  name: string;
  images: string[];
  date: string;
  poperties: {
    GRAFIC_VACANCIES: string;
    LINK_VACANCIES: string;
    POSITION_VACANCIES: string;
    SUMMA_ZP: string;
    TYPE_VACANCIES: string;
  };
};

export type PaginationType = {
  page: number;
  perPage: number;
  totalCount: string;
  totalPages: number;
};

export type VacanciesData = {
  datas: VacancyType[];
  pagination: PaginationType | null;
};

export interface VacanciesSliceState {
  data: VacanciesData;
  status: Status;
}
