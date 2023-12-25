import React, { FC } from "react";
import { FullNewType } from "../../redux/types";
import UserIcon from "../userIcon";
import Link from "next/link";
import Image from "next/image";

interface NewAuthorProps {
  newItem: FullNewType;
}

const NewAuthor: FC<NewAuthorProps> = ({ newItem }) => {
  return (
    <div className="c-author layout__sticky">
      {newItem.props.SOURCE ? (
        <article className="c-author__wrapper">
          <picture className="c-author__img">
            <Image
              width={76}
              height={76}
              src={`${newItem.props.PUB_SOURCE_LOGO?.VALUE[0]}`}
              alt="Image"
            />
          </picture>
          <div className="c-author__body">
            <h3 className="c-author__name">{newItem.props.SOURCE.VALUE[0]}</h3>
          </div>
        </article>
      ) : newItem.author_name ? (
        <Link href={"/"} className="c-author__wrapper">
          <div className="c-author__img">
            <UserIcon
              userPhoto={newItem.author_photo}
              nameLatter={newItem.author_name[0]}
              avatarColor={newItem.author_avatar_color}
            />
          </div>
          <div className="c-author__body">
            <span className="c-author__name">
              {newItem.author_name} {newItem.author_surname}
            </span>
          </div>
        </Link>
      ) : (
        <article className="c-author__wrapper">
          <picture style={{ borderRadius: "15px" }} className="c-author__img">
            <Image
              width={76}
              height={76}
              src="/img/logotype-small.svg"
              alt="Image"
            />
          </picture>
          <div className="c-author__body">
            <h3 className="c-author__name">Scroll</h3>
          </div>
        </article>
      )}
    </div>
  );
};

export default NewAuthor;
