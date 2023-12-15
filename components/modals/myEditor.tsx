"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { OutputData } from "@editorjs/editorjs";
import { ReactSVG } from "react-svg";
import editorFormattedContent from "../../utils/editorFormattedContent";
import { RubricType } from "../../redux/rubrics/types";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/slice";
import { useAppDispatch } from "../../redux/store";
import { addPreview } from "../../redux/new_publication/slice";
import { PreviewNewType } from "../../redux/new_publication/type";
import RubricSelector from "../lkComponents/rubricSelector";
import { useHandleScroll } from "../../hooks";

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
  const [data, setData] = useState<OutputData>();
  const [title, setTitle] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const { user } = useSelector(selectUser);
  const [newImg, setNewImg] = useState("");

  const [selectRubric, setSelectRubric] = useState<RubricType>();
  const dispatch = useAppDispatch();

  useHandleScroll(active);

  const previewClick = () => {
    const newData: PreviewNewType = {
      date: new Date().toLocaleString(),
      name: title,
      rubric: selectRubric ? selectRubric.NAME : "",
      image: newImg,
      content: data ? editorFormattedContent(data) : "",
      author_name: user?.name ? user.name : "",
      author_surname: user?.last_name ? user.last_name : "",
      author_photo: user?.photo ? user.photo : "",
      author_avatar_color: user?.avatar_color ? user.avatar_color : "",
    };

    dispatch(addPreview(newData));
    const preview = JSON.stringify(newData);
    localStorage.setItem("preview", preview);
    window.open("/preview", "_blank");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const fileReader = new FileReader();
    if (file) {
      fileReader.onload = function (ev) {
        if (ev.target && typeof ev.target.result === "string") {
          console.log(ev.target.result);
          setNewImg(ev.target.result);
        }
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`modal modal--wide modal__editor ${active && "is--active"}`}
    >
      <div className={`modal__wrap ${isClicked && "frame-btn_active"}`}>
        <div className="modal__wrapper">
          <div className="editor__content">
            <div className="modal-header">
              <div className="modal-header__title">
                <h5>Новая публикация</h5>
              </div>
              <div
                onClick={() => setActive(false)}
                className="modal-header__title--mobile"
              >
                <ReactSVG src="/img/sprite/icon-arrow-s-prev.svg" />
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

              <div className="modal-header__buttons buttons">
                <button className="button button_moderation">Отправить</button>
                <button onClick={previewClick} className="button button_view">
                  <ReactSVG src="/img/sprite/icon-eye.svg" />
                </button>
              </div>
            </div>

            <RubricSelector
              selectRubric={selectRubric}
              setSelectRubric={setSelectRubric}
            />

            <div className="editor-scroll">
              <input
                type="text"
                value={title}
                placeholder="Заголовок"
                className="editor-title__input"
                onChange={(e) => setTitle(e.target.value)}
              />
              <div className="editor-photo">
                <input
                  type="file"
                  id="upload-photo"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />

                <div className="editor-photo__buttons">
                  {newImg ? (
                    <>
                      <label
                        htmlFor="upload-photo"
                        className="upload-photo-label"
                      >
                        <span>Изменить фото</span>
                      </label>
                      <label
                        onClick={() => setNewImg("")}
                        className="delete-photo-label"
                      >
                        <span>Удалить фото</span>
                      </label>
                    </>
                  ) : (
                    <label
                      htmlFor="upload-photo"
                      className="upload-photo-label"
                    >
                      <span>Загрузить фото</span>
                    </label>
                  )}
                </div>
                {newImg && <img src={newImg} alt="" />}
              </div>
              <Editor
                data={data as OutputData}
                onChange={setData}
                holder="editorjs-container"
              />
            </div>

            <div className="editor__content-bottom buttons">
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
