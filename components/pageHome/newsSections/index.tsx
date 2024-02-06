import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { server } from "../../../utils/server";
import { fetchInfo } from "../../../server/content";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";

const List = [
  { id: 1, name: "Льготы", current: 14 },
  { id: 2, name: "Открытие ИП", current: 5 },
  { id: 3, name: "Политика", current: 14 },
  { id: 4, name: "Административные правонарушения", current: 14 },
];

type ItemType = {
  id: string;
  name: string;
  elements: number;
};

const NewsSections = () => {
  const { data, isLoading } = useSWR<ItemType[]>(
    "home-page-popular-rubrics",
    () => fetchInfo({ type: "popularRubrics" })
  );

  return (
    <div className="news-list mobile-wide section-indent">
      <div className="news-list__wrap">
        <div className="news-list__body">
          <span className="news-list__help">Новости</span>
        </div>
        <div className="news-list__wrapper">
          {isLoading ? (
            <div className="rubrics-skeleton">
              <Skeleton height={48} borderRadius={14} />
              <Skeleton
                className="rubrics-skeleton__item"
                height={48}
                borderRadius={14}
                count={4}
              />
            </div>
          ) : (
            data?.map((item) => (
              <Link
                key={item.id}
                href={`rubrics/${item.id}`}
                className="news-list__item"
              >
                <span className="news-list__value">{item.elements}</span>
                <div className="news-list__inner">
                  <span className="news-list__name">{item.name}</span>
                  <ReactSVG
                    className="news-list__icon"
                    src="/img/sprite/icon-arrow-link-up.svg"
                  />
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsSections;
