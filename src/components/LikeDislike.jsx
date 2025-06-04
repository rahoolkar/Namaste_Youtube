import { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function LikeDislike({ info }) {
  let [userInteraction, setUserInteraction] = useState({
    isLiked: false,
    isSubscribed: false,
    isDisLiked: false,
  });

  let { channelId } = info[0].snippet;
  let [channelDetails, setChannelDetails] = useState([]);

  useEffect(() => {
    fetchChannelDetails();
  }, []);

  async function fetchChannelDetails() {
    const NEW_YOUTUBE_CHANNEL_API = YOUTUBE_CHANNEL_API.replace(
      "id=",
      `id=${channelId}`
    );
    const response = await fetch(NEW_YOUTUBE_CHANNEL_API);
    const data = await response.json();
    console.log("channel details", data);
    setChannelDetails(data.items);
  }

  if (channelDetails.length === 0) {
    return <Shimmer></Shimmer>;
  }

  function handleUserLikeInteraction() {
    setUserInteraction({
      ...userInteraction,
      isLiked: !userInteraction.isLiked,
    });
  }

  function handleUserDisLikeInteraction() {
    setUserInteraction({
      ...userInteraction,
      isDisLiked: !userInteraction.isDisLiked,
    });
  }

  function handleUserSubscribeInteraction() {
    setUserInteraction({ ...userInteraction, isSubscribed: true });
  }

  return (
    <div className="my-1 flex justify-between items-center">
      <div className="right-section flex items-center">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-4xl"
            src={channelDetails[0].snippet.thumbnails.high.url}
            alt="channel-image"
          />
          <div className="mx-4 my-2">
            <h4 className="font-bold text-md">
              <Link to={"/channel/"+channelDetails[0].id}>
              {channelDetails[0].snippet.title}
              </Link>
            </h4>
            <h4 className="text-gray-500 text-xs">
              {channelDetails[0].statistics.subscriberCount / 1000000}M
              subscribers
            </h4>
          </div>
        </div>
        <button
          onClick={handleUserSubscribeInteraction}
          className=" rounded-4xl bg-black text-sm p-1 text-white flex items-center hover:cursor-pointer"
        >
          <div>
            <i className="fa-solid fa-bell m-2"></i>
          </div>
          <div className="mr-2">
            {userInteraction.isSubscribed ? "Subscribed" : "Subscribe"}
          </div>
        </button>
      </div>
      <div className="left-section flex">
        <div className="flex items-center rounded-4xl bg-gray-100 mx-3">
          <div
            onClick={handleUserLikeInteraction}
            className="flex items-center px-4 py-1 border-r-2 rounded-l-2xl border-gray-400 hover:bg-gray-300 cursor-pointer"
          >
            <button>
              <span>
                {userInteraction.isLiked ? (
                  <i className="fa-solid fa-thumbs-up hover:cursor-pointer"></i>
                ) : (
                  <i className="fa-regular fa-thumbs-up hover:cursor-pointer"></i>
                )}
              </span>
            </button>
            <h4 className="mx-2 text-sm">
              {(info[0].statistics.likeCount / 1000).toFixed(0)}K
            </h4>
          </div>
          <div
            onClick={handleUserDisLikeInteraction}
            className="flex items-center px-4 py-1 rounded-r-2xl hover:bg-gray-300 cursor-pointer"
          >
            <button>
              {userInteraction.isDisLiked ? (
                <i className="fa-solid fa-thumbs-down hover:cursor-pointer"></i>
              ) : (
                <i className="fa-regular fa-thumbs-down hover:cursor-pointer"></i>
              )}
            </button>
          </div>
        </div>
        <button className="bg-gray-100 px-4 py-1 rounded-4xl mx-2 flex items-center hover:bg-gray-300 cursor-pointer">
          <span>
            <i className="fa-solid fa-share"></i>
          </span>
          <span className="mx-2">Share</span>
        </button>
        <button className="bg-gray-100 px-3 py-1 rounded-4xl ml-1 flex items-center hover:bg-gray-300 cursor-pointer">
          <span>
            <i className="fa-solid fa-download"></i>
          </span>
          <span className="mx-2">Download</span>
        </button>
      </div>
    </div>
  );
}

export default LikeDislike;
