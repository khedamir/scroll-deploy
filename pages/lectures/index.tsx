import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import SecondSidebar from "../../components/sidebar/secondSidebar";
import LectureItem from "../../components/pageLecture/lectureItem";
import { wrapper } from "../../redux/store";
import { fetchLectures } from "../../redux/lectures/asyncAction";
import { useSelector } from "react-redux";
import { selectLectures } from "../../redux/lectures/slice";
import { LectureType } from "../../redux/lectures/types";
import { server } from "../../utils/server";

const Lectures = () => {
  const { data } = useSelector(selectLectures);

  const [nextPublication, setNextPublications] = useState<LectureType[]>([]);
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
                    {data.datas.map((lecture) => (
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchLectures({ limit: 8 }));
    return {
      props: {},
    };
  }
);

export default Lectures;
