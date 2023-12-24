import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { selectTrands } from "../../../redux/trends/slice";
import { extractVideoId } from "../../../utils/extractVideoId";
import Image from "next/image";

const PopularVideos = () => {
  const { data } = useSelector(selectTrands);
  const trends1 = data.datas.slice(0, 4);
  const trends2 = data.datas.slice(4, 9);
  return (
    <div className="popular-videos">
      <div className="popular-videos__wrapper">
        <div className="popular-videos__videos">
          {trends1.map((item) => (
            <Link
              key={item.id}
              href={`/trends?id=${item.id}`}
              className="video-card popular-videos__videos-item"
            >
              <picture className="video-card__img">
                <Image fill priority src={item.images.preview} alt="Image" />
              </picture>
              <div className="video-card__body">
                <div className="video-card__top">
                  <span className="video-card__category">
                    {item.poperties?.PUB_TAG?.[0]}
                  </span>
                </div>
                <div className="video-card__bottom">
                  <span className="video-card__description">{item.name}</span>
                  <div className="video-card__author">
                    <Image
                      width={32}
                      height={32}
                      src={item.poperties.AUTHOR_LOGO}
                      alt="Image"
                    />
                    <span>{item.poperties.PUB_AUTOR}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="popular-videos__stories">
          {trends2.map((item) => (
            <Link
              key={item.id}
              href={`/trends?id=${item.id}`}
              className="stories-card popular-videos__stories-item"
            >
              <picture className="stories-card__img">
                <Image
                  width={116}
                  height={116}
                  src={item.images.preview}
                  alt="Image"
                />
              </picture>
              <span className="stories-card__name">
                {item.poperties.PUB_AUTOR}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularVideos;
