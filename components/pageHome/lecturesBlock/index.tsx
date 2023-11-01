import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { selectLectures } from "../../../redux/lectures/slice";
import { baseURL } from "../../../utils/server";

const LecturesBlock = () => {
  const { data } = useSelector(selectLectures);
  return (
    <div className="content-card">
      <div className="content-card__wrap">
        <div className="content-card__wrapper content-card__wrapper--flex">
          {data.datas.map((lecture) => (
            <Link
              key={lecture.id}
              href={`/lectures/${lecture.id}`}
              className="content-card__item"
            >
              <picture className="content-card__img">
                <img src={`${lecture.images[1]}`} alt="Image" />
              </picture>
              <div className="content-card__body">
                <h3 className="content-card__title">{lecture.name}</h3>
                <span className="content-card__help">
                  {lecture.poperties.PUB_AUTOR}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LecturesBlock;
