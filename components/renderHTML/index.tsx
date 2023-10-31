import React, { FC } from "react";
import parse from "html-react-parser";

interface RenderHTMLProps {
  content: string;
}

const RenderHTML: FC<RenderHTMLProps> = ({ content }) => {
  return <span className="html__render">{parse(content)}</span>;
};

export default RenderHTML;
