import React, { FC, useCallback, useEffect, useState } from "react";
import Footer from "../../components/footer";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import VideoWidget from "../../components/widgets/videoWidget";
import Sidebar from "../../components/sidebar/sidebar";
import AudioPodcasts from "../../components/pageHome/audioPodcasts";
import PopularVideos from "../../components/pageHome/popularVideos";
import SectionLayout from "../../components/pageHome/sectionLayout";
import LecturesBlock from "../../components/pageHome/lecturesBlock";
import { fetchNews } from "../../redux/news/asyncAction";
import { wrapper } from "../../redux/store";
import { useSelector } from "react-redux";
import { selectNews } from "../../redux/news/slice";
import NewCard from "../../components/newCard";
import { fetchRubrics } from "../../redux/rubrics/asyncAction";
import { useRouter } from "next/router";
import { baseURL, server } from "../../utils/server";
import { NewType, NewsData } from "../../redux/news/types";
import InfiniteScroll from "react-infinite-scroller";
import { rubricByIdSelector, selectRubrics } from "../../redux/rubrics/slice";
import { fetchLectures } from "../../redux/lectures/asyncAction";
import { fetchPodcasts } from "../../redux/podcasts/asyncAction";

const Data = {
  recomendations: [
    {
      id: 1,
      name: "В Берлине сообщили о решении выслать немецких служащих. В Берлине сообщили о решении выслать немецких служащих",
    },
    {
      id: 2,
      name: "Дагестан с начала 2023г. в 5 раз увеличил гарантийную поддержку бизнеса",
    },
    {
      id: 3,
      name: "Мнение: льготная ипотека на «вторичку» уравновесит цены на жилье в ЮФО",
    },
    {
      id: 4,
      name: "Шесть регионов СКФО стали аутсайдерами рейтинга благосостояния населения",
    },
    {
      id: 5,
      name: "Компании Маска Neuralink разрешили испытывать чипы на мозгах людей.",
    },
  ],
  news: [
    {
      id: 1,
      name: "Внешнеторговый оборот Кабардино-Балкарии вырос в 1,2 раза в 2022 году",
      author: "Александр Македонский",
      date: "30 минут назад",
    },
    {
      id: 2,
      name: "Внешнеторговый оборот Кабардино-Балкарии вырос в 1,2 раза в 2022 году",
      author: "Александр Македонский",
      date: "30 минут назад",
    },
  ],
};

interface RubricsProps {
  recomendations: NewType[];
}

const Rubrics: FC<RubricsProps> = ({ recomendations }) => {
  console.log(recomendations);
  const { data } = useSelector(selectNews);

  const { datas, pagination } = data;
  // const [page, setPage] = useState(1);
  const router = useRouter();

  const [nextPublication, setNextPublications] = useState<NewType[]>([]);
  const [hasMore, setHasMore] = useState(true);

  // const handleScroll = useCallback(() => {
  //   if (pagination && pagination.page < pagination.totalPages) {
  //     const scrollY = window.scrollY;
  //     const windowHeight = window.innerHeight;
  //     const documentHeight = document.documentElement.scrollHeight;

  //     if (scrollY + windowHeight >= documentHeight - 200) {
  //       setPage(page + 1);
  //     }
  //   }
  // }, [pagination]);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [handleScroll]);

  const fetchNextNews = async () => {
    // const { data } = await server.get(
    //   `/sw/v1/publications/?iblockid=9&sort=ASC`,
    //   {
    //     params: {
    //       limit: 3,
    //       rubric: Number(router.query.id),
    //     },
    //   }
    // );
    // if (data.pagintaion.page === data.pagination.totalPages) {
    //   setHasMore(false);
    // } else {
    //   const newArr = [...nextPublication, data.datas];
    //   setNextPublications(newArr);
    // }
  };

  // useEffect(() => {
  //   const fetchNextNews = async () => {
  //     const result = await server.get(
  //       `/sw/v1/publications/?iblockid=9&sort=ASC`,
  //       {
  //         params: {
  //           page: page,
  //           limit: 3,
  //           rubric: Number(router.query.id),
  //         },
  //       }
  //     );

  //     const newArr = [...nextPublication, ...result.data.datas];
  //     setNextPublications(newArr);
  //   };
  //   if (page > 1) {
  //     fetchNextNews();
  //   }
  // }, [page]);

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
              rightVisible={false}
              children1={
                <>
                  <h1 className="layout__head">
                    {rubricByIdSelector(String(router.query.id))?.NAME}
                  </h1>
                  <div className="page-list">
                    <div className="page-list__wrapper">
                      {recomendations.map((recomendation) => (
                        <Link
                          key={recomendation.id}
                          href={`/news/${recomendation.id}`}
                          className="page-list__item"
                        >
                          <img
                            src={`${baseURL}${recomendation.poperties.NEWS_LOGO}`}
                            alt="Icon"
                          />
                          <span>{recomendation.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  {data.datas.map((item) => (
                    <NewCard key={item.id} newItem={item} />
                  ))}
                </>
              }
              children2={<VideoWidget />}
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
              children1={<LecturesBlock />}
              children2={<span className="layout__heading">лекции</span>}
            />
            {nextPublication.length !== 0 && (
              <SectionLayout
                children1={
                  <>
                    <InfiniteScroll
                      pageStart={1}
                      loadMore={fetchNextNews}
                      hasMore={hasMore}
                    >
                      {nextPublication.map((item) => (
                        <NewCard key={item.id} newItem={item} />
                      ))}
                    </InfiniteScroll>
                  </>
                }
                children2={<VideoWidget />}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { query } = context;

    await store.dispatch(fetchRubrics());
    await store.dispatch(fetchPodcasts({ limit: 3 }));
    await store.dispatch(fetchLectures({ limit: 3 }));
    await store.dispatch(
      fetchNews({ limit: 3, page: 1, rubric: Number(query.id) })
    );
    const { data } = await server.get(
      `/sw/v1/publications/?iblockid=9&sort=ASC&limit=5`
    );
    return {
      props: {
        recomendations: data.datas,
      },
    };
  }
);

export default Rubrics;
