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

const SectionsBlock = () => {
  const [trends, setTrends] = useState<TrendType[]>([]);
  const [editions, setEditions] = useState<EditionType[]>([]);
  const [lectures, setLectures] = useState<VideoType[]>([]);

  useEffect(() => {
    fetchTrends({ limit: 10 }).then((result) => {
      setTrends(result.datas);
    });
    fetchEditions({ limit: 3 }).then((result) => {
      setEditions(result.datas);
    });
    fetchLectures({ limit: 3 }).then((result) => {
      setLectures(result.datas);
    });
  }, []);

  return (
    <>
      <SectionLayout
        children1={<PopularVideos trends={trends} />}
        children2={<span className="layout__heading">тренды</span>}
      />
      <SectionLayout
        children1={<AudioPodcasts editions={editions} />}
        children2={<span className="layout__heading">аудиоподкасты</span>}
      />
      <SectionLayout
        children1={<LecturesBlock lectures={lectures} />}
        children2={<span className="layout__heading">лекции</span>}
      />
    </>
  );
};

export default SectionsBlock;
