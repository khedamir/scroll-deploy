import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import SecondSidebar from "../../components/sidebar/secondSidebar";
import PodcastItem from "../../components/pagePodcasts/podcastItem";
import { selectPodcasts } from "../../redux/podcasts/slice";
import { useSelector } from "react-redux";
import { fetchPodcasts } from "../../redux/podcasts/asyncAction";
import { wrapper } from "../../redux/store";
import { PodcastType } from "../../redux/podcasts/types";
import { server } from "../../utils/server";

const Podcasts = () => {
  const { data } = useSelector(selectPodcasts);
  const [nextPublication, setNextPublications] = useState<PodcastType[]>([]);
  const [page, setPage] = useState(2);
  let totalPages = data.pagination?.totalPages;

  const fetchNextNews = async () => {
    const result = await server.get(
      `/sw/v1/publications/?iblockid=27`,
      {
        params: {
          page: page,
          limit: 3,
        },
      }
    );
    if (totalPages !== result.data.pagination.totalPages) {
      totalPages = result.data.pagination.totalPages;
    }
    const newArr = [...nextPublication, ...result.data.datas];
    console.log(result.data);
    setNextPublications(newArr);
  };

  useEffect(() => {
    if (totalPages && page <= totalPages) {
      fetchNextNews();
    }
  }, [page]);

  return (
    <div className="layout">
      <div className="container">
        <div className="layout__wrap">
          <div className="layout__left layout__left--visible">
            <SecondSidebar />
            <Footer otherClassName="layout__footer" />
          </div>
          <div className="layout__main">
            <div className="layout__main-wrapper">
              <div className="layout__center">
                <div className="podcasts">
                  <div className="podcasts__wrapper">
                    {data.datas.map((podcast) => (
                      <PodcastItem key={podcast.id} podcast={podcast} />
                    ))}
                    {nextPublication.map((podcast, index) => (
                      <PodcastItem
                        key={podcast.id}
                        podcast={podcast}
                        isLast={index === nextPublication.length - 1}
                        newLimit={() => setPage(page + 1)}
                        end={page === totalPages}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="layout__right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchPodcasts({ limit: 3 }));
    return {
      props: {},
    };
  }
);

export default Podcasts;
