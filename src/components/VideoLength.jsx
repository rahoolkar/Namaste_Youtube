import moment from "moment";

function VideoLength({ duration }) {
  const videoDuration = moment.duration(duration);
  const formatted = `${String(videoDuration.hours()).padStart(2, "0")}:${String(
    videoDuration.minutes(),
  ).padStart(2, "0")}:${String(videoDuration.seconds()).padStart(2, "0")}`;
  return (
    <div className="absolute bottom-2 right-2 px-2 py-1 text-white bg-black text-xs rounded-md">
      {formatted}
    </div>
  );
}

export default VideoLength;
