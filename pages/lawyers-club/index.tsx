import React, { FC } from "react";
import Footer from "../../components/footer";
import SecondSidebar from "../../components/sidebar/secondSidebar";
import WebinarCard from "../../components/pageLawyersClub/webinarCard";
import { fetchWebinars } from "../../redux/webinars/asyncAction";
import { wrapper } from "../../redux/store";
import { selectWebinars } from "../../redux/webinars/slice";
import { useSelector } from "react-redux";
import { WebinarType } from "../../redux/webinars/types";
import { server } from "../../utils/server";
import OldWebinerItem from "../../components/pageLawyersClub/oldWebinarItem";

interface LawyersClubProps {
  oldWebinars: WebinarType[];
}

const LawyersClub: FC<LawyersClubProps> = ({ oldWebinars }) => {
  const { data } = useSelector(selectWebinars);
  console.log(oldWebinars);
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
                  {oldWebinars.map(
                    (web, id) =>
                      id % 2 !== 0 &&
                      id !== 0 &&
                      oldWebinars[id - 1] && (
                        <OldWebinerItem
                          key={web.id}
                          webinars={[web, oldWebinars[id - 1]]}
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
    await store.dispatch(fetchWebinars({ limit: 15, webinar: "actual" }));
    const { data } = await server.get(
      "/sw/v1/publications/?iblockid=11&webinar=old&limit=10"
    );
    return {
      props: {
        oldWebinars: data.datas,
      },
    };
  }
);

export default LawyersClub;
