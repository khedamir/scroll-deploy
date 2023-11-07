import Link from "next/link";
import React, { FC, RefObject, useEffect, useRef } from "react";
import { ReactSVG } from "react-svg";
import { PodcastType } from "../../redux/podcasts/types";
import RenderHTML from "../renderHTML";

interface PodcastItemProps {
  podcast: PodcastType;
  isLast?: boolean;
  newLimit?: () => void;
  end?: boolean;
}

const FullPodcastItem: FC<PodcastItemProps> = ({
  podcast,
  isLast,
  newLimit,
  end,
}) => {
  const cardRef: RefObject<HTMLAnchorElement> = useRef(null);

  useEffect(() => {
    if (isLast && newLimit && !end) {
      if (!cardRef?.current) return;

      const observer = new IntersectionObserver(([entry]) => {
        if (isLast && entry.isIntersecting) {
          newLimit();
          observer.unobserve(entry.target);
        }
      });

      observer.observe(cardRef.current);
    }
  }, [isLast]);

  return (
    <div className="podcasts__item">
      <Link href={`/podcasts/${podcast.id}`} className="podcasts__img">
        <img src={`${podcast.podcastPhoto}`} alt="Image" />
      </Link>
      <div className="podcasts__main">
        <div className="podcasts__body">
          <span className="podcasts__help">
            {podcast.poperties.EDITION} выпуск
          </span>
          <Link
            href={`/podcasts/${podcast.podcastId}`}
            className="podcasts__name mt8"
          >
            {podcast.name}
          </Link>
          <span className="podcasts__description mt8">
            <RenderHTML content={podcast.anons} />
          </span>
          <div className="podcasts__inner">
            <Link
              href={`/podcasts/${podcast.podcastId}`}
              className="podcasts__text"
            >
              {podcast.podcastName}
            </Link>
            <Link
              href={`/podcasts/${podcast.podcastId}`}
              className="podcasts__text"
            >
              {podcast.podcastAuthor}
            </Link>
          </div>
        </div>
        <div className="podcasts__additional">
          <Link
            href={`/podcasts/${podcast.podcastId}`}
            className="podcasts__play c-play"
          >
            <ReactSVG src="/img/sprite/icon-play.svg" />
            <span>{podcast.poperties.DURATION}</span>
          </Link>
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

export default FullPodcastItem;
