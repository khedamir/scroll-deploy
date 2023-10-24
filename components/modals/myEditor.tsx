"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { OutputData } from "@editorjs/editorjs";
import { ReactSVG } from "react-svg";

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
  return (
    <div className={`modal modal--wide ${active && "is--active"}`}>
      <div className="modal__wrap">
        <div className="modal__wrapper">
          <div className="editor__content">
            <h5>Новая публикация</h5>
            <button
              onClick={() => setActive(false)}
              className="modal__close-btn"
            >
              <ReactSVG src="/img/sprite/icon-close-thin.svg" />
            </button>
            <Editor
              data={data as OutputData}
              onChange={setData}
              holder="editorjs-container"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
