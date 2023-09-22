import React from "react";
import Footer from "../../components/footer";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import VideoWidget from "../../components/widgets/video";
import SectionLayout from "../../components/mainPageComponents/sectionLayout";
import PopularVideos from "../../components/mainPageComponents/popularVideos";
import AudioPodcasts from "../../components/mainPageComponents/audioPodcasts";
import LectionsBlock from "../../components/mainPageComponents/lecturesBlock";
import Sidebar from "../../components/sidebar/sidebar";

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
              children1={
                <>
                  <h1 className="layout__head">Пособия</h1>
                  <div className="page-list">
                    <div className="page-list__wrapper">
                      <Link href="#" className="page-list__item">
                        <img src="/img/page-list-05.png" alt="Icon" />
                        <span>
                          В Берлине сообщили о решении выслать немецких
                          служащих. В Берлине сообщили о решении выслать
                          немецких служащих
                        </span>
                      </Link>
                      <Link href="#" className="page-list__item">
                        <img src="/img/page-list-01.png" alt="Icon" />
                        <span>
                          Дагестан с начала 2023г. в 5 раз увеличил гарантийную
                          поддержку бизнеса
                        </span>
                      </Link>
                      <Link href="#" className="page-list__item">
                        <img src="/img/page-list-02.png" alt="Icon" />
                        <span>
                          Мнение: льготная ипотека на «вторичку» уравновесит
                          цены на жилье в ЮФО
                        </span>
                      </Link>
                      <Link href="#" className="page-list__item">
                        <img src="/img/page-list-03.png" alt="Icon" />
                        <span>
                          Шесть регионов СКФО стали аутсайдерами рейтинга
                          благосостояния населения
                        </span>
                      </Link>
                      <Link href="#" className="page-list__item">
                        <img src="/img/page-list-04.png" alt="Icon" />
                        <span>
                          Компании Маска Neuralink разрешили испытывать чипы на
                          мозгах людей.
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="big-news-card section-indent mobile-wide">
                    <div className="big-news-card__body">
                      <div className="big-news-card__top">
                        <div className="big-news-card__group">
                          <span className="big-news-card__author">
                            <img src="/img/user-02.jpg" alt="Image" />
                            <span>Александр Македонский</span>
                          </span>
                          <span className="big-news-card__time">
                            30 минут назад
                          </span>
                        </div>
                        <div className="big-news-card__group">
                          <button className="big-news-card__control">
                            <ReactSVG src="/img/sprite/icon-bookmarks.svg" />
                          </button>
                        </div>
                      </div>
                      <Link href="#" className="big-news-card__title">
                        Внешнеторговый оборот Кабардино-Балкарии вырос в 1,2
                        раза в 2022 году
                      </Link>
                    </div>
                    <Link href="#" className="big-news-card__img">
                      <img src="/img/big-news-img.jpg" alt="Image" />
                    </Link>
                  </div>
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
              children1={<LectionsBlock />}
              children2={<span className="layout__heading">лекции</span>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rubrics;
