function VideoTitle({ info }) {
  let { title } = info[0].snippet;
  return <h1 className="font-bold mt-2 text-xl">{title}</h1>;
}

export default VideoTitle;
