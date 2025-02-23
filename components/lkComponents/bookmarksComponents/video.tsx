import Link from "next/link";
import React, { FC, useState } from "react";
import { ReactSVG } from "react-svg";
import { ActiveBlockValue } from "./bookmarksTabs";
import {
  FavoriteSections,
  FavoriteVideo,
} from "../../../redux/favorites/types";
import { useFavoriteContext } from "../../../context/FavoritesContext";
import EmptyBookmarks from "./emptyBookmarks";
import Image from "next/image";

export type OrientationValue = "vertical" | "horizontal";

interface VideoProps {
  activeBlock: ActiveBlockValue;
  trends: FavoriteVideo[];
  videos: FavoriteVideo[];
  lectures: FavoriteVideo[];
  changeFavorite: (itemId: string, sectionId: FavoriteSections) => void;
}

const Video: FC<VideoProps> = ({
  activeBlock,
  trends,
  videos,
  lectures,
  changeFavorite,
}) => {
  const [orientation, setOrientation] = useState<OrientationValue>("vertical");
  const { deleteFavoriteBlock } = useFavoriteContext();

  const deleteBlock = () => {
    if (orientation === "vertical") {
      deleteFavoriteBlock({ sectionId: "28" });
    }
    if (orientation === "horizontal") {
      deleteFavoriteBlock({ sectionId: "15" });
      deleteFavoriteBlock({ sectionId: "26" });
    }
  };

  return (
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
          {Boolean(trends?.length || videos?.length || lectures?.length) && (
            <button
              onClick={deleteBlock}
              className="lk-bookmarks__favorites c-bookmark is--active"
            >
              <ReactSVG
                className="c-bookmark__icon c-bookmark__icon--default"
                src="/img/sprite/icon-bookmarks.svg"
              />
              <ReactSVG
                className="c-bookmark__icon c-bookmark__icon--filled"
                src="/img/sprite/icon-bookmarks-filled.svg"
              />
            </button>
          )}
        </div>
        <div
          className={`lk-video__holder ${
            orientation === "vertical" && "is--active"
          }`}
        >
          {trends?.length ? (
            trends.map((item) => (
              <div key={item.id} className="lk-video__wrapper">
                <article
                  key={item.id}
                  className="lk-video__item lk-video__item--vertical"
                >
                  <Link href={`/trends`} className="lk-video__media">
                    <Image
                      fill
                      loading="lazy"
                      src={item.data.images.preview}
                      alt="Image"
                    />
                  </Link>
                  <button
                    onClick={() => changeFavorite(item.id, "28")}
                    className="lk-video__favorites c-bookmark is--active"
                  >
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
              </div>
            ))
          ) : (
            <EmptyBookmarks />
          )}
        </div>
        <div
          className={`lk-video__holder ${
            orientation === "horizontal" && "is--active"
          }`}
        >
          <div className="lk-video__wrapper">
            {videos?.map((item) => (
              <article key={item.id} className="lk-video__item">
                <Link href="#" className="lk-video__media">
                  <Image
                    fill
                    loading="lazy"
                    src={item.data.images.preview}
                    alt="Image"
                  />
                </Link>
                <button
                  onClick={() => changeFavorite(item.id, "15")}
                  className="lk-video__favorites c-bookmark is--active"
                >
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
            {lectures?.map((item) => (
              <article key={item.id} className="lk-video__item">
                <Link href="#" className="lk-video__media">
                  <Image
                    fill
                    loading="lazy"
                    src={item.data.images.preview}
                    alt="Image"
                  />
                </Link>
                <button
                  onClick={() => changeFavorite(item.id, "26")}
                  className="lk-video__favorites c-bookmark is--active"
                >
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
            {!videos?.length && !lectures?.length && <EmptyBookmarks />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
