import React, { FC } from "react";
import { PropType } from "../../redux/types";
import Link from "next/link";

interface TagsProps {
  tags: PropType;
}

const Tags: FC<TagsProps> = ({ tags }) => {
  return (
    <div className="description-tags">
      {
        <div className="description-tags__inner">
          {tags.VALUE.map((tag, id) => (
            <Link href={"/"} key={id}>
              {tag}
            </Link>
          ))}
        </div>
      }
    </div>
  );
};

export default Tags;
