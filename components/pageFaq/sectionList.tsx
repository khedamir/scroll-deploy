import React from "react";
import SectionBlock from "./sectionBlock";
import { server } from "../../utils/server";
import useSWR from "swr";
import { SectionBLock } from "../../pages/faq";
import SectionListSkeleton from "./sectionListSkeleton";

const fetchData = async () => {
  const params = {
    iblockId: "35",
  };
  const { data } = await server.post(`/sw/v1/help.php`, params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return Object.values(data.datas) as SectionBLock[];
};

const SectionList = () => {
  const { data, isLoading } = useSWR<SectionBLock[]>(
    "faq-page-elements",
    fetchData
  );

  if (isLoading || !data) {
    return <SectionListSkeleton />;
  }

  return (
    <div className="faq__wrapper">
      {data.map((item) => (
        <SectionBlock key={item.section_id} item={item} />
      ))}
    </div>
  );
};

export default SectionList;
