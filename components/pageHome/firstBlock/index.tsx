import React from "react";
import LastNews from "../lastNews";
import NewsList from "../newsList";
import NewsSections from "../newsSections";

const FirstBlock = () => {
  return (
    <>
      <LastNews />
      <NewsList name="events" limit={3} />
      <NewsSections />
      <NewsList name="news" limit={2} />
      <NewsList name="news" limit={1} largeNewIndex={0} />
    </>
  );
};

export default FirstBlock;
