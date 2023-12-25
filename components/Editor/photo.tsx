import React from "react";
import { useEditorContext } from "../../context/editorContext";
import Image from "next/image";

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
      {photo && (
        <picture
          className="editor-photo__preview"
          style={{ position: "relative" }}
        >
          <Image
            src={photo}
            alt="Image"
            sizes="100vw"
            loading="lazy"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={500}
            height={300}
          />
        </picture>
      )}
    </div>
  );
};

export default Photo;
