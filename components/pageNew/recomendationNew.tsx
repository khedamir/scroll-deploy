import React, { FC, useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { FullNewType } from "../../redux/types";
import { formatDateDifference } from "../../utils/formatDate";
import Link from "next/link";
import { fetchNew } from "../../server/content";

interface RecommendationNewsProps {
  newId: number | null;
}

const RecomendationNew: FC<RecommendationNewsProps> = ({ newId }) => {
  const [newItem, setNewItem] = useState<FullNewType>();
  useEffect(() => {
    if (newId) {
      fetchNew(String(newId)).then((result) => {
        setNewItem(result);
      });
    }
  }, [newId]);
  return newItem ? (
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
  ) : (
    <div>Loading...</div>
  );
};

export default RecomendationNew;
