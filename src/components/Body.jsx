import { useSelector } from "react-redux";
import LeftCategory from "./LeftCatergory";
import { Outlet } from "react-router-dom";

function Body() {
  const shouldExpand = useSelector(function (store) {
    return store.leftCategory.shouldExpand;
  });

  return (
    <div className="flex">
      {shouldExpand ? <LeftCategory></LeftCategory> : null}
      <Outlet></Outlet>
    </div>
  );
}

export default Body;
