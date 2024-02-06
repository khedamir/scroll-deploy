import React from "react";
import Skeleton from "react-loading-skeleton";

const OldWebinarsSkeleton = () => {
  return (
    <div className="webinar-grid section-indent section-indent--lg">
      <h3 className="webinar-grid__head">Прошедшие встречи</h3>
      <div className="webinar-grid__wrapper webinar-grid__wrapper--indent">
        <div className="webinar-grid__left">
          <div className="meetings-card webinar-grid__item">
            <div className="meetings-card__wrapper">
              <div className="meetings-card__body">
                <div className="meetings-card__bottom meetings-card__bottom--flex">
                  <div className="meetings-card__images"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="webinar-grid__right">
          <div className="meetings-card webinar-grid__item">
            <div className="meetings-card__wrapper">
              <Skeleton height={302} count={1} />
            </div>
          </div>
        </div>
      </div>
      <div className="webinar-grid__wrapper webinar-grid__wrapper--indent">
        <div className="webinar-grid__left">
          <div className="meetings-card webinar-grid__item">
            <div className="meetings-card__wrapper">
              <div className="meetings-card__body">
                <div className="meetings-card__bottom meetings-card__bottom--flex">
                  <div className="meetings-card__images"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="webinar-grid__right">
          <div className="meetings-card webinar-grid__item">
            <div className="meetings-card__wrapper">
              <Skeleton height={302} count={1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldWebinarsSkeleton;
