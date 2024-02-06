import React from "react";
import Skeleton from "react-loading-skeleton";

const PopularVideosSkeleton = () => {
  return (
    <div className="popular-videos popular-videos__skeleton">
      <div className="popular-videos__wrapper">
        <div className="popular-videos__videos">
          <div className="video-card popular-videos__videos-item">
            <Skeleton count={1} />
          </div>
          <div className="video-card popular-videos__videos-item">
            <Skeleton count={1} />
          </div>
          <div className="video-card popular-videos__videos-item">
            <Skeleton count={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularVideosSkeleton;
