import React from "react";
import Footer from "../../components/footer";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import VideoWidget from "../../components/widgets/videoWidget";
import Sidebar from "../../components/sidebar/sidebar";
import AudioPodcasts from "../../components/pageHome/audioPodcasts";
import PopularVideos from "../../components/pageHome/popularVideos";
import SectionLayout from "../../components/pageHome/sectionLayout";
import LecturesBlock from "../../components/pageHome/lecturesBlock";
import { fetchRubrics } from "../../redux/rubrics/asyncAction";
import { wrapper } from "../../redux/store";

const data = {
  recomendations: [
    {
      id: 1,
      name: "В Берлине сообщили о решении выслать немецких служащих. В Берлине сообщили о решении выслать немецких служащих",
    },
    {
      id: 2,
      name: "Дагестан с начала 2023г. в 5 раз увеличил гарантийную поддержку бизнеса",
    },
    {
      id: 3,
      name: "Мнение: льготная ипотека на «вторичку» уравновесит цены на жилье в ЮФО",
    },
    {
      id: 4,
      name: "Шесть регионов СКФО стали аутсайдерами рейтинга благосостояния населения",
    },
    {
      id: 5,
      name: "Компании Маска Neuralink разрешили испытывать чипы на мозгах людей.",
    },
  ],
  news: [
    {
      id: 1,
      name: "Внешнеторговый оборот Кабардино-Балкарии вырос в 1,2 раза в 2022 году",
      author: "Александр Македонский",
      date: "30 минут назад",
    },
    {
      id: 2,
      name: "Внешнеторговый оборот Кабардино-Балкарии вырос в 1,2 раза в 2022 году",
      author: "Александр Македонский",
      date: "30 минут назад",
    },
  ],
};

const Rubrics = () => {
  return (
    <div className="layout">
      <div className="container">
        <div className="layout__wrap layout__wrap--padding">
          <div className="layout__left">
            <Sidebar />
            <Footer />
          </div>

          <div className="layout__main">
            <SectionLayout
              rightVisible={false}
              children1={
                <>
                  <h1 className="layout__head">Пособия</h1>
                  <div className="page-list">
                    <div className="page-list__wrapper">
                      {data.recomendations.map((recomendation) => (
                        <Link
                          key={recomendation.id}
                          href={`/news/${recomendation.id}`}
                          className="page-list__item"
                        >
                          <img src="/img/page-list-02.png" alt="Icon" />
                          <span>{recomendation.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  {data.news.map((newItem) => (
                    <div
                      key={newItem.id}
                      className="big-news-card section-indent mobile-wide"
                    >
                      <div className="big-news-card__body">
                        <div className="big-news-card__top">
                          <div className="big-news-card__group">
                            <span className="big-news-card__author">
                              <img src="/img/user-02.jpg" alt="Image" />
                              <span>{newItem.author}</span>
                            </span>
                            <span className="big-news-card__time">
                              {newItem.date}
                            </span>
                          </div>
                          <div className="big-news-card__group">
                            <button className="big-news-card__control">
                              <ReactSVG src="/img/sprite/icon-bookmarks.svg" />
                            </button>
                          </div>
                        </div>
                        <Link
                          href={`/news/${newItem.id}`}
                          className="big-news-card__title"
                        >
                          {newItem.name}
                        </Link>
                      </div>
                      <Link
                        href={`/news/${newItem.id}`}
                        className="big-news-card__img"
                      >
                        <img src="/img/big-news-img.jpg" alt="Image" />
                      </Link>
                    </div>
                  ))}
                </>
              }
              children2={<VideoWidget />}
            />

            <SectionLayout
              children1={<PopularVideos />}
              children2={<span className="layout__heading">тренды</span>}
            />
            <SectionLayout
              children1={<AudioPodcasts />}
              children2={<span className="layout__heading">аудиоподкасты</span>}
            />
            <SectionLayout
              children1={<LecturesBlock />}
              children2={<span className="layout__heading">лекции</span>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchRubrics());
    return {
      props: {},
    };
  }
);

export default Rubrics;
