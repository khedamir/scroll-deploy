import Link from "next/link";
import React from "react";
import { ReactSVG } from "react-svg";

const List = [
  { id: 1, name: "Льготы", current: 14 },
  { id: 2, name: "Открытие ИП", current: 5 },
  { id: 3, name: "Политика", current: 14 },
  { id: 4, name: "Административные правонарушения", current: 14 },
];

const NewsSections = () => {
  return (
    <div className="news-list mobile-wide section-indent">
      <div className="news-list__wrap">
        <div className="news-list__body">
          <span className="news-list__help">Новости</span>
        </div>
        <div className="news-list__wrapper">
          {List.map((item) => (
            <Link key={item.id} href="#" className="news-list__item">
              <span className="news-list__value">{item.current}</span>
              <div className="news-list__inner">
                <span className="news-list__name">{item.name}</span>
                <ReactSVG className="news-list__icon" src="img/sprite/icon-arrow-link-up.svg" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSections;
