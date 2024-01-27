import React, { FC, RefObject, useEffect, useRef } from "react";
import NewsCard from "../newsCard";
import NewsList from "../newsList";
import { NewType } from "../../../redux/types";
import { useSelector } from "react-redux";
import { selectMainPage } from "../../../redux/main_page/slice";

interface LastSectionCardProps {
  items: NewType[];
  isLast?: boolean;
  newLimit?: () => void;
  end?: boolean;
}

const LastSectionCard: FC<LastSectionCardProps> = ({
  items,
  isLast,
  newLimit,
  end,
}) => {
  const { rubrics } = useSelector(selectMainPage);
  const cardRef: RefObject<HTMLDivElement> = useRef(null);

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
    <div style={{ marginTop: "24px" }} ref={cardRef}>
      {items.length === 5 ? (
        <NewsCard news={items} rubrics={rubrics} />
      ) : (
        items.length === 3 && <NewsList news={items} largeNewIndex={2} />
      )}
    </div>
  );
};

export default LastSectionCard;
