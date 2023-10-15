import React, { FC } from "react";
import Comments from "../../components/comments";
import Footer from "../../components/footer";
import SecondSidebar from "../../components/sidebar/secondSidebar";
import LectureItem from "../../components/pageLecture/lectureItem";
import MediaControls from "../../components/mediaControls";
import MediaContent from "../../components/mediaContent";
import { fetchLectures } from "../../redux/lectures/asyncAction";
import { wrapper } from "../../redux/store";
import { useSelector } from "react-redux";
import { selectLectures } from "../../redux/lectures/slice";
import { server } from "../../utils/server";
import { FullPublicationType } from "../../redux/types";
import { formatDateDifference } from "../../utils/formatDate";

const LecturesList = [
  {
    id: 1,
    name: "Люди не готовы к ошибкам нейросетей",
    img: "/img/videos-01.jpg",
    author: "Александр Македонский",
    date: "1 день назад",
  },
  {
    id: 2,
    name: "Люди не готовы к ошибкам нейросетей",
    img: "/img/videos-02.jpg",
    author: "Александр Македонский",
    date: "1 день назад",
  },
  {
    id: 3,
    name: "Люди не готовы к ошибкам нейросетей",
    img: "/img/videos-03.jpg",
    author: "Александр Македонский",
    date: "1 день назад",
  },
  {
    id: 4,
    name: "Люди не готовы к ошибкам нейросетей",
    img: "/img/videos-04.jpg",
    author: "Александр Македонский",
    date: "1 день назад",
  },
  {
    id: 5,
    name: "Люди не готовы к ошибкам нейросетей",
    img: "/img/videos-03.jpg",
    author: "Александр Македонский",
    date: "1 день назад",
  },
  {
    id: 6,
    name: "Люди не готовы к ошибкам нейросетей",
    img: "/img/videos-04.jpg",
    author: "Александр Македонский",
    date: "1 день назад",
  },
];

interface LectureProps {
  publication: FullPublicationType;
}

const Lecture: FC<LectureProps> = ({ publication }) => {
  const { data } = useSelector(selectLectures);
  console.log(publication);

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
              <div className="layout__center">
                <div className="video mobile-wide">
                  <div className="video__media">
                    {/* <img src="/img/media-plug.jpg" alt="Image" /> */}
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/VfqNgiksygA?si=h-3qtY6phAMb3OlM"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    ;
                  </div>
                  <div className="video__main">
                    <div className="video__body">
                      <h3 className="video__heading">{publication.name}</h3>
                      <div className="video__inner">
                        <a href="#" className="video__author">
                          <img src="/img/user.jpg" alt="Image" />
                          <span>Александр Македонский</span>
                        </a>
                        <span className="video__time">
                          {formatDateDifference(publication.date)}
                        </span>
                      </div>
                    </div>
                    <MediaControls otherClassName="video__bottom" />
                    <MediaContent />
                  </div>
                  <Comments otherClassName="video__comments" />
                </div>
              </div>
              <div className="layout__right">
                <div className="content-card mobile-wide">
                  <div className="content-card__wrapper">
                    {data.datas.map((lecture) => (
                      <LectureItem
                        key={lecture.id}
                        lecture={lecture}
                        otherClassName="content-card__item"
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
  (store) => async (context) => {
    const { id } = context.params || {};
    try {
      await store.dispatch(fetchLectures({ limit: 15 }));
      const { data } = await server.get(`/sw/v1/publications/?id=${id}`);

      return {
        props: {
          publication: data.datas[0],
        },
      };
    } catch (error) {
      return {
        redirect: {
          destination: "/server-error",
          permanent: false,
        },
      };
    }
  }
);

export default Lecture;

// https://youtu.be/7LL0Xdql7nE?si=E2dowmRXV9BKN9n7
