import React, { FC, useEffect, useState } from "react";
import Footer from "../../components/footer";
import { GetServerSideProps } from "next";
import { ReactSVG } from "react-svg";
import Comments from "../../components/comments";
import Sidebar from "../../components/sidebar/sidebar";
import LegalAdviceWidget from "../../components/widgets/legalAdviceWidget";
import MediaControls from "../../components/mediaControls";
import Link from "next/link";
import { baseURL, server } from "../../utils/server";
import RenderHTML from "../../components/renderHTML";
import { formatDateDifference } from "../../utils/formatDate";
import LegalAdvice from "../../components/modals/legalAdvice";
import { FullNewType } from "../../redux/types";
import Tags from "../../components/tags";
import NewAuthor from "../../components/pageNew/newAuthor";
import RecomendationNew from "../../components/pageNew/recomendationNew";
import { getAnchorsId } from "../../utils/getAnchorsId";
import { useRouter } from "next/router";

interface NewProps {
  publication: FullNewType;
  recommendationNews: FullNewType[];
}

const New: FC<NewProps> = ({ publication, recommendationNews }) => {
  console.log(publication);
  const [modalActive, setModalActive] = useState(false);
  const anchorRegex = /<a name="\d+"><\/a>/;
  const articleParts = publication.content.split(anchorRegex);

  return (
    <div className="layout layout--sticky-bottom">
      <LegalAdvice active={modalActive} setActive={setModalActive} />
      <div className="container">
        <div className="layout__wrap layout__wrap--padding">
          <div className="layout__left">
            <Sidebar />
            <Footer />
          </div>
          <div className="layout__main">
            <div className="layout__main-wrapper">
              <div className="layout__center">
                <div className="big-news mobile-wide">
                  <div className="big-news__wrap">
                    <div className="big-news__content content">
                      <h1>{publication.name}</h1>
                      <div className="description-block">
                        <div className="description-block__inner">
                          <span>{publication.props.PUB_RUBRIC.VALUE[0]}</span>
                          <span>{formatDateDifference(publication.date)}</span>
                        </div>
                      </div>
                      <div className="media-block">
                        <picture className="media-block__photo">
                          <img src={`${publication.images[1]}`} alt="" />
                          <Link href="#" className="media-block__comments">
                            <ReactSVG src="/img/sprite/icon-comment.svg" />
                            <span>5 комментариев</span>
                          </Link>
                        </picture>
                        <MediaControls
                          likes={publication.likes}
                          liked={publication.liked}
                          views={publication.views}
                          publication_id={publication.id}
                          otherClassName="media-block__controls"
                        />
                      </div>
                      {articleParts.map((part, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && (
                            <RecomendationNew
                              newItem={recommendationNews[index - 1]}
                            />
                          )}
                          <RenderHTML content={part} />
                        </React.Fragment>
                      ))}
                      <p className="small-description">
                        <span>Краткое резюме статьи: </span>
                        <RenderHTML content={publication.anons} />
                      </p>
                      <Tags tags={publication.props.PUB_TAG} />
                    </div>
                    <Comments />
                  </div>
                </div>
              </div>
              <div className="layout__right">
                <div className="layout__sticky-block">
                  {publication.props.PUB_SOURCE ? (
                    <NewAuthor
                      PUB_SOURCE={publication.props.PUB_SOURCE}
                      PUB_SOURCE_LOGO={publication.props.PUB_SOURCE_LOGO}
                    />
                  ) : (
                    <NewAuthor
                      author_name={publication.author_name}
                      author_surname={publication.author_surname}
                      author_photo={publication.author_photo}
                    />
                  )}
                </div>
                <LegalAdviceWidget setModalActive={setModalActive} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<NewProps> = async (
  context
) => {
  const { id } = context.params || {};
  try {
    const fetchNews = async (itemId: string) => {
      const { data } = await server.get(`/sw/v1/publications/?id=${itemId}`);
      return data.datas[Number(itemId)];
    };

    const publication = await fetchNews(String(id));

    const listId = getAnchorsId(publication.content);
    const recommendationNews: FullNewType[] = [];

    const fetchRecommendationPromises = listId.map((item) =>
      fetchNews(String(item))
    );

    await Promise.all(fetchRecommendationPromises).then((recommendations) => {
      recommendationNews.push(...recommendations);
    });

    return {
      props: {
        publication: publication,
        recommendationNews: recommendationNews,
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

export default New;
