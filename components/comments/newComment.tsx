import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { ReactSVG } from "react-svg";
import { selectUser } from "../../redux/auth/slice";
import { AddCommentFetch, AddCommentFetchParams } from "../../utils/formFetchs";
import { useAppDispatch } from "../../redux/store";
import { CommentType } from "../../redux/comments/types";
import { addComment } from "../../redux/comments/slice";
import EmojiBlock from "./emojiBlock";
import { useModalsContext } from "../../context/ModalsContext";
import UserIcon from "../userIcon";

interface NewCommentProps {
  iblockId: string;
  id_publication: string;
  parentComment: CommentType | undefined;
  setParentComment: (v: any) => void;
}

const NewComment: FC<NewCommentProps> = ({
  iblockId,
  id_publication,
  parentComment,
  setParentComment,
}) => {
  const [text, setText] = useState("");
  const [inputActive, setInputActive] = useState(false);
  const { user } = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const { setLoginActive } = useModalsContext();

  const onSubmit = () => {
    if (!user) {
      setLoginActive(true);
      return;
    }

    const params: AddCommentFetchParams = {
      iblockId: iblockId,
      text,
      id_publication,
      userId: user.id,
      depth_level: parentComment ? parentComment.UF_DEPTH_LEVEL + 1 : "1",
    };
    if (parentComment) {
      params.parent_comment = parentComment.ID;
    }
    AddCommentFetch(params).then((result) => {
      if (result) {
        setText("");
        setParentComment(undefined);
        setInputActive(false);
        dispatch(addComment(result));
      }
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
        {user && (
          <div className="comments-new__img">
            <UserIcon
              userPhoto={user.photo}
              nameLatter={user.name[0]}
              avatarColor={user.avatar_color}
            />
          </div>
        )}
        <div className="comments-new__body">
          {parentComment && (
            <div style={{ marginBottom: "12px" }}>
              @{parentComment.author_name}
            </div>
          )}
          <textarea
            className="comments-new__input comments-new__trigger"
            placeholder="Введите комментарий"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onClick={() => setInputActive(true)}
          ></textarea>
          <div className="comments-new__holder">
            <div className="comments-new__inner">
              <EmojiBlock text={text} setText={setText} />
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
