import React from "react";
import Footer from "../../components/footer";
import Link from "next/link";
import SecondSidebar from "../../components/sidebar/secondSidebar";
import { wrapper } from "../../redux/store";
import { useSelector } from "react-redux";
import { selectNews } from "../../redux/news/slice";
import { fetchVideos } from "../../redux/videos/asyncAction";
import { selectVideos } from "../../redux/videos/slice";
import { baseURL } from "../../utils/server";
import { formatDateDifference } from "../../utils/formatDate";

const Videos = [
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

const Viedos = () => {
  const { data } = useSelector(selectVideos);
  console.log(data);

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
                      <Link
                        key={video.id}
                        href={`videos/${video.id}`}
                        className="category-card videos__item"
                      >
                        <picture className="category-card__img">
                          <img
                            src={`${baseURL}${video.images[1]}`}
                            alt="Image"
                          />
                        </picture>
                        <div className="category-card__body">
                          <span className="category-card__name">
                            {video.name}
                          </span>
                          <div className="category-card__inner">
                            <span className="category-card__author">
                              {video.poperties.PUB_AUTOR}
                            </span>
                            <span className="category-card__help">
                              {formatDateDifference(video.date)}
                            </span>
                          </div>
                        </div>
                      </Link>
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
    await store.dispatch(fetchVideos({ limit: 15 }));
    return {
      props: {},
    };
  }
);

export default Viedos;
