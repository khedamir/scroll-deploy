import React, { FC, useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { server } from "../../utils/server";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/slice";
import { useModalsContext } from "../../context/ModalsContext";
import { changeFavoriteItem, changeItemLike } from "../../utils/controls";
import { AppState } from "../../redux/store";
import { isElementInFavorites } from "../../redux/favorites/slice";
import Share from "./share";

interface MediaControlsProps {
  otherClassName?: string;
  likes: string;
  liked: boolean;
  views: string;
  publication_id: string;
  favorited: boolean;
  changeFavorite: () => void;
}

const MediaControls: FC<MediaControlsProps> = ({
  otherClassName,
  likes,
  liked,
  views,
  publication_id,
  favorited,
  changeFavorite,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(Number(likes));
  const router = useRouter();
  const { user } = useSelector(selectUser);
  const { setLoginActive } = useModalsContext();

  useEffect(() => {
    if (Number(likes)) {
      const fetch = async () => {
        const { data } = await server.get(
          `/sw/v1/publications/?id=${router.query.id}&userId=${user?.id}`
        );
        const pub = data.datas[Number(router.query.id)];
        setIsLiked(pub.liked);
      };
      fetch();
    }
  }, [user]);

  const addLike = () => {
    if (!user) {
      setLoginActive(true);
      return;
    }

    changeItemLike({
      newsId: publication_id,
      type: isLiked ? "delete" : "add",
      userId: user.id,
    }).then(() => {
      if (isLiked) {
        setLikesCount(likesCount - 1);
      } else {
        setLikesCount(likesCount + 1);
      }
      setIsLiked(!isLiked);
    });
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
            <Share />
            <button
              onClick={changeFavorite}
              className={`btn-control media-controls__btn ${
                favorited && "is--active"
              }`}
            >
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
