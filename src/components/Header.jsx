import { useDispatch, useSelector } from "react-redux";
import { toggleExpand } from "../utils/barSlice";
import { useEffect, useState } from "react";
import { API_KEY, YOUTUBE_SEARCH_API } from "../utils/constants";
import SearchSuggestion from "./SearchSuggestion";
import { addToCache } from "../utils/cacheSlice";

export default function Header() {
  let [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  let dispatch = useDispatch();
  const cache = useSelector((store) => {
    return store.cache.cache;
  });

  function handleSearchBar(event) {
    setSearchQuery(event.target.value);
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      if (cache[searchQuery]) {
        console.log(cache[searchQuery]);
        setSearchSuggestions(cache[searchQuery]);
      } else {
        fetchSearchData();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  async function fetchSearchData() {
    let newYoutubeSearchApi = YOUTUBE_SEARCH_API.replace(
      "q=",
      `q=${searchQuery}`
    );
    let response = await fetch(newYoutubeSearchApi + API_KEY);
    let data = await response.json();
    setSearchSuggestions(data.items);
    dispatch(addToCache({ [searchQuery]: data.items }));
  }

  return (
    <div className="flex justify-between sticky top-0 bg-white">
      <div className="left-section flex items-center w-2/12">
        <div
          className="h-10 w-10 p-2 mx-2 hover: cursor-pointer"
          onClick={() => {
            dispatch(toggleExpand());
          }}
        >
          <i className="fa-solid fa-bars text-2xl"></i>
        </div>
        <img
          className="h-16 w-28 mx-4"
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png"
          alt="youtube-logo"
        />
      </div>
      <div className="middle-section w-10/12 flex flex-col justify-center items-center">
        <div className="my-2 search-box flex w-12/12 justify-center items-center">
          <input
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={handleSearchBar}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setShowSuggestions(false);
            }}
            className="w-6/12 border border-gray-400 p-2 rounded-l-full placeholder: px-4 text-md text-gray-400"
          ></input>
          <button className="border  border-gray-400 rounded-r-full py-2 px-4 bg-gray-100">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        {showSuggestions && searchQuery !== "" ? (
          <div className="bg-white absolute top-14 z-[9999] border border-gray-300 rounded-lg shadow-gray-400 shadow-md w-5/12 mb-2 py-3">
            {searchSuggestion.map((item) => {
              return (
                <SearchSuggestion
                  info={item}
                  key={item.id.videoId}
                ></SearchSuggestion>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="right-section flex justify-center items-center w-1/12">
        <img
          className="my-2 mx-auto p-2 h-10"
          src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"
          alt=""
        />
        <img
          className="m-2 h-12"
          src="https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg"
          alt="user-profile"
        />
      </div>
    </div>
  );
}
