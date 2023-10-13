import React, { FC } from "react";

interface RenderHTMLProps {
  content: string;
}

const RenderHTML: FC<RenderHTMLProps> = ({ content }) => {
  return <span dangerouslySetInnerHTML={{ __html: content }} />;
};

export default RenderHTML;
