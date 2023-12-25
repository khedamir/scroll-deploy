import Image from "next/image";
import React, { FC, useEffect, useRef } from "react";

interface NewContentWidgetProps {
  title: string;
  refCallback: (ref: HTMLDivElement | null) => void;
  setModalActive: (v: boolean) => void;
}

const NewContentWidget: FC<NewContentWidgetProps> = ({
  title,
  refCallback,
  setModalActive,
}) => {
  const contentWidgetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    refCallback(contentWidgetRef.current);
  }, [refCallback]);

  return (
    <div
      ref={contentWidgetRef}
      style={{ marginBottom: 0, marginTop: "24px" }}
      className="content-widget content-widget--mobile"
    >
      <div className="content-widget__wrapper">
        <div className="content-widget__body">
          <span className="content-widget__help">Консультация юриста</span>
          <h5 className="content-widget__title">{title}</h5>
          <picture className="content-widget__img">
            <Image
              width={117}
              height={117}
              src="/img/widget-consultation-01.jpg"
              alt="Image"
            />
          </picture>
          <button
            onClick={() => setModalActive(true)}
            className="content-widget__circle-btn"
          >
            Записаться
          </button>
        </div>
        <button
          onClick={() => setModalActive(true)}
          className="content-widget__btn btn"
        >
          Записаться
        </button>
      </div>
    </div>
  );
};

export default NewContentWidget;
