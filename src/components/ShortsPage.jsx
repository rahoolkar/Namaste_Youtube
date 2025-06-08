import { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";
import Shorts from "./Shorts";
import Sidebar from "./Sidebar";

function ShortsPage() {
  const [allShortsVideos, setAllShortsVideos] = useState([]);
  useEffect(() => {
    fetchShorts();
  }, []);

  async function fetchShorts() {
    const response = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&q=shorts&type=video&maxResults=20&key=" +
        API_KEY
    );
    const data = await response.json();
    const filteredVideos = data.items.filter((video) =>
      video.snippet.title.toLowerCase().includes("#shorts")
    );
    console.log(filteredVideos);
    setAllShortsVideos(filteredVideos);
  }

  if (allShortsVideos.length === 0) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory rounded-3xl">
        {allShortsVideos.map((shortVideo) => {
          return (
            <Shorts
              key={shortVideo.id.videoId}
              vid={shortVideo.id.videoId}
              title={shortVideo.snippet.title}
            ></Shorts>
          );
        })}
      </div>
    </div>
  );
}

export default ShortsPage;
