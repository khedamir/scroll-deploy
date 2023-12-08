import React, { FC, useState } from "react";
import Footer from "../../components/footer";
import { ReactSVG } from "react-svg";
import SecondSidebar from "../../components/sidebar/secondSidebar";
import PodcastItem from "../../components/pagePodcasts/podcastItem";
import PodcastCard from "../../components/podcastCard";
import { AppState, useAppDispatch, wrapper } from "../../redux/store";
import { fetchPodcasts } from "../../redux/podcasts/asyncAction";
import { useSelector } from "react-redux";
import { selectPodcasts } from "../../redux/podcasts/slice";
import { server } from "../../utils/server";
import { FullPodcastType } from "../../redux/types";
import RenderHTML from "../../components/renderHTML";
import { selectUser } from "../../redux/auth/slice";
import { useModalsContext } from "../../context/ModalsContext";
import { changeFavoriteItem } from "../../utils/controls";
import { useFavoriteContext } from "../../context/FavoritesContext";
import {
  addToFavorites,
  areAllElementsInFavorites,
  isElementInFavorites,
  removeFromFavorites,
} from "../../redux/favorites/slice";
import { FavoritePodcast } from "../../redux/favorites/types";
import { AudioContextProvider } from "../../context/audioContext";
import AudioPlayer from "../../components/players/player";

interface PodcastProps {
  podcast: FullPodcastType;
}

const Podcast: FC<PodcastProps> = ({ podcast }) => {
  const { data } = useSelector(selectPodcasts);
  const { user } = useSelector(selectUser);
  const { setLoginActive } = useModalsContext();
  const dispatch = useAppDispatch();

  const editionsIdList = podcast.editions.map((item) => item.id);
  const isFullPodcastFavorite = useSelector((state: AppState) =>
    areAllElementsInFavorites(state, "34", editionsIdList)
  );

  const changeFavorite = () => {
    if (!user) {
      setLoginActive(true);
      return;
    }

    changeFavoriteItem({
      id: podcast.id,
      type: isFullPodcastFavorite
        ? "deleteEditionsPodcast"
        : "addEditionsPodcast",
      userId: user.id,
    }).then(() => {
      if (isFullPodcastFavorite) {
        podcast.editions.forEach((item) => {
          dispatch(
            removeFromFavorites({ sectionId: "34", elementId: item.id })
          );
        });
      } else {
        podcast.editions.forEach((item) => {
          const favoriteItem: FavoritePodcast = {
            id: item.id,
            data: {
              NAME: item.name,
              podcastId: podcast.id,
              podcastAuthor: podcast.props.AUTHOR_PODCAST.VALUE[0],
              podcastPhoto: podcast.images.preview,
              props: {
                EDITION: item.props.EDITION,
              },
            },
          };
          dispatch(addToFavorites({ sectionId: "34", element: favoriteItem }));
        });
      }
    });
  };

  return (
    <AudioContextProvider>
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
                  <div className="podcast podcasts">
                    <div className="podcast__wrapper">
                      <div className="podcast__wrapper-inner">
                        <div className="podcast__left">
                          <picture className="podcast__img">
                            <img src={podcast.images.preview} alt="Image" />
                          </picture>
                        </div>
                        <div className="podcast__right">
                          <div className="podcast__main">
                            <div className="podcast__body">
                              <h1 className="podcast__heading">
                                {podcast.name}
                              </h1>
                              <span className="podcast__text">
                                {podcast.props.AUTHOR_PODCAST.VALUE}
                              </span>
                            </div>
                            <div
                              onClick={changeFavorite}
                              className="podcast__additional"
                            >
                              <button
                                className={`podcast__favorites c-bookmark  ${
                                  isFullPodcastFavorite && "is--active"
                                }`}
                              >
                                <ReactSVG
                                  className="c-bookmark__icon c-bookmark__icon--default"
                                  src="/img/sprite/icon-bookmarks.svg"
                                />
                                <ReactSVG
                                  className="c-bookmark__icon c-bookmark__icon--filled"
                                  src="/img/sprite/icon-bookmarks.svg"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="podcast__description">
                        <RenderHTML content={podcast.content} />
                      </p>
                    </div>
                    <div className="podcast__wrapper">
                      <div className="podcasts__wide">
                        <span className="podcast__help">12 выпусков</span>
                        <div className="podcasts podcast__podcasts">
                          <div className="podcasts__wrapper">
                            {podcast.editions.map((edition) => (
                              <PodcastItem
                                key={edition.id}
                                podcast={edition}
                                podcastID={podcast.id}
                                podcastAuthor={
                                  podcast.props.AUTHOR_PODCAST.VALUE[0]
                                }
                                podcastPhoto={podcast.images.preview}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <AudioPlayer />
                </div>
                <div className="layout__right">
                  <div className="content-card">
                    <div className="content-card__wrapper">
                      {data.datas.map((podcast) => (
                        <PodcastCard key={podcast.id} podcast={podcast} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AudioContextProvider>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { id } = context.params || {};
    await store.dispatch(fetchPodcasts({ limit: 5 }));
    const { data } = await server.get(`/sw/v1/podcasts/?id=${id}`);
    return {
      props: {
        podcast: data.datas[Number(id)],
      },
    };
  }
);
export default Podcast;
