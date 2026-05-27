import { useState } from "react";
import { FaYoutube, FaBell, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt2, HiOutlineSearch } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { toggleLeftCatergory } from "../store/leftCategorySlice";

function Header() {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();

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

  return (
    <header
      className="
        sticky
        top-0
        z-50
        flex
        h-14
        items-center
        justify-between
        gap-4
        border-b
        border-gray-200
        bg-white
        px-3
        md:h-16
        md:px-5
      "
    >
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
            hidden
            md:flex
            rounded-full
            p-2
            transition
            hover:bg-gray-100
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

      <div
        className="
          group
          hidden
          max-w-175
          flex-1
          items-center
          md:flex
          md:px-8
        "
      >
        <div
          className="
            flex
            h-10
            flex-1
            items-center
            justify-center
            overflow-hidden
            rounded-l-full
            border
            border-gray-300
            bg-white
            transition
            group-focus-within:border-blue-500
          "
        >
          <div
            className="
              hidden
              pl-4
              group-focus-within:flex
            "
          >
            <HiOutlineSearch
              className="
                text-xl
                text-gray-500
              "
            />
          </div>

          <input
            type="text"
            value={searchText}
            onChange={handleSearchInput}
            onKeyDown={searchQueryHandler}
            placeholder="Search"
            className="
              w-full
              px-4
              text-sm
              outline-none
              placeholder:text-gray-500
              group-focus-within:md:pl-2
            "
          />
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

      <div
        className="
          flex
          min-w-fit
          items-center
          gap-1
          md:gap-4
        "
      >
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
