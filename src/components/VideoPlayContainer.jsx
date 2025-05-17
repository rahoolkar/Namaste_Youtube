import Shimmer from "./Shimmer";

function VideoPlayContainer({ data }) {
  console.log(data);
  if (Object.keys(data) === 0) {
    return <Shimmer></Shimmer>;
  }

  let { id } = data.items[0];
  return (
    <div>
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPlayContainer;
