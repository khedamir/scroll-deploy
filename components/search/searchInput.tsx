import debounce from "lodash.debounce";
import React, { RefObject, useRef, useState, FC, useEffect } from "react";
import { ReactSVG } from "react-svg";
import { SearchItem, searchFetch } from "../../utils/search";

interface SearchInputProps {
  setResult: (v: SearchItem[]) => void;
  setSearched: (v: boolean) => void;
  searched: boolean;
}

const SearchInput: FC<SearchInputProps> = ({
  setResult,
  setSearched,
  searched,
}) => {
  const searchInput: RefObject<HTMLInputElement> = useRef(null);
  const [inputWidth, setInputWidth] = useState("100px");

  function autoresize() {
    if (searchInput.current) {
      const size = searchInput.current.scrollWidth;
      setInputWidth(`${size}px`);
    }
  }

  const search = async (value: string) => {
    if (value) {
      searchFetch({ text: value }).then((result) => {
        setResult(result || []);
        if (!searched) {
          setSearched(true);
        }
      });
    } else {
      setResult([]);
    }
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

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <div onClick={(e) => e.stopPropagation()} className="search__top">
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
  );
};

export default SearchInput;
