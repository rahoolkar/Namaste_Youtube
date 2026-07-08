import { HiOutlineSearch } from "react-icons/hi";

function SearchSuggestion({ suggestion }) {
  return (
    <div className="flex gap-4 items-center px-5 py-2 hover:bg-gray-100">
      <HiOutlineSearch className="text-lg text-gray-500" />
      <span>{suggestion}</span>
    </div>
  );
}

export default SearchSuggestion;
