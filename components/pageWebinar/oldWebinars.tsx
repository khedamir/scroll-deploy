import React from "react";
import useSWR from "swr";
import { WebinarType } from "../../redux/types";
import { fetchWebinars } from "../../server/content";
import OldWebinerItem from "../pageLawyersClub/oldWebinarItem";
import OldWebinarsSkeleton from "./oldWebinarsSkeleton";

const OldWebinars = () => {
  const { data, isLoading } = useSWR<WebinarType[]>(
    "webinar-page-recommendations",
    () =>
      fetchWebinars({ limit: 10, webinar: "old" }).then(
        (result) => result.datas
      )
  );

  if (isLoading || !data) {
    return <OldWebinarsSkeleton />;
  }

  return (
    <div className="webinar-grid section-indent section-indent--lg">
      <h3 className="webinar-grid__head">Прошедшие встречи</h3>
      {data.map(
        (web, id) =>
          id % 2 !== 0 &&
          id !== 0 &&
          data[id - 1] && (
            <OldWebinerItem key={web.id} webinars={[web, data[id - 1]]} />
          )
      )}
    </div>
  );
};

export default OldWebinars;
