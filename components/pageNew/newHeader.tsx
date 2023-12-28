import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import getCommentCountWord from "../../utils/getCommentCountWord";
import { ReactSVG } from "react-svg";
import MediaControls from "../mediaControls";
import { FullNewType, RubricType } from "../../redux/types";
import { useSelector } from "react-redux";
import { selectComments } from "../../redux/comments/slice";
import { useFavoriteContext } from "../../context/FavoritesContext";
import { AppState } from "../../redux/store";
import { isElementInFavorites } from "../../redux/favorites/slice";
import { useRouter } from "next/router";
import { formatDateDifference } from "../../utils/formatDate";
import { FavoriteNew } from "../../redux/favorites/types";

interface NewHeaderProps {
  publication: FullNewType;
  rubrics: RubricType[];
}

const NewHeader: FC<NewHeaderProps> = ({ publication, rubrics }) => {
  const router = useRouter();
  const { all_comments_count } = useSelector(selectComments);
  const { addFavorite, deleteFavorite } = useFavoriteContext();
  const isFavorite = useSelector((state: AppState) =>
    isElementInFavorites(state, "9", String(router.query.id))
  );

  const changeFavorite = () => {
    if (isFavorite) {
      deleteFavorite({ itemId: publication.id, sectionId: "9" });
    }

    if (!isFavorite) {
      const favoriteItem: FavoriteNew = {
        id: publication.id,
        data: {
          NAME: publication.name,
          images: { detail: publication.images[1] },
          props: {
            PUB_TAG: {
              VALUE: publication.props.PUB_TAG.VALUE,
            },
            PUB_RUBRIC: {
              VALUE: [],
            },
          },
        },
      };
      addFavorite({
        itemId: publication.id,
        sectionId: "9",
        newItem: favoriteItem,
      });
    }
  };

  const getRubricById = () => {
    return rubrics.find(
      (rubric) => rubric.NAME === publication.props.PUB_RUBRIC.VALUE[0]
    )?.ID;
  };

  return (
    <>
      <h1>{publication.name}</h1>
      <div className="description-block">
        <div className="description-block__inner">
          <Link href={`/rubrics/${getRubricById()}`}>
            {publication.props.PUB_RUBRIC.VALUE[0]}
          </Link>
          <span>{formatDateDifference(publication.date)}</span>
        </div>
      </div>
      <div className="media-block">
        <picture className="media-block__photo">
          <Image
            src={`${publication.images[1]}`}
            alt="NewPhoto"
            priority
            fill
            sizes="100%"
            style={{
              objectFit: "cover",
            }}
          />
          <Link href="#publication-comments" className="media-block__comments">
            <ReactSVG src="/img/sprite/icon-comment.svg" />
            <span>{getCommentCountWord(all_comments_count)}</span>
          </Link>
        </picture>
        <MediaControls
          likes={publication.likes}
          liked={publication.liked}
          views={publication.views}
          publication_id={publication.id}
          favorited={isFavorite}
          changeFavorite={changeFavorite}
          otherClassName="media-block__controls"
        />
      </div>
    </>
  );
};

export default NewHeader;
