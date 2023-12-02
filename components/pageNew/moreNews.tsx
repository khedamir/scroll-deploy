import Link from "next/link";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ReactSVG } from "react-svg";
import Swiper from "swiper";
import { selectNews } from "../../redux/news/slice";
import MoreNewItem from "./moreNewItem";
import MoreNewsGrup from "./moreNewsGrup";

const MoreNews = () => {
  const { data } = useSelector(selectNews);

  useEffect(() => {
    const swiper = new Swiper(".more-topic__slider .swiper", {
      slidesPerView: "auto",
      spaceBetween: 16,
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  const newsComponents = [];
  for (let i = 0; i < data.datas.length; i += 6) {
    const individualNews = data.datas.slice(i, i + 3);
    const threeNewsCard = data.datas.slice(i + 3, i + 6);
    newsComponents.push(
      <React.Fragment key={i}>
        {individualNews.map((item) => (
          <MoreNewItem key={item.id} item={item} />
        ))}
        <MoreNewsGrup items={threeNewsCard} />
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
