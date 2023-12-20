import React from "react";
import { useEditorContext } from "../../context/editorContext";

const Photo = () => {
  const { photo, setPhoto, changePhoto } = useEditorContext();
  return (
    <div className="editor-photo">
      <input
        type="file"
        id="upload-photo"
        onChange={changePhoto}
        style={{ display: "none" }}
      />

      <div className="editor-photo__buttons">
        {photo ? (
          <>
            <label htmlFor="upload-photo" className="upload-photo-label">
              <span>Изменить фото</span>
            </label>
            <label onClick={() => setPhoto("")} className="delete-photo-label">
              <span>Удалить фото</span>
            </label>
          </>
        ) : (
          <label htmlFor="upload-photo" className="upload-photo-label">
            <span>Загрузить фото</span>
          </label>
        )}
      </div>
      {photo && <img src={photo} alt="" />}
    </div>
  );
};

export default Photo;
