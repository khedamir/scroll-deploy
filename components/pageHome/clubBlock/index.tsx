import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { ReactSVG } from "react-svg";
import { selectWebinars } from "../../../redux/webinars/slice";
import WebinerItem from "../../pageLawyersClub/webinerItem";

const ClubBlock = () => {
  const { data } = useSelector(selectWebinars);
  return (
    <div className="webinar-grid">
      {data.datas.map(
        (web, id) =>
          id % 2 !== 0 &&
          id !== 0 && (
            <WebinerItem key={web.id} webinars={[web, data.datas[id - 1]]} />
          )
      )}
    </div>
  );
};

export default ClubBlock;
