function VideoCard({ info }) {
  let { snippet } = info;
  let { channelTitle, thumbnails, title } = snippet;

  return (
    <div>
      <img
        src={thumbnails.high.url}
        alt="thumbnail-image"
        className="rounded-2xl"
      />
      <div className="p-2">
        <h1 className="font-bold text-md my-2">{title}</h1>
        <h3 className="text-gray-600 text-sm">{channelTitle}</h3>
        <h3 className="text-sm text-gray-600">
          {Math.round(
            info?.statistics?.viewCount
              ? info?.statistics?.viewCount /10000
              : 3450000 / 10000
          )}
          K • {"23 mins ago"}
        </h3>
      </div>
    </div>
  );
}

export const adVideoCard = (VideoCard) => {
  return ({ info }) => {
    return (
      <div>
        <VideoCard info={info}></VideoCard>
        <h3 className="text-sm font-bold mx-2">Ad · Sponsored</h3>
      </div>
    );
  };
};

export default VideoCard;
