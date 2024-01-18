import Link from "next/link";
import React, { FC } from "react";
import { EditionType } from "../../redux/types";
import Image from "next/image";

interface PodcastCardProps {
  podcast: EditionType;
}

const PodcastCard: FC<PodcastCardProps> = ({ podcast }) => {
  return (
    <Link href={`/podcasts/${podcast.id}`} className="content-card__item">
      <picture className="content-card__img">
        <Image
          src={`${podcast.podcastPhoto}`}
          alt="Image"
          sizes="100vw"
          loading="lazy"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={250}
          height={150}
        />
      </picture>
      <div className="content-card__body">
        <h3 className="content-card__title">{podcast.name}</h3>
        <span className="content-card__help">{podcast.podcastAuthor}</span>
      </div>
    </Link>
  );
};

export default PodcastCard;
