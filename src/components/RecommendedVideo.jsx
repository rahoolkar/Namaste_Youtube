function RecommendedVideo({ data }) {
  const { snippet, statistics } = data;
  return (
    <div className="flex mt-2">
      <div className="rounded-xl w-6/12">
        <img
          className="rounded-xl h-full w-full"
          src={snippet.thumbnails.high.url}
          alt=""
        />
      </div>
      <div className="flex flex-col ml-2 w-6/12">
        <h3 className="font-bold text-sm">{snippet.title}</h3>
        <h5 className="text-sm text-gray-500">{snippet.channelTitle}</h5>
        <p className="text-sm text-gray-500">{(statistics.viewCount/10000).toFixed(0)}K ᐧ 23 mins ago</p>
      </div>
    </div>
  );
}

export default RecommendedVideo;
