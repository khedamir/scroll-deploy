import Link from "next/link";
import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import { ActiveBlockValue } from "./bookmarksTabs";
import { FavoriteNew, FavoriteSections } from "../../../redux/favorites/types";
import { useFavoriteContext } from "../../../context/FavoritesContext";
import EmptyBookmarks from "./emptyBookmarks";

interface ArticlesProps {
  activeBlock: ActiveBlockValue;
  data: FavoriteNew[];
  changeFavorite: (itemId: string, sectionId: FavoriteSections) => void;
}

const Articles: FC<ArticlesProps> = ({ activeBlock, data, changeFavorite }) => {
  const { deleteFavoriteBlock } = useFavoriteContext();
  return (
    <div
      className={`lk-bookmarks__wrapper ${
        activeBlock === "articles" && "is--active"
      }`}
    >
      <div className="lk-bookmarks__wrapper-inner">
        <div className="lk-articles lk-bookmarks__section">
          {data ? (
            data?.map((item) => (
              <div key={item.id} className="lk-articles__wrapper">
                <div className="lk-articles__column">
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
                      <button
                        onClick={() => changeFavorite(item.id, "9")}
                        className="lk-articles__favorites c-bookmark is--active"
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
                  </article>
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

export default Articles;
