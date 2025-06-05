import { useEffect, useState } from "react";
import {
  YOUTUBE_GET_ALL_VIDEOS_BY_CHANNEL,
  YOUTUBE_GET_CHANNEL_UPLOADS_API,
} from "../utils/constants";

function ChannelVideos({ channelId }) {
  const [channelUploads, setChannelUploads] = useState("");

  useEffect(() => {
    fetchChannelUploads();
  }, []);

  async function fetchChannelUploads() {
    const NEW_YOUTUBE_GET_CHANNEL_UPLOADS_API =
      YOUTUBE_GET_CHANNEL_UPLOADS_API.replace("id=", `id=${channelId}`);
    let response = await fetch(NEW_YOUTUBE_GET_CHANNEL_UPLOADS_API);
    let data = await response.json();
    setChannelUploads(data.items[0].contentDetails.relatedPlaylists.uploads);
    fetchChannelUploadsVideos();
  }

  async function fetchChannelUploadsVideos() {
    const NEW_YOUTUBE_GET_ALL_VIDEOS_BY_CHANNEL =
      YOUTUBE_GET_ALL_VIDEOS_BY_CHANNEL.replace(
        "playlistId=",
        `playlistId=${channelUploads}`
      );
    let response = await fetch(NEW_YOUTUBE_GET_ALL_VIDEOS_BY_CHANNEL);
    let data = await response.json();
    console.log(data);
  }

  return <div>Channel Videos</div>;
}

export default ChannelVideos;
