import React from "react";
import LeftMenu from "../../components/sidebar/sidebar";
import Footer from "../../components/footer";
import Link from "next/link";
import SecondSidebar from "../../components/sidebar/secondSidebar";

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

const Lectures = () => {
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
                    {LecturesList.map((lecture) => (
                      <Link
                        key={lecture.id}
                        href={`/lectures/${lecture.id}`}
                        className="category-card category-card--sm lectures__item"
                      >
                        <picture className="category-card__img">
                          <img src="img/lectures-01.jpg" alt="Image" />
                        </picture>
                        <div className="category-card__body">
                          <span className="category-card__name">
                            {lecture.name}
                          </span>
                          <div className="category-card__inner">
                            <span className="category-card__author">
                              {lecture.author}
                            </span>
                            <span className="category-card__help">
                              {lecture.date}
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

export default Lectures;
