function VideoCardShimmer() {
  return (
    <div className="animate-pulse">
      <div className="w-full aspect-video bg-gray-300 rounded-xl"></div>

      <div className="flex mt-3 gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>

        <div className="flex-1">
          <div className="h-4 bg-gray-300 rounded w-11/12 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-8/12 mb-3"></div>

          <div className="h-3 bg-gray-200 rounded w-5/12 mb-1"></div>
          <div className="h-3 bg-gray-200 rounded w-4/12"></div>
        </div>
      </div>
    </div>
  );
}

export default VideoCardShimmer;
