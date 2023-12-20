import React, { FC, useState } from "react";
import Selector from "../selector";
import { ReactSVG } from "react-svg";
import { useSelector } from "react-redux";
import { selectRubrics } from "../../redux/rubrics/slice";
import SelectItem from "../selector/selectItem";
import { RubricType } from "../../redux/rubrics/types";
import { baseURL } from "../../utils/server";

interface RubricSelectorProps {
  selectRubric: RubricType | undefined;
  setSelectRubric: (v: RubricType) => void;
}

const RubricSelector: FC<RubricSelectorProps> = ({
  selectRubric,
  setSelectRubric,
}) => {
  const { rubrics } = useSelector(selectRubrics);
  const [active, setActive] = useState(false);

  return (
    <div className={`rubric__selector ${active && "is--active"}`}>
      <Selector
        active={active}
        setActive={setActive}
        triggerItem={
          <div className={"rubric__selector-trigger"}>
            {selectRubric ? (
              <span>
                <img src={`${baseURL}${selectRubric.THEME_ICON_PATH}`} alt="" />
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
            <div key={rubric.ID} onClick={() => setSelectRubric(rubric)}>
              <SelectItem>
                <img src={`${baseURL}${rubric.THEME_ICON_PATH}`} alt="" />
                {rubric.NAME}
              </SelectItem>
            </div>
          ))}
      </Selector>
    </div>
  );
};

export default RubricSelector;
