import Link from "next/link";
import React, { FC } from "react";

interface PodcastCardProps {
  podcast: {
    id: number;
    name: string;
    author: string;
  };
}

const PodcastCard: FC<PodcastCardProps> = ({ podcast }) => {
  return (
    <Link href={`/podcasts/${podcast.id}`} className="content-card__item">
      <picture className="content-card__img">
        <img src="/img/audio-content-card-01.jpg" alt="Image" />
      </picture>
      <div className="content-card__body">
        <h3 className="content-card__title">{podcast.name}</h3>
        <span className="content-card__help">{podcast.author}</span>
      </div>
    </Link>
  );
};

export default PodcastCard;
