import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import SecondSidebar from "../../components/sidebar/secondSidebar";
import { wrapper } from "../../redux/store";
import { useSelector } from "react-redux";
import { fetchVideos } from "../../redux/videos/asyncAction";
import { selectVideos } from "../../redux/videos/slice";
import { server } from "../../utils/server";
import { VideoType } from "../../redux/videos/types";
import VideoItem from "../../components/pageVideos/videoItem";

const Viedos = () => {
  const { data } = useSelector(selectVideos);

  const [nextPublication, setNextPublications] = useState<VideoType[]>([]);
  const [page, setPage] = useState(2);
  let totalPages = data.pagination?.totalPages;

  const fetchNextNews = async () => {
    const result = await server.get(
      `/sw/v1/publications/?iblockid=15&sort=ASC`,
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
    setNextPublications(newArr);
  };

  useEffect(() => {
    if (totalPages && page <= totalPages) {
      fetchNextNews();
    }
  }, [page]);
  
  return (
    <div className="layout layout--sticky-bottom">
      <div className="container">
        <div className="layout__wrap">
          <div className="layout__left layout__left--visible">
            <SecondSidebar />
            <Footer otherClassName="layout__footer" />
          </div>

          <div className="layout__main">
            <div className="layout__main-wrapper">
              <div className="layout__center layout__center--wide">
                <div className="videos mobile-wide">
                  <div className="videos__wrapper">
                    {data.datas.map((video) => (
                      <VideoItem key={video.id} video={video} />
                    ))}
                    {nextPublication.map((video, index) => (
                      <VideoItem
                        key={video.id}
                        video={video}
                        isLast={index === nextPublication.length - 1}
                        newLimit={() => setPage(page + 1)}
                        end={page === totalPages}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchVideos({ limit: 3 }));
    return {
      props: {},
    };
  }
);

export default Viedos;
