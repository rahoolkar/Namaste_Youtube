import {
  YOUTUBE_API_KEY,
  YOUTUBE_GET_CHANNEL_DETAILS,
} from "../utils/constants";
import VideoLength from "./VideoLength";
import { useEffect, useState } from "react";

function VideoCard({ data }) {
  const [channelDetails, setChannelDetails] = useState({});
  const channelId = data.snippet.channelId;

  useEffect(() => {
    async function fetchChannelDetails() {
      const response = await fetch(
        YOUTUBE_GET_CHANNEL_DETAILS + channelId + "&key=" + YOUTUBE_API_KEY,
      );
      const json = await response.json();
      setChannelDetails(json.items[0].snippet);
    }

    fetchChannelDetails();
  }, []);

  const { title, thumbnails } = channelDetails;

  return (
    <div className="flex flex-col mb-8">
      <div className="relative h-48 md:h-40 md: rounded-xl overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={data?.snippet?.thumbnails?.high?.url}
          alt="yt-video-thumbnail"
        />
        <VideoLength duration={data?.contentDetails?.duration}></VideoLength>
      </div>
      <div className="flex mt-3">
        <div className="flex items-start"></div>
        <div className="flex h-9 w-9 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={thumbnails?.default?.url}
            alt=""
          />
        </div>
        <div className="flex flex-col ml-3 overflow-hidden">
          <span className="text-sm font-semibold line-clamp-2">
            {data?.snippet?.title}
          </span>
          <span className="text-sm text-gray-600 items-center">{title}</span>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
