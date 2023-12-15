import { title } from "process";
import React, { FC, ReactNode, useState } from "react";
import { ReactSVG } from "react-svg";

interface SelectorProps {
  children: ReactNode;
  triggerItem: ReactNode;
  title: string;
  active: boolean;
  setActive: (v: boolean) => void;
  //   items: any[];
  //   selectItem: any;
  //   setSelectItem: (v: any) => void;
}

const Selector: FC<SelectorProps> = ({
  children,
  title,
  triggerItem,
  active,
  setActive,
}) => {
  return (
    <div className={`media-controls__btn c-share ${active && "is--active"}`}>
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
        <ul className="c-share__list">
          {children}
          {/* {items.map((item) => (
            <li className="c-share__item">
              <span className="c-share__btn">{item.NAME}</span>
            </li>
          ))}
          <li className="c-share__item">
            <a href="#" className="c-share__btn c-share__btn--sm">
              элемент1
            </a>
          </li>
          <li className="c-share__item">
            <span className="c-share__btn">элемент2</span>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Selector;
