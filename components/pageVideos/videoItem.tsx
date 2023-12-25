import React, { FC, RefObject, useEffect, useRef } from "react";
import { VideoType } from "../../redux/videos/types";
import Link from "next/link";
import { baseURL } from "../../utils/server";
import { formatDateDifference } from "../../utils/formatDate";
import Image from "next/image";

interface VideoItemProps {
  video: VideoType;
  isLast?: boolean;
  newLimit?: () => void;
  end?: boolean;
}

const VideoItem: FC<VideoItemProps> = ({ video, isLast, newLimit, end }) => {
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
    <Link
      href={`videos/${video.id}`}
      className="category-card videos__item"
      ref={cardRef}
    >
      <picture className="category-card__img">
        <Image fill priority src={`${video.images.preview}`} alt="Image" />
      </picture>
      <div className="category-card__body">
        <span className="category-card__name">{video.name}</span>
        <div className="category-card__inner">
          <span className="category-card__author">
            {video.poperties.PUB_AUTOR}
          </span>
          <span className="category-card__help">
            {formatDateDifference(video.date)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default VideoItem;
