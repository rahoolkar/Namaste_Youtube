import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collapseLeftCatergory } from "../store/leftCategorySlice";
import { YOUTUBE_API_KEY } from "../utils/constants";
import ReactPlayer from "react-player";
import { YOUTUBE_GET_CHANNEL_DETAILS } from "../utils/constants";
import {
  AiFillDislike,
  AiOutlineDislike,
  AiFillLike,
  AiOutlineLike,
} from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";

function VideoDetails() {
  const dispatch = useDispatch();
  const { vid } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [channelDetails, setChannelDetails] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisLiked, setIsDisLiked] = useState(false);

  useEffect(() => {
    dispatch(collapseLeftCatergory());
    // eslint-disable-next-line react-hooks/immutability
    fetchVideoDetails();
  }, [vid]);

  useEffect(() => {
    if (!videoDetails) return;
    // eslint-disable-next-line react-hooks/immutability
    fetchChannelDetails();
  }, [videoDetails]);

  if (videoDetails == null) {
    return <h1>Loading..</h1>;
  }

  async function fetchVideoDetails() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails,status,topicDetails&id=${vid}&key=${YOUTUBE_API_KEY}`,
    );
    const json = await response.json();
    console.log(json.items[0]);
    setVideoDetails(json.items[0]);
  }

  async function fetchChannelDetails() {
    const response = await fetch(
      YOUTUBE_GET_CHANNEL_DETAILS + channelId + "&key=" + YOUTUBE_API_KEY,
    );
    const json = await response.json();
    setChannelDetails(json.items[0].snippet);
    console.log(json.items[0]);
  }

  function handleLike() {
    if (isDisLiked) {
      setIsDisLiked(false);
    }
    setIsLiked(!isLiked);
  }

  function handleDisLike() {
    if (isLiked) {
      setIsLiked(false);
    }
    setIsDisLiked(!isDisLiked);
  }

  const { title, channelId, channelTitle } = videoDetails.snippet;

  return (
    <div className="w-full lg:w-[75vw] p-2">
      <div className="w-full aspect-video">
        <ReactPlayer
          className=" w-full overflow-hidden rounded-xl bg-black"
          src={`https://www.youtube.com/watch?v=${vid}`}
          width="100%"
          height="100%"
          controls
        />
      </div>
      <div className="px-1">
        <h3 className="text-lg font-bold text-black line-clamp-1">{title}</h3>
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="w-9 h-9 rounded-full">
              <img
                src={
                  channelDetails?.snippet?.thumbnails?.high?.url ||
                  "https://pngimg.com/uploads/youtube/youtube_PNG102347.png"
                }
                alt="yt-channel-thumbnail"
              />
            </div>

            <div className="flex flex-col justify-center ml-2">
              <h3 className="font-bold text-sm">{channelTitle}</h3>
              <p className="text-gray-500 text-sm">
                {channelDetails?.statistics?.subscriberCount || 999} subscribers
              </p>
            </div>

            <button className="bg-black text-white hover:bg-red-600 ml-3 px-4 py-2 rounded-3xl h-9 text-center flex items-center cursor-pointer">
              Subscribe
            </button>
          </div>

          <div className="flex items-center">
            <div className="flex items-center p-2">
              <div
                className="text-2xl p-2 hover:bg-gray-100 rounded-l-full flex items-center cursor-pointer"
                onClick={handleLike}
              >
                {isLiked ? <AiFillLike /> : <AiOutlineLike />}{" "}
                <span className="text-sm font-semibold ml-1">
                  {videoDetails?.statistics?.likeCount / 1000} K
                </span>
              </div>

              <div className="border border-l border-gray-400 h-full"></div>
              <div
                className="text-2xl p-2 hover:bg-gray-100 rounded-r-full cursor-pointer"
                onClick={handleDisLike}
              >
                {isDisLiked ? <AiFillDislike /> : <AiOutlineDislike />}
              </div>
            </div>

            <div className="flex items-center hover:bg-gray-100 rounded-4xl py-2 px-3 cursor-pointer">
              <RiShareForwardLine size={20} />{" "}
              <span className="font-semibold ml-2">Share</span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default VideoDetails;
