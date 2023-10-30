import React, { FC } from "react";
import { PropType } from "../../redux/types";

interface TagsProps {
  tags: PropType;
}

const Tags: FC<TagsProps> = ({ tags }) => {
  return (
    <div className="description-tags">
      {
        <div className="description-tags__inner">
          {tags.VALUE.map((tag, id) => (
            <span key={id}>{tag}</span>
          ))}
        </div>
      }
    </div>
  );
};

export default Tags;
