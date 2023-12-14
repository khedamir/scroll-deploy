import React, { FC, useState } from "react";
import { SectionBLock } from "../../pages/faq";
import { ReactSVG } from "react-svg";

interface SectionBlockProps {
  item: SectionBLock;
}

const SectionBlock: FC<SectionBlockProps> = ({ item }) => {
  const [activeItem, setActiveItem] = useState("");
  function toggleActiveItem(value: string) {
    if (activeItem === value) {
      setActiveItem("");
    } else {
      setActiveItem(value);
    }
  }
  return (
    <div className="faq__item">
      <h3 className="faq__title">{item.section_name}</h3>
      <div className="faq-list faq__list">
        <div className="faq-list__wrapper">
          {item.elements.map((v, i) => (
            <div
              key={i}
              onClick={() => toggleActiveItem(v.id)}
              className={`faq-list__item ${activeItem === v.id && "is--open"}`}
            >
              <button className="faq-list__trigger">
                <span>{v.question}</span>
                <ReactSVG src="/img/sprite/icon-plus.svg" />
              </button>
              <div className="faq-list__dropdown">
                <p className="faq-list__description">{v.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionBlock;
