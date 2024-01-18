import React, { FC, useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { fetchInfo } from "../../../server/content";

interface TooltipProps {
  publicationId: string;
}

type ItemType = {
  comment: string;
  author_name: string;
  author_surname: string;
};

const Tooltip: FC<TooltipProps> = ({ publicationId }) => {
  const [comment, setComment] = useState<ItemType>();
  useEffect(() => {
    fetchInfo({ type: "publicationLastComment", publicationId }).then(
      (result) => {
        setComment(result);
      }
    );
  }, [publicationId]);

  return comment?.comment ? (
    <article className="tooltip-info-card">
      <div className="tooltip-info-card__inner">
        <ReactSVG
          className="tooltip-info-card__icon"
          src="/img/sprite/icon-comment.svg"
        />
        <span className="tooltip-info-card__name">{`${comment.author_name} ${comment.author_surname}`}</span>
      </div>
      <p className="tooltip-info-card__description">{comment.comment}</p>
    </article>
  ) : (
    ""
  );
};

export default Tooltip;
