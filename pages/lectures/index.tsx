import React, { FC, useEffect, useState } from "react";
import Footer from "../../components/footer";
import SecondSidebar from "../../components/sidebar/secondSidebar";
import LectureItem from "../../components/pageLecture/lectureItem";
import { server } from "../../utils/server";
import { VideoType } from "../../redux/types";

interface LecturesProps {
  // type_problem
  data: any;
}

const Lectures: FC<LecturesProps> = ({ data }) => {
  const [nextPublication, setNextPublications] = useState<VideoType[]>([]);
  const [page, setPage] = useState(2);
  let totalPages = data.pagination?.totalPages;

  const fetchNextNews = async () => {
    const result = await server.get(`/sw/v1/publications/?iblockid=26`, {
      params: {
        page: page,
        limit: 8,
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
    <div className="layout">
      <div className="container">
        <div className="layout__wrap">
          <div className="layout__left layout__left--visible">
            <SecondSidebar />
            <Footer otherClassName="layout__footer" />
          </div>
          <div className="layout__main">
            <div className="layout__main-wrapper">
              <div className="layout__center layout__center--wide">
                <div className="lectures mobile-wide">
                  <div className="lectures__wrapper">
                    {data.datas.map((lecture: any) => (
                      <LectureItem
                        key={lecture.id}
                        lecture={lecture}
                        otherClassName="lectures__item"
                      />
                    ))}
                    {nextPublication.map((lecture, index) => (
                      <LectureItem
                        key={lecture.id}
                        lecture={lecture}
                        otherClassName="lectures__item"
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
    `/sw/v1/publications/?iblockid=26&width=250&height=150`,
    {
      params: { limit: 8 },
    }
  );
  return {
    props: {
      data: data,
    },
  };
};

export default Lectures;
