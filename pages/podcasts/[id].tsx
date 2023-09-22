import React from "react";
import Footer from "../../components/footer";
import { ReactSVG } from "react-svg";
import SecondSidebar from "../../components/sidebar/secondSidebar";
import PodcastItem from "../../components/pagePodcasts/podcastItem";
import PodcastCard from "../../components/podcastCard";

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
];

const Podcast = () => {
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
                <div className="podcast podcasts">
                  <div className="podcast__wrapper">
                    <div className="podcast__wrapper-inner">
                      <div className="podcast__left">
                        <picture className="podcast__img">
                          <img src="/img/podcasts-01.jpg" alt="Image" />
                        </picture>
                      </div>
                      <div className="podcast__right">
                        <div className="podcast__main">
                          <div className="podcast__body">
                            <h1 className="podcast__heading">
                              Название подкаста
                            </h1>
                            <span className="podcast__text">
                              Александр Македонский
                            </span>
                          </div>
                          <div className="podcast__additional">
                            <button className="podcast__favorites c-bookmark">
                              <ReactSVG
                                className="c-bookmark__icon c-bookmark__icon--default"
                                src="/img/sprite/icon-bookmarks.svg"
                              />
                              <ReactSVG
                                className="c-bookmark__icon c-bookmark__icon--filled"
                                src="/img/sprite/icon-bookmarks.svg"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="podcast__description">
                      Яше 12 лет, и он все время узнает что-то новое — на
                      уроках, из книг и фильмов, на прогулках и в путешествиях.
                      В этом детском подкасте Яша обсуждает свои открытия с
                      папой Митей, а когда Митя не может ответить на Яшины
                      вопросы, они звонят ученым и выясняют, как все устроено на
                      самом деле
                    </p>
                  </div>
                  <div className="podcast__wrapper">
                    <div className="podcasts__wide">
                      <span className="podcast__help">12 выпусков</span>
                      <div className="podcasts podcast__podcasts">
                        <div className="podcasts__wrapper">
                          {PodcastsList.map((podcast) => (
                            <PodcastItem
                              key={podcast.id}
                              podcast={podcast}
                              maxVersion={false}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="layout__right">
                <div className="content-card">
                  <div className="content-card__wrapper">
                    {PodcastsList.map((podcast) => (
                      <PodcastCard key={podcast.id} podcast={podcast} />
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

export default Podcast;
