import React, { useEffect, useState } from "react";
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
import { fetchRubrics } from "../redux/rubrics/asyncAction";
import { fetchNews } from "../redux/news/asyncAction";
import { useSelector } from "react-redux";
import { selectNews } from "../redux/news/slice";
import { fetchPodcasts } from "../redux/podcasts/asyncAction";
import { fetchLectures } from "../redux/lectures/asyncAction";
import { fetchWebinars } from "../redux/webinars/asyncAction";
import { server } from "../utils/server";
import { NewType, PaginationType } from "../redux/news/types";

type PaginationDataType = {
  pagination: PaginationType | null;
  items: NewType[][];
};

const Index: NextPage = () => {
  const { data } = useSelector(selectNews);

  const [nextPublication, setNextPublications] = useState<PaginationDataType>({
    items: [],
    pagination: null,
  });

  const [page, setPage] = useState(3);

  const fetchNextNews = async () => {
    const result = await server.get(
      `/sw/v1/publications/?iblockid=9&sort=ASC`,
      {
        params: {
          page: page,
          limit: 8,
        },
      }
    );

    const newArr = [...nextPublication?.items, [...result.data.datas]];
    console.log(page, newArr);
    setNextPublications({ items: newArr, pagination: result.data.pagination });
  };

  useEffect(() => {
    fetchNextNews();
  }, [page]);

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
                  <NewsCard news={data.datas.slice(9, 14)} />
                  <NewsList news={data.datas.slice(14, 17)} largeNewIndex={2} />
                </>
              }
              children2={<ContentWidget />}
            />
            <SectionLayout
              children1={<LecturesBlock />}
              children2={<span className="layout__heading">лекции</span>}
            />
            <SectionLayout
              children1={<ClubBlock />}
              children2={<span className="layout__heading">клуб юристов</span>}
            />
            {nextPublication.items &&
              nextPublication.items.map((items, index) => (
                <SectionLayout
                  key={index}
                  children1={
                    <>
                      <NewsCard news={items.slice(0, 5)} />
                      <NewsList news={items.slice(5, 8)} largeNewIndex={2} />
                    </>
                  }
                  children2={<></>}
                  isLast={index === nextPublication.items.length - 1}
                  newLimit={() => setPage(page + 1)}
                  end={page === nextPublication.pagination?.totalPages}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(fetchRubrics());
  await store.dispatch(fetchNews({ limit: 17 }));
  await store.dispatch(fetchPodcasts({ limit: 3 }));
  await store.dispatch(fetchLectures({ limit: 3 }));
  await store.dispatch(fetchWebinars({ limit: 2 }));
  return {
    props: {},
  };
});

export default Index;
