import { useEffect, useState } from "react";
import { YOUTUBE_ALL_VIDEOS_API, YOUTUBE_API_KEY } from "../utils/constants";
import VideoCard from "./VideoCard";

function VideoContainer() {
  const [fetchedVideosData, setFetchedVideosData] = useState([]);

  async function fetchAllVideoData() {
    const response = await fetch(YOUTUBE_ALL_VIDEOS_API + YOUTUBE_API_KEY);
    const json = await response.json();
    console.log(json.items);
    setFetchedVideosData(json.items);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchAllVideoData();
  }, []);

  // if(fetchedVideosData){
  //   return <ShimmerVideoLoading></ShimmerVideoLoading>
  // }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
      {" "}
      {fetchedVideosData.map((video, index) => {
        return <VideoCard key={index} data={video}></VideoCard>;
      })}
    </div>
  );
}

export default VideoContainer;
