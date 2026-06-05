import { useSelector } from "react-redux";
import LeftCategory from "./LeftCatergory";
import { Outlet } from "react-router-dom";

function Body() {
  const shouldExpand = useSelector(function (store) {
    return store.leftCategory.shouldExpand;
  });

  return (
    <div className="flex">
      {shouldExpand ? <LeftCategory key={1}></LeftCategory> : null}
      <Outlet key={2}></Outlet>
    </div>
  );
}

export default Body;
