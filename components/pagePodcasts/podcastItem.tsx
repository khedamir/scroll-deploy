import Link from "next/link";
import React, { FC } from "react";
import { ReactSVG } from "react-svg";

interface PodcastItemProps {
  podcast: {
    id: number;
    name: string;
    description: string;
    author: string;
  };
  maxVersion?: boolean;
}

const PodcastItem: FC<PodcastItemProps> = ({ podcast, maxVersion = true }) => {
  return (
    <div key={podcast.id} className="podcasts__item">
      {maxVersion && (
        <Link href={`podcasts/${podcast.id}`} className="podcasts__img">
          <img src="/img/podcasts-01.jpg" alt="Image" />
        </Link>
      )}
      <div className="podcasts__main">
        <div className="podcasts__body">
          <span className="podcasts__help">2 выпуск</span>
          <Link href={`podcasts/${podcast.id}`} className="podcasts__name mt8">
            {podcast.name}
          </Link>
          <span className="podcasts__description mt8">
            {podcast.description}
          </span>
          {maxVersion && (
            <div className="podcasts__inner">
              <Link href={`podcasts/${podcast.id}`} className="podcasts__text">
                Название подкаста
              </Link>
              <Link href={`podcasts/${podcast.id}`} className="podcasts__text">
                {podcast.author}
              </Link>
            </div>
          )}
        </div>
        <div className="podcasts__additional">
          <Link
            href={`podcasts/${podcast.id}`}
            className="podcasts__play c-play"
          >
            <ReactSVG src="/img/sprite/icon-play.svg" />
            <span>1 ч 20 мин</span>
          </Link>
          <button className="podcasts__favorites c-bookmark">
            <ReactSVG
              className="c-bookmark__icon c-bookmark__icon--default"
              src="/img/sprite/icon-play.svg"
            />
            <ReactSVG
              className="c-bookmark__icon c-bookmark__icon--filled"
              src="/img/sprite/icon-play.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PodcastItem;
