import React from "react";
import { ReactSVG } from "react-svg";

const EmptyBookmarks = () => {
  return (
    <div className="empty-bookmarks">
      <p>
        Здесь появятся ваши сохраненные материалы. Нажмите на
        <span className="empry-bookmarks__icon">
          <ReactSVG src="/img/sprite/icon-bookmarks.svg" />
        </span>
        , чтобы добавить их в закладки.
      </p>
    </div>
  );
};

export default EmptyBookmarks;
