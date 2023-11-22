import React, { RefObject, useRef, useState } from "react";
import { ReactSVG } from "react-svg";
import { useModalsContext } from "../../context/ModalsContext";
import debounce from "lodash.debounce";
import { server } from "../../utils/server";
import RenderHTML from "../renderHTML";
import Link from "next/link";

type SearchItemType = {
  title: string;
};

const Search = () => {
  const { searchActive, setSearchActive } = useModalsContext();
  const [result, setResult] = useState<SearchItemType[]>([]);

  const searchInput: RefObject<HTMLInputElement> = useRef(null);
  const [inputWidth, setInputWidth] = useState("auto");

  function autoresize() {
    if (searchInput.current) {
      const size = searchInput.current.scrollWidth;
      setInputWidth(`${size}px`);
    }
  }

  const search = async (value: string) => {
    const result = await server.post(`/sw/v1/search/?text=${value}`);
    setResult(result.data || []);
    console.log(result.data);
  };

  const debouncedSearch = React.useRef(
    debounce(async (criteria) => {
      await search(criteria);
    }, 500)
  ).current;

  const inputChange = (value: string) => {
    autoresize();
    debouncedSearch(value);
  };

  React.useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

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
          <div className="search__top">
            <div className="search__control">
              <button className="search__btn">
                <ReactSVG src="/img/sprite/icon-search.svg" />
              </button>
              <input
                type="text"
                ref={searchInput}
                id="search-input"
                className="search__input"
                style={{ width: inputWidth, transition: "none" }}
                placeholder=""
                onChange={(e) => inputChange(e.target.value)}
              />
            </div>
          </div>
          <div className="search__main">
            <div className="search__container">
              {!result.length && (
                <div className="search__empty is--active">
                  <h3 className="search__heading">ничего не найдено</h3>
                  <p className="search__description">
                    Можно изменить запрос или почитать <br />
                    последние новости
                  </p>
                </div>
              )}
              {/* <div>
                {result &&
                  result.map((item, index) => (
                    <div key={index + item.title}>
                      <div className="search__content">
                        <div className="search__block">
                          <h3 className="search__subtitle">23 июня, 2023</h3>
                        </div>
                      </div>
                      <div className="news-card mobile-wide section-indent">
                        <div className="news-card__wrapper">
                          <Link
                            href={`/news/${1}`}
                            key={index}
                            className="news-card__item"
                          >
                            <div className="news-card__body">
                              <span className={`news-card__name`}>
                                {item.title}
                              </span>
                              <div className="news-card__inner">
                                <span className="news-card__help">
                                  {rubricByIdSelector(item.rubric)?.NAME}
                                  Спорт
                                </span>
                                <span className="news-card__help">
                                  {formatDateDifference(item.date)}
                                  30 минут назад
                                </span>
                              </div>
                              <button className="c-icon-btn news-card__favorite">
                                <ReactSVG src="/img/sprite/icon-bookmarks.svg" />
                              </button>
                            </div>
                            <picture className="news-card__img news-card__img--sm">
                              <img
                                src={`${baseURL}${item.images[0]}`}
                                src={"/img/news-card-03.jpg"}
                                alt="Image"
                              />
                            </picture>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
