import React from "react";
import Skeleton from "react-loading-skeleton";

const AudioPodcastSkeleton = () => {
  return (
    <div className="content-card">
      <div className="content-card__wrap">
        <div className="content-card__wrapper content-card__wrapper--flex content-card__wrapper--scroll">
          {[...new Array(3)].map((_, index) => (
            <div key={index} className="content-card__item">
              <picture className="content-card__img">
                <Skeleton count={1} height={200} />
              </picture>
              <div className="content-card__body">
                <h3 className="content-card__title">
                  <Skeleton width={140} count={1} height={20} />
                </h3>
                <span className="content-card__help">
                  <Skeleton width={90} count={1} height={20} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudioPodcastSkeleton;
