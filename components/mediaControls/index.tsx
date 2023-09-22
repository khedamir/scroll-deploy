import React, { FC } from "react";
import { ReactSVG } from "react-svg";

interface MediaControlsProps {
  otherClassName?: string;
}

const MediaControls: FC<MediaControlsProps> = ({otherClassName}) => {
  return (
    <div className={`media-controls ${otherClassName}`}>
      <div className="media-controls__wrapper">
        <div className="media-controls__group">
          <span className="media-controls__viewed">4 565 просмотров</span>
        </div>
        <div className="media-controls__group">
          <div className="media-controls__btns">
            <button className="btn-control btn-control--blue media-controls__btn">
              <ReactSVG src="/img/sprite/icon-like-thumb-up.svg" />
              <span>44</span>
            </button>
            <button className="btn-control media-controls__btn">
              <ReactSVG src="/img/sprite/icon-reply.svg" />
              <span>Поделиться</span>
            </button>
            <button className="btn-control media-controls__btn">
              <ReactSVG src="/img/sprite/icon-bookmarks.svg" />
              <span>В закладки</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaControls;
