import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";
import { ReactSVG } from "react-svg";
import { PublishedNewType } from "../../../redux/new_publication/type";
import { useEditorContext } from "../../../context/editorContext";
import { deletePublication } from "../../../utils/formFetchs";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/slice";
import { useAppDispatch } from "../../../redux/store";
import { addPreview, deleteDraft } from "../../../redux/new_publication/slice";

interface DraftItemProps {
  item: PublishedNewType;
  setFormActive: (v: boolean) => void;
}

const DraftItem: FC<DraftItemProps> = ({ item, setFormActive }) => {
  const [menuActive, setMenuActive] = useState(false);
  const { setDatas, setIsEdit } = useEditorContext();
  const { user } = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const selectorRef = useRef<HTMLDivElement | null>(null);

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      selectorRef.current &&
      !selectorRef.current.contains(event.target as Node)
    ) {
      // Клик произошел вне селектора, закрываем его
      setMenuActive(false);
    }
  };

  useEffect(() => {
    // Добавляем обработчик события при монтировании компонента
    document.addEventListener("click", handleDocumentClick);

    // Убираем обработчик события при размонтировании компонента
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const editClick = () => {
    setDatas({
      title: item.name,
      rubric: item.rubric,
      data: item.content,
      photo: item.images ? item.images.detail : "",
      preview: item.anons,
      source: item.poperties.SOURCE ? item.poperties.SOURCE : "",
      sourcePhoto: item.poperties.PUB_SOURCE_LOGO
        ? item.poperties.PUB_SOURCE_LOGO
        : "",
      publicationId: item.id,
    });
    setIsEdit(true);
    setFormActive(true);
    setMenuActive(false);
  };

  const deleteCLick = () => {
    if (user) {
      deletePublication({
        userId: user.id,
        iblockid: "9",
        publication_id: item.id,
      })
        .then(() => {
          dispatch(deleteDraft({ publication_id: item.id }));
        })
        .finally(() => {
          setMenuActive(false);
        });
    }
  };

  const addPreviewNew = () => {
    const previewData = {
      date: new Date().toLocaleString(),
      name: item.name,
      rubric: item.rubric,
      image: item.images?.detail,
      content: item.content,
      anons: item.anons,
      source: item.poperties.SOURCE,
      sourcePhoto: item.poperties.PUB_SOURCE_LOGO,
    };
    dispatch(addPreview(previewData));
    const preview = JSON.stringify(previewData);
    localStorage.setItem("preview", preview);
    window.open("/preview", "_blank");
  };

  return (
    <div className="lk-publications-card lk-publications__item">
      <div className="lk-publications-card__wrapper">
        <div className="lk-publications-card__top">
          <span onClick={addPreviewNew} className="lk-publications-card__title">
            {item.name}
          </span>
          <span className="lk-publications-card__date">12 марта</span>
        </div>
        <div className="lk-publications-card__bottom">
          <div className="lk-publications-card__inner">
            {item.poperties.DRAFT ? (
              <span className="lk-publications-card__status lk-publications-card__status--purple">
                Черновик
              </span>
            ) : (
              <span className="lk-publications-card__status lk-publications-card__status--red">
                Ожидает модерации
              </span>
            )}
            {item.poperties.DRAFT && (
              <div
                ref={selectorRef}
                className={`c-more lk-publications-card__more ${
                  menuActive && "is--active"
                }`}
              >
                <button
                  onClick={() => setMenuActive(!menuActive)}
                  className="c-more__trigger"
                >
                  <ReactSVG src="/img/sprite/icon-more-horizontal.svg" />
                </button>
                <div className="c-more__dropdown ">
                  <ul className="c-more__list">
                    <li onClick={editClick} className="c-more__item">
                      <button className="c-more__btn">Редактировать</button>
                    </li>
                    <li onClick={deleteCLick} className="c-more__item">
                      <button className="c-more__btn">Удалить</button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div onClick={addPreviewNew} className="lk-publications-card__arrow">
            <ReactSVG src="/img/sprite/icon-arrow-link-down.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftItem;
