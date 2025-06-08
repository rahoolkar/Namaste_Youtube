import { useEffect, useState } from "react";
import {
  YOUTUBE_GET_ALL_VIDEOS_BY_CHANNEL,
  YOUTUBE_GET_CHANNEL_UPLOADS_API,
} from "../utils/constants";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

function ChannelVideos({ channelId }) {
  const [channelUploads, setChannelUploads] = useState("");

  const [channelAllVideos, setChannelAllVideos] = useState([]);

  useEffect(() => {
    fetchChannelUploads();
  }, []);

  useEffect(() => {
    fetchChannelUploadsVideos();
  }, [channelUploads]);

  async function fetchChannelUploads() {
    const NEW_YOUTUBE_GET_CHANNEL_UPLOADS_API =
      YOUTUBE_GET_CHANNEL_UPLOADS_API.replace("id=", `id=${channelId}`);
    let response = await fetch(NEW_YOUTUBE_GET_CHANNEL_UPLOADS_API);
    let data = await response.json();
    setChannelUploads(data.items[0].contentDetails.relatedPlaylists.uploads);
  }

  async function fetchChannelUploadsVideos() {
    if (channelUploads !== "") {
      const NEW_YOUTUBE_GET_ALL_VIDEOS_BY_CHANNEL =
        YOUTUBE_GET_ALL_VIDEOS_BY_CHANNEL.replace(
          "playlistId=",
          `playlistId=${channelUploads}`
        );
      let response = await fetch(NEW_YOUTUBE_GET_ALL_VIDEOS_BY_CHANNEL);
      let data = await response.json();
      let filteredListOfVideos = data.items.filter((video) => {
        return (
          !video.snippet.title.includes("shorts") &&
          !video.snippet.title.includes("Shorts")
        );
      });
      setChannelAllVideos(filteredListOfVideos);
    }
  }

  if (channelAllVideos.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-wrap">
      {channelAllVideos.map((video) => {
        return (
          <Link
            to={"/watch?v=" + video.snippet.resourceId.videoId}
            key={video.id}
            className="flex flex-col m-2 w-[32%] h-fit"
          >
            <VideoCard info={video}></VideoCard>
          </Link>
        );
      })}
    </div>
  );
}

export default ChannelVideos;
