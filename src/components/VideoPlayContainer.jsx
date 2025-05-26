import CommentBox from "./CommentBox";
import LikeDislike from "./LikeDislike";
import VideoTitle from "./VideoTitle";

function VideoPlayContainer({ data }) {
  let { id } = data[0];
  return (
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
  );
}

export default VideoPlayContainer;
