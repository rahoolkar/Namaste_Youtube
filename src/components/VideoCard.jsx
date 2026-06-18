import VideoLength from "./VideoLength";

function VideoCard({ data }) {
  console.log(data);
  return (
    <div className="flex flex-col mb-8">
      <div className="relative h-48 md:h-40 md: rounded-xl overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={data?.snippet?.thumbnails?.high?.url}
          alt="yt-video-thumbnail"
        />
        <VideoLength duration={data?.contentDetails?.duration}></VideoLength>
      </div>
      <div className="flex mt-3">
        <div className="flex items-start"></div>
        <div className="flex h-9 w-9 rounded-full overflow-hidden">
          <img className="h-full w-full object-cover" src="" alt="" />
        </div>
        <div className="flex flex-col ml-3 overflow-hidden">
          <span className="text-sm font-bold line-clamp-2">
            {data?.snippet?.title}
          </span>
          <span className="text-[12px] font-semibold mt-2 text-white/70 items-center"></span>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
