import React, { FC, useState } from "react";
import { CommentType } from "../../redux/comments/types";
import { ReactSVG } from "react-svg";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/slice";
import { useAppDispatch } from "../../redux/store";
import { AddCommentFetchParams, AddCommentFetch } from "../../utils/formFetchs";
import { fetchComments } from "./trendComments";

interface TrendNewCommentProps {
  id_publication: string;
  parentComment: CommentType | undefined;
  setParentComment: (v: any) => void;
  setComments: (v: CommentType[]) => void;
}

const TrendNewComment: FC<TrendNewCommentProps> = ({
  id_publication,
  parentComment,
  setParentComment,
  setComments,
}) => {
  const [text, setText] = useState("");
  const [inputActive, setInputActive] = useState(false);
  const { id, user } = useSelector(selectUser);
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    const params: AddCommentFetchParams = {
      iblockId: "28",
      text,
      id_publication,
      userId: id,
      depth_level: parentComment ? parentComment.UF_DEPTH_LEVEL + 1 : "1",
    };
    if (parentComment) {
      params.parent_comment = parentComment.ID;
    }

    AddCommentFetch(params).then(() => {
      setText("");
      setParentComment(undefined);
      setInputActive(false);
      fetchComments({ id_publication, type: "get" }).then((result) => {
        setComments(result.data.datas);
      });
    });
  };

  return (
    <div className="comments-short-new comments-all__short-new">
      <div className="comments-short-new__inner">
        {parentComment && (
          <div style={{ marginBottom: "12px" }}>
            @{parentComment.author_name}
          </div>
        )}
        <input
          type="text"
          className="comments-short-new__input"
          placeholder="Введите комментарий"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={onSubmit} className="comments-short-new__btn">
          <ReactSVG src="/img/sprite/icon-arrow-next.svg" />
        </button>
      </div>
    </div>
  );
};

export default TrendNewComment;
