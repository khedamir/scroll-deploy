import React from "react";
import Skeleton from "react-loading-skeleton";

const MoreNewsSkeleton = () => {
  return (
    <div className="more-topic">
      <div className="container">
        <div className="more-topic__top">
          <h2 className="more-topic__heading">Еще по теме</h2>
        </div>
        <div className="more-topic__slider">
          <div className="more-topic__slider-wrapper">
            <div className="swiper">
              <div className="swiper-wrapper">
                {[...new Array(10)].map((_, index) => (
                  <div key={index} className="swiper-slide more-topic-skeleton">
                    <article className="more-topic__item">
                      <div className="more-topic__img-wrap">
                        <Skeleton
                          className="more-topic-skeleton__img"
                          height={300}
                          count={1}
                          baseColor="#fff"
                          borderRadius={15}
                        />
                      </div>
                      <div className="more-topic__body">
                        <Skeleton
                          width={200}
                          height={80}
                          count={1}
                          baseColor="#fff"
                          borderRadius={15}
                        />
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreNewsSkeleton;
