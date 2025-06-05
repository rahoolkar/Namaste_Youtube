import Sidebar from "./Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { openBar } from "../utils/barSlice";
import { useParams } from "react-router-dom";
import { YOUTUBE_CHANNEL_DETAILS_API } from "../utils/constants";
import ChannelVideos from "./ChannelVideos";

function ChannelSection() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [channelDetails, setChannelDetails] = useState([]);

  let isExpand = useSelector((store) => {
    return store.bar.expand;
  });

  function handleSubscribe() {
    setIsSubscribed(!isSubscribed);
  }

  let { cid } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openBar());
  }, []);

  useEffect(() => {
    fetchChannelDetails();
  },[]);

  async function fetchChannelDetails() {
    const channel_api = YOUTUBE_CHANNEL_DETAILS_API.replace("id=", `id=${cid}`);
    let response = await fetch(channel_api);
    let data = await response.json();
    setChannelDetails(data.items);
  }

  if (channelDetails.length === 0) {
    return <h1>Loading...</h1>;
  }

  const { snippet, statistics } = channelDetails[0];

  return (
    <div className="flex">
      {isExpand ? <Sidebar></Sidebar> : null}
      <div className="flex flex-col  h-4/12 w-full px-4">
        <div className="mt-2 channel-body flex h-7/12 border-b-2 border-b-gray-300">
          <div className="h-34 w-34 rounded-full p-2">
            <img
              className="rounded-full"
              src={snippet.thumbnails.high.url}
              alt=""
            />
          </div>
          <div className="flex flex-col ml-4">
            <h2 className="text-4xl font-bold">{snippet.title}</h2>
            <span>
              <span className="font-bold mr-1">{snippet.customUrl}</span>·
              <span className="mr-1 ml-1 text-gray-500 text-sm">
                {(statistics.subscriberCount / 10000).toFixed(0)}K subscribers
              </span>
              ·
              <span className="mr-1 ml-1 text-gray-500 text-sm">
                {(statistics.videoCount / 1000).toFixed(1)}K videos
              </span>
            </span>
            <button
              onClick={handleSubscribe}
              className="bg-black text-white text-sm font-bold rounded-4xl my-2 px-2 py-2 w-4/12"
            >
              {isSubscribed ? "Subscribed" : "Subscribe"}
            </button>
          </div>
        </div>
        <ChannelVideos channelId={channelDetails[0].id}></ChannelVideos>
      </div>
      
    </div>
  );
}

export default ChannelSection;
