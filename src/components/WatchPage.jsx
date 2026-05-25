import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { collapseLeftCatergory } from "../store/leftCategorySlice";

function WatchPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(collapseLeftCatergory());
  }, []);
  return <div>WatchPage</div>;
}

export default WatchPage;
