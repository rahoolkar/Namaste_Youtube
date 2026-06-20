import { useParams } from "react-router-dom";
import typeCategory from "../utils/typeCategory";
import { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/constants";
import VideoCard from "./VideoCard";
import { useLocation } from "react-router-dom";

function Feed() {
  const [videoList, setVideoList] = useState([]);
  const { wid } = useParams();
  const location = useLocation();
  const categoryId = typeCategory[wid];

  useEffect(() => {
    async function fetchVideoData() {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&videoCategoryId=${categoryId}&maxResults=50&regionCode=IN&key=${YOUTUBE_API_KEY}`,
      );
      const json = await response.json();
      setVideoList(json.items);
    }

    fetchVideoData();
  }, [location.pathname]);

  if (videoList.length == 0) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
      {videoList.map((video, index) => {
        return <VideoCard key={index} data={video}></VideoCard>;
      })}
    </div>
  );
}

export default Feed;
