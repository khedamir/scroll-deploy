import React, { FC } from "react";
import Footer from "../../components/footer";
import Comments from "../../components/comments";
import SecondSidebar from "../../components/sidebar/secondSidebar";
import MediaControls from "../../components/mediaControls";
import MediaContent from "../../components/mediaContent";
import { baseURL, server } from "../../utils/server";
import { formatDateDifference } from "../../utils/formatDate";
import { FullVideoType } from "../../redux/types";
import { GetServerSideProps } from "next";
import { extractVideoId } from "../../utils/extractVideoId";

interface VideoProps {
  publication: FullVideoType;
}

const Video: FC<VideoProps> = ({ publication }) => {
  console.log(publication);
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
                <div className="video mobile-wide">
                  {publication.props.LINK_VIDEO && (
                    <div className="video__media">
                      <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${extractVideoId(
                          publication.props.LINK_VIDEO.VALUE[0]
                        )}`}
                        title="YouTube Video"
                        allowFullScreen
                      />
                    </div>
                  )}
                  <div className="video__main">
                    <div className="video__body">
                      <h3 className="video__heading">{publication.name}</h3>
                      <div className="video__inner">
                        <a href="#" className="video__author">
                          <img
                            src={`${publication.images[1]}`}
                            alt="Image"
                          />
                          <span>{publication.props.PUB_AUTOR.VALUE[0]}</span>
                        </a>
                        <span className="video__time">
                          {formatDateDifference(publication.date)}
                        </span>
                      </div>
                    </div>
                    <MediaControls
                      likes={publication.likes}
                      liked={publication.liked}
                      views={publication.views}
                      publication_id={publication.id}
                    />
                    <MediaContent content={publication.content} />
                  </div>
                  <Comments otherClassName="video__comments" />
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

export const getServerSideProps: GetServerSideProps<VideoProps> = async (
  context
) => {
  const { id } = context.params || {};
  try {
    const { data } = await server.get(`/sw/v1/publications/?id=${id}`);

    return {
      props: {
        publication: data.datas[Number(id)],
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

export default Video;
