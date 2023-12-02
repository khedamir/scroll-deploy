import Link from "next/link";
import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import { ActiveBlockValue } from "./bookmarksTabs";
import {
  FavoritePodcast,
  FavoriteSections,
} from "../../../redux/favorites/types";
import { useFavoriteContext } from "../../../context/FavoritesContext";
import EmptyBookmarks from "./emptyBookmarks";

interface AudioProps {
  activeBlock: ActiveBlockValue;
  data: FavoritePodcast[];
  changeFavorite: (itemId: string, sectionId: FavoriteSections) => void;
}

const Audio: FC<AudioProps> = ({ activeBlock, data, changeFavorite }) => {
  const { deleteFavoriteBlock } = useFavoriteContext();

  return (
    <div
      className={`lk-bookmarks__wrapper ${
        activeBlock === "audio" && "is--active"
      }`}
    >
      <div className="lk-bookmarks__wrapper-inner">
        <div className="lk-podcasts lk-bookmarks__section">
          {data ? (
            data?.map((item) => (
              <div className="lk-podcasts__wrapper">
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
                      <button
                        onClick={() => changeFavorite(item.id, "34")}
                        className="lk-podcasts__favorites c-bookmark is--active"
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
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <EmptyBookmarks />
          )}
        </div>
        {data && (
          <button
            onClick={() => deleteFavoriteBlock({ sectionId: "9" })}
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
    </div>
  );
};

export default Audio;
