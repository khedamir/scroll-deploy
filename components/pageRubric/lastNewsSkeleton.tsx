import React from "react";
import Skeleton from "react-loading-skeleton";

const LastNewsSkeleton = () => {
  return (
    <div className="page-list rubric-page-last-news__skeleton">
      <div className="page-list__wrapper">
        {[...new Array(5)].map((_, index) => (
          <div key={index} className="page-list__item">
            <span className="page-list__item-img">
              <Skeleton width={40} height={40} count={1} borderRadius={50} />
            </span>
            <div className="skeleton-text">
              <Skeleton
                className="last-news__skeleton--text"
                height={25}
                count={1}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastNewsSkeleton;
