import React, { useEffect, useState } from "react";
import NewsCard from "../newsCard";
import NewsList from "../newsList";
import { useSelector } from "react-redux";
import { selectMainPage } from "../../../redux/main_page/slice";
import { NewType } from "../../../redux/types";
import { fetchNews } from "../../../server/content";
import { useRouter } from "next/router";
import LastSectionCard from "./lastSectionCard";

function splitArray(originalArray: NewType[]) {
  let newArray = [];
  let size = 5;

  for (let i = 0; i < originalArray.length; i += size) {
    newArray.push(originalArray.slice(i, i + size));
    size = size == 5 ? 3 : 5;
  }

  return newArray;
}

const LastSection = () => {
  const { rubrics } = useSelector(selectMainPage);
  const [nextPublication, setNextPublications] = useState<NewType[]>([]);
  const [totalPages, setTotalPages] = useState<number>();
  const [page, setPage] = useState(2);

  const fetchNextNews = async () => {
    const result = await fetchNews({
      page: page,
      limit: 16,
    });
    const newArr = [...nextPublication, ...result.datas];
    console.log(result);
    if (!totalPages) {
      setTotalPages(result.pagination.totalPages);
    }
    setNextPublications(newArr);
  };

  useEffect(() => {
    fetchNextNews();
  }, []);

  useEffect(() => {
    if (totalPages && page <= totalPages) {
      fetchNextNews();
    }
  }, [page]);

  return (
    <div>
      {splitArray(nextPublication).map((items, index) => (
        <LastSectionCard
          key={index}
          items={items}
          isLast={index === splitArray(nextPublication).length - 1}
          newLimit={() => setPage(page + 1)}
          end={page === totalPages}
        />
      ))}
    </div>
  );
};

export default LastSection;
