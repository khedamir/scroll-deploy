import React from "react";
import { useModalsContext } from "../../context/ModalsContext";
import { ReactSVG } from "react-svg";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/slice";
import New from "./new";
import Audio from "./audio";
import Link from "next/link";
import { selectUser } from "../../redux/auth/slice";
import Video from "./video";
import { useHandleScroll } from "../../hooks";

const Bookmarks = () => {
  const { bookmarks, setBookmarks } = useModalsContext();
  const { data } = useSelector(selectFavorites);
  const { user } = useSelector(selectUser);
  useHandleScroll(bookmarks);
  return (
    <div
      onClick={() => setBookmarks(false)}
      className={`bookmarks ${bookmarks && "is--active"} ${
        user && "bookmarks-auth"
      }`}
      id="bookmarks"
    >
      <div onClick={(e) => e.stopPropagation()} className="bookmarks__wrap">
        <div className="bookmarks__top">
          <h3 className="bookmarks__heading">Закладки</h3>
          <button
            onClick={() => setBookmarks(false)}
            className="bookmarks__close"
          >
            <ReactSVG src="/img/sprite/icon-close-thin.svg" />
          </button>
        </div>
        <div className="bookmarks__main scroll-x" data-simplebar>
          <div className="bookmarks__scroll">
            <div className="bookmarks__wrapper">
              {data[9]?.items.map((item) => (
                <New key={item.id} item={item} sectionId="9" />
              ))}
              {data[15]?.items.map((item) => (
                <Video key={item.id} item={item} sectionId="15" path="videos" />
              ))}
              {data[26]?.items.map((item) => (
                <Video
                  key={item.id}
                  item={item}
                  sectionId="26"
                  path="lectures"
                />
              ))}
              {data[28]?.items.map((item) => (
                <Video key={item.id} item={item} sectionId="28" path="trends" />
              ))}
              {data[34]?.items.map((item) => (
                <Audio key={item.id} item={item} sectionId="34" />
              ))}
            </div>
            {user && (
              <Link
                href={"/lk/?block=bookmarks"}
                className="bookmarks__more btn btn--md btn--white-blue"
              >
                <span>Все закладки</span>
                <ReactSVG src="/img/sprite/icon-arrow-next.svg" />
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="bookmarks__overlay"></div>
    </div>
  );
};

export default Bookmarks;
