import React from "react";
import PodcastCard from ".";
import useSWR from "swr";
import { EditionType } from "../../redux/types";
import { server } from "../../utils/server";
import LectureRecommendationSkeleton from "../pageLecture/lectureRecommendationSkeleton";

const fetchPodcasts = async () => {
  const result = await server.get(
    `/sw/v1/podcasts/?iblockid=34&width=400&height=300`,
    {
      params: { limit: 5 },
    }
  );

  return result.data.datas;
};

const PodcastRecommendation = () => {
  const { data, isLoading } = useSWR<EditionType[]>(
    "home-page-widget-video",
    fetchPodcasts
  );

  if (isLoading || !data) {
    return <LectureRecommendationSkeleton />;
  }

  return (
    <div className="layout__right">
      <div className="content-card">
        <div className="content-card__wrapper">
          {data?.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PodcastRecommendation;
