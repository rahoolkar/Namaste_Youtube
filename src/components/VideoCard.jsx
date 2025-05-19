function VideoCard({ info }) {
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
          {Math.round(viewCount / 10000)}B • {"23 mins ago"}
        </h3>
      </div>
    </div>
  );
}

export const adVideoCard = (VideoCard) => {
  return ({ info }) => {
    return (
      <div className="border border-black"> 
        <VideoCard info={info}></VideoCard>
        <h3 className="text-sm font-bold">Ad · Sponsored</h3>
      </div>
    );
  };
};

export default VideoCard;
