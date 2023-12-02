import React, { FC } from "react";
import RecomendationNew from "./recomendationNew";
import NewFragment from "./newFragment";
import { FullNewType } from "../../redux/types";

interface NewContentProps {
  content: string;
  recommendationNews: FullNewType[];
}

const NewContent: FC<NewContentProps> = ({ content, recommendationNews }) => {
  const anchorRegex = /<a name="\d+"><\/a>/;
  const articleParts = content.split(anchorRegex);
  return (
    <>
      {articleParts.map((part, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <RecomendationNew newItem={recommendationNews[index - 1]} />
          )}
          <NewFragment fragment={part} />
        </React.Fragment>
      ))}
    </>
  );
};

export default NewContent;
