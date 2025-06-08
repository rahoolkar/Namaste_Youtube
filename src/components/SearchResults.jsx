import { useEffect } from "react";
import { API_KEY } from "../utils/constants";

function SearchResults() {
  useEffect(() => {
    fetchSearchResults();
  }, []);

  async function fetchSearchResults() {
    const response = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&q=india&type=video&maxResults=50&key=" +
        API_KEY
    );
    const data = await response.json();
    const filteredList = data.items.filter((data) => {
      return !data.snippet.title.toLowerCase().includes("#shorts");
    });
    console.log(filteredList);
  }
  return <div>Search Results</div>;
}

export default SearchResults;
