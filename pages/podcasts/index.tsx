import React from "react";
import LeftMenu from "../../components/sidebar/sidebar";
import Footer from "../../components/footer";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import SecondSidebar from "../../components/sidebar/secondSidebar";

const PodcastsList = [
  {
    id: 1,
    name: "Мойдодыр и нейросеть",
    description:
      "В этом выпуске мы обсудили реакцию мозга на стрессовые ситуации; как управлять своимсостоянием.",
    author: "Александр Македонский",
  },
  {
    id: 2,
    name: "Мойдодыр и нейросеть",
    description:
      "В этом выпуске мы обсудили реакцию мозга на стрессовые ситуации; как управлять своимсостоянием.",
    author: "Александр Македонский",
  },
  {
    id: 3,
    name: "Мойдодыр и нейросеть",
    description:
      "В этом выпуске мы обсудили реакцию мозга на стрессовые ситуации; как управлять своимсостоянием.",
    author: "Александр Македонский",
  },
  {
    id: 4,
    name: "Мойдодыр и нейросеть",
    description:
      "В этом выпуске мы обсудили реакцию мозга на стрессовые ситуации; как управлять своимсостоянием.",
    author: "Александр Македонский",
  },
];

const Podcasts = () => {
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
                    {PodcastsList.map((podcast) => (
                      <div key={podcast.id} className="podcasts__item">
                        <Link
                          href={`podcasts/${podcast.id}`}
                          className="podcasts__img"
                        >
                          <img src="/img/podcasts-01.jpg" alt="Image" />
                        </Link>
                        <div className="podcasts__main">
                          <div className="podcasts__body">
                            <span className="podcasts__help">2 выпуск</span>
                            <Link
                              href={`podcasts/${podcast.id}`}
                              className="podcasts__name mt8"
                            >
                              {podcast.name}
                            </Link>
                            <span className="podcasts__description mt8">
                              {podcast.description}
                            </span>
                            <div className="podcasts__inner">
                              <Link
                                href={`podcasts/${podcast.id}`}
                                className="podcasts__text"
                              >
                                Название подкаста
                              </Link>
                              <Link
                                href={`podcasts/${podcast.id}`}
                                className="podcasts__text"
                              >
                                Александр Македонский
                              </Link>
                            </div>
                          </div>
                          <div className="podcasts__additional">
                            <Link
                              href={`podcasts/${podcast.id}`}
                              className="podcasts__play c-play"
                            >
                              <ReactSVG src="/img/sprite/icon-play.svg" />
                              <span>1 ч 20 мин</span>
                            </Link>
                            <button className="podcasts__favorites c-bookmark">
                              <ReactSVG
                                className="c-bookmark__icon c-bookmark__icon--default"
                                src="/img/sprite/icon-play.svg"
                              />
                              <ReactSVG
                                className="c-bookmark__icon c-bookmark__icon--filled"
                                src="/img/sprite/icon-play.svg"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
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

export default Podcasts;
