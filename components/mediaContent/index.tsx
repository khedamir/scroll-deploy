import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import RenderHTML from "../renderHTML";

interface MediaContentProps {
  content: string;
}

const MediaContent: FC<MediaContentProps> = ({ content }) => {
  return (
    <div className="video__content">
      <p>
        <RenderHTML content={content} />
      </p>
      <button className="video__content-more is--active">
        <ReactSVG src="/img/sprite/icon-caret.svg" />
      </button>
    </div>
  );
};

export default MediaContent;
