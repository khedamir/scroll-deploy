import React, { FC } from "react";
import Footer from "../../components/footer";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import AuthorItem from "../../components/pageWebinar/authorItem";
import RegisterBlock from "../../components/pageWebinar/registerBlock";
import { wrapper } from "../../redux/store";
import { fetchWebinars } from "../../redux/webinars/asyncAction";
import { useSelector } from "react-redux";
import { selectWebinars } from "../../redux/webinars/slice";
import { server } from "../../utils/server";
import { WebinarType } from "../../redux/webinars/types";
import OldWebinerItem from "../../components/pageLawyersClub/oldWebinarItem";
import { FullWebinarType } from "../../redux/types";
import RenderHTML from "../../components/renderHTML";
import { useRouter } from "next/router";
import { extractVideoId } from "../../utils/extractVideoId";

interface WebinarProps {
  publication: FullWebinarType;
  oldWebinars: WebinarType[];
}

const Webinar: FC<WebinarProps> = ({ publication, oldWebinars }) => {
  const { data } = useSelector(selectWebinars);
  const router = useRouter();
  console.log(publication);

  return (
    <div className="layout">
      <div className="container">
        <div className="layout__wrap">
          <div className="layout__left">
            <Footer otherClassName="layout__footer" />
          </div>
          <div className="layout__main">
            <div className="layout__main-wrapper">
              <div className="layout__center">
                <div className="webinar mobile-wide">
                  <div className="webinar__wrap">
                    <div className="webinar__top">
                      <div className="webinar__group">
                        <span className="webinar__time">
                          {data.datas[0].poperties.DATE_WEBINAR.slice(0, -3)}
                        </span>
                        {router.query.webinar !== "old" && (
                          <button className="webinar__notification">
                            <ReactSVG src="/img/sprite/icon-notifications.svg" />
                          </button>
                        )}
                      </div>
                      <div className="webinar__group">
                        <Link href="/lawyers-club" className="webinar__close">
                          <ReactSVG src="/img/sprite/icon-close-thin.svg" />
                        </Link>
                      </div>
                    </div>
                    <div className="webinar__body">
                      <h1 className="webinar__heading">{publication.name}</h1>
                      <p className="webinar__description">
                        <RenderHTML content={publication.content} />
                      </p>
                    </div>
                    <div className="webinar__block">
                      <h3 className="webinar__title">Спикеры</h3>
                      <div className="webinar__speakers">
                        {publication.props.FIO_SPIKERS?.VALUE.map(
                          (author, id) => (
                            <AuthorItem
                              key={id}
                              fio={author}
                              photo={publication.props.FOTO_SPIKERS?.VALUE[id]}
                              position={
                                publication.props.PROF_SPIKERS?.VALUE[id]
                              }
                            />
                          )
                        )}
                      </div>
                    </div>
                    <div className="webinar__themes">
                      <div className="webinar__theme">
                        <h3 className="webinar__title">Основные темы</h3>
                        <ul className="webinar__list">
                          {publication.props.THEME_EVENTS?.VALUE.map(
                            (theme, id) => (
                              <li key={id} className="webinar__list-item">
                                <a href="#" className="webinar__link">
                                  {theme}
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                      {router.query.webinar !== "old" && (
                        <div className="webinar__theme">
                          <h3 className="webinar__title">Стоимость</h3>
                          <ul className="webinar__list">
                            <li className="webinar__list-item">
                              <span className="webinar__text">
                                {publication.props.PRISE_EVENTS?.VALUE}
                              </span>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                    {router.query.webinar === "old" ? (
                      publication.props.VIDEO_WEBINAR && (
                        <div className="webinar__block">
                          <p>Запись вебинара</p>
                          <br />
                          <div className="video__media">
                            <iframe
                              width="560"
                              height="315"
                              src={`https://www.youtube.com/embed/${extractVideoId(
                                publication.props.VIDEO_WEBINAR.VALUE[0]
                              )}`}
                              title="YouTube Video"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      )
                    ) : (
                      <RegisterBlock
                        description={publication.props.PRISE_SLOGAN?.VALUE}
                      />
                    )}
                  </div>
                </div>
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
  (store) => async (context) => {
    const { id } = context.params || {};
    try {
      await store.dispatch(fetchWebinars({ limit: 15 }));
      const { data } = await server.get(`/sw/v1/publications/?id=${id}`);
      const oldWebinars = await server.get(
        "/sw/v1/publications/?iblockid=11&webinar=old&limit=10"
      );

      return {
        props: {
          publication: data.datas[Number(id)],
          oldWebinars: oldWebinars.data.datas,
        },
      };
    } catch (error) {
      return {
        redirect: {
          destination: "/server-error",
          permanent: false,
        },
      };
    }
  }
);

export default Webinar;
