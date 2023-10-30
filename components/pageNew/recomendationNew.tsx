import React from "react";
import { ReactSVG } from "react-svg";

const RecomendationNew = () => {
  return (
    <div className="big-news__block">
      <h5>В Берлине сообщили о решении выслать немецких служащих</h5>
      <div className="description-block">
        <div className="description-block__inner">
          <span>Спорт</span>
          <span>30 минут назад</span>
          <button className="c-bookmark">
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
  );
};

export default RecomendationNew;
