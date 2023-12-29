import React, { FC } from "react";
import Footer from "../../components/footer";
import SecondSidebar from "../../components/sidebar/secondSidebar";
import WebinarCard from "../../components/pageLawyersClub/webinarCard";
import { WebinarType } from "../../redux/webinars/types";
import { server } from "../../utils/server";
import OldWebinerItem from "../../components/pageLawyersClub/oldWebinarItem";

interface LawyersClubProps {
  actualWebinars: WebinarType[];
  oldWebinars: WebinarType[];
}

const LawyersClub: FC<LawyersClubProps> = ({ oldWebinars, actualWebinars }) => {
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
                {actualWebinars?.map((webinar) => (
                  <WebinarCard key={webinar.id} webinar={webinar} />
                ))}
                <div className="webinar-grid section-indent section-indent--lg">
                  <h3 className="webinar-grid__head">Прошедшие встречи</h3>
                  {oldWebinars?.map(
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

export const getStaticProps = async () => {
  const actual = await server.get("/sw/v1/publications/?iblockid=11", {
    params: {
      width: 450,
      height: 300,
      webinar: "actual",
      limit: 15,
    },
  });
  const old = await server.get(
    "/sw/v1/publications/?iblockid=11&webinar=old&limit=10"
  );
  return {
    props: {
      actualWebinars: actual.data.datas,
      oldWebinars: old.data.datas,
    },
  };
};

export default LawyersClub;
