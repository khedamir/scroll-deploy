import React, { FC } from "react";

interface TagsProps {
  value: string;
}

const Tags: FC<TagsProps> = ({ value }) => {
  const tagsList = value ? value.split(", ") : [];
  return (
    <div className="description-tags">
      {tagsList.length > 0 && (
        <div className="description-tags__inner">
          {tagsList.map((tag, id) => (
            <span key={id}>{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tags;
