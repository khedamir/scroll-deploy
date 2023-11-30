import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ReactSVG } from "react-svg";
import { selectComments } from "../../redux/comments/slice";
import { CommentType, CommentsFetchType } from "../../redux/comments/types";
import { useAppDispatch } from "../../redux/store";
import { Status } from "../../redux/types";
import CommentItem from "../comments/commentItem";
import TrendNewComment from "./trendNewComment";
import { server } from "../../utils/server";

interface TrendCommentsProps {
  active: boolean;
  id_publication: string;
}

export type FetchCommentsParams = {
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchComments({ id_publication, type: "get" })
      .then((result) => {
        setComments(result.data.datas);
        setIsLoading(true);
      })
      .finally(() => {
        setIsLoading(true);
      });
  }, []);

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
