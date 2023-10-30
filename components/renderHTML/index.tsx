import React, { FC } from "react";

interface RenderHTMLProps {
  content: string;
}

const RenderHTML: FC<RenderHTMLProps> = ({ content }) => {
  return (
    <span className="html__render" dangerouslySetInnerHTML={{ __html: content }} ></span>
  );
};

export default RenderHTML;
