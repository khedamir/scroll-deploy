import React, { FC } from "react";
import WebinerItem from "../../pageLawyersClub/webinerItem";
import { WebinarType } from "../../../redux/types";

interface ClubBlockProps {
  webinars: WebinarType[];
}

const ClubBlock: FC<ClubBlockProps> = ({ webinars }) => {
  return (
    <div className="webinar-grid">
      {webinars.map(
        (web, id) =>
          id % 2 !== 0 &&
          id !== 0 && (
            <WebinerItem key={web.id} webinars={[web, webinars[id - 1]]} />
          )
      )}
    </div>
  );
};

export default ClubBlock;
