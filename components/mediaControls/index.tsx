import React, { FC, useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { server } from "../../utils/server";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/slice";

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
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(Number(likes));
  const { id } = useSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    const fetch = async () => {
      const { data } = await server.get(
        `/sw/v1/publications/?id=${router.query.id}&userId=9`
      );
      const pub = data.datas[Number(router.query.id)];
      setIsLiked(pub.liked);
    };
    fetch();
  }, [id]);

  const addLike = async () => {
    if (isLiked) {
      await server.get(
        `/sw/v1/likes/?newsId=${publication_id}&type=delete&userId=9`
      );
      setIsLiked(false);
      setLikesCount(likesCount - 1);
    } else {
      await server.post(
        `/sw/v1/likes/?newsId=${publication_id}&type=add&userId=9`
      );
      setIsLiked(true);
      setLikesCount(likesCount + 1);
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
              <span>{likesCount}</span>
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
