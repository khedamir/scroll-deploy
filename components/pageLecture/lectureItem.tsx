import Link from "next/link";
import React, { FC } from "react";

interface LectureItemProps {
  lecture: {
    id: number;
    name: string;
    author: string;
    date: string;
  };
  otherClassName?: string;
}

const LectureItem: FC<LectureItemProps> = ({ lecture, otherClassName }) => {
  return (
    <Link
      href={`/lectures/${lecture.id}`}
      className={`category-card category-card--sm ${otherClassName}`}
    >
      <picture className="category-card__img">
        <img src="/img/lectures-01.jpg" alt="Image" />
      </picture>
      <div className="category-card__body">
        <span className="category-card__name">{lecture.name}</span>
        <div className="category-card__inner">
          <span className="category-card__author">{lecture.author}</span>
          <span className="category-card__help">{lecture.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default LectureItem;
