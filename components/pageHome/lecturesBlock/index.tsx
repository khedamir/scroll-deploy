import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { selectLectures } from "../../../redux/lectures/slice";
import { baseURL } from "../../../utils/server";
import Image from "next/image";

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
                <Image
                  src={lecture.images.preview}
                  alt="Image"
                  sizes="100vw"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  width={250}
                  height={150}
                />
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
