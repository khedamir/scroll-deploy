import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ReactSVG } from "react-svg";

const VideoWidget = () => {
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
        <span className="video-widget__help">35 новых видео</span>
      </div>
      <picture className="video-widget__img">
        <Image
          width={126}
          height={100}
          src="/img/video-widget-01.jpg"
          alt="Image"
        />
      </picture>
    </Link>
  );
};

export default VideoWidget;
