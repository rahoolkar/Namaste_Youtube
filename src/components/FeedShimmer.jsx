import VideoCardShimmer from "./VideoCardShimmer";

function FeedShimmer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
      {Array(12)
        .fill(null)
        .map((_, index) => {
          return <VideoCardShimmer key={index} />;
        })}
    </div>
  );
}

export default FeedShimmer;
