import Link from "next/link";
import React from "react";

const ContentWidget = () => {
  return (
    <div className="content-widget layout__sticky">
      <div className="content-widget__wrapper">
        <div className="content-widget__body content-widget__body--gradient content-widget__body--lg">
          <span className="content-widget__help">Конструктор документов</span>
          <h3 className="content-widget__title">
            Все документы в&nbsp;одном сервисе
          </h3>
          <div className="content-widget__decor content-widget__decor--cube"></div>
          <div className="content-widget__decor content-widget__decor--small"></div>
          <div className="content-widget__decor content-widget__decor--medium"></div>
          <div className="content-widget__decor content-widget__decor--large"></div>
          <div className="content-widget__decor content-widget__decor--cone"></div>
          <Link href="" className="content-widget__circle-btn">
            Перейти
          </Link>
        </div>
        <Link href="" className="content-widget__btn btn">
          Перейти
        </Link>
      </div>
    </div>
  );
};

export default ContentWidget;
