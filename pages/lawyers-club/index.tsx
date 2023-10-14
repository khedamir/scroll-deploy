import React from "react";
import Footer from "../../components/footer";
import SecondSidebar from "../../components/sidebar/secondSidebar";
import WebinarCard from "../../components/pageLawyersClub/webinarCard";
import WebinerItem from "../../components/pageLawyersClub/webinerItem";
import { fetchWebinars } from "../../redux/webinars/asyncAction";
import { wrapper } from "../../redux/store";
import { selectWebinars } from "../../redux/webinars/slice";
import { useSelector } from "react-redux";

const items = {
  webinars: [
    {
      id: 1,
      title:
        "Все о заработной плате: по закону согласно ст. 136 трудового кодекса",
      author: "Юрий Алексеев",
      date: "29 июля 14:00",
    },
  ],
  pastWebinar: [
    {
      id: 1,
      title: "Мосбиржа переведет акции и облигации на режим торгов T+1",
      heading: "Что будет с рублем в этом году",
      author: "Юрий Алексеев",
    },
    {
      id: 2,
      title: "Мосбиржа переведет акции и облигации на режим торгов T+1",
      heading: "Что будет с рублем в этом году",
      author: "Юрий Алексеев",
    },
  ],
};

const LawyersClub = () => {
  const { data } = useSelector(selectWebinars);
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
                {data.datas.map((webinar) => (
                  <WebinarCard key={webinar.id} webinar={webinar} />
                ))}
                <div className="webinar-grid section-indent section-indent--lg">
                  <h3 className="webinar-grid__head">Прошедшие встречи</h3>
                  {items.pastWebinar.map((web) => (
                    <WebinerItem key={web.id} webinar={web} />
                  ))}
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
    await store.dispatch(fetchWebinars({ limit: 15 }));
    return {
      props: {},
    };
  }
);

export default LawyersClub;
