import React, { FC } from "react";
import RenderHTML from "../renderHTML";

interface NewFragmentProps {
  fragment: string;
}

const NewFragment: FC<NewFragmentProps> = ({ fragment }) => {
  let replacedHTML = fragment.replaceAll(
    '<a name="quote"></a>',
    '<div className="c-quote__wrapper"><p className="c-quote__description">'
  );
  replacedHTML = replacedHTML.replaceAll(
    '<a name="quote_end"></a><br>',
    "</p>"
  );
  replacedHTML = replacedHTML.replaceAll(
    '<a name="quote_author"></a>',
    '<span className="c-quote__author">'
  );
  replacedHTML = replacedHTML.replaceAll(
    '<a name="quote_author_end"></a>',
    "</span></div></div>"
  );
  return <RenderHTML content={replacedHTML} />;
};

export default NewFragment;
