import { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";
import VideoCard from "../components/VideoCard";
import { Link } from "react-router-dom";
function SearchResults() {
  const [searchRelatedVideos, setSearchRelatedVideos] = useState([]);

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
      return !data.snippet.title.toLowerCase().includes("#");
    });
    console.log(filteredList);
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
            to={"/watch?v=" + video.id}
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
