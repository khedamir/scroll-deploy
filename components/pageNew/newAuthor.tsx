import React, { FC } from "react";
import { baseURL } from "../../utils/server";
import { FullNewType, PropType } from "../../redux/types";
import Link from "next/link";

// interface NewAuthorProps {
//   PUB_SOURCE?: PropType;
//   PUB_SOURCE_LOGO?: PropType;
//   author_name?: string;
//   author_surname?: string;
//   author_photo?: string;
// }

interface NewAuthorProps {
  newItem: FullNewType;
}

const NewAuthor: FC<NewAuthorProps> = ({ newItem }) => {
  return (
    <div className="c-author layout__sticky">
      <article className="c-author__wrapper">
        {newItem.props.SOURCE ? (
          <>
            <picture className="c-author__img">
              <img
                src={`${newItem.props.PUB_SOURCE_LOGO?.VALUE[0]}`}
                alt="Image"
              />
            </picture>
            <div className="c-author__body">
              <h3 className="c-author__name">
                {newItem.props.SOURCE.VALUE[0]}
              </h3>
            </div>
          </>
        ) : newItem.author_name ? (
          <>
            <picture className="c-author__img">
              <img src={`${newItem.author_photo}`} alt="Image" />
            </picture>
            <div className="c-author__body">
              <h3 className="c-author__name">
                {newItem.author_name} {newItem.author_surname}
              </h3>
            </div>
          </>
        ) : (
          <>
            <picture className="c-author__img">
              <img src="/img/logotype-small.svg" alt="Image" />
            </picture>
            <div className="c-author__body">
              <h3 className="c-author__name">Scroll</h3>
            </div>
          </>
        )}
      </article>
    </div>
  );
};

export default NewAuthor;
