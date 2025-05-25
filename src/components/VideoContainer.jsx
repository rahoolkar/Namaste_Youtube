import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import VideoCard, { adVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

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

  const AdVideoComponent = adVideoCard(VideoCard);

  return (
    <div className="flex flex-wrap p-2 relative">
      <Link
        className="flex flex-col m-2 w-[32%] h-fit hover:cursor-pointer"
        key={data[0].id}
        to={"/watch?v=" + data[0].id}
      >
        <AdVideoComponent info={data[0]}></AdVideoComponent>
      </Link>
      {data.map((item) => {
        return (
          <Link
            to={"/watch?v=" + item.id}
            key={item.id}
            className="flex flex-col m-2 w-[32%] h-fit"
          >
            <VideoCard info={item} />
          </Link>
        );
      })}
    </div>
  );
}

export default VideoContainer;
