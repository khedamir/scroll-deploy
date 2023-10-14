import Link from "next/link";
import React from "react";
import { selectPodcasts } from "../../../redux/podcasts/slice";
import { useSelector } from "react-redux";
import { baseURL } from "../../../utils/server";

const AudioPodcasts = () => {
  const { data } = useSelector(selectPodcasts);

  return (
    <div className="content-card">
      <div className="content-card__wrap">
        <div className="content-card__wrapper content-card__wrapper--flex content-card__wrapper--scroll">
          {data.datas.map((podcast, id) => (
            <Link
              key={podcast.id}
              href={`/podcasts/${podcast.id}`}
              className={`content-card__item ${
                id === 1 && "content-card__item--center"
              }`}
            >
              <picture className="content-card__img">
                <img src={`${baseURL}${podcast.images[0]}`} alt="Image" />
              </picture>
              <div className="content-card__body">
                <h3 className="content-card__title">{podcast.name}</h3>
                <span className="content-card__help">
                  {podcast.poperties.PODCAST_AUTOR}
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
