import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import Swiper from "swiper";
import { selectNews } from "../../redux/news/slice";
import MoreNewItem from "./moreNewItem";
import MoreNewsGrup from "./moreNewsGrup";
import { useAppDispatch } from "../../redux/store";
import { selectRubrics } from "../../redux/rubrics/slice";
import { fetchNews } from "../../redux/news/asyncAction";

interface MoreNewProps {
  rubricName: string;
}

const MoreNews: FC<MoreNewProps> = ({ rubricName }) => {
  const { data } = useSelector(selectNews);
  const dispatch = useAppDispatch();
  const { rubrics } = useSelector(selectRubrics);

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
    const rubricId = rubrics.find((item) => item.NAME === rubricName)?.ID;
    dispatch(fetchNews({ limit: 25, page: 1, rubric: Number(rubricId) }));
  }, [rubricName]);

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
