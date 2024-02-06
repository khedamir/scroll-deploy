import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import UserIcon from "../userIcon";
import { NewType } from "../../redux/types";
import { fetchNews } from "../../server/content";
import useSWR from "swr";
import LastNewsSkeleton from "./lastNewsSkeleton";

const LastNews = () => {
  const { data, isLoading } = useSWR<NewType[]>("rubric-page-last-news", () =>
    fetchNews({ limit: 5 }).then((result) => result.datas)
  );

  if (isLoading || !data) {
    return <LastNewsSkeleton />;
  }

  return (
    <div className="page-list">
      <div className="page-list__wrapper">
        {data.map((recommendation) => (
          <Link
            key={recommendation.id}
            href={`/news/${recommendation.id}`}
            className="page-list__item"
          >
            {recommendation.poperties.PUB_SOURCE_LOGO ? (
              <span className="page-list__item-img">
                <Image
                  width={40}
                  height={40}
                  src={`${recommendation.poperties.PUB_SOURCE_LOGO}`}
                  alt="Icon"
                />
              </span>
            ) : (
              <span className="page-list__item-img">
                <UserIcon
                  userPhoto={recommendation.author_photo}
                  nameLatter={recommendation.author_name?.[0]}
                  avatarColor={recommendation.author_avatar_color}
                />
              </span>
            )}
            <span>{recommendation.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LastNews;
