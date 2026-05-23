import { useEffect } from "react";
import { YOUTUBE_ALL_VIDEOS_API } from "../utils/constants";
// import options 
function VideoContainer() {
  async function getAllVideosData() {
    const response = await fetch(YOUTUBE_ALL_VIDEOS_API);
    const json = await response.json();
    console.log(json);
    console.log("hello");
  }

  useEffect(function () {
    getAllVideosData();
  }, []);

  return <div>Video Container</div>;
}

export default VideoContainer;
