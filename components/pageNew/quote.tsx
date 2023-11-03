import React, { FC } from "react";

interface QuoteProps {
  quote: string;
  author: string;
}

const Quote: FC<QuoteProps> = ({ quote, author }) => {
  return (
    <div className="c-quote">
      <div className="c-quote__wrapper">
        <p className="c-quote__description">{quote}</p>
        <span className="c-quote__author">{author}</span>
      </div>
    </div>
  );
};

export default Quote;
