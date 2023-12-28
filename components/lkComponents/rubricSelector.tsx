import React, { FC, useEffect, useRef, useState } from "react";
import Selector from "../selector";
import { ReactSVG } from "react-svg";
import { useSelector } from "react-redux";
import SelectItem from "../selector/selectItem";
import { baseURL } from "../../utils/server";
import Image from "next/image";
import { RubricType } from "../../redux/types";

interface RubricSelectorProps {
  selectRubric: RubricType | undefined;
  setSelectRubric: (v: RubricType) => void;
  active: boolean;
  setActive: (v: boolean) => void;
}

const RubricSelector: FC<RubricSelectorProps> = ({
  selectRubric,
  setSelectRubric,
  active,
  setActive,
}) => {
  // const { rubrics } = useSelector(selectRubrics);
  const selectItem = (rubric: RubricType) => {
    setSelectRubric(rubric);
    setActive(false);
  };

  return (
    <div className={`rubric__selector ${active && "is--active"}`}>
      {/* <Selector
        active={active}
        setActive={setActive}
        triggerItem={
          <div className={"rubric__selector-trigger"}>
            {selectRubric ? (
              <span>
                <Image
                  width={32}
                  height={32}
                  src={`${baseURL}${selectRubric.THEME_ICON_PATH}`}
                  alt=""
                />
                {selectRubric.NAME}
              </span>
            ) : (
              "Выбрать рубрику"
            )}
            <ReactSVG
              className="rubric__selector-dropdown"
              src="/img/sprite/icon-dropdown.svg"
            />
          </div>
        }
        title="Выбрать рубрику"
      >
        {rubrics &&
          rubrics.map((rubric) => (
            <div key={rubric.ID} onClick={() => selectItem(rubric)}>
              <SelectItem>
                <Image
                  width={32}
                  height={32}
                  src={`${baseURL}${rubric.THEME_ICON_PATH}`}
                  alt=""
                />
                {rubric.NAME}
              </SelectItem>
            </div>
          ))}
      </Selector> */}
    </div>
  );
};

export default RubricSelector;
