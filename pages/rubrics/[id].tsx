import React, { FC, useEffect, useState } from "react";
import Footer from "../../components/footer";
import VideoWidget from "../../components/widgets/videoWidget";
import Sidebar from "../../components/sidebar/sidebar";
import SectionLayout from "../../components/pageHome/sectionLayout";
import NewCard from "../../components/newCard";
import { useRouter } from "next/router";
import { server } from "../../utils/server";
import { NewType } from "../../redux/types";
import Loader from "../../components/loader";
import { PaginationType, RubricType } from "../../redux/types";
import { fetchNews, fetchRubrics } from "../../server/content";
import SectionsBlock from "../../components/pageRubric/sectionsBlock";
import LastNews from "../../components/pageRubric/lastNews";

interface RubricsProps {
  news: NewType[];
  pagination: PaginationType;
  rubrics: RubricType[];
}

const Rubrics: FC<RubricsProps> = ({ news, pagination, rubrics }) => {
  const [nextPublication, setNextPublications] = useState<NewType[]>([]);
  const [page, setPage] = useState(2);
  let totalPages = pagination?.totalPages;

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
    const result = await fetchNews({
      page: page,
      limit: 2,
      rubric: Number(router.query.id),
    });
    const newArr = [...nextPublication, ...result.datas];
    setNextPublications(newArr);
  };

  return (
    <div className="layout">
      <div className="container">
        <div className="layout__wrap layout__wrap--padding">
          <div className="layout__left">
            <Sidebar rubrics={rubrics} />
          </div>

          <div className="layout__main">
            <SectionLayout
              rightVisible={false}
              children1={
                <>
                  <h1 className="layout__head">
                    {
                      rubrics.find((rubric) => rubric.ID === router.query.id)
                        ?.NAME
                    }
                  </h1>
                  <LastNews />
                  {news.slice(0, 3).map((item) => (
                    <NewCard key={item.id} newItem={item} />
                  ))}
                </>
              }
              children2={<VideoWidget />}
            />
            <SectionsBlock />
            <SectionLayout
              children1={
                <>
                  {news.slice(3).map((item) => (
                    <NewCard key={item.id} newItem={item} />
                  ))}
                </>
              }
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

export const getStaticProps = async (context: { params: { id: any } }) => {
  const news = await fetchNews({ limit: 10, rubric: context.params.id });
  const rubrics = await fetchRubrics();
  return {
    props: {
      news: news.datas,
      pagination: news.pagination,
      rubrics: rubrics,
      revalidation: 60,
    },
  };
};

export default Rubrics;
