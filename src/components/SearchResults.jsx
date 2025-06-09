import { useEffect, useState } from "react";
import { API_KEY, YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import VideoCard from "../components/VideoCard";
import { Link, useSearchParams } from "react-router-dom";

function SearchResults() {
  const [searchRelatedVideos, setSearchRelatedVideos] = useState([]);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    fetchSearchResults();
  }, []);

  async function fetchSearchResults() {
    const NEW_YOUTUBE_SEARCH_RESULTS_API = YOUTUBE_SEARCH_RESULTS_API.replace(
      "q=",
      `q=${query}`
    );
    const response = await fetch(NEW_YOUTUBE_SEARCH_RESULTS_API + API_KEY);
    const data = await response.json();
    const filteredList = data.items.filter((data) => {
      return !data.snippet.title.toLowerCase().includes("#");
    });
    setSearchRelatedVideos(filteredList);
  }

  if (searchRelatedVideos.length === 0) {
    return <h1>Loading....</h1>;
  }
  return (
    <div className="flex flex-wrap">
      {searchRelatedVideos.map((video) => {
        return (
          <Link
            to={"/watch?v=" + video.id.videoId}
            key={video.id.videoId}
            className="flex flex-col m-2 w-[32%] h-fit"
          >
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
}

export default SearchResults;
