import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import VideoCard from "./VideoCard";

function VideoContainer() {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(YOUTUBE_API);
    const data = await response.json();
    setData(data.items);
  }
  if (data.length === 0) {
    return <Shimmer></Shimmer>;
  }
  return (
    <div className="flex flex-wrap p-2">
      {data.map((item) => {
        return <VideoCard info={item} key={item.id} />;
      })}
    </div>
  );
}

export default VideoContainer;
