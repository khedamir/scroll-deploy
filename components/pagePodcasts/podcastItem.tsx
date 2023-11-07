import Link from "next/link";
import React, { FC, RefObject, useEffect, useRef } from "react";
import { ReactSVG } from "react-svg";
import { PodcastType } from "../../redux/podcasts/types";
import RenderHTML from "../renderHTML";
import { baseURL } from "../../utils/server";
import { EditionType } from "../../redux/types";

interface PodcastItemProps {
  podcast: EditionType;
}

const PodcastItem: FC<PodcastItemProps> = ({ podcast }) => {
  return (
    <div className="podcasts__item">
      <div className="podcasts__main">
        <div className="podcasts__body">
          <span className="podcasts__help">2 выпуск</span>
          <span className="podcasts__name mt8">{podcast.name}</span>
          <span className="podcasts__description mt8">
            <RenderHTML content={podcast.anons} />
          </span>
        </div>
        <div className="podcasts__additional">
          <span className="podcasts__play c-play">
            <ReactSVG src="/img/sprite/icon-play.svg" />
            <span>{podcast.props.DURATION.VALUE}</span>
          </span>
          <button className="podcasts__favorites c-bookmark">
            <ReactSVG
              className="c-bookmark__icon c-bookmark__icon--default"
              src="/img/sprite/icon-bookmarks.svg"
            />
            <ReactSVG
              className="c-bookmark__icon c-bookmark__icon--filled"
              src="/img/sprite/icon-bookmarks.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PodcastItem;
