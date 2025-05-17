function VideoCard({ info }) {
  console.log(info);
  let { snippet, statistics } = info;
  let { channelTitle, thumbnails, title } = snippet;
  let { viewCount } = statistics;
  return (
    <div className="flex flex-col m-2 w-[32%] h-fit">
      <img
        src={thumbnails.high.url}
        alt="thumbnail-image"
        className="rounded-2xl h-7/12"
      />
      <div className="p-2"> 
        <h1 className="font-bold text-md my-2">{title}</h1>
        <h3 className="text-gray-600 text-sm">{channelTitle}</h3>
        <h3 className="text-sm text-gray-600">
          {Math.round(viewCount / 10000)}B • Duration
        </h3>
      </div>
    </div>
  );
}

export default VideoCard;
