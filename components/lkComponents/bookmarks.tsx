import Link from "next/link";
import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { ReactSVG } from "react-svg";
import { selectFavorites } from "../../redux/favorites/slice";

interface BookmarksProps {
  active: boolean;
}

type ActiveBlockValue = "articles" | "video" | "audio";
type orientationValue = "vertical" | "horizontal";

const Bookmarks: FC<BookmarksProps> = ({ active }) => {
  const [activeBlock, setActiveBlock] = useState<ActiveBlockValue>("articles");
  const [orientation, setOrientation] = useState<orientationValue>("vertical");
  const { data } = useSelector(selectFavorites);
  return (
    <div className={`lk-tabs__wrapper ${active && "is--active"}`}>
      <div className="lk-bookmarks lk__main">
        <div className="lk-bookmarks__wrap">
          <ul className="lk-bookmarks__tabs">
            <li
              className={`lk-bookmarks__tabs-item ${
                activeBlock === "articles" && "is--active"
              }`}
              onClick={() => setActiveBlock("articles")}
            >
              <button className="lk-bookmarks__tabs-button">Статьи</button>
            </li>
            <li
              className={`lk-bookmarks__tabs-item ${
                activeBlock === "video" && "is--active"
              }`}
              onClick={() => setActiveBlock("video")}
            >
              <button className="lk-bookmarks__tabs-button">Видео</button>
            </li>
            <li
              className={`lk-bookmarks__tabs-item ${
                activeBlock === "audio" && "is--active"
              }`}
              onClick={() => setActiveBlock("audio")}
            >
              <button className="lk-bookmarks__tabs-button">Аудио</button>
            </li>
          </ul>
          <div className="lk-bookmarks__holder">
            <div
              className={`lk-bookmarks__wrapper ${
                activeBlock === "articles" && "is--active"
              }`}
            >
              <div className="lk-bookmarks__wrapper-inner">
                <div className="lk-articles lk-bookmarks__section">
                  <div className="lk-articles__wrapper">
                    {data[9]?.items?.map((item) => (
                      <div key={item.id} className="lk-articles__column">
                        <article className="lk-articles__item">
                          <Link
                            href={`/news/${item.id}`}
                            className="lk-articles__title"
                          >
                            {item.data.NAME}
                          </Link>
                          <div className="lk-articles__inner">
                            <span className="lk-articles__help">
                              {item.data.props.PUB_TAG.VALUE[0]}
                            </span>
                            <button className="lk-articles__favorites c-bookmark is--active">
                              <ReactSVG
                                className="c-bookmark__icon c-bookmark__icon--default"
                                src="/img/sprite/icon-bookmarks.svg"
                              />
                              <ReactSVG
                                className="c-bookmark__icon c-bookmark__icon--filled"
                                src="/img/sprite/icon-bookmarks-filled.svg"
                              />
                            </button>
                          </div>
                        </article>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="lk-bookmarks__favorites c-bookmark is--active">
                  <ReactSVG
                    className="c-bookmark__icon c-bookmark__icon--default"
                    src="/img/sprite/icon-bookmarks.svg"
                  />
                  <ReactSVG
                    className="c-bookmark__icon c-bookmark__icon--filled"
                    src="/img/sprite/icon-bookmarks-filled.svg"
                  />
                </button>
              </div>
            </div>
            <div
              className={`lk-bookmarks__wrapper ${
                activeBlock === "video" && "is--active"
              }`}
            >
              <div className="lk-video lk-bookmarks__section">
                <div className="lk-video__top">
                  <ul className="lk-video__tabs">
                    <li
                      className={`lk-video__tabs-item ${
                        orientation === "vertical" && "is--active"
                      }`}
                    >
                      <button
                        onClick={() => setOrientation("vertical")}
                        className="lk-video__tabs-button"
                      >
                        <ReactSVG src="/img/sprite/icon-orientation-vertical.svg" />
                      </button>
                    </li>
                    <li
                      className={`lk-video__tabs-item ${
                        orientation === "horizontal" && "is--active"
                      }`}
                    >
                      <button
                        onClick={() => setOrientation("horizontal")}
                        className="lk-video__tabs-button"
                      >
                        <ReactSVG src="/img/sprite/icon-orientation-horizontal.svg" />
                      </button>
                    </li>
                  </ul>
                  <button className="lk-bookmarks__favorites c-bookmark is--active">
                    <ReactSVG
                      className="c-bookmark__icon c-bookmark__icon--default"
                      src="/img/sprite/icon-bookmarks.svg"
                    />
                    <ReactSVG
                      className="c-bookmark__icon c-bookmark__icon--filled"
                      src="/img/sprite/icon-bookmarks-filled.svg"
                    />
                  </button>
                </div>
                <div
                  className={`lk-video__holder ${
                    orientation === "vertical" && "is--active"
                  }`}
                >
                  <div className="lk-video__wrapper">
                    {data[28]?.items?.map((item) => (
                      <article
                        key={item.id}
                        className="lk-video__item lk-video__item--vertical"
                      >
                        <Link href={`/trends`} className="lk-video__media">
                          <img src={item.data.images.preview} alt="Image" />
                        </Link>
                        <button className="lk-video__favorites c-bookmark is--active">
                          <ReactSVG
                            className="c-bookmark__icon c-bookmark__icon--default"
                            src="/img/sprite/icon-bookmarks.svg"
                          />
                          <ReactSVG
                            className="c-bookmark__icon c-bookmark__icon--filled"
                            src="/img/sprite/icon-bookmarks-filled.svg"
                          />
                        </button>
                      </article>
                    ))}
                  </div>
                </div>
                <div
                  className={`lk-video__holder ${
                    orientation === "horizontal" && "is--active"
                  }`}
                >
                  <div className="lk-video__wrapper">
                    {data[15]?.items.map((item) => (
                      <article key={item.id} className="lk-video__item">
                        <Link href="#" className="lk-video__media">
                          <img src={item.data.images.preview} alt="Image" />
                        </Link>
                        <button className="lk-video__favorites c-bookmark is--active">
                          <ReactSVG
                            className="c-bookmark__icon c-bookmark__icon--default"
                            src="/img/sprite/icon-bookmarks.svg"
                          />
                          <ReactSVG
                            className="c-bookmark__icon c-bookmark__icon--filled"
                            src="/img/sprite/icon-bookmarks-filled.svg"
                          />
                        </button>
                      </article>
                    ))}
                    {data[26]?.items.map((item) => (
                      <article key={item.id} className="lk-video__item">
                        <Link href="#" className="lk-video__media">
                          <img src={item.data.images.preview} alt="Image" />
                        </Link>
                        <button className="lk-video__favorites c-bookmark is--active">
                          <ReactSVG
                            className="c-bookmark__icon c-bookmark__icon--default"
                            src="/img/sprite/icon-bookmarks.svg"
                          />
                          <ReactSVG
                            className="c-bookmark__icon c-bookmark__icon--filled"
                            src="/img/sprite/icon-bookmarks-filled.svg"
                          />
                        </button>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`lk-bookmarks__wrapper ${
                activeBlock === "audio" && "is--active"
              }`}
            >
              <div className="lk-bookmarks__wrapper-inner">
                <div className="lk-podcasts lk-bookmarks__section">
                  <div className="lk-podcasts__wrapper">
                    {data[34]?.items?.map((item) => (
                      <div key={item.id} className="lk-podcasts__item">
                        <picture className="lk-podcasts__img">
                          <img src={item.data.podcastPhoto} alt="Image" />
                        </picture>
                        <div className="lk-podcasts__body">
                          <div className="lk-podcasts__main">
                            <span className="lk-podcasts__help">
                              {item?.data.props?.EDITION.VALUE?.[0]} выпуск
                            </span>
                            <Link
                              href={`/podcasts/${item.data.podcastId}`}
                              className="lk-podcasts__title"
                            >
                              {item.data.NAME}
                            </Link>
                            <span className="lk-podcasts__help">
                              {item.data.podcastAuthor}
                            </span>
                          </div>
                          <div className="lk-podcasts__additional">
                            <button className="lk-podcasts__play">
                              <ReactSVG src="/img/sprite/icon-play-grey.svg" />
                            </button>
                            <button className="lk-podcasts__favorites c-bookmark is--active">
                              <ReactSVG
                                className="c-bookmark__icon c-bookmark__icon--default"
                                src="/img/sprite/icon-bookmarks.svg"
                              />
                              <ReactSVG
                                className="c-bookmark__icon c-bookmark__icon--filled"
                                src="/img/sprite/icon-bookmarks-filled.svg"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="lk-bookmarks__favorites c-bookmark is--active">
                  <ReactSVG
                    className="c-bookmark__icon c-bookmark__icon--default"
                    src="/img/sprite/icon-bookmarks.svg"
                  />
                  <ReactSVG
                    className="c-bookmark__icon c-bookmark__icon--filled"
                    src="/img/sprite/icon-bookmarks-filled.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
