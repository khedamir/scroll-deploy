import { title } from "process";
import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { ReactSVG } from "react-svg";

interface SelectorProps {
  children: ReactNode;
  triggerItem: ReactNode;
  title: string;
  active: boolean;
  setActive: (v: boolean) => void;
}

const Selector: FC<SelectorProps> = ({
  children,
  title,
  triggerItem,
  active,
  setActive,
}) => {
  const selectorRef = useRef<HTMLDivElement | null>(null);

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      selectorRef.current &&
      !selectorRef.current.contains(event.target as Node)
    ) {
      // Клик произошел вне селектора, закрываем его
      setActive(false);
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
  
  return (
    <div
      ref={selectorRef}
      style={{ width: "fit-content" }}
      className={`media-controls__btn c-share ${active && "is--active"}`}
    >
      <button
        onClick={() => setActive(!active)}
        className="btn-control c-share__trigger"
      >
        {triggerItem}
      </button>
      <div className="c-share__dropdown">
        <div className="c-share__top">
          <h3 className="c-share__title">{title}</h3>
          <button
            onClick={() => setActive(false)}
            className="c-share__close"
            aria-label="Закрыть"
          >
            <ReactSVG src="/img/sprite/icon-close.svg" />
          </button>
        </div>
        <ul className="c-share__list">{children}</ul>
      </div>
    </div>
  );
};

export default Selector;
