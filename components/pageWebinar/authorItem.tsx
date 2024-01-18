import Image from "next/image";
import React, { FC } from "react";

const colors = [
  "#5B4FBA",
  "#CB5362",
  "#1359E7",
  "#31AF63",
  "#F6A41A",
  "#5A2CBB",
  "#D61646",
  "#3B68D9",
  "#60C287",
  "#EAAD45",
  "#8A7FDC",
  "#FE687A",
  "#5D8DEF",
  "#70AA5E",
  "#E27241",
];

interface AuthorItemProps {
  fio: string;
  photo: string;
  position: string;
}

function getColor(fio: string) {
  const index = fio.charCodeAt(0) % colors.length;
  return colors[index];
}

const AuthorItem: FC<AuthorItemProps> = ({ fio, photo, position }) => {
  const color = getColor(fio);
  return (
    <article className="speaker-card webinar__speaker">
      <picture className="speaker-card__img">
        {photo ? (
          <Image fill loading="lazy" src={photo} alt="Image" />
        ) : (
          <span
            style={{
              backgroundColor: color,
            }}
            className="speaker-card__img--empty"
          >
            {fio[0]}
          </span>
        )}
      </picture>
      <div className="speaker-card__body">
        <h3 className="speaker-card__title">{fio}</h3>
        <span className="speaker-card__description">{position}</span>
      </div>
    </article>
  );
};

export default AuthorItem;
