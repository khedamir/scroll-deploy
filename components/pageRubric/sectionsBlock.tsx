import React, { useEffect, useState } from "react";
import SectionLayout from "../pageHome/sectionLayout";
import PopularVideos from "../pageHome/popularVideos";
import AudioPodcasts from "../pageHome/audioPodcasts";
import LecturesBlock from "../pageHome/lecturesBlock";
import { EditionType, TrendType, VideoType } from "../../redux/types";
import {
  fetchEditions,
  fetchLectures,
  fetchTrends,
} from "../../server/content";
import useSWR from "swr";

const SectionsBlock = () => {
  const { data: trends, isLoading: trendsIsLoading } = useSWR<TrendType[]>(
    "rubric-page-trends",
    () => fetchTrends({ limit: 10 }).then((result) => result.datas)
  );

  const { data: editions, isLoading: editionsIsLoading } = useSWR<
    EditionType[]
  >("rubric-page-editions", () =>
    fetchEditions({ limit: 3 }).then((result) => result.datas)
  );

  const { data: lectures, isLoading: lecturesIsLoading } = useSWR<VideoType[]>(
    "rubric-page-lectures",
    () => fetchLectures({ limit: 3 }).then((result) => result.datas)
  );

  return (
    <>
      <SectionLayout
        children1={
          <PopularVideos
            trends={trends as TrendType[]}
            isLoading={trendsIsLoading}
          />
        }
        children2={<span className="layout__heading">тренды</span>}
      />
      <SectionLayout
        children1={
          <AudioPodcasts
            editions={editions as EditionType[]}
            isLoading={editionsIsLoading}
          />
        }
        children2={<span className="layout__heading">аудиоподкасты</span>}
      />
      <SectionLayout
        children1={
          <LecturesBlock
            lectures={lectures as VideoType[]}
            isLoading={lecturesIsLoading}
          />
        }
        children2={<span className="layout__heading">лекции</span>}
      />
    </>
  );
};

export default SectionsBlock;
