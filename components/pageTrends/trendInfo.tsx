import React, { FC, useState } from "react";
import { ReactSVG } from "react-svg";
import TrendComments from "./trendComments";
import Image from "next/image";

interface TrendInfoProps {
  trendId: string;
  trendName: string;
  trendAuthor: string;
  trendAuthorPhoto: string;
}

const TrendInfo: FC<TrendInfoProps> = ({
  trendId,
  trendName,
  trendAuthor,
  trendAuthorPhoto,
}) => {
  const [commentsActive, setCommentsActive] = useState(false);
  return (
    <div className="trands__info">
      <div
        onClick={() => setCommentsActive(!commentsActive)}
        className="trands__author"
      >
        <span className="trands__author-inner">
          <picture className="trands__author-img">
            <Image width={32} height={32} src={trendAuthorPhoto} alt="Image" />
          </picture>
          <div className="trands__author-group">
            <span className="trands__author-name">{trendAuthor}</span>
          </div>
        </span>
        <p className="trands__description">{trendName}</p>
      </div>
      <TrendComments active={commentsActive} id_publication={trendId} />
    </div>
  );
};

export default TrendInfo;
