import React from "react";
import useSWR from "swr";
import { VideoType } from "../../redux/types";
import { fetchLectures } from "../../server/content";
import LectureRecommendationSkeleton from "./lectureRecommendationSkeleton";
import LectureItem from "./lectureItem";

const LectureRecommendations = () => {
  const { data, isLoading } = useSWR<VideoType[]>("lecture-page-recommendations", () =>
    fetchLectures({ limit: 10 }).then((result) => result.datas)
  );

  if (isLoading || !data) {
    return <LectureRecommendationSkeleton />;
  }
  return (
    <div className="layout__right">
      <div className="content-card mobile-wide">
        <div className="content-card__wrapper">
          {data.map((lecture: any) => (
            <LectureItem
              key={lecture.id}
              lecture={lecture}
              otherClassName="content-card__item"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LectureRecommendations;
