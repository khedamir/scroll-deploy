import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import { FullNewType } from "../../redux/types";
import { formatDateDifference } from "../../utils/formatDate";
import Link from "next/link";

interface RecommendationNewsProps {
  newItem: FullNewType;
}

const RecomendationNew: FC<RecommendationNewsProps> = ({ newItem }) => {
  return (
    <Link className="big-news__block" href={`/news/${newItem.id}`}>
      <h5>{newItem.name}</h5>
      <div className="description-block">
        <div className="description-block__inner">
          <span>{newItem.props.PUB_RUBRIC.VALUE[0]}</span>
          <span>{formatDateDifference(newItem.date)}</span>
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
    </Link>
  );
};

export default RecomendationNew;
