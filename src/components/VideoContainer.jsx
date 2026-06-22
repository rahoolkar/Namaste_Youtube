/* eslint-disable react-hooks/static-components */
import { useEffect, useState } from "react";
import { YOUTUBE_ALL_VIDEOS_API, YOUTUBE_API_KEY } from "../utils/constants";
import VideoCard, { adVideoCard } from "./VideoCard";
import FeedShimmer from "./FeedShimmer";
import { Link } from "react-router-dom";

function VideoContainer() {
  const [fetchedVideosData, setFetchedVideosData] = useState(null);

  async function fetchAllVideoData() {
    const response = await fetch(YOUTUBE_ALL_VIDEOS_API + YOUTUBE_API_KEY);
    const json = await response.json();
    setFetchedVideosData(json.items);
  }

  const SponsoredVideoCard = adVideoCard(VideoCard);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchAllVideoData();
  }, []);

  if (fetchedVideosData === null) {
    return <FeedShimmer></FeedShimmer>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
      <SponsoredVideoCard data={fetchedVideosData[0]}></SponsoredVideoCard>
      {fetchedVideosData.map((video) => {
        return (
          <Link key={video.id} to={`/watch/${video.id}`}>
            <VideoCard data={video}></VideoCard>
          </Link>
        );
      })}
    </div>
  );
}

export default VideoContainer;
