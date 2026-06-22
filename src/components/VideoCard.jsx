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
  }, [channelId]);

  const { title, thumbnails } = channelDetails;

  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer pb-3 p-2">
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={data?.snippet?.thumbnails?.high?.url}
          alt="thumbnail"
        />

        <VideoLength duration={data?.contentDetails?.duration} />
      </div>

      <div className="flex mt-3 px-1">
        <div className="h-9 w-9 rounded-full overflow-hidden shrink-0">
          <img
            className="h-full w-full object-cover"
            src={thumbnails?.default?.url}
            alt={title}
          />
        </div>

        <div className="ml-3 min-w-0">
          <h3 className="text-sm font-semibold line-clamp-2">
            {data?.snippet?.title}
          </h3>

          <p className="text-sm text-gray-600 truncate">{title}</p>
        </div>
      </div>
    </div>
  );
}

const adVideoCard = (VideoCard) => {
  return ({ data }) => {
    return (
      <div className="border border-gray-400 rounded-3xl">
        <VideoCard data={data}></VideoCard>
        <p className="text-xs font-semibold text-center">Ad · Sponsored</p>
      </div>
    );
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export { adVideoCard };

export default VideoCard;
