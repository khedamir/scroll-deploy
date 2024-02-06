import React, { useState, FC, useEffect } from "react";
import NewComment from "./newComment";
import { useAppDispatch } from "../../redux/store";
import { fetchComments } from "../../redux/comments/asyncAction";
import { useSelector } from "react-redux";
import { addNewPageComments, selectComments } from "../../redux/comments/slice";
import CommentItem from "./commentItem";
import { Status } from "../../redux/types";
import { CommentType } from "../../redux/comments/types";
import { selectUser } from "../../redux/auth/slice";
import getCommentCountWord from "../../utils/getCommentCountWord";
import { server } from "../../utils/server";
import Skeleton from "react-loading-skeleton";

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
  const { data, status, all_comments_count, pagination } =
    useSelector(selectComments);
  const { user } = useSelector(selectUser);
  const [parentComment, setParentComment] = useState<CommentType>();
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchComments({
        id_publication,
        type: "get",
        userId: user ? user.id : "",
        page: 1,
      })
    );
  }, [user]);

  const fetchNewPage = async () => {
    const { data } = await server.post(
      `/sw/v1/comments.php`,
      {
        id_publication,
        type: "get",
        userId: user?.id,
        page,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    dispatch(addNewPageComments(data.datas));
  };

  useEffect(() => {
    if (pagination && page > 1 && page <= pagination?.totalPages) {
      fetchNewPage();
    }
  }, [page]);

  return (
    <div id="publication-comments" className={`comments ${otherClassName}`}>
      <div className="comments__top">
        <h3 className="comments__heading">
          {getCommentCountWord(all_comments_count)}
        </h3>
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
              <div className="comment-card comments-all__card">
                <div className="comment-card__top">
                  <span className="comment-card__author">
                    <span className="comment-card__author-img">
                      <Skeleton
                        width={32}
                        height={32}
                        count={1}
                        borderRadius={50}
                      />
                    </span>
                    <Skeleton height={15} width={150} borderRadius={8} />
                  </span>
                </div>
                <div className="comment-card__body">
                  <div className="comment-card__content">
                    <Skeleton height={30} borderRadius={8} />
                  </div>
                </div>
                <div className="comment-card__bottom">
                  <Skeleton height={15} width={150} borderRadius={8} />
                </div>
              </div>
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
            {pagination && pagination?.totalPages > page && (
              <div className="new-comments__btn">
                <span onClick={() => setPage(page + 1)}>Загрузить ещё</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
