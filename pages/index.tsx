import React from "react";
import { NextPage } from "next";
import Footer from "../components/footer";
import NewsList from "../components/mainPageComponents/newsList";
import PopularVideos from "../components/mainPageComponents/popularVideos";
import AudioPodcasts from "../components/mainPageComponents/audioPodcasts";
import VideoWidget from "../components/widgets/video";
import ContentWidgets from "../components/widgets/content";
import NewsCard from "../components/mainPageComponents/newsCard";
import ClubBlock from "../components/mainPageComponents/clubBlock";
import SectionLayout from "../components/mainPageComponents/sectionLayout";
import FirstBlock from "../components/mainPageComponents/firstBlock";
import Sidebar from "../components/sidebar/sidebar";
import LecturesBlock from "../components/mainPageComponents/lecturesBlock";

const Index: NextPage = () => {
  return (
    <div className="layout">
      <div className="container">
        <div className="layout__wrap layout__wrap--padding">
          <div className="layout__left">
            <Sidebar />
            <Footer />
          </div>
          <div className="layout__main">
            <SectionLayout
              children1={<FirstBlock />}
              children2={<VideoWidget />}
              rightVisible={false}
            />
            <SectionLayout
              children1={<PopularVideos />}
              children2={<span className="layout__heading">тренды</span>}
            />
            <SectionLayout
              children1={<AudioPodcasts />}
              children2={<span className="layout__heading">аудиоподкасты</span>}
            />
            <SectionLayout
              children1={
                <>
                  <NewsCard />
                  <NewsList name="news" limit={3} largeNewIndex={2} />
                </>
              }
              children2={<ContentWidgets />}
            />
            <SectionLayout
              children1={<LecturesBlock />}
              children2={<span className="layout__heading">лекции</span>}
            />
            <SectionLayout
              children1={<ClubBlock />}
              children2={<span className="layout__heading">клуб юристов</span>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
