import React from "react";
import { useEditorContext } from "../../context/editorContext";
import Image from "next/image";

const Source = () => {
  const { source, setSource, sourcePhoto, setSourcePhoto, changeSourcePhoto } =
    useEditorContext();
  return (
    <div className="editor-source">
      <h3 className="editor-source__title">Вы можете указать источник:</h3>
      <input
        type="file"
        id="upload-photo__source"
        onChange={changeSourcePhoto}
        style={{ display: "none" }}
      />
      <div className="editor-photo__buttons">
        {sourcePhoto ? (
          <>
            <label
              htmlFor="upload-photo__source"
              className="upload-photo-label"
            >
              <span>Изменить</span>
            </label>
            <label
              onClick={() => setSourcePhoto("")}
              className="delete-photo-label"
            >
              <span>Удалить</span>
            </label>
          </>
        ) : (
          <label htmlFor="upload-photo__source" className="upload-photo-label">
            <span>Загрузить</span>
          </label>
        )}
      </div>
      <div className="editor-source__description">
        {sourcePhoto && (
          <Image width={36} height={36} src={sourcePhoto} alt="" />
        )}
        <input
          type="text"
          value={source}
          placeholder="Название источника"
          className="editor-input editor-input__source"
          onChange={(e) => setSource(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Source;
