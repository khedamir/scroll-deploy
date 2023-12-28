import React, { FC, useState } from "react";
import Footer from "../../components/footer";
import Comments from "../../components/comments";
import Sidebar from "../../components/sidebar/sidebar";
import LegalAdviceWidget from "../../components/widgets/legalAdviceWidget";
import { server } from "../../utils/server";
import RenderHTML from "../../components/renderHTML";
import LegalAdvice from "../../components/modals/legalAdvice";
import { FullNewType, RubricType } from "../../redux/types";
import Tags from "../../components/tags";
import NewAuthor from "../../components/pageNew/newAuthor";
import { useRouter } from "next/router";
import MoreNews from "../../components/pageNew/moreNews";
import { useSetCookie } from "../../hooks";
import NewContent from "../../components/pageNew/newContent";
import { GetStaticPaths } from "next";
import Loader from "../../components/loader";
import { fetchNew } from "../../server/content";
import NewHeader from "../../components/pageNew/newHeader";

interface NewProps {
  rubrics: RubricType[];
  publication: FullNewType;
}

const New: FC<NewProps> = ({ publication, rubrics }) => {
  const [modalActive, setModalActive] = useState(false);

  const router = useRouter();
  useSetCookie(`/news/${router.query.id}`, String(router.query.id));

  if (router.isFallback) {
    return <Loader text="Идет загрузка" />;
  }

  return (
    <>
      <div className="layout layout--sticky-bottom">
        <LegalAdvice active={modalActive} setActive={setModalActive} />
        <div className="container">
          <div className="layout__wrap layout__wrap--padding">
            <div className="layout__left">
              <Sidebar rubrics={[]} />
              <Footer />
            </div>
            <div className="layout__main">
              <div className="layout__main-wrapper">
                <div className="layout__center">
                  <div className="big-news mobile-wide">
                    <div className="big-news__wrap">
                      <div className="big-news__content content">
                        <NewHeader publication={publication} />
                        <NewContent
                          widgetTitle={publication.props.WIDGET?.VALUE[0]}
                          content={publication.content}
                          setModalActive={setModalActive}
                        />
                        <p className="small-description">
                          <span>Краткое резюме статьи: </span>
                          <RenderHTML content={publication.anons} />
                        </p>
                        <Tags tags={publication.props.PUB_TAG} />
                      </div>
                      <Comments
                        id_publication={String(router.query.id)}
                        iblockId={"9"}
                      />
                    </div>
                  </div>
                </div>
                <div className="layout__right">
                  <div className="layout__sticky-block">
                    <NewAuthor newItem={publication} />
                  </div>
                  {publication.props.WIDGET && (
                    <LegalAdviceWidget
                      title={publication.props.WIDGET.VALUE[0]}
                      setModalActive={setModalActive}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MoreNews rubricName={publication.props.PUB_RUBRIC.VALUE[0]} />
    </>
  );
};

export const getStaticPaths = (async () => {
  try {
    const { data } = await server.get(`/sw/v1/publications/?iblockid=9`);
    const news = data.datas || [];

    const paths = news.map((newItem: { id: string }) => ({
      params: { id: newItem?.id?.toString() || "" },
    }));

    return { paths, fallback: true };
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    throw error;
  }
}) satisfies GetStaticPaths;

export const getStaticProps = async (context: { params: { id: any } }) => {
  const publication: FullNewType = await fetchNew(String(context.params?.id));

  return {
    props: {
      publication: publication,
    },
  };
};

export default New;
