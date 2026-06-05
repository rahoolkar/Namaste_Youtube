import { useEffect } from "react";

function VideoContainer({ selectedCategories }) {
  useEffect(function () {
    console.log("api call to" + selectedCategories);
  }, []);

  return <div>Video Container</div>;
}

export default VideoContainer;
