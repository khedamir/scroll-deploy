import Link from "next/link";
import React, { FC } from "react";
import { selectPodcasts } from "../../../redux/podcasts/slice";
import { useSelector } from "react-redux";
import Image from "next/image";
import { EditionType } from "../../../redux/types";

interface AudioPodcastsProps {
  editions: EditionType[];
}

const AudioPodcasts: FC<AudioPodcastsProps> = ({ editions }) => {
  return (
    <div className="content-card">
      <div className="content-card__wrap">
        <div className="content-card__wrapper content-card__wrapper--flex content-card__wrapper--scroll">
          {editions.map((podcast, id) => (
            <Link
              key={podcast.id}
              href={`/podcasts/${podcast.podcastId}`}
              className={`content-card__item ${
                id === 1 && "content-card__item--center"
              }`}
            >
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
                <span className="content-card__help">
                  {podcast.podcastAuthor}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudioPodcasts;
