import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import { server, serverWithJwt } from "../../utils/server";

interface MediaControlsProps {
  otherClassName?: string;
  likes: string;
  liked: boolean;
  views: string;
  publication_id: string;
}

const MediaControls: FC<MediaControlsProps> = ({
  otherClassName,
  likes,
  liked,
  views,
  publication_id,
}) => {
  const addLike = async () => {
    if (liked) {
      const result = await serverWithJwt.get(
        `/sw/v1/likes/?newsId=${publication_id}&type=delete/`
      );
      // console.log(result);
    } else {
      const result = await serverWithJwt.post(
        `/sw/v1/likes/?newsId=${publication_id}&type=add/`
      );
      console.log(result);
    }
  };
  return (
    <div className={`media-controls ${otherClassName}`}>
      <div className="media-controls__wrapper">
        <div className="media-controls__group">
          <span className="media-controls__viewed">{views} просмотров</span>
        </div>
        <div className="media-controls__group">
          <div className="media-controls__btns">
            <button
              onClick={addLike}
              className="btn-control btn-control--blue media-controls__btn"
            >
              <ReactSVG src="/img/sprite/icon-like-thumb-up.svg" />
              <span>{likes}</span>
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
