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
  const { data, filled } = useSelector(selectFavorites);
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
              {!filled && (
                <p>
                  Здесь появятся ваши сохраненные материалы. Нажмите на
                  <span className="empry-bookmarks__icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_10227_135089)">
                        <path
                          d="M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z"
                          fill="#CACACA"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_10227_135089">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  , чтобы добавить их в закладки.
                </p>
              )}
            </div>
            {user && filled && (
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
