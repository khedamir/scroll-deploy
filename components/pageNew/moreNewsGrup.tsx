import React, { FC } from "react";
import { NewType } from "../../redux/news/types";
import MoreGrupItem from "./moreGrupItem";

interface MoreNewsGrupProps {
  items: NewType[];
}

const MoreNewsGrup: FC<MoreNewsGrupProps> = ({ items }) => {
  return (
    <div className="swiper-slide">
      <article className="more-topic__item">
        <div className="more-topic__tidings">
          {items.map((item) => (
            <MoreGrupItem key={item.id} item={item} />
          ))}
        </div>
      </article>
    </div>
  );
};

export default MoreNewsGrup;
