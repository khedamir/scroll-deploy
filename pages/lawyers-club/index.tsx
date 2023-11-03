import React from "react";
import Footer from "../../components/footer";
import SecondSidebar from "../../components/sidebar/secondSidebar";
import WebinarCard from "../../components/pageLawyersClub/webinarCard";
import WebinerItem from "../../components/pageLawyersClub/webinerItem";
import { fetchWebinars } from "../../redux/webinars/asyncAction";
import { wrapper } from "../../redux/store";
import { selectWebinars } from "../../redux/webinars/slice";
import { useSelector } from "react-redux";

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
                  {data.datas.map(
                    (web, id) =>
                      id % 2 !== 0 &&
                      id !== 0 && (
                        <WebinerItem
                          key={web.id}
                          webinars={[web, data.datas[id - 1]]}
                        />
                      )
                  )}
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
