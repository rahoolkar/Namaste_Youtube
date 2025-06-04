import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import RecommendedVideo from "./RecommendedVideo";
import { Link } from "react-router-dom";

function RecommendedSection() {
  const [recommendList, setRecommendList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const newApiLink = YOUTUBE_API.replace("maxResults=50", "maxResults=10");
    const response = await fetch(newApiLink);
    const data = await response.json();
    setRecommendList(data.items);
  }

  if (recommendList.length == 0) {
    return <Shimmer></Shimmer>;
  }

  return (
    <div className="flex flex-col">
      {recommendList.map((item) => {
        return (
          <Link to={"/watch?v=" + item.id} key={item.id}>
            <RecommendedVideo data={item}></RecommendedVideo>
          </Link>
        );
      })}
    </div>
  );
}

export default RecommendedSection;
