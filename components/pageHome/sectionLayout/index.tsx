import React, { FC, ReactNode, RefObject, useEffect, useRef } from "react";

interface SectionProps {
  children1: ReactNode;
  children2: ReactNode;
  rightVisible?: boolean;
  isLast?: boolean;
  newLimit?: () => void;
  end?: boolean;
}

const SectionLayout: FC<SectionProps> = ({
  children1,
  children2,
  rightVisible = true,
  isLast,
  newLimit,
  end,
}) => {
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
    <div className="layout__main-wrapper" ref={cardRef}>
      <div className="layout__center">{children1}</div>
      <div
        className={`layout__right ${rightVisible && "layout__right--visible"}`}
      >
        {children2}
      </div>
    </div>
  );
};

export default SectionLayout;
