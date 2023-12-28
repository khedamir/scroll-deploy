import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import UserIcon from "../userIcon";
import { NewType } from "../../redux/types";
import { fetchNews } from "../../server/content";

const LastNews = () => {
  const [recommendations, setRecommendations] = useState<NewType[]>([]);

  useEffect(() => {
    fetchNews({ limit: 5 }).then((result) => {
      setRecommendations(result.datas);
    });
  }, []);

  return (
    <div className="page-list">
      <div className="page-list__wrapper">
        {recommendations.length !== 0 ? (
          recommendations.map((recommendation) => (
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
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default LastNews;
