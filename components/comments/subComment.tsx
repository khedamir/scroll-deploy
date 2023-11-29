import React, { FC } from "react";
import { CommentType } from "../../redux/comments/types";
import CommentItem from "./commentItem";
import { toArray } from "../../utils/toArray";

interface SubCommentProps {
  comments: CommentType[];
  setParentComment: (c: CommentType) => void;
}

const SubComment: FC<SubCommentProps> = ({ comments, setParentComment }) => {
  const arrayComments = toArray(comments);
  return (
    <div className="comments-all__sub">
      {arrayComments?.map((comment) => (
        <CommentItem
          setParentComment={setParentComment}
          key={comment.ID}
          comment={comment}
        />
      ))}
    </div>
  );
};

export default SubComment;
