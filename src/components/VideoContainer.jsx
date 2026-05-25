import { useEffect } from "react";
// import { YOUTUBE_ALL_VIDEOS_API } from "../utils/constants";
// import options from "../utils/options";
// import options
function VideoContainer() {
  // async function getAllVideosData() {
  //   try {
  //     const response = await fetch(YOUTUBE_ALL_VIDEOS_API, options);
  //     if (!response.ok) {
  //       throw new Error(response.status);
  //     }
  //     const json = await response.json();
  //     console.log(json);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }

  useEffect(function () {
    //getAllVideosData();
    console.log("api call");
  }, []);

  return <div>Video Container</div>;
}

export default VideoContainer;
