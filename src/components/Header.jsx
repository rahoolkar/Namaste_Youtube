import { useState, useEffect } from "react";
import { FaYoutube, FaBell, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt2, HiOutlineSearch } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { toggleLeftCatergory } from "../store/leftCategorySlice";
import SearchSuggestion from "./SearchSuggestion";
import { useNavigate } from "react-router-dom";

function Header() {
  const [searchText, setSearchText] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSearchInput(event) {
    setSearchText(event.target.value);
  }

  function handleSearch() {
    console.log("Searching:", searchText);
  }

  function handleLeftCategory() {
    dispatch(toggleLeftCatergory());
  }

  function searchQueryHandler(event) {
    if (searchText.length > 0) {
      if (event?.key === "Enter") {
        console.log(searchText);
      }
    }
  }

  useEffect(() => {
    async function getSearchSuggestions() {
      const response = await fetch(
        `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(searchText)}`,
      );
      const json = await response.json();
      setSearchSuggestions(json[1]);
      console.log(json[1]);
    }

    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  return (
    <header className="sticky top-0 z-50 flex h-14 items-center justify-between gap-4 border-b border-gray-20 bg-white px-3 md:h-16 md:px-5">
      <div
        className="
          flex
          min-w-fit
          items-center
          gap-2
          md:gap-4
        "
      >
        <button
          onClick={handleLeftCategory}
          className="
            flex
            rounded-full
            p-2
            transition
            hover:bg-gray-100
            z-50
          "
        >
          <HiOutlineMenuAlt2
            className="
              text-2xl
              text-[#0f0f0f]
            "
          />
        </button>

        <div
          className="
            flex
            cursor-pointer
            items-center
            gap-1
          "
        >
          <FaYoutube
            className="
              text-3xl
              text-red-600
              md:text-4xl
            "
            onClick={() => {
              navigate("/");
            }}
          />

          <span
            className="
              hidden
              text-lg
              font-semibold
              tracking-tight
              text-[#0f0f0f]
              sm:block
              md:text-xl
            "
          >
            YouTube
          </span>
        </div>
      </div>

      <div className="relative group hidden max-w-175 flex-1 items-center md:flex md:px-8">
        <div className="flex h-10 flex-1 items-center justify-center overflow-hidden rounded-l-full border border-gray-300 bg-white transition group-focus-within:border-blue-500">
          <div className="flex">
            <div className="hidden pl-4 group-focus-within:flex">
              <HiOutlineSearch className="text-xl text-gray-500" />
            </div>

            <input
              type="text"
              value={searchText}
              onChange={handleSearchInput}
              onFocus={() => {
                setShowSuggestions(true);
              }}
              onBlur={() => {
                setShowSuggestions(false);
              }}
              onKeyDown={searchQueryHandler}
              placeholder="Search"
              className="w-full px-4 text-sm outline-none placeholder:text-gray-500 group-focus-within:md:pl-2"
            />

            {showSuggestions && searchSuggestions.length > 0 && (
              <div className="absolute m-auto top-16 w-full bg-white rounded-xl shadow-xl border border-gray-200 py-2 overflow-hidden z-50">
                {searchSuggestions.map((suggestion, index) => {
                  return (
                    <SearchSuggestion
                      key={index}
                      suggestion={suggestion}
                    ></SearchSuggestion>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="
            flex
            h-10
            w-16
            items-center
            justify-center
            rounded-r-full
            border
            border-l-0
            border-gray-300
            bg-[#f8f8f8]
            transition
            hover:bg-gray-100
          "
        >
          <HiOutlineSearch
            className="
              text-xl
              text-[#0f0f0f]
            "
          />
        </button>
      </div>

      <div className="flex min-w-fit items-center gap-1 md:gap-4">
        <button
          className="
            rounded-full
            p-2
            transition
            hover:bg-gray-100
            md:hidden
          "
        >
          <HiOutlineSearch
            className="
              text-2xl
              text-[#0f0f0f]
            "
          />
        </button>

        <button
          className="
            relative
            rounded-full
            p-2
            transition
            hover:bg-gray-100
            hidden
            md:flex
          "
        >
          <FaBell
            className="
              text-xl
              text-[#0f0f0f]
            "
          />

          <span
            className="
              absolute
              right-1
              top-1
              h-2
              w-2
              rounded-full
              bg-red-600
            "
          />
        </button>

        <button
          className="
            rounded-full
            transition
            hover:opacity-80
          "
        >
          <FaUserCircle
            className="
              text-3xl
              text-gray-700
              md:text-4xl
            "
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
