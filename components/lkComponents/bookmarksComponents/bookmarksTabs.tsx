import React, { FC } from "react";

export type ActiveBlockValue = "articles" | "video" | "audio";

interface BookmarksTabsProps {
  activeBlock: ActiveBlockValue;
  setActiveBlock: (v: ActiveBlockValue) => void;
}

const BookmarksTabs: FC<BookmarksTabsProps> = ({
  activeBlock,
  setActiveBlock,
}) => {
  return (
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
  );
};

export default BookmarksTabs;
