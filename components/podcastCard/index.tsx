import Link from "next/link";
import React, { FC } from "react";
import { PodcastType } from "../../redux/podcasts/types";

interface PodcastCardProps {
  podcast: PodcastType;
}

const PodcastCard: FC<PodcastCardProps> = ({ podcast }) => {
  return (
    <Link href={`/podcasts/${podcast.id}`} className="content-card__item">
      <picture className="content-card__img">
        <img src={`${podcast.podcastPhoto}`} alt="Image" />
      </picture>
      <div className="content-card__body">
        <h3 className="content-card__title">{podcast.name}</h3>
        <span className="content-card__help">{podcast.podcastAuthor}</span>
      </div>
    </Link>
  );
};

export default PodcastCard;
