import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { server } from "../../../utils/server";
import { fetchInfo } from "../../../server/content";

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
  const [items, setItems] = useState<ItemType[]>([]);
  useEffect(() => {
    fetchInfo({ type: "popularRubrics" }).then((result) => {
      setItems(result);
    });
  }, []);
  return (
    <div className="news-list mobile-wide section-indent">
      <div className="news-list__wrap">
        <div className="news-list__body">
          <span className="news-list__help">Новости</span>
        </div>
        <div className="news-list__wrapper">
          {items.map((item) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSections;
