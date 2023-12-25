import { ReactSVG } from "react-svg";
import { FC, useState } from "react";

import "./_select.scss";
import { baseURL } from "../../utils/server";
import { RubricType } from "../../redux/rubrics/types";
import { useSelector } from "react-redux";
import { selectRubrics } from "../../redux/rubrics/slice";
import Image from "next/image";

interface SelectProps {
  selectRubric: RubricType | undefined;
  setSelectRubric: (v: RubricType | undefined) => void;
}

const Select: FC<SelectProps> = ({ selectRubric, setSelectRubric }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { rubrics } = useSelector(selectRubrics);

  const handleClickSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleClickLi = (id: string) => {
    const selectValue = rubrics.find((rubric) => rubric.ID === id);
    setSelectRubric(selectValue);
    setIsOpen(false);
  };

  return (
    <div className="select-box">
      <div className="select-result">
        <span className="select-result__icon">
          {selectRubric ? (
            <Image
              width={32}
              height={32}
              src={`${baseURL}${selectRubric.THEME_ICON_PATH}`}
              alt="rubric"
            />
          ) : (
            <span>Выберите рубрику</span>
          )}
        </span>
        <div className="select-result__value">
          {selectRubric && selectRubric.NAME}
        </div>
      </div>
      <button
        onClick={handleClickSelect}
        className={`select-btn ${isOpen && "isOpen"}`}
      >
        <ReactSVG src="/img/sprite/icon-dropdown.svg" />
      </button>
      {isOpen && (
        <div className="select-modal">
          <ul className="select-modal__list">
            {rubrics &&
              rubrics.map((rubric) => (
                <li
                  className="select-modal__item"
                  value={rubric.CODE}
                  key={rubric.ID}
                  onClick={() => handleClickLi(rubric.ID)}
                >
                  {rubric.NAME}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
