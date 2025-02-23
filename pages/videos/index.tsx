import React, { FC, useEffect, useState } from "react";
import Footer from "../../components/footer";
import SecondSidebar from "../../components/sidebar/secondSidebar";
import { server } from "../../utils/server";
import VideoItem from "../../components/pageVideos/videoItem";
import { VideoType } from "../../redux/types";

interface LecturesProps {
  // type_problem
  data: any;
}

const Viedos: FC<LecturesProps> = ({ data }) => {
  const [nextPublication, setNextPublications] = useState<VideoType[]>([]);
  const [page, setPage] = useState(2);
  let totalPages = data.pagination?.totalPages;

  const fetchNextNews = async () => {
    const result = await server.get(`/sw/v1/publications/?iblockid=15`, {
      params: {
        page: page,
        limit: 3,
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
                    {data.datas.map((video: any) => (
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

export const getStaticProps = async () => {
  const { data } = await server.get(
    `/sw/v1/publications/?iblockid=15&width=550&height=350`,
    {
      params: { limit: 8 },
    }
  );
  return {
    props: {
      data: data,
      revalidation: 60,
    },
  };
};

export default Viedos;
