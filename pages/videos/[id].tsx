import React, { FC } from "react";
import Footer from "../../components/footer";
import Comments from "../../components/comments";
import SecondSidebar from "../../components/sidebar/secondSidebar";
import MediaControls from "../../components/mediaControls";
import MediaContent from "../../components/mediaContent";
import { server } from "../../utils/server";
import { formatDateDifference } from "../../utils/formatDate";
import { FullVideoType } from "../../redux/types";
import { extractVideoId } from "../../utils/extractVideoId";
import { useSelector } from "react-redux";
import { isElementInFavorites } from "../../redux/favorites/slice";
import { AppState } from "../../redux/store";
import { useFavoriteContext } from "../../context/FavoritesContext";
import { FavoriteVideo } from "../../redux/favorites/types";
import Image from "next/image";
import { useRouter } from "next/router";
import Loader from "../../components/loader";
import { fetchNew } from "../../server/content";

interface VideoProps {
  publication: FullVideoType;
}

const Video: FC<VideoProps> = ({ publication }) => {
  const { addFavorite, deleteFavorite } = useFavoriteContext();
  const router = useRouter();
  const isFavorite = useSelector((state: AppState) =>
    isElementInFavorites(state, "15", String(router.query.id))
  );

  if (router.isFallback) {
    return <Loader text="Идет загрузка" />;
  }

  const changeFavorite = () => {
    if (isFavorite) {
      deleteFavorite({ itemId: publication.id, sectionId: "15" });
    }

    if (!isFavorite) {
      const favoriteItem: FavoriteVideo = {
        id: publication.id,
        data: {
          images: {
            detail: "",
            preview: publication.images[0],
          },
          NAME: publication.name,
        },
      };
      addFavorite({
        itemId: publication.id,
        sectionId: "15",
        videoItem: favoriteItem,
      });
    }
  };

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
                          <Image
                            width={32}
                            height={32}
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
                      favorited={isFavorite}
                      changeFavorite={changeFavorite}
                    />
                    <MediaContent content={publication.content} />
                  </div>
                  <Comments
                    id_publication={publication.id}
                    iblockId={"15"}
                    otherClassName="video__comments"
                  />
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

export const getStaticPaths = async () => {
  try {
    const { data } = await server.get(`/sw/v1/publications/?iblockid=15`);
    const news = data.datas || [];
    const paths = news.map((newItem: { id: string }) => ({
      params: { id: newItem?.id?.toString() || "" },
    }));
    return { paths, fallback: true };
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    throw error;
  }
};

export const getStaticProps = async (context: { params: { id: any } }) => {
  const publication: FullVideoType = await fetchNew(String(context.params?.id));

  return {
    props: {
      publication: publication,
    },
  };
};

export default Video;
