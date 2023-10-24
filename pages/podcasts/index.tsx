import React from "react";
import LeftMenu from "../../components/sidebar/sidebar";
import Footer from "../../components/footer";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import SecondSidebar from "../../components/sidebar/secondSidebar";
import PodcastItem from "../../components/pagePodcasts/podcastItem";
import { selectPodcasts } from "../../redux/podcasts/slice";
import { useSelector } from "react-redux";
import { fetchPodcasts } from "../../redux/podcasts/asyncAction";
import { wrapper } from "../../redux/store";

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

const Podcasts = () => {
  const { data } = useSelector(selectPodcasts);
  console.log(data);
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
                    {data.datas.map((podcast) => (
                      <PodcastItem key={podcast.id} podcast={podcast} />
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchPodcasts({ limit: 15 }));
    return {
      props: {},
    };
  }
);

export default Podcasts;
