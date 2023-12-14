import debounce from "lodash.debounce";
import React, { FC, RefObject, useEffect, useRef, useState } from "react";
import { ReactSVG } from "react-svg";
import { searchFetch } from "../../utils/search";
import { server } from "../../utils/server";
import { SectionBLock } from "../../pages/faq";

interface SearchProps {
  setResult: (v: SectionBLock[]) => void;
}

const Search: FC<SearchProps> = ({ setResult }) => {
  const searchInput: RefObject<HTMLInputElement> = useRef(null);

  const search = async (value: string) => {
    if (value) {
      const params = {
        type: "search",
        iblockId: "35",
        q: value,
      };
      const { data } = await server.post("/sw/v1/help.php", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      setResult(Object.values(data.datas));
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
    debouncedSearch(value);
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <div className="page-search">
      <div className="page-search__inner">
        <input
          type="text"
          className="page-search__input"
          ref={searchInput}
          placeholder="Поиск"
          onChange={(e) => inputChange(e.target.value)}
        />
        <button className="page-search__btn">
          <ReactSVG src="/img/sprite/icon-search.svg" />
        </button>
      </div>
    </div>
  );
};

export default Search;
