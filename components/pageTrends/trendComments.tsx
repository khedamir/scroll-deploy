import React, { FC, useEffect, useState } from "react";
import { CommentType, CommentsFetchType } from "../../redux/comments/types";
import CommentItem from "../comments/commentItem";
import TrendNewComment from "./trendNewComment";
import { server } from "../../utils/server";

interface TrendCommentsProps {
  active: boolean;
  id_publication: string;
}

export type FetchCommentsParams = {
  page: number;
  id_publication: string;
  type: CommentsFetchType;
};

export const fetchComments = async (params: FetchCommentsParams) => {
  return await server.post(`/sw/v1/comments.php`, params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

const TrendComments: FC<TrendCommentsProps> = ({ active, id_publication }) => {
  const [parentComment, setParentComment] = useState<CommentType>();
  const [comments, setComments] = useState<CommentType[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchComments({ id_publication, type: "get", page })
      .then((result) => {
        setComments(result.data.datas);
        setTotalPages(result.data.pagination.totalPages);
        setIsLoading(true);
      })
      .finally(() => {
        setIsLoading(true);
      });
  }, []);

  useEffect(() => {
    if (totalPages && page > 1 && page <= totalPages) {
      fetchComments({ id_publication, type: "get", page }).then((result) => {
        setComments((prev) => [...prev, ...result.data.datas]);
      });
    }
  }, [page]);

  return (
    <div className={`comments-all trands__comments ${active && "is--active"}`}>
      <div className="comments-all__scroll scroll-x" data-simplebar>
        <div className="comments-all__wrapper">
          <div className="comments-all__item">
            {!isLoading ? (
              <div>Идет загрузка комментариев...</div>
            ) : isLoading && comments.length === 0 ? (
              <div>Напишите первый комментарий</div>
            ) : (
              comments.map((comment) => (
                <CommentItem
                  key={comment.ID}
                  comment={comment}
                  setParentComment={setParentComment}
                />
              ))
            )}
            {totalPages > page && (
              <div className="new-comments__btn">
                <span onClick={() => setPage(page + 1)}>Загрузить ещё</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <TrendNewComment
        id_publication={id_publication}
        parentComment={parentComment}
        setParentComment={setParentComment}
        setComments={setComments}
      />
    </div>
  );
};

export default TrendComments;
