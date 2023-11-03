"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { OutputData } from "@editorjs/editorjs";
import { ReactSVG } from "react-svg";
import Select from "../select/select";

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
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={`modal modal--wide ${active && "is--active"}`}>
      <div className={`modal__wrap ${isClicked ? 'frame-btn_activ' : ''}`}>
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
            <Select />
            <div className="editor-scroll">
              <Editor
                data={data as OutputData}
                onChange={setData}
                holder="editorjs-container"
              />
            </div>
            <div className="buttons">
              <button className="button button_moderation">Отправить на модерацию
                <ReactSVG src="/img/sprite/icon-arrow-link-up.svg" />
              </button>
              <button className="button button_view">Просмотр
                <ReactSVG src="/img/sprite/icon-eye.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
