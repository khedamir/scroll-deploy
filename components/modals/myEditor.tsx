"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import RubricSelector from "../lkComponents/rubricSelector";
import { useHandleScroll } from "../../hooks";
import { useEditorContext } from "../../context/editorContext";
import Photo from "../Editor/photo";
import Source from "../Editor/source";
import ThanksModal from "./thanks";
import { addDraft } from "../../redux/new_publication/slice";
import { PublishedNewType } from "../../redux/new_publication/type";
import { useAppDispatch } from "../../redux/store";

// important that we use dynamic loading here
// editorjs should only be rendered on the client side.
const Editor = dynamic(() => import("../../components/Editor"), {
  ssr: false,
});

interface MyEditorProps {
  active: boolean;
  isEdit: boolean;
  setActive: (v: boolean) => void;
  setIsEdit: (v: boolean) => void;
}

export default function MyEditor({
  active,
  setActive,
  isEdit,
  setIsEdit,
}: MyEditorProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [thankModalActive, setThankModalActive] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch();
  useHandleScroll(active);
  const {
    title,
    setTitle,
    rubric,
    setRubric,
    textPreview,
    setTextPreview,
    addDraftNew,
    addPreviewNew,
    clearDatas,
  } = useEditorContext();

  const closeModal = () => {
    addDraftNew({ publication_type: "draft", type: isEdit ? "update" : "add" })
      .then((result) => {
        dispatch(addDraft(result as unknown as PublishedNewType));
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      })
      .finally(() => {
        setActive(false);
      });
    clearDatas();
    setActive(false);
  };

  const addDraftClick = () => {
    addDraftNew({
      publication_type: "moderation",
      type: isEdit ? "update" : "add",
    })
      .then((result) => {
        setError(false);
        dispatch(addDraft(result as unknown as PublishedNewType));
        setThankModalActive(true);
        setActive(false);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  };

  return (
    <>
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
                  onClick={closeModal}
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
                    onClick={closeModal}
                    className="modal-header__close-btn"
                  >
                    <ReactSVG src="/img/sprite/close.svg" />
                  </button>
                </div>

                <div className="modal-header__buttons buttons">
                  <button className="button button_moderation">
                    Отправить
                  </button>
                  <button
                    onClick={addPreviewNew}
                    className="button button_view"
                  >
                    <ReactSVG src="/img/sprite/icon-eye.svg" />
                  </button>
                </div>
              </div>

              <RubricSelector
                selectRubric={rubric}
                setSelectRubric={setRubric}
              />
              <div className="editor-scroll">
                <input
                  type="text"
                  value={title}
                  placeholder="Заголовок"
                  className="editor-input editor-input__title"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Photo />
                <input
                  type="text"
                  value={textPreview}
                  placeholder="Краткое описание новости"
                  className="editor-input editor-input__preview"
                  onChange={(e) => setTextPreview(e.target.value)}
                />
                <Editor holder="editorjs-container" />
                <Source />
              </div>

              <div className="editor__content-bottom buttons">
                <button
                  onClick={addDraftClick}
                  className="button button_moderation"
                >
                  Отправить на модерацию
                  <ReactSVG src="/img/sprite/icon-arrow-link-up.svg" />
                </button>
                <button onClick={addPreviewNew} className="button button_view">
                  Просмотр
                  <ReactSVG src="/img/sprite/icon-eye.svg" />
                </button>
              </div>
              {error && (
                <div className="editor-error">
                  Невозможно сохранить новость! Убедитесь что все поля заполнены
                  корректно!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ThanksModal
        active={thankModalActive}
        setActive={setThankModalActive}
        title="Благодарим за вашу публикацию!"
        description="Мы оповестим вас, когда новость пройдет модерацию. Это может занять несколько часов."
      />
    </>
  );
}
