import React, { useState, FC, useEffect } from "react";
import NewComment from "./newComment";
import { useAppDispatch } from "../../redux/store";
import { fetchComments } from "../../redux/comments/asyncAction";
import { useSelector } from "react-redux";
import { selectComments } from "../../redux/comments/slice";
import CommentItem from "./commentItem";
import { Status } from "../../redux/types";
import { CommentType } from "../../redux/comments/types";

interface CommentsProps {
  otherClassName?: string;
  id_publication: string;
  iblockId: string;
}

const Comments: FC<CommentsProps> = ({
  otherClassName,
  id_publication,
  iblockId,
}) => {
  const { data, status } = useSelector(selectComments);
  const [parentComment, setParentComment] = useState<CommentType>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchComments({ id_publication, type: "get" }));
  }, []);

  return (
    <div className={`comments ${otherClassName}`}>
      <div className="comments__top">
        <h3 className="comments__heading">5 комментариев</h3>
      </div>
      <NewComment
        id_publication={id_publication}
        parentComment={parentComment}
        setParentComment={setParentComment}
        iblockId={iblockId}
      />
      <div className="comments-all comments__all">
        <div className="comments-all__wrapper">
          <div className="comments-all__item">
            {status === Status.LOADING ? (
              <div>Идет загрузка комментариев...</div>
            ) : status === Status.SUCCESS && data.length === 0 ? (
              <div>Напишите первый комментарий</div>
            ) : (
              data.map((comment) => (
                <CommentItem
                  key={comment.ID}
                  comment={comment}
                  setParentComment={setParentComment}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
