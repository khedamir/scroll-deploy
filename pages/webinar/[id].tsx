import React, { FC } from "react";
import Footer from "../../components/footer";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import AuthorItem from "../../components/pageWebinar/authorItem";
import RegisterBlock from "../../components/pageWebinar/registerBlock";
import { server } from "../../utils/server";
import OldWebinerItem from "../../components/pageLawyersClub/oldWebinarItem";
import { FullWebinarType } from "../../redux/types";
import RenderHTML from "../../components/renderHTML";
import { useRouter } from "next/router";
import OldWebinars from "../../components/pageWebinar/oldWebinars";

interface WebinarProps {
  publication: FullWebinarType;
  // oldWebinars: any[];
}

const Webinar: FC<WebinarProps> = ({ publication }) => {
  const router = useRouter();

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
                          {publication.props.DATE_WEBINAR.VALUE.slice(0, -3)}
                        </span>
                        {router.query.webinar !== "old" && (
                          <button className="c-notification webinar__notification">
                            <ReactSVG
                              className="c-notification__icon c-notification__icon--default"
                              src="/img/sprite/icon-notifications.svg"
                            />
                            <ReactSVG
                              className="c-notification__icon c-notification__icon--filled"
                              src="/img/sprite/icon-notifications-filled.svg"
                            />
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
                      publication.props.VIDEO && (
                        <div className="webinar__block">
                          <p>Запись вебинара</p>
                        </div>
                      )
                    ) : (
                      <RegisterBlock
                        event_name={publication.name}
                        description={publication.props.PRISE_SLOGAN?.VALUE}
                      />
                    )}
                  </div>
                </div>
                <OldWebinars />
              </div>
              <div className="layout__right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context: { params: { id: any } }) => {
  try {
    const { data } = await server.get(
      `/sw/v1/publications/?id=${context.params?.id}`
    );
    // const oldWebinars = await server.get(
    //   "/sw/v1/publications/?iblockid=11&webinar=old&limit=10"
    // );

    return {
      props: {
        publication: data.datas[Number(context.params?.id)],
        // oldWebinars: oldWebinars.data.datas,
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
};

export default Webinar;
