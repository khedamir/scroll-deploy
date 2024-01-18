import React from "react";
import { NextPage } from "next";
import Footer from "../components/footer";
import VideoWidget from "../components/widgets/videoWidget";
import Sidebar from "../components/sidebar/sidebar";
import SectionLayout from "../components/pageHome/sectionLayout";
import ClubBlock from "../components/pageHome/clubBlock";
import FirstBlock from "../components/pageHome/firstBlock";
import LecturesBlock from "../components/pageHome/lecturesBlock";
import NewsCard from "../components/pageHome/newsCard";
import PopularVideos from "../components/pageHome/popularVideos";
import AudioPodcasts from "../components/pageHome/audioPodcasts";
import NewsList from "../components/pageHome/newsList";
import ContentWidget from "../components/widgets/contentWidget";
import { wrapper } from "../redux/store";
import { useSelector } from "react-redux";
import Link from "next/link";
import {
  fetchEditions,
  fetchLectures,
  fetchNews,
  fetchRubrics,
  fetchTrends,
  fetchWebinars,
} from "../redux/main_page/asyncAction";
import { selectMainPage } from "../redux/main_page/slice";
import PromoWidget from "../components/widgets/promoWidget";
import QuoteCards from "../components/pageHome/quoteCards";

const Index: NextPage = () => {
  const { rubrics, news, trends, editions, lectures, webinars } =
    useSelector(selectMainPage);

  return (
    <div className="layout">
      <div className="container">
        <div className="layout__wrap layout__wrap--padding">
          <div className="layout__left">
            <Sidebar rubrics={rubrics} />
            <Footer />
          </div>
          <div className="layout__main">
            <SectionLayout
              children1={<FirstBlock />}
              children2={<VideoWidget />}
              rightVisible={false}
            />
            <SectionLayout
              children1={<PopularVideos trends={trends} />}
              children2={
                <Link href={"/trends"} className="layout__heading">
                  тренды
                </Link>
              }
            />
            <SectionLayout
              children1={<AudioPodcasts editions={editions} />}
              children2={
                <Link href={"/podcasts"} className="layout__heading">
                  аудиоподкасты
                </Link>
              }
            />
            <SectionLayout
              children1={
                <>
                  <NewsCard news={news.slice(9, 14)} rubrics={rubrics} />
                  <NewsList news={news.slice(14, 17)} largeNewIndex={2} />
                </>
              }
              children2={<ContentWidget />}
            />
            <SectionLayout
              children1={<LecturesBlock lectures={lectures} />}
              children2={
                <Link href={"/lectures"} className="layout__heading">
                  лекции
                </Link>
              }
            />
            <SectionLayout
              children1={<ClubBlock webinars={webinars} />}
              children2={
                <Link href={"/lawyers-club"} className="layout__heading">
                  клуб юристов
                </Link>
              }
            />
            <SectionLayout
              children1={<QuoteCards />}
              children2={<PromoWidget />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const newsPromise = store.dispatch(fetchNews({ limit: 17 }));
  const rubricsPromise = store.dispatch(fetchRubrics());
  const trendsPromise = store.dispatch(fetchTrends({ limit: 10 }));
  const podcastsPromise = store.dispatch(fetchEditions({ limit: 3 }));
  const lecturesPromise = store.dispatch(fetchLectures({ limit: 3 }));
  const webinarsPromise = store.dispatch(
    fetchWebinars({ limit: 2, webinar: "actual" })
  );

  await Promise.allSettled([
    newsPromise,
    rubricsPromise,
    trendsPromise,
    podcastsPromise,
    lecturesPromise,
    webinarsPromise,
  ]);

  return {
    props: {
      revalidation: 60,
    },
  };
});

export default Index;
