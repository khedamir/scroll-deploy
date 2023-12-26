import React, { FC, useEffect, useState } from "react";
import Footer from "../../components/footer";
import Link from "next/link";
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
import { useRouter } from "next/router";
import { baseURL, server } from "../../utils/server";
import { NewType } from "../../redux/news/types";
import { rubricByIdSelector } from "../../redux/rubrics/slice";
import { fetchLectures } from "../../redux/lectures/asyncAction";
import { fetchPodcasts } from "../../redux/podcasts/asyncAction";
import { fetchTrends } from "../../redux/trends/asyncAction";
import UserIcon from "../../components/userIcon";
import Image from "next/image";
import { RubricType } from "../../redux/rubrics/types";
import Loader from "../../components/loader";
import { fetchRubrics } from "../../redux/rubrics/asyncAction";

interface RubricsProps {
  recomendations: NewType[];
}

const Rubrics: FC<RubricsProps> = ({ recomendations }) => {
  const { data } = useSelector(selectNews);

  const [nextPublication, setNextPublications] = useState<NewType[]>([]);
  const [page, setPage] = useState(2);
  let totalPages = data?.pagination?.totalPages;

  const router = useRouter();

  useEffect(() => {
    if (totalPages && page <= totalPages) {
      fetchNextNews();
    }
  }, [page]);

  if (router.isFallback) {
    return <Loader text="Идет загрузка" />;
  }

  const fetchNextNews = async () => {
    const result = await server.get(`/sw/v1/publications/?iblockid=9`, {
      params: {
        page: page,
        limit: 2,
        rubric: Number(router.query.id),
      },
    });
    const newArr = [...nextPublication, ...result.data.datas];
    console.log(newArr);
    setNextPublications(newArr);
  };

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
                          {recomendation.poperties.PUB_SOURCE_LOGO ? (
                            <span className="page-list__item-img">
                              <Image
                                width={40}
                                height={40}
                                src={`${recomendation.poperties.PUB_SOURCE_LOGO}`}
                                alt="Icon"
                              />
                            </span>
                          ) : (
                            <span className="page-list__item-img">
                              <UserIcon
                                userPhoto={recomendation.author_photo}
                                nameLatter={recomendation.author_name?.[0]}
                                avatarColor={recomendation.author_avatar_color}
                              />
                            </span>
                          )}
                          <span>{recomendation.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  {data?.datas.map((item) => (
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
                    {nextPublication.map((item, index) => (
                      <NewCard
                        key={item.id}
                        newItem={item}
                        isLast={index === nextPublication.length - 1}
                        newLimit={() => setPage(page + 1)}
                        end={page === totalPages}
                      />
                    ))}
                  </>
                }
                children2={<></>}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  try {
    const { data } = await server.get("/api/v1/navigation/main");
    const rubrics: RubricType[] = Object.values(data.message);
    const paths = rubrics.map((rubric) => ({
      params: {
        id: rubric.ID,
      },
    }));
    return { paths, fallback: false };
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    throw error;
  }
};

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    const podcastsPromise = store.dispatch(fetchPodcasts({ limit: 3 }));
    const trendsPromise = store.dispatch(fetchTrends({ limit: 10 }));
    const lecturesPromise = store.dispatch(fetchLectures({ limit: 3 }));
    const rubricsPromise = store.dispatch(fetchRubrics());
    const newsPromise = store.dispatch(
      fetchNews({ limit: 2, page: 1, rubric: Number(context.params?.id) })
    );

    const results = await Promise.allSettled([
      podcastsPromise,
      trendsPromise,
      lecturesPromise,
      newsPromise,
      rubricsPromise,
    ]);

    const recomendationResult = await server.get(
      `/sw/v1/publications/?iblockid=9&limit=5`
    );

    return {
      props: {
        recomendations: recomendationResult.data.datas,
      },
    };
  }
);

export default Rubrics;
