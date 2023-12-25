import Link from "next/link";
import React, { FC, RefObject, useEffect, useRef } from "react";
import { LectureType } from "../../redux/lectures/types";
import { formatDateDifference } from "../../utils/formatDate";
import Image from "next/image";

interface LectureItemProps {
  lecture: LectureType;
  otherClassName?: string;
  isLast?: boolean;
  newLimit?: () => void;
  end?: boolean;
}

const LectureItem: FC<LectureItemProps> = ({
  lecture,
  otherClassName,
  isLast,
  newLimit,
  end,
}) => {
  const cardRef: RefObject<HTMLAnchorElement> = useRef(null);

  useEffect(() => {
    if (isLast && newLimit && !end) {
      if (!cardRef?.current) return;

      const observer = new IntersectionObserver(([entry]) => {
        if (isLast && entry.isIntersecting) {
          newLimit();
          observer.unobserve(entry.target);
        }
      });

      observer.observe(cardRef.current);
    }
  }, [isLast]);

  return (
    <Link
      href={`/lectures/${lecture.id}`}
      className={`category-card category-card--sm ${otherClassName}`}
    >
      <picture className="category-card__img">
        <Image fill priority src={lecture.images.preview} alt="Image" />
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
