import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import { SearchItem } from "../../utils/search";
import Link from "next/link";
import Image from "next/image";

interface PodcastItemProps {
  item: SearchItem;
}

const PodcastItem: FC<PodcastItemProps> = ({ item }) => {
  return (
    <div className="news-card search__news-card mobile-wide">
      <Link
        href={`/podcasts/${item.id}`}
        className="news-card__item news-card__item--reverse"
      >
        <div className="news-card__body">
          <span className="news-card__tag">{item.iblockName}</span>
          <span className="news-card__name news-card__name--lg">
            {item.title}
          </span>
          <div className="news-card__inner-wrap">
            <div className="news-card__inner">
              <span className="news-card__help">{item.podcastAuthor}</span>
            </div>
          </div>
        </div>
        <picture className="news-card__img">
          <Image fill loading="lazy" src={item.images?.preview} alt="Image" />
          <button className="news-card__media-control">
            <ReactSVG src="/img/sprite/icon-headheadset.svg" />
          </button>
        </picture>
      </Link>
    </div>
  );
};

export default PodcastItem;
