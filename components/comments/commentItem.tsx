import React, { FC, useState } from "react";
import { CommentType } from "../../redux/comments/types";
import { formatDateDifference } from "../../utils/formatDate";
import { ReactSVG } from "react-svg";
import SubComment from "./subComment";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/slice";
import { useModalsContext } from "../../context/ModalsContext";
import { changeCommentLike } from "../../utils/controls";
import UserIcon from "../userIcon";

interface CommentItemProps {
  comment: CommentType;
  setParentComment: (c: CommentType) => void;
}

const CommentItem: FC<CommentItemProps> = ({ comment, setParentComment }) => {
  const [isLiked, setIsLiked] = useState(comment.LIKED);
  const [likesCount, setLikesCount] = useState(Number(comment.UF_LIKES));
  const { user } = useSelector(selectUser);
  const { setLoginActive } = useModalsContext();

  const addLike = () => {
    if (!user) {
      setLoginActive(true);
      return;
    }

    changeCommentLike({
      id: comment.ID,
      type: isLiked ? "deleteLike" : "addLike",
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
    <>
      <div className="comment-card comments-all__card">
        <div className="comment-card__top">
          <span className="comment-card__author">
            <span className="comment-card__author-img">
              <UserIcon
                avatarColor={comment.author_avatar_color}
                userPhoto={comment.author_photo}
                nameLatter={comment.author_name?.[0]}
              />
            </span>
            <span>
              {comment.author_name} {comment.author_surname}
            </span>
          </span>
          <span className="comment-card__time comment-card__time--desktop">
            {formatDateDifference(comment.UF_DATE)}
          </span>
        </div>
        <div className="comment-card__body">
          <div className="comment-card__content">
            <p>{comment.UF_TEXT}</p>
          </div>
        </div>
        <div className="comment-card__bottom">
          <button
            onClick={addLike}
            className={`feedback-btn comment-card__like ${
              isLiked && "is--active"
            }`}
          >
            <div className="feedback-btn__icon">
              <ReactSVG
                className="default"
                src="/img/sprite/icon-like-thumb-up.svg"
              />
              <ReactSVG
                className="active"
                src="/img/sprite/icon-like-thumb-up-filled.svg"
              />
            </div>
            <span>{likesCount}</span>
          </button>
          <span className="comment-card__time comment-card__time--mobile">
            {formatDateDifference(comment.UF_DATE)}
          </span>
          <button
            onClick={() => setParentComment(comment)}
            className="comment-card__answer"
          >
            Ответить
          </button>
        </div>
      </div>
      {comment.ANSWERS && (
        <SubComment
          setParentComment={setParentComment}
          comments={comment.ANSWERS}
        />
      )}
    </>
  );
};

export default CommentItem;
