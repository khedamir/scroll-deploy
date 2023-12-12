"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { OutputData } from "@editorjs/editorjs";
import { ReactSVG } from "react-svg";
import Select from "../select/select";
import editorFormattedContent from "../../utils/editorFormattedContent";
import { RubricType } from "../../redux/rubrics/types";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/slice";
import { useAppDispatch } from "../../redux/store";
import { addPreview } from "../../redux/new_publication/slice";
import { PreviewNewType } from "../../redux/new_publication/type";
import { useRouter } from "next/router";

// important that we use dynamic loading here
// editorjs should only be rendered on the client side.
const Editor = dynamic(() => import("../../components/Editor"), {
  ssr: false,
});

export default function MyEditor({
  active,
  setActive,
}: {
  active: boolean;
  setActive: (v: boolean) => void;
}) {
  //state to hold output data. we'll use this for rendering later
  const [data, setData] = useState<OutputData>();
  const [title, setTitle] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const { user } = useSelector(selectUser);

  const [selectRubric, setSelectRubric] = useState<RubricType>();
  const dispatch = useAppDispatch();

  const previewClick = () => {
    const newData: PreviewNewType = {
      date: new Date().toLocaleString(),
      name: title,
      rubric: selectRubric ? selectRubric.NAME : "",
      image: "",
      content: data ? editorFormattedContent(data) : "",
      author_name: user?.name ? user.name : "",
      author_surname: user?.last_name ? user.last_name : "",
      author_photo: user?.photo ? user.photo : "",
    };

    dispatch(addPreview(newData));
    const preview = JSON.stringify(newData);
    localStorage.setItem("preview", preview);
    window.open("/preview", "_blank");
  };

  return (
    <div className={`modal modal--wide ${active && "is--active"}`}>
      <div className={`modal__wrap ${isClicked && "frame-btn_active"}`}>
        <div className="modal__wrapper">
          <div className="editor__content">
            <div className="modal-header">
              <div className="modal-header__title">
                <h5>Новая публикация</h5>
              </div>
              <div className="modal-header__config">
                <button
                  onClick={() => setIsClicked(!isClicked)}
                  className="modal-header__frame-btn"
                >
                  <ReactSVG src="/img/sprite/icon-frame.svg" />
                </button>
                <button
                  onClick={() => setActive(false)}
                  className="modal-header__close-btn"
                >
                  <ReactSVG src="/img/sprite/close.svg" />
                </button>
              </div>
            </div>
            <Select
              selectRubric={selectRubric}
              setSelectRubric={setSelectRubric}
            />
            <div className="editor-scroll">
              <input
                type="text"
                value={title}
                placeholder="Заголовок"
                onChange={(e) => setTitle(e.target.value)}
              />
              <Editor
                data={data as OutputData}
                onChange={setData}
                holder="editorjs-container"
              />
            </div>
            <div className="buttons">
              <button className="button button_moderation">
                Отправить на модерацию
                <ReactSVG src="/img/sprite/icon-arrow-link-up.svg" />
              </button>
              <button onClick={previewClick} className="button button_view">
                Просмотр
                <ReactSVG src="/img/sprite/icon-eye.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
