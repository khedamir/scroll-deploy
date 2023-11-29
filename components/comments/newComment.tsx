import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { ReactSVG } from "react-svg";
import { selectUser } from "../../redux/auth/slice";
import { AddCommentFetch, AddCommentFetchParams } from "../../utils/formFetchs";
import { useAppDispatch } from "../../redux/store";
import { fetchComments } from "../../redux/comments/asyncAction";
import { CommentType } from "../../redux/comments/types";

interface NewCommentProps {
  iblockId: string;
  id_publication: string;
  parentComment: CommentType | undefined;
  setParentComment: (v: any) => void;
}

const NewComment: FC<NewCommentProps> = ({
  id_publication,
  parentComment,
  setParentComment,
}) => {
  const [text, setText] = useState("");
  const [inputActive, setInputActive] = useState(false);
  const { id, user } = useSelector(selectUser);
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    const params: AddCommentFetchParams = {
      iblockId: "9",
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
      dispatch(fetchComments({ id_publication, type: "get" }));
    });
  };

  const resetComment = () => {
    setText("");
    setParentComment(undefined);
    setInputActive(false);
  };

  return (
    <div className="comments-new comments__new">
      <div className={`comments-new__wrapper ${inputActive && "is--active"}`}>
        <picture className="comments-new__img">
          <span>{user?.main.VALUES.NAME.VALUE[0]}</span>
        </picture>
        <div className="comments-new__body">
          {parentComment && <div style={{marginBottom: '12px'}}>@{parentComment.author_name}</div>}
          <textarea
            className="comments-new__input comments-new__trigger"
            placeholder="Введите комментарий"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onClick={() => setInputActive(true)}
          ></textarea>
          <div className="comments-new__holder">
            <div className="comments-new__inner">
              <div className="comments-new__controls">
                <button className="comments-new__emoji">
                  <ReactSVG src="/img/sprite/icon-emoji.svg" />
                </button>
              </div>
              <div className="comments-new__controls">
                <button onClick={resetComment} className="comments-new__clear">
                  Отмена
                </button>
                <button
                  onClick={onSubmit}
                  className="comments-new__enter"
                  disabled={!text}
                >
                  <ReactSVG src="/img/sprite/icon-arrow-next.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewComment;
