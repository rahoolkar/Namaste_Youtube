import CommentBox from "./CommentBox";
import LikeDislike from "./LikeDislike";
import VideoTitle from "./VideoTitle";
import LiveChatBox from "./LiveChatBox";
import { useState } from "react";
import RecommendedSection from "./RecommendedSection";

function VideoPlayContainer({ data }) {
  const [expandLiveChat, setExpandLiveChat] = useState(true);

  let { id } = data[0];

  return (
    <div className="flex w-full">
      <div className="m-4 w-9/12">
        <iframe
          className="rounded-3xl w-full h-144"
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <VideoTitle info={data}></VideoTitle>
        <LikeDislike info={data}></LikeDislike>
        <CommentBox></CommentBox>
      </div>
      <div className="flex flex-col my-4 mr-4 w-3/12">
        <div className="my-4 mr-4">
          {expandLiveChat ? (
            <LiveChatBox
              handleCrossButton={() => {
                setExpandLiveChat(!expandLiveChat);
              }}
            ></LiveChatBox>
          ) : (
            <div
              onClick={() => {
                setExpandLiveChat(!expandLiveChat);
              }}
              className="border border-black rounded-4xl w-full px-4 py-2 hover:cursor-pointer"
            >
              Show chat
              <span className="mx-2">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </div>
          )}
        </div>
        <div className="my-4 mr-4">
          <RecommendedSection></RecommendedSection>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayContainer;
