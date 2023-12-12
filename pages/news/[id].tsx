import React, { FC, useState } from "react";
import Footer from "../../components/footer";
import { ReactSVG } from "react-svg";
import Comments from "../../components/comments";
import Sidebar from "../../components/sidebar/sidebar";
import LegalAdviceWidget from "../../components/widgets/legalAdviceWidget";
import MediaControls from "../../components/mediaControls";
import Link from "next/link";
import { server } from "../../utils/server";
import RenderHTML from "../../components/renderHTML";
import { formatDateDifference } from "../../utils/formatDate";
import LegalAdvice from "../../components/modals/legalAdvice";
import { FullNewType } from "../../redux/types";
import Tags from "../../components/tags";
import NewAuthor from "../../components/pageNew/newAuthor";
import { getAnchorsId } from "../../utils/getAnchorsId";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/slice";
import { FavoriteNew } from "../../redux/favorites/types";
import { useModalsContext } from "../../context/ModalsContext";
import { useFavoriteContext } from "../../context/FavoritesContext";
import { isElementInFavorites } from "../../redux/favorites/slice";
import { AppState, wrapper } from "../../redux/store";
import MoreNews from "../../components/pageNew/moreNews";
import { fetchNews } from "../../redux/news/asyncAction";
import { useSetCookie } from "../../hooks";
import NewContent from "../../components/pageNew/newContent";
import { selectComments } from "../../redux/comments/slice";
import getCommentCountWord from "../../utils/getCommentCountWord";

interface NewProps {
  publication: FullNewType;
  recommendationNews: FullNewType[];
}

const New: FC<NewProps> = ({ publication, recommendationNews }) => {
  console.log(publication);
  const router = useRouter();
  useSetCookie(`/news/${router.query.id}`, String(router.query.id));

  const [modalActive, setModalActive] = useState(false);
  const { user } = useSelector(selectUser);
  const { all_comments_count } = useSelector(selectComments);
  const { setLoginActive } = useModalsContext();
  const { addFavorite, deleteFavorite } = useFavoriteContext();
  const isFavorite = useSelector((state: AppState) =>
    isElementInFavorites(state, "9", publication.id)
  );

  const changeFavorite = () => {
    if (!user) {
      setLoginActive(true);
      return;
    }

    if (isFavorite) {
      deleteFavorite({ itemId: publication.id, sectionId: "9" });
    }

    if (!isFavorite) {
      const favoriteItem: FavoriteNew = {
        id: publication.id,
        data: {
          NAME: publication.name,
          props: {
            PUB_TAG: {
              VALUE: publication.props.PUB_TAG.VALUE,
            },
          },
        },
      };
      addFavorite({
        itemId: publication.id,
        sectionId: "9",
        newItem: favoriteItem,
      });
    }
  };

  return (
    <>
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
                            <span>
                              {formatDateDifference(publication.date)}
                            </span>
                          </div>
                        </div>
                        <div className="media-block">
                          <picture className="media-block__photo">
                            <img src={`${publication.images[1]}`} alt="" />
                            <Link href="#" className="media-block__comments">
                              <ReactSVG src="/img/sprite/icon-comment.svg" />
                              <span>
                                {getCommentCountWord(all_comments_count)}
                              </span>
                            </Link>
                          </picture>
                          <MediaControls
                            likes={publication.likes}
                            liked={publication.liked}
                            views={publication.views}
                            publication_id={publication.id}
                            favorited={isFavorite}
                            changeFavorite={changeFavorite}
                            otherClassName="media-block__controls"
                          />
                        </div>
                        <NewContent
                          widgetTitle={publication.props.WIDGET?.VALUE[0]}
                          content={publication.content}
                          recommendationNews={recommendationNews}
                          setModalActive={setModalActive}
                        />
                        <p className="small-description">
                          <span>Краткое резюме статьи: </span>
                          <RenderHTML content={publication.anons} />
                        </p>
                        <Tags tags={publication.props.PUB_TAG} />
                      </div>
                      <Comments
                        id_publication={publication.id}
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
      <MoreNews />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { query } = context;
    try {
      const fetchNew = async (itemId: string) => {
        const { data } = await server.get(`/sw/v1/publications/?id=${itemId}`);
        return data.datas[Number(itemId)];
      };

      // запрос активной новости
      const publication: FullNewType = await fetchNew(String(query.id));

      const rubricId = store
        .getState()
        .rubrics.rubrics.find(
          (item) => item.NAME === publication.props.PUB_RUBRIC.VALUE[0]
        )?.ID;
      await store.dispatch(
        fetchNews({ limit: 25, page: 1, rubric: Number(rubricId) })
      );

      // получение рекомендаций новостей
      const listId = getAnchorsId(publication.content);
      const recommendationNews: FullNewType[] = [];
      const fetchRecommendationPromises = listId.map((item) =>
        fetchNew(String(item))
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
  }
);

export default New;
