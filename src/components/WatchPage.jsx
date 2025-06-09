import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import VideoPlayContainer from "./VideoPlayContainer";
import { useDispatch, useSelector } from "react-redux";
import { closeBar } from "../utils/barSlice";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../utils/constants";
import Shimmer from "./Shimmer";

function WatchPage() {
  let [searchParams] = useSearchParams();
  let vid = searchParams.get("v");

  let isExpand = useSelector((store) => {
    return store.bar.expand;
  });

  const dispatch = useDispatch();

  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    dispatch(closeBar());
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vid}&key=${API_KEY}`
    );
    let data = await response.json();
    setVideoData(data.items);
  }

  if (videoData.length === 0) {
    return <Shimmer></Shimmer>;
  }

  return (
    <div className="flex">
      {isExpand ? <Sidebar></Sidebar> : null}
      <VideoPlayContainer data={videoData}></VideoPlayContainer>
    </div>
  );
}

export default WatchPage;
