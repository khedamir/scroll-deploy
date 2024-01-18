import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { fetchInfo } from "../../server/content";

type DataType = {
  photo: string;
  total: number;
};

const VideoWidget = () => {
  const [data, setData] = useState<DataType>();
  useEffect(() => {
    fetchInfo({ type: "lastWeekVideos" }).then((result) => {
      setData(result);
    });
  }, []);

  return (
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
  );
};

export default VideoWidget;
