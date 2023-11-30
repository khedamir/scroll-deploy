import React, { FC, RefObject, useEffect, useRef, useState } from "react";
import { ReactSVG } from "react-svg";
import RenderHTML from "../renderHTML";
import { useRouter } from "next/router";

interface MediaContentProps {
  content: string;
}

const MediaContent: FC<MediaContentProps> = ({ content }) => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const refBlock: RefObject<HTMLDivElement> = useRef(null);
  const [buttonDisplay, setButtonDisplay] = useState<"flex" | "none">("none");

  useEffect(() => {
    if (refBlock.current) {
      if (refBlock.current.clientHeight <= 70) {
        setButtonDisplay("none");
        setActive(true);
      }

      if (refBlock.current.clientHeight > 70) {
        setButtonDisplay("flex");
        setActive(false);
      }
    }
  }, [refBlock.current, router.query.id]);

  const blockStyle = {
    height: active ? `${refBlock.current?.clientHeight}px` : "70px",
  };

  const buttonStyle = {
    display: buttonDisplay,
  };

  return (
    <div className="video__content">
      <div
        style={blockStyle}
        className={`video__content-wrap ${active && "is--active"}`}
      >
        <div className="render__wrap" ref={refBlock}>
          <RenderHTML content={content} />
        </div>
      </div>
      <button
        style={buttonStyle}
        onClick={() => setActive(!active)}
        className={`video__content-more ${active && "is--active"}`}
      >
        <ReactSVG src="/img/sprite/icon-caret.svg" />
      </button>
    </div>
  );
};

export default MediaContent;
