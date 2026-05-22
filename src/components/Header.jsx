import { useState } from "react";
import { FaYoutube, FaBell, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt2, HiOutlineSearch } from "react-icons/hi";

function Header() {
  const [searchText, setSearchText] = useState("");

  function handleSearchInput(event) {
    setSearchText(event.target.value);
  }

  function handleSearch() {
    console.log("Searching:", searchText);
  }

  return (
    <header
      className="
        sticky
        top-0
        z-50
        flex
        h-16
        items-center
        justify-between
        border-b
        border-gray-200
        bg-white
        px-4
        shadow-sm
      "
    >
      <div className="flex items-center gap-4">
        <button
          className="
            rounded-full
            p-2
            transition
            hover:bg-gray-100
          "
        >
          <HiOutlineMenuAlt2 className="text-2xl text-[#0f0f0f]" />
        </button>

        <div className="flex cursor-pointer items-center gap-1">
          <FaYoutube className="text-4xl text-red-600" />

          <span
            className="
              text-xl
              font-semibold
              tracking-tight
              text-[#0f0f0f]
            "
          >
            YouTube
          </span>
        </div>
      </div>

      <div
        className="
          mx-4
          hidden
          max-w-180
          flex-1
          items-center
          md:flex
        "
      >
        <div
          className="
            flex
            h-10
            flex-1
            overflow-hidden
            rounded-l-full
            border
            border-gray-300
          "
        >
          <input
            type="text"
            value={searchText}
            onChange={handleSearchInput}
            placeholder="Search"
            className="
              w-full
              px-4
              text-sm
              outline-none
              placeholder:text-gray-500
            "
          />

          <button
            onClick={handleSearch}
            className="
              flex
              w-16
              items-center
              justify-center
              border-l
              border-gray-300
              bg-[#f8f8f8]
              transition
              hover:bg-gray-100
              cursor-pointer 
            "
          >
            <HiOutlineSearch className="text-xl text-[#0f0f0f]" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button
          className="
            relative
            rounded-full
            p-2
            transition
            hover:bg-gray-100
            cursor-pointer
          "
        >
          <FaBell className="text-xl text-[#0f0f0f]" />

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
          ></span>
        </button>

        <button
          className="
            rounded-full
            transition
            hover:opacity-80
            cursor-pointer
          "
        >
          <FaUserCircle className="text-4xl text-gray-700" />
        </button>
      </div>
    </header>
  );
}

export default Header;