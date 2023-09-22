import React, { FC } from "react";

interface AuthorItemProps {
  author: {
    id: number;
    name: string;
    position: string;
  };
}

const AuthorItem: FC<AuthorItemProps> = ({ author }) => {
  return (
    <article key={author.id} className="speaker-card webinar__speaker">
      <picture className="speaker-card__img">
        <img src="/img/speaker-01.jpg" alt="Image" />
      </picture>
      <div className="speaker-card__body">
        <h3 className="speaker-card__title">{author.name}</h3>
        <span className="speaker-card__description">{author.position}</span>
      </div>
    </article>
  );
};

export default AuthorItem;
