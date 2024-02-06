import React from "react";
import Skeleton from "react-loading-skeleton";

const LectureRecommendationSkeleton = () => {
  return (
    <div className="layout__right lecture-page-recommendations__skeleton">
      <div className="content-card mobile-wide">
        <div className="content-card__wrapper">
          {[...new Array(5)].map((_, index) => (
            <div
              key={index}
              className="category-card category-card--sm recommendations-item"
            >
              <Skeleton
                className="recommendations-img"
                count={1}
                height={180}
              />
              <div className="category-card__body">
                <Skeleton count={1} height={20} width={160} />
                <Skeleton
                  className="recommendations-data"
                  count={1}
                  height={20}
                  width={90}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LectureRecommendationSkeleton;
