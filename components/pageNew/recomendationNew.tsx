import React, { FC, useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { FullNewType } from "../../redux/types";
import { formatDateDifference } from "../../utils/formatDate";
import Link from "next/link";
import { fetchNew } from "../../server/content";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

interface RecommendationNewsProps {
  newId: number | null;
  index: number;
}

const RecomendationNew: FC<RecommendationNewsProps> = ({ newId, index }) => {
  const { data, isLoading } = useSWR<FullNewType>(
    `new-page-recommendation-new-${newId}${index}`,
    () => fetchNew(String(newId))
  );

  if (isLoading) {
    return (
      <div className="big-news__block recommendation-skeleton">
        <h5>
          <Skeleton
            className="name-skeleton"
            height={20}
            width={200}
            count={1}
          />
          <Skeleton height={20} width={400} count={1} />
        </h5>
        <div className="description-block">
          <div className="description-block__inner">
            <Skeleton height={15} width={35} count={1} />
            <Skeleton height={15} width={60} count={1} />
            <Skeleton height={15} width={25} count={1} />
          </div>
        </div>
      </div>
    );
  }

  return (
    data && (
      <Link className="big-news__block" href={`/news/${data?.id}`}>
        <h5>{data.name}</h5>
        <div className="description-block">
          <div className="description-block__inner">
            <span>{data.props.PUB_RUBRIC.VALUE[0]}</span>
            <span>{formatDateDifference(data.date)}</span>
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
    )
  );
};

export default RecomendationNew;
