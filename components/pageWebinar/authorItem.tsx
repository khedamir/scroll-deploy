import Image from "next/image";
import React, { FC } from "react";

interface AuthorItemProps {
  fio: string;
  photo: string;
  position: string;
}

const AuthorItem: FC<AuthorItemProps> = ({ fio, photo, position }) => {
  return (
    <article className="speaker-card webinar__speaker">
      <picture className="speaker-card__img">
        {photo ? (
          <Image fill loading="lazy" src={photo} alt="Image" />
        ) : (
          <Image fill loading="lazy" src="/img/speaker.png" alt="Image" />
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
