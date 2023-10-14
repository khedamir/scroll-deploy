import Link from "next/link";
import React, { FC } from "react";
import { LectureType } from "../../redux/lectures/types";
import { baseURL } from "../../utils/server";
import { formatDateDifference } from "../../utils/formatDate";

interface LectureItemProps {
  lecture: LectureType;
  otherClassName?: string;
}

const LectureItem: FC<LectureItemProps> = ({ lecture, otherClassName }) => {
  return (
    <Link
      href={`/lectures/${lecture.id}`}
      className={`category-card category-card--sm ${otherClassName}`}
    >
      <picture className="category-card__img">
        <img src={`${baseURL}${lecture?.images?.[1]}`} alt="Image" />
      </picture>
      <div className="category-card__body">
        <span className="category-card__name">{lecture.name}</span>
        <div className="category-card__inner">
          <span className="category-card__author">
            {lecture.poperties?.PUB_AUTOR}
          </span>
          <span className="category-card__help">
            {formatDateDifference(lecture.date)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default LectureItem;
