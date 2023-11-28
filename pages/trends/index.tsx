import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import SecondSidebar from "../../components/sidebar/secondSidebar";
import { ReactSVG } from "react-svg";
import Swiper from "swiper";
import { wrapper } from "../../redux/store";
import { fetchTrends } from "../../redux/trends/asyncAction";
import { useSelector } from "react-redux";
import { selectTrands } from "../../redux/trends/slice";
import TrendItem from "../../components/pageTrends/trendItem";

const Trends = () => {
  const { data } = useSelector(selectTrands);
  useEffect(() => {
    const swiper = new Swiper(".trands__slider .swiper", {
      direction: "vertical",
      slidesPerView: "auto",
      spaceBetween: 8,
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

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
                <div className="trands">
                  <div className="trands__slider mobile-wide">
                    <div className="swiper">
                      <div className="swiper-wrapper">
                        {data.datas.map((trend) => (
                          <TrendItem key={trend.id} trend={trend} />
                        ))}
                      </div>
                    </div>
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
    await store.dispatch(fetchTrends({ limit: 15 }));
    return {
      props: {},
    };
  }
);

export default Trends;