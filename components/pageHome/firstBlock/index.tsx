import React from "react";
import LastNews from "../lastNews";
import NewsList from "../newsList";
import NewsSections from "../newsSections";
import { useSelector } from "react-redux";
import { selectMainPage } from "../../../redux/main_page/slice";

const FirstBlock = () => {
  const { news } = useSelector(selectMainPage);

  return (
    <>
      <LastNews />
      <NewsList news={news.slice(3, 6)} />
      <NewsSections />
      <NewsList news={news.slice(6, 8)} />
      <NewsList news={news.slice(8, 9)} largeNewIndex={0} />
    </>
  );
};

export default FirstBlock;
