import React, { FC, useState } from "react";
import { ReactSVG } from "react-svg";
import { extractVideoId } from "../../utils/extractVideoId";
import { TrendType } from "../../redux/trends/types";
import { useSelector } from "react-redux";
import { useModalsContext } from "../../context/ModalsContext";
import { selectUser } from "../../redux/auth/slice";
import { changeFavoriteItem, changeItemLike } from "../../utils/controls";
import { useFavoriteContext } from "../../context/FavoritesContext";
import { isElementInFavorites } from "../../redux/favorites/slice";
import { FavoriteVideo } from "../../redux/favorites/types";
import { AppState } from "../../redux/store";
import YouTube from "react-youtube";
import TrendInfo from "./trendInfo";

interface TrendItemProps {
  trend: TrendType;
}

const TrendItem: FC<TrendItemProps> = ({ trend }) => {
  const { user } = useSelector(selectUser);
  const { setLoginActive } = useModalsContext();
  const { addFavorite, deleteFavorite } = useFavoriteContext();
  const isFavorite = useSelector((state: AppState) =>
    isElementInFavorites(state, "28", trend.id)
  );
  const [isLiked, setIsLiked] = useState(trend.liked);
  const [likesCount, setLikesCount] = useState(Number(trend.likes));

  const addLike = () => {
    if (!user) {
      setLoginActive(true);
      return;
    }

    changeItemLike({
      newsId: trend.id,
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

  const changeFavorite = () => {

    if (isFavorite) {
      deleteFavorite({ itemId: trend.id, sectionId: "28" });
    }

    if (!isFavorite) {
      const favoriteItem: FavoriteVideo = {
        id: trend.id,
        data: {
          images: trend.images,
          NAME: trend.name,
        },
      };
      addFavorite({
        itemId: trend.id,
        sectionId: "28",
        videoItem: favoriteItem,
      });
    }
  };

  return (
    <div key={trend.id} className="swiper-slide">
      <div className="trands__slide">
        <div className="trands__left">
          <div className="trands__media">
            <YouTube
              opts={{
                width: "100%",
                heigth: "100%",
                playerVars: {
                  controls: 0,
                  showinfo: 0,
                  loop: 1,
                },
              }}
              videoId={extractVideoId(trend.poperties.LINK_VIDEO)}
            />
          </div>
          <div className="trands__controls">
            <button className="trands__control c-like">
              <div onClick={addLike} className="c-like__inner">
                <ReactSVG
                  className="c-like__icon c-like__icon--default"
                  src="/img/sprite/icon-like-thumb-up.svg"
                />
                <ReactSVG
                  className="c-like__icon c-like__icon--filled"
                  src="/img/sprite/icon-like-thumb-up-filled.svg"
                />
              </div>
              <span>{likesCount}</span>
            </button>
            <button className="trands__control">
              <ReactSVG src="/img/sprite/icon-comment.svg" />
              <span>44</span>
            </button>
            <button
              onClick={changeFavorite}
              className={`trands__control c-bookmark ${
                isFavorite && "is-active"
              }`}
            >
              <ReactSVG
                className="c-bookmark__icon c-bookmark__icon--default"
                src="/img/sprite/icon-bookmarks.svg"
              />
              <ReactSVG
                className="c-bookmark__icon c-bookmark__icon--filled"
                src="/img/sprite/icon-bookmarks-filled.svg"
              />
            </button>
          </div>
        </div>
        <div className="trands__right">
          <TrendInfo
            trendId={trend.id}
            trendName={trend.name}
            trendAuthor={trend.poperties.PUB_AUTOR}
            trendAuthorPhoto={trend.poperties.AUTHOR_LOGO}
          />
        </div>
      </div>
    </div>
  );
};

export default TrendItem;
