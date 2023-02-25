import React, {
  useState,
  useRef,
  Fragment,
  useContext,
  useEffect,
  memo,
} from "react";
import { generalShow } from "../Header";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import style from "./Search.module.scss";
import ResultSearch from "./ResultSearch/ResultSearch";
import { useViewport } from "../../../CheckScreen/index";

function Search() {
  const gerena = useContext(generalShow);
  const cx = classNames.bind(style);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResultSearch, setshowResultSearch] = useState([]);
  const [show, setShow] = gerena.show;
  const [showResult, setShowResult] = useState(true);
  const focusInput = useRef(null);
  function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
    return debouncedValue;
  }

  const debouncedSearchTerm = useDebounce(search, 600);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api-by-zilong.onrender.com/Search`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setSearchResult(data);
    } catch (err) {
      console.log(err);
      return [];
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (searchResult.length > 0) {
      var result = searchResult.filter((item) => {
        return item.name
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase());
      });
      setshowResultSearch(result);
    }
  }, [searchResult, debouncedSearchTerm]);
  const handleShowSearch = () => {
    setShow(!show);
    if (!show) {
      const focus = setTimeout(() => {
        focusInput.current.focus();
      }, 100);
      return () => clearTimeout(focus);
    }
  };
  const handleSearch = () => {
    if (search.length > 0) {
      setSearch("");
      focusInput.current.focus();
    } else {
      setShow(false);
    }
  };
  const handleSearchRender = () => {
    return (window.location.href = `/Search/${search}`);
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearchRender();
    }
  };

  function hideSearchResult() {
    setShowResult(false);
  }
  var changer = search.trim().length;
  if (useViewport().width < 768) {
    return (
      <Tippy
        interactive
        visible={showResult && changer > 0}
        placement="bottom"
        onClickOutside={hideSearchResult}
        render={(attrs) => (
          <div className={cx("boxTippy")} tabIndex="-1" {...attrs}>
            {showResultSearch.map((item, index) => {
              return <ResultSearch key={index} data={item} />;
            })}
          </div>
        )}
      >
        <div>
          <div className={cx("val")}>
            <input
              className={cx("searchInput")}
              ref={focusInput}
              type="text"
              value={search}
              onKeyPress={handleEnter}
              placeholder="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button className={cx("close")} onClick={handleSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <title>Close</title>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M368 368L144 144M368 144L144 368"
                />
              </svg>
            </button>
          </div>
        </div>
      </Tippy>
    );
  }

  return (
    <div className={cx("search")}>
      <Tippy
        interactive
        visible={showResult && changer > 0}
        placement="bottom"
        onClickOutside={hideSearchResult}
        render={(attrs) => (
          <div className={cx("boxTippy")} tabIndex="-1" {...attrs}>
            {showResultSearch.map((item, index) => {
              return <ResultSearch key={index} data={item} />;
            })}
          </div>
        )}
      >
        <div>
          {show && (
            <div className={cx("val")}>
              <input
                className={cx("searchInput")}
                ref={focusInput}
                type="text"
                onKeyPress={handleEnter}
                value={search}
                placeholder="Search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button className={cx("close")} onClick={handleSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <title>Close</title>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M368 368L144 144M368 144L144 368"
                  />
                </svg>
              </button>
            </div>
          )}
          {!show && (
            <button className={cx("button")} onClick={handleShowSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <title>Search</title>
                <path
                  d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                  d="M338.29 338.29L448 448"
                />
              </svg>
            </button>
          )}
        </div>
      </Tippy>
    </div>
  );
}

export default Search;
