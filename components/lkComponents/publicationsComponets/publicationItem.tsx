import Link from "next/link";
import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import { PublishedNewType } from "../../../redux/new_publication/type";

interface PublicationItemProps {
  item: PublishedNewType;
}

const PublicationItem: FC<PublicationItemProps> = ({ item }) => {
  return (
    <div className="lk-publications-card lk-publications__item">
      <div className="lk-publications-card__wrapper">
        <div className="lk-publications-card__top">
          <Link
            href={`/news/${item.id}`}
            className="lk-publications-card__title"
          >
            {item.name}
          </Link>
          <span className="lk-publications-card__date">12 марта</span>
        </div>
        <div className="lk-publications-card__bottom">
          <div className="lk-publications-card__controls">
            <button className="lk-publications-card__control lk-publications-card__control--red lk-publications-card__control--like">
              <ReactSVG
                className="lk-publications-card__control-icon lk-publications-card__control-icon--default"
                src="/img/sprite/icon-like-thumb-up.svg"
              />
              <ReactSVG
                className="lk-publications-card__control-icon lk-publications-card__control-icon--filled"
                src="/img/sprite/icon-like-thumb-up-filled.svg"
              />
              <span>{item.likes}</span>
            </button>
            <Link
              href={`/news/${item.id}`}
              className="lk-publications-card__control"
            >
              <ReactSVG src="/img/sprite/icon-comment.svg" />
              <span>{item.comments}</span>
            </Link>
            <Link
              href={`/news/${item.id}`}
              className="lk-publications-card__control"
            >
              <ReactSVG src="/img/sprite/icon-eye.svg" />
              <span>{item.views}</span>
            </Link>
          </div>
          <Link
            href={`/news/${item.id}`}
            className="lk-publications-card__arrow"
          >
            <ReactSVG src="/img/sprite/icon-arrow-link-down.svg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PublicationItem;
