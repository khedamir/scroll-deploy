import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import { SearchItem } from "../../utils/search";
import Link from "next/link";
import { formatDateDifference } from "../../utils/formatDate";
import Image from "next/image";

interface VideoItemProps {
  item: SearchItem;
}

const paths = {
  "11": "/webinar/",
  "15": "/videos/",
  "26": "/lectures/",
  "28": "/trends/",
};

const VideoItem: FC<VideoItemProps> = ({ item }) => {
  // @ts-ignore
  const itemPath = `${paths[item.iblockId]}${item.id}`;
  return (
    <div className="news-card search__news-card mobile-wide">
      <Link
        target="__blank"
        href={itemPath}
        className="news-card__item news-card__item--reverse"
      >
        <div className="news-card__body">
          <span className="news-card__tag">{item.iblockName}</span>
          <span className="news-card__name news-card__name--lg">
            {item.title}
          </span>
          <div className="news-card__inner-wrap">
            <div className="news-card__inner">
              <span className="news-card__help">
                {formatDateDifference(item.date)}
              </span>
            </div>
          </div>
        </div>
        <picture className="news-card__img ">
          <Image fill loading="lazy" src={item.images.preview} alt="Image" />
          <button className="news-card__media-control">
            <ReactSVG src="/img/sprite/icon-play.svg" />
          </button>
        </picture>
      </Link>
    </div>
  );
};

export default VideoItem;
