import React from "react";
import Skeleton from "react-loading-skeleton";

const SectionListSkeleton = () => {
  return (
    <div className="faq__wrapper">
      {[...new Array(6)].map((_, index) => (
        <div key={index} className="faq__item">
          <Skeleton height={250} count={1} />
        </div>
      ))}
    </div>
  );
};

export default SectionListSkeleton;
