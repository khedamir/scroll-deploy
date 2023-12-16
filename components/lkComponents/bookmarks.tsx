import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/slice";
import { selectUser } from "../../redux/auth/slice";
import { useModalsContext } from "../../context/ModalsContext";
import { useFavoriteContext } from "../../context/FavoritesContext";
import { FavoriteSections } from "../../redux/favorites/types";
import BookmarksTabs, {
  ActiveBlockValue,
} from "./bookmarksComponents/bookmarksTabs";
import Articles from "./bookmarksComponents/articles";
import Video from "./bookmarksComponents/video";
import Audio from "./bookmarksComponents/audio";

interface BookmarksProps {
  active: boolean;
}

const Bookmarks: FC<BookmarksProps> = ({ active }) => {
  const [activeBlock, setActiveBlock] = useState<ActiveBlockValue>("articles");
  const { data } = useSelector(selectFavorites);
  const { user } = useSelector(selectUser);
  const { setLoginActive, setBookmarks } = useModalsContext();
  const { deleteFavorite } = useFavoriteContext();

  const changeFavorite = (itemId: string, sectionId: FavoriteSections) => {
    deleteFavorite({ itemId, sectionId });
  };

  useEffect(() => {
    setBookmarks(false);
  }, []);

  return (
    <div className={`lk-tabs__wrapper ${active && "is--active"}`}>
      <div className="lk-bookmarks lk__main">
        <div className="lk-bookmarks__wrap">
          <BookmarksTabs
            activeBlock={activeBlock}
            setActiveBlock={setActiveBlock}
          />
          <div className="lk-bookmarks__holder">
            <Articles
              activeBlock={activeBlock}
              data={data[9]?.items}
              changeFavorite={changeFavorite}
            />
            <Video
              activeBlock={activeBlock}
              trends={data[28]?.items}
              videos={data[15]?.items}
              lectures={data[26]?.items}
              changeFavorite={changeFavorite}
            />
            <Audio
              activeBlock={activeBlock}
              data={data[34]?.items}
              changeFavorite={changeFavorite}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
