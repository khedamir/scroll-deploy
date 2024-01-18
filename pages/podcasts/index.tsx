import React, { FC, useEffect, useState } from "react";
import Footer from "../../components/footer";
import SecondSidebar from "../../components/sidebar/secondSidebar";
import { wrapper } from "../../redux/store";
import { server } from "../../utils/server";
import FullPodcastItem from "../../components/pagePodcasts/fullPodcasrItem";
import Players from "../../components/players/player";
import { AudioContextProvider } from "../../context/audioContext";
import { EditionType } from "../../redux/types";

interface PodcastsProps {
  // type_problem
  data: any;
}

const Podcasts: FC<PodcastsProps> = ({ data }) => {
  const [nextPublication, setNextPublications] = useState<EditionType[]>([]);
  const [page, setPage] = useState(2);
  let totalPages = data.pagination?.totalPages;

  const fetchNextNews = async () => {
    const result = await server.get(`/sw/v1/podcasts/?iblockid=34`, {
      params: {
        page: page,
        limit: 10,
      },
    });
    if (totalPages !== result.data.pagination.totalPages) {
      totalPages = result.data.pagination.totalPages;
    }
    const newArr = [...nextPublication, ...result.data.datas];
    setNextPublications(newArr);
  };

  useEffect(() => {
    if (totalPages && page <= totalPages) {
      fetchNextNews();
    }
  }, [page]);

  return (
    <AudioContextProvider>
      <div className="layout">
        <div className="container">
          <div className="layout__wrap">
            <div className="layout__left layout__left--visible">
              <SecondSidebar />
              <Footer otherClassName="layout__footer" />
            </div>
            <div className="layout__main">
              <div className="layout__main-wrapper">
                <div
                  className="layout__center"
                  style={{ position: "relative" }}
                >
                  <div className="podcasts">
                    <div className="podcasts__wrapper">
                      {data.datas.map((podcast: any) => (
                        <FullPodcastItem key={podcast.id} podcast={podcast} />
                      ))}
                      {nextPublication.map((podcast, index) => (
                        <FullPodcastItem
                          key={podcast.id}
                          podcast={podcast}
                          isLast={index === nextPublication.length - 1}
                          newLimit={() => setPage(page + 1)}
                          end={page === totalPages}
                        />
                      ))}
                    </div>
                  </div>
                  <Players />
                </div>
                <div className="layout__right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AudioContextProvider>
  );
};

export const getStaticProps = async () => {
  const { data } = await server.get(
    `/sw/v1/podcasts/?iblockid=34&width=400&height=300`,
    {
      params: { limit: 10 },
    }
  );
  return {
    props: {
      data: data,
      revalidation: 60,
    },
  };
};

export default Podcasts;
