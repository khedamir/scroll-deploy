import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { fetchInfo } from "../../server/content";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useSWR from "swr";

type DataType = {
  photo: string;
  total: number;
};
const VideoWidget = () => {
  const { data, isLoading } = useSWR<DataType>("home-page-widget-video", () =>
    fetchInfo({ type: "lastWeekVideos" })
  );

  if (isLoading || !data) {
    return <Skeleton height={100} count={1} borderRadius={8} />;
  }

  return (
    data.total > 0 && (
      <Link href="/videos" className="video-widget layout__sticky">
        <div className="video-widget__body">
          <div className="video-widget__inner">
            <span className="video-widget__title">Какие-то видео</span>
            <ReactSVG
              className="video-widget__icon"
              src="/img/sprite/icon-arrow-next.svg"
            />
          </div>
          <span className="video-widget__help">{data?.total} новых видео</span>
        </div>
        <picture className="video-widget__img">
          <Image
            width={126}
            height={100}
            src={data ? data.photo : ""}
            alt="Image"
          />
        </picture>
      </Link>
    )
  );
};

export default VideoWidget;
