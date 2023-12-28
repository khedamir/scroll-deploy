import React, { FC, useEffect, useState } from "react";
import RecomendationNew from "./recomendationNew";
import NewFragment from "./newFragment";
import { getAnchorsId } from "../../utils/getAnchorsId";

interface NewContentProps {
  widgetTitle?: string;
  content: string;
  setModalActive: (v: boolean) => void;
}

const NewContent: FC<NewContentProps> = ({
  content,
  setModalActive,
  widgetTitle,
}) => {
  const [newsIdList, setNewIdList] = useState<number[]>([]);
  useEffect(() => {
    setNewIdList(getAnchorsId(content));
  }, [content]);

  const anchorRegex = /<a name="\d+"><\/a>/;
  const articleParts = content.split(anchorRegex);
  return (
    <>
      {articleParts.map((part, index) => (
        <React.Fragment key={index}>
          {index > 0 && <RecomendationNew newId={newsIdList[index - 1]} />}
          <NewFragment
            title={widgetTitle}
            fragment={part}
            setModalActive={setModalActive}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default NewContent;
