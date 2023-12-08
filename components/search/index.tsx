import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import { useModalsContext } from "../../context/ModalsContext";
import { SearchItem } from "../../utils/search";
import NewItem from "./newItem";
import VideoItem from "./videoItem";
import PodcastItem from "./podcastItem";
import { SearchResultSort } from "../../utils/searchResultSort";
import SearchInput from "./searchInput";
import { server } from "../../utils/server";

const Search = () => {
  const { searchActive, setSearchActive } = useModalsContext();
  const [result, setResult] = useState<SearchItem[]>([]);
  const [news, setNews] = useState<SearchItem[]>([]);
  const [searched, setSearched] = useState(false);
  const sortedResult = SearchResultSort(result);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await server.get(`/sw/v1/publications/?iblockid=9`, {
        params: { limit: 3 },
      });
      return data.datas;
    };
    fetch().then((result) => {
      setNews(result);
    });
  }, []);

  return (
    <div className={`search ${searchActive && "is--active"}`} id="search">
      <div className="search__wrap">
        <div className="search__wrapper">
          <button
            onClick={() => setSearchActive(false)}
            className="search__close-btn"
          >
            <ReactSVG
              className="search__close-icon search__close-icon--thin"
              src="/img/sprite/icon-close-thin.svg"
            />
            <ReactSVG
              className="search__close-icon search__close-icon--bold"
              src="/img/sprite/icon-close.svg"
            />
          </button>
          <SearchInput
            setResult={setResult}
            searched={searched}
            setSearched={setSearched}
          />
          <div className="search__main">
            <div className="search__container">
              {!result.length && searched && (
                <>
                  <div className="search__empty is--active">
                    <h3 className="search__heading">ничего не найдено</h3>
                    <p className="search__description">
                      Можно изменить запрос или почитать <br />
                      последние новости
                    </p>
                  </div>
                  <div className="search__content">
                    <div className="search__results">
                      {news.map((item) => (
                        <NewItem key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                </>
              )}
              <div className="search__content">
                {sortedResult.map((res) => (
                  <div key={res.date} className="search__block">
                    <h3 className="search__subtitle">{res.date}</h3>
                    <div className="search__results">
                      {res.items.map((item) =>
                        item.iblockId === "9" ? (
                          <NewItem key={item.id} item={item} />
                        ) : item.iblockId === "15" ||
                          item.iblockId === "26" ||
                          item.iblockId === "28" ||
                          item.iblockId === "11" ? (
                          <VideoItem key={item.id} item={item} />
                        ) : (
                          <PodcastItem key={item.id} item={item} />
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
