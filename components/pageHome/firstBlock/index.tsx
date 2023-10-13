import React from "react";
import LastNews from "../lastNews";
import NewsList from "../newsList";
import NewsSections from "../newsSections";
import { useSelector } from "react-redux";
import { selectNews } from "../../../redux/news/slice";

const FirstBlock = () => {
  const { data } = useSelector(selectNews);

  return (
    <>
      <LastNews />
      <NewsList news={data.datas.slice(3, 6)} />
      <NewsSections />
      <NewsList news={data.datas.slice(6, 8)} />
      <NewsList news={data.datas.slice(8, 9)} largeNewIndex={0} />
    </>
  );
};

export default FirstBlock;
