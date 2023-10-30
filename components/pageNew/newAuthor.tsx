import React, { FC } from "react";
import { baseURL } from "../../utils/server";
import { PropType } from "../../redux/types";
import Link from "next/link";

interface NewAuthorProps {
  PUB_SOURCE?: PropType;
  PUB_SOURCE_LOGO?: PropType;
  SOURCE?: PropType;
  author_name?: string;
  author_surname?: string;
  author_photo?: string;
}

const NewAuthor: FC<NewAuthorProps> = ({
  PUB_SOURCE,
  PUB_SOURCE_LOGO,
  SOURCE,
  author_name,
  author_surname,
  author_photo,
}) => {
  return (
    <div className="c-author layout__sticky">
      <article className="c-author__wrapper">
        {PUB_SOURCE && SOURCE ? (
          <>
            <picture className="c-author__img">
              <img src={`${baseURL}${PUB_SOURCE_LOGO?.VALUE[0]}`} alt="Image" />
            </picture>
            <div className="c-author__body">
              <Link href={SOURCE?.VALUE[0]}>
                <h3 className="c-author__name">{PUB_SOURCE.VALUE[0]}</h3>
              </Link>
            </div>
          </>
        ) : (
          <>
            <picture className="c-author__img">
              <img src={`${baseURL}${author_photo}`} alt="Image" />
            </picture>
            <div className="c-author__body">
              <h3 className="c-author__name">
                {author_name} {author_surname}
              </h3>
            </div>
          </>
        )}
      </article>
    </div>
  );
};

export default NewAuthor;
