import React, { FC, useEffect, useState } from "react";
import Swiper from "swiper";
import MoreNewItem from "./moreNewItem";
import MoreNewsGrup from "./moreNewsGrup";
import { NewType, RubricType } from "../../redux/types";
import { fetchNews } from "../../server/content";


interface MoreNewProps {
  rubrics: RubricType[];
  rubricName: string;
}

const MoreNews: FC<MoreNewProps> = ({ rubrics, rubricName }) => {
  const [news, setNews] = useState<NewType[]>([]);
  const rubricId = rubrics.find((item) => item.NAME === rubricName)?.ID;

  useEffect(() => {
    const swiper = new Swiper(".more-topic__slider .swiper", {
      slidesPerView: "auto",
      spaceBetween: 16,
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  useEffect(() => {
    fetchNews({ limit: 25, rubric: Number(rubricId) }).then((result) => {
      setNews(result.datas);
    });
  }, [rubricName]);

  const newsComponents = [];
  for (let i = 0; i < news.length; i += 6) {
    const individualNews = news.slice(i, i + 3);
    const threeNewsCard = news.slice(i + 3, i + 6);
    newsComponents.push(
      <React.Fragment key={i}>
        {individualNews.map((item) => (
          <MoreNewItem key={item.id} item={item} rubricId={rubricId} />
        ))}
        <MoreNewsGrup items={threeNewsCard} rubricId={rubricId} />
      </React.Fragment>
    );
  }

  return (
    <div className="more-topic">
      <div className="container">
        <div className="more-topic__top">
          <h2 className="more-topic__heading">Еще по теме</h2>
        </div>
        <div className="more-topic__slider">
          <div className="more-topic__slider-wrapper">
            <div className="swiper">
              <div className="swiper-wrapper">{newsComponents}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreNews;
