import React, { FC } from "react";
import { NewType } from "../../redux/types";
import MoreGrupItem from "./moreGrupItem";

interface MoreNewsGrupProps {
  items: NewType[];
  rubricId: string | undefined;
}

const MoreNewsGrup: FC<MoreNewsGrupProps> = ({ items, rubricId }) => {
  return (
    <div className="swiper-slide">
      <article className="more-topic__item">
        <div className="more-topic__tidings">
          {items.map((item) => (
            <MoreGrupItem key={item.id} item={item} rubricId={rubricId} />
          ))}
        </div>
      </article>
    </div>
  );
};

export default MoreNewsGrup;
